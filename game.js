const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 100, y: 300, w: 45, h: 25, speed: 7, color: '#0ff', hp: 100, invincible: false };
let bullets = [], enemies = [], boss = null, particles = [], pickups = [];
let score = 0, level = 1;
let keys = {};

window.onkeydown = e => { keys[e.code] = true; if (e.code === 'Space') fireBullet(); if (e.code === 'KeyR') barrelRoll(); };
window.onkeyup = e => keys[e.code] = false;

function fireBullet() { bullets.push({ x: player.x + 20, y: player.y, speed: 12 }); }

function barrelRoll() {
    player.invincible = true;
    setTimeout(() => player.invincible = false, 1000);
}

function spawnBoss() {
    boss = { x: canvas.width - 150, y: 200, hp: 500, w: 100, h: 80, dir: 1 };
}

function update() {
    if (keys['ArrowUp'] && player.y > 20) player.y -= player.speed;
    if (keys['ArrowDown'] && player.y < canvas.height - 20) player.y += player.speed;
    if (level % 5 === 0 && !boss) spawnBoss();
    if (boss) {
        boss.y += boss.dir * 2;
        if (boss.y < 50 || boss.y > canvas.height - 100) boss.dir *= -1;
    }
    bullets.forEach((b, i) => { b.x += b.speed; if (b.x > canvas.width) bullets.splice(i, 1); });
    enemies.forEach((e, i) => { e.x -= e.speed; if (e.x < -50) enemies.splice(i, 1); });
    if (Math.random() < 0.03 && !boss) enemies.push({ x: canvas.width + 50, y: Math.random() * canvas.height, speed: 4 });
}

function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.invincible ? '#fff' : player.color;
    ctx.fillRect(player.x, player.y, player.w, player.h);
    if (boss) {
        ctx.fillStyle = '#f0f';
        ctx.fillRect(boss.x, boss.y, boss.w, boss.h);
    }
    enemies.forEach(e => { ctx.fillStyle = '#ff4500'; ctx.fillRect(e.x, e.y, 40, 30); });
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function loop() { 
    update(); 
    draw(); 
    requestAnimationFrame(loop); 
}

window.onload = () => {
    resize();
    loop();
};
