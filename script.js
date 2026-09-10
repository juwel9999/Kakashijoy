const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});
const reveal=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.animate(
      [{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'}
    ); reveal.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.stat-card,.project,.about-grid,.contact').forEach(el=>reveal.observe(el));
