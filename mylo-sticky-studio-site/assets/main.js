
/* Simple view + like counters powered by CountAPI (free) */
function setupCounters(keyBase){
  const viewsEl = document.querySelector('[data-views]');
  const likesEl = document.querySelector('[data-likes]');
  const likeBtn = document.querySelector('#likeBtn');
  if(viewsEl){
    fetch('https://api.countapi.xyz/hit/' + keyBase + '/views')
      .then(r=>r.json()).then(d=>{ viewsEl.textContent = d.value; })
      .catch(()=>{});
  }
  if(likesEl){
    fetch('https://api.countapi.xyz/get/' + keyBase + '/likes')
      .then(r=>r.json()).then(d=>{ likesEl.textContent = d.value || 0; })
      .catch(()=>{});
  }
  if(likeBtn){
    likeBtn.addEventListener('click', ()=>{
      fetch('https://api.countapi.xyz/hit/' + keyBase + '/likes')
        .then(r=>r.json()).then(d=>{ document.querySelector('[data-likes]').textContent = d.value; })
        .catch(()=>{});
    });
  }
}
