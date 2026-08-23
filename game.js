// AIR COMBAT 2.0 Core
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

// গেম লুপ
function loop() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // এখানে ভেক্টর গ্রাফিক্স রেন্ডার হবে
    requestAnimationFrame(loop);
}
loop();
