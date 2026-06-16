const days = [
  {
    title: 'Day 1 — Arrive into Oaxaca',
    meta: ['Soft landing', 'Private transfer', 'Easy first dinner'],
    copy: 'The trip opens gently: private airport meet, time to settle into the courtyard hotel, and a first evening within walking distance so the city arrives as atmosphere rather than admin.',
    bullets: ['Airport pickup timed to arrival', 'Dinner options already linked in the site', 'No fixed activity beyond checking in and exhaling'],
    timeline: [
      ['15:30', 'Airport meet and transfer', 'Driver meets at arrivals and takes you straight into Oaxaca Centro.'],
      ['17:00', 'Hotel settle-in', 'Unpack, shower, and take the courtyard in slowly.'],
      ['20:00', 'Simple first dinner', 'Choose one of the nearby options depending on energy.']
    ],
    links: [
      ['Airport map', 'https://www.google.com/maps/search/Oaxaca+International+Airport/'],
      ['Centro map', 'https://www.google.com/maps/search/Oaxaca+Centro/']
    ]
  },
  {
    title: 'Day 3 — Culinary Oaxaca',
    meta: ['Food-led day', 'Market + cooking', 'Open evening'],
    copy: 'This is one of the signature days: market textures in the morning, a cooking session that gives local life shape and flavour, then a free late afternoon to browse, rest, or return to a favourite street.',
    bullets: ['Food angle made more explicit after client feedback', 'Designed to feel participatory rather than performative', 'Suggested bar and gallery options loaded for later'],
    timeline: [
      ['09:00', 'Market pass', 'Walk Mercado 20 de Noviembre before the city gets too hot.'],
      ['11:30', 'Cooking session', 'Hands-on lunch prep with regional ingredients and stories.'],
      ['17:30', 'Open evening', 'Take a mezcal bar, gallery, or rooftop option only if it feels right.']
    ],
    links: [
      ['Market pin', 'https://www.google.com/maps/search/Mercado+20+de+Noviembre+Oaxaca/'],
      ['Santo Domingo', 'https://www.google.com/maps/search/Templo+de+Santo+Domingo+de+Guzman+Oaxaca/']
    ]
  },
  {
    title: 'Day 5 — Sierra Norte reset',
    meta: ['1 night only', 'Mountain contrast', 'Low-friction pacing'],
    copy: 'Just enough time in the mountains to change the emotional register of the journey: cooler air, a guided walk, and one quieter evening before the coast.',
    bullets: ['Reduced from 2 nights to 1 in revision', 'Keeps the contrast without making the trip feel over-segmented', 'Luggage handling note lives in the practical layer'],
    timeline: [
      ['10:00', 'Depart Oaxaca', 'Driver route north with a light stop for coffee and scenery.'],
      ['13:00', 'Guided walk', 'A low-pressure trail designed for pace and atmosphere, not mileage.'],
      ['19:00', 'Firelit dinner', 'Early supper and a genuinely quiet night.']
    ],
    links: [
      ['Sierra Norte map', 'https://www.google.com/maps/search/Sierra+Norte+Oaxaca/'],
      ['Trail region', 'https://www.google.com/maps/search/Pueblos+Mancomunados+Oaxaca/']
    ]
  },
  {
    title: 'Days 6–11 — Pacific coast finish',
    meta: ['Long exhale', 'Flexible final days', 'Optional nature'],
    copy: 'The coast portion is deliberately spacious: one or two lightly programmed moments, but mostly time to swim, nap, eat late, or choose a boat or lagoon outing only if the mood is right.',
    bullets: ['Design-led coast property for stronger fit', 'Weather pivots can shift the day without email churn', 'The final memory of the trip is calm rather than frantic'],
    timeline: [
      ['09:30', 'Slow breakfast', 'No imposed rush once you have reached the coast.'],
      ['13:00', 'Beach or pool', 'A long middle stretch for real rest.'],
      ['17:45', 'Sunset decision point', 'Beach walk, cocktails, or lagoon depending on weather and mood.']
    ],
    links: [
      ['Puerto Escondido', 'https://www.google.com/maps/search/Puerto+Escondido+Oaxaca/'],
      ['Lagoon option', 'https://www.google.com/maps/search/Manialtepec+Lagoon+Oaxaca/']
    ]
  }
];

const weatherModes = {
  sun: 'Best for the coast days and valley outings: keep the longer outside lunch, the beach window, and the studio stop. Use hats, light linen, and cash for small craft purchases.',
  rain: 'If energy dips or the weather turns, swap the more exposed excursion for a gentler city museum pass, longer lunch, or hotel courtyard afternoon. The point is to preserve tone, not force the original plan.'
};

const checklistItems = [
  'Passport and arrival docs',
  'Light layers for mountain temperature change',
  'Sandals + one smarter dinner option',
  'Cash for small producers and market stops',
  'Swimwear and sun protection'
];

const switcher = document.getElementById('daySwitcher');
const detail = document.getElementById('dayDetail');
const weatherToggle = document.getElementById('weatherToggle');
const weatherCopy = document.getElementById('weatherCopy');
const checklistBox = document.getElementById('checklistBox');
const topbar = document.getElementById('topbar');

function renderDetail(i){
  const d = days[i];
  detail.innerHTML = `
    <span class="label">Selected day</span>
    <h3>${d.title}</h3>
    <div class="meta">${d.meta.map(m => `<span>${m}</span>`).join('')}</div>
    <p>${d.copy}</p>
    <ul>${d.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="timeline-list">${d.timeline.map(([time, title, copy]) => `
      <div class="timeline-row">
        <div class="timeline-time">${time}</div>
        <div class="timeline-content"><strong>${title}</strong><span>${copy}</span></div>
      </div>`).join('')}
    </div>
    <div class="micro-links">${d.links.map(([label, href]) => `<a target="_blank" rel="noreferrer" href="${href}">${label}</a>`).join('')}</div>`;
  [...switcher.children].forEach((btn, idx) => btn.classList.toggle('active', idx === i));
}

days.forEach((d, i) => {
  const btn = document.createElement('button');
  btn.className = 'day-chip' + (i === 0 ? ' active' : '');
  btn.textContent = d.title;
  btn.addEventListener('click', () => renderDetail(i));
  switcher.appendChild(btn);
});
renderDetail(0);

function renderWeather(mode){
  weatherCopy.textContent = weatherModes[mode];
  [...weatherToggle.querySelectorAll('.toggle-chip')].forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
}
weatherToggle.querySelectorAll('.toggle-chip').forEach(btn => {
  btn.addEventListener('click', () => renderWeather(btn.dataset.mode));
});
renderWeather('sun');

const savedChecklist = JSON.parse(localStorage.getItem('lucyTripChecklist') || '{}');
function renderChecklist(){
  checklistBox.innerHTML = '';
  checklistItems.forEach((item, idx) => {
    const row = document.createElement('label');
    row.className = 'check-item' + (savedChecklist[idx] ? ' done' : '');
    row.innerHTML = `<input type="checkbox" ${savedChecklist[idx] ? 'checked' : ''}><span>${item}</span>`;
    const input = row.querySelector('input');
    input.addEventListener('change', () => {
      savedChecklist[idx] = input.checked;
      localStorage.setItem('lucyTripChecklist', JSON.stringify(savedChecklist));
      row.classList.toggle('done', input.checked);
    });
    checklistBox.appendChild(row);
  });
}
renderChecklist();

document.querySelectorAll('.copy-card').forEach(card => {
  card.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(card.dataset.copy);
      const original = card.textContent;
      card.textContent = 'Copied';
      card.classList.add('copied');
      setTimeout(() => {
        card.textContent = original;
        card.classList.remove('copied');
      }, 1200);
    } catch {
      card.textContent = 'Copy failed';
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach(el => {
  if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
    el.classList.add('in-view');
  } else {
    observer.observe(el);
  }
});

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });
