const days = [
  {
    title: 'Day 1 — Arrive into Oaxaca',
    meta: ['Soft landing', 'Private transfer', 'Easy first dinner'],
    copy: 'The trip opens gently: a private airport meet, time to settle into the courtyard hotel, and a first evening meal close by so the city arrives as atmosphere rather than admin.',
    bullets: ['Airport pickup timed to arrival', 'Walking-radius dinner shortlist already loaded in the site', 'No fixed activity beyond checking in and exhaling']
  },
  {
    title: 'Day 3 — Culinary Oaxaca',
    meta: ['Food-led day', 'Market + cooking', 'Open evening'],
    copy: 'This is one of the signature days: market textures in the morning, a cooking session that gives local life shape and flavour, then a free late afternoon to browse, rest, or return to a favourite street.',
    bullets: ['Food angle made more explicit after client feedback', 'Designed to feel participatory rather than performative', 'Suggested bar and gallery options for later']
  },
  {
    title: 'Day 5 — Sierra Norte reset',
    meta: ['1 night only', 'Mountain contrast', 'Low-friction pacing'],
    copy: 'Just enough time in the mountains to change the emotional register of the journey: cooler air, a guided walk, and one quieter evening before the coast.',
    bullets: ['Reduced from 2 nights to 1 in revision', 'Keeps the contrast without making the trip feel over-segmented', 'Luggage handling note visible in practical section']
  },
  {
    title: 'Days 6–11 — Pacific coast finish',
    meta: ['Long exhale', 'Flexible final days', 'Optional nature'],
    copy: 'The coast portion is deliberately spacious: one or two lightly programmed moments, but mostly time to swim, nap, eat late, or choose a boat or lagoon outing only if the mood is right.',
    bullets: ['Design-led coast property for stronger fit', 'Weather pivots can shift the day without email churn', 'The final memory of the trip is calm rather than frantic']
  }
];
const switcher = document.getElementById('daySwitcher');
const detail = document.getElementById('dayDetail');
function renderDetail(i){
  const d = days[i];
  detail.innerHTML = `<span class="label">Selected day</span><h3>${d.title}</h3><div class="meta">${d.meta.map(m=>`<span>${m}</span>`).join('')}</div><p>${d.copy}</p><ul>${d.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
  [...switcher.children].forEach((btn, idx)=>btn.classList.toggle('active', idx===i));
}
days.forEach((d, i)=>{
  const btn=document.createElement('button');
  btn.className='day-chip'+(i===0?' active':'');
  btn.textContent=d.title;
  btn.addEventListener('click',()=>renderDetail(i));
  switcher.appendChild(btn);
});
renderDetail(0);
