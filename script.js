let yesSize = 1;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function openFolder() {
    document.getElementById('folder-gate').style.opacity = '0';
    setTimeout(() => { document.getElementById('folder-gate').style.display = 'none'; }, 1000);

    const intro = document.getElementById('intro-container');
    intro.classList.remove('hidden');

    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        setInterval(createHeart, 300);
        
        // Starting positions
        yesBtn.style.transform = 'translateX(-60px)';
        noBtn.style.transform = 'translateX(60px)';
    }, 11000);
}

// Logic: NO button moves away AND clicking it makes YES bigger
const moveNo = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = 'none';
};

// Grow YES button every time they even try to touch NO
noBtn.addEventListener('mouseover', () => {
    moveNo();
    growYes();
});

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNo();
    growYes();
});

// If they somehow manage to click it, make YES even bigger!
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    growYes();
    growYes();
});

function growYes() {
    yesSize += 0.3;
    yesBtn.style.transform = `translateX(-60px) scale(${yesSize})`;
    if(yesSize > 5) yesBtn.innerHTML = "CLICK ME AJAY! â¤ï¸";
}

yesBtn.addEventListener('click', () => {
    document.querySelector('.envelope').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    document.querySelector('.distance-quote').style.display = 'none';
    document.getElementById('success-msg').classList.remove('hidden');
    
    for(let i=0; i<40; i++) {
        setTimeout(createHeart, i * 50);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['â¤ï¸', 'ð', 'âï¸', 'ð'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.getElementById('main-content').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
