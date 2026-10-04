const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menu.setAttribute('aria-expanded', String(open))
  menu.textContent = open ? '×' : '☰'
})
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); if(menu) menu.textContent='☰'
}))

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const orbs = [...document.querySelectorAll('.orb')]
  let tx = 0, ty = 0
  addEventListener('pointermove', (event) => {
    tx = (event.clientX / innerWidth - .5) * 10
    ty = (event.clientY / innerHeight - .5) * 10
    orbs.forEach((orb, i) => orb.style.margin = `${ty * (i % 2 ? -1 : 1)}px 0 0 ${tx * (i % 2 ? 1 : -1)}px`)
  }, { passive: true })
}
