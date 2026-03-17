// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // 只处理页面内锚点，不处理空链接
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 按钮点击效果
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // 模拟按钮点击效果
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // 如果是下载按钮，显示提示
        if (this.textContent && this.textContent.trim() === '立即下载') {
            e.preventDefault();
            alert('下载功能即将开放，敬请期待！');
        }
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化粒子效果
    initParticles();
});

// 粒子效果
let particleInterval;

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
    
    // 定期创建新粒子
    particleInterval = setInterval(() => {
        createParticle(container);
    }, 500);
}

// 清理粒子定时器
window.addEventListener('unload', function() {
    if (particleInterval) {
        clearInterval(particleInterval);
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // 随机位置
    const x = Math.random() * 100;
    particle.style.left = `${x}%`;
    
    // 随机大小
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // 随机颜色
    const opacity = Math.random() * 0.8 + 0.2;
    particle.style.backgroundColor = `rgba(99, 102, 241, ${opacity})`;
    
    // 随机动画持续时间
    const duration = Math.random() * 4 + 4;
    particle.style.animationDuration = `${duration}s`;
    
    // 随机动画延迟
    const delay = Math.random() * 2;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
    
    // 动画结束后移除粒子
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, (duration + delay) * 1000);
}

// 社交媒体链接点击效果
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 模拟链接点击效果
        this.style.transform = 'translateY(-3px)';
        setTimeout(() => {
            this.style.transform = 'translateY(0)';
        }, 150);
    });
});

// 添加滚动到顶部按钮
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--accent-primary);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
`;
document.body.appendChild(scrollToTopBtn);

// 显示/隐藏滚动到顶部按钮
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'translateY(20px)';
    }
});

// 滚动到顶部
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 为移动设备添加触摸支持
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndY < touchStartY - swipeThreshold) {
        // 向上滑动
        scrollToTopBtn.style.opacity = '1';
    } else if (touchEndY > touchStartY + swipeThreshold) {
        // 向下滑动
        scrollToTopBtn.style.opacity = '0';
    }
}

// 禁止右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 禁止复制
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// 禁止剪切
document.addEventListener('cut', function(e) {
    e.preventDefault();
});

// 禁止粘贴
document.addEventListener('paste', function(e) {
    e.preventDefault();
});

// 禁止选择文本
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});