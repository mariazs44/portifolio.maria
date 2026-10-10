// Tema claro/escuro
const root=document.documentElement;
document.getElementById('tema').onclick=()=>{
  const l=root.dataset.theme==='light';
  if(l)root.removeAttribute('data-theme');else root.dataset.theme='light';
  try{localStorage.setItem('tema',l?'dark':'light')}catch(e){}
};
try{if(localStorage.getItem('tema')==='light')root.dataset.theme='light'}catch(e){}

// Filtros: Tudo / Projetos / Currículo
const chips=document.querySelectorAll('.chip');
chips.forEach(c=>c.onclick=()=>{
  chips.forEach(x=>x.classList.remove('on'));c.classList.add('on');
  const f=c.dataset.f;
  document.querySelectorAll('[data-s]').forEach(s=>{
    s.classList.toggle('hide',!(f==='all'?s.id!=='experiencias':s.dataset.s===f&&s.id!=='experiencias'));
  });
  document.querySelectorAll('#quick a').forEach(a=>a.classList.toggle('hide',f!=='all'&&a.dataset.k!==f));
});

// Busca simples
document.getElementById('busca').oninput=e=>{
  const q=e.target.value.toLowerCase();
  document.querySelectorAll('.card,.tool').forEach(c=>c.classList.toggle('hide',q&&!c.textContent.toLowerCase().includes(q)));
};