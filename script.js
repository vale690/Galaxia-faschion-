/* --------------------------
   CARRITO FUNCIONAL
---------------------------*/
let carritoCount = 0;
const carritoSpan = document.getElementById('carrito-count');
const botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach(btn => {
    btn.addEventListener('click', () => {
        carritoCount++;
        carritoSpan.textContent = carritoCount;
        btn.textContent = 'Agregado ✅';
        btn.style.background = '#00FFAA';
        setTimeout(() => {
            btn.textContent = 'Agregar al carrito';
            btn.style.background = '#FF0080';
        }, 1500);
    });
});

/* --------------------------
   FONDO GALAXIA ANIMADO
---------------------------*/
const canvas = document.getElementById('galaxia-bg');
const ctx = canvas.getContext('2d');

let width, height;
function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        const colors = ['#FF00FF','#00FFFF','#FFD700','#FF8C00','#FF0080'];
        this.color = colors[Math.floor(Math.random()*colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];
for(let i=0; i<200; i++) particles.push(new Particle());

function animate() {
    ctx.fillStyle = 'rgba(0,0,30,0.3)';
    ctx.fillRect(0,0,width,height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();
