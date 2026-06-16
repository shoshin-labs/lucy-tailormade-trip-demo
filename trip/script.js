const dataUrl = '../data/oaxaca-journey.json';
const topbar = document.getElementById('topbar');
const hero = document.getElementById('hero');
const todayHeading = document.getElementById('todayHeading');
const todayGrid = document.getElementById('todayGrid');
const routeTimeline = document.getElementById('routeTimeline');
const stayGrid = document.getElementById('stayGrid');
const daySwitcher = document.getElementById('daySwitcher');
const dayDetail = document.getElementById('dayDetail');
const momentsGrid = document.getElementById('momentsGrid');
const weatherToggle = document.getElementById('weatherToggle');
const weatherCopy = document.getElementById('weatherCopy');
const checklistBox = document.getElementById('checklistBox');
const copyStack = document.getElementById('copyStack');
const contactsBox = document.getElementById('contactsBox');

let tripData;

function renderHero(data){
  hero.innerHTML = `
    <div class="overlay"></div>
    <div class="hero-content reveal">
      <div class="status-row">
        <span class="status live">${data.hero.eyebrow} · ${data.site.status}</span>
        <span class="status gold">${data.site.dates}</span>
      </div>
      <p class="eyebrow">${data.site.clients}</p>
      <h1>${data.site.tripName}</h1>
      <p class="lede">${data.site.tone}</p>
      <div class="hero-actions">
        <a class="btn primary" href="#today">Open today’s plan</a>
        <a class="btn" href="#itinerary">See full itinerary</a>
      </div>
      <div class="info-ribbon">${data.hero.infoRibbon.map(item => `<span>${item}</span>`).join('')}</div>
    </div>
    <aside class="floating-card reveal">
      <span class="label">Quick access</span>
      <h3>What you need first</h3>
      <div class="button-stack compact">${data.hero.quickActions.map(item => `<a class="btn small ${item.label === 'Airport map' ? 'primary' : ''}" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${item.label}</a>`).join('')}</div>
    </aside>`;
}

function renderToday(day){
  todayHeading.textContent = `${day.title} — ${day.date}`;
  todayGrid.innerHTML = `
    <article class="glass-card highlight">
      <span class="label">Live plan</span>
      <h3>${day.base}</h3>
      <ul>${day.timeline.map(([time, title]) => `<li><strong>${time}</strong> ${title}</li>`).join('')}</ul>
    </article>
    <article class="glass-card">
      <span class="label">Confirmed today</span>
      <div class="booking-pills">${day.bookings.map(item => `<span class="booking-pill">${item}</span>`).join('')}</div>
    </article>
    <article class="glass-card">
      <span class="label">Useful actions</span>
      <div class="button-stack">${day.actions.map((item, index) => `<a class="btn small ${index === 0 ? 'primary' : ''}" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`).join('')}</div>
    </article>
    <article class="glass-card">
      <span class="label">Day rhythm</span>
      <p>${day.summary}</p>
    </article>`;
}

function renderRoute(items){
  routeTimeline.innerHTML = items.map(item => `
    <article class="route-card">
      <span class="route-day">${item.range}</span>
      <h3>${item.place}</h3>
      <p>${item.summary}</p>
      <div class="micro-links">${item.links.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}</div>
    </article>`).join('');
}

function stayClass(index){ return index === 0 ? 'city' : index === 1 ? 'mountain' : 'coast'; }
function renderStays(stays){
  stayGrid.innerHTML = stays.map((stay, index) => `
    <article class="stay-card reveal ${index === 2 ? 'wide' : ''}">
      <div class="stay-image ${stayClass(index)}"></div>
      <div class="stay-copy">
        <span class="label">${stay.range} · ${stay.type}</span>
        <h3>${stay.name}</h3>
        <p>${stay.summary}</p>
        <div class="booking-pills">${stay.notes.map(item => `<span class="booking-pill">${item}</span>`).join('')}</div>
        <div class="micro-links"><a href="${stay.map}" target="_blank" rel="noreferrer">Open map</a><a href="#itinerary">View linked days</a></div>
      </div>
    </article>`).join('');
}

function momentClass(index){ return index === 0 ? 'market' : index === 1 ? 'studio-shot' : 'coast-shot'; }
function renderMoments(items){
  momentsGrid.innerHTML = items.map((item, index) => `
    <article class="moment-card reveal">
      <div class="moment-image ${momentClass(index)}"></div>
      <div class="moment-copy">
        <span class="label">${item.place}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="button-stack compact">${item.links.map((link, linkIndex) => `<a class="btn small ${linkIndex === 0 ? 'primary' : ''}" href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${link.label}</a>`).join('')}</div>
      </div>
    </article>`).join('');
}

function renderDayDetail(dayIndex){
  const day = tripData.days[dayIndex];
  dayDetail.innerHTML = `
    <span class="label">Selected day</span>
    <h3>${day.title}</h3>
    <div class="meta"><span>${day.date}</span><span>${day.base}</span>${day.status.map(item => `<span>${item}</span>`).join('')}</div>
    <p>${day.summary}</p>
    <div class="booking-pills">${day.bookings.map(item => `<span class="booking-pill">${item}</span>`).join('')}</div>
    <div class="timeline-list">${day.timeline.map(([time, title, copy]) => `<div class="timeline-row"><div class="timeline-time">${time}</div><div class="timeline-content"><strong>${title}</strong><span>${copy}</span></div></div>`).join('')}</div>
    <div class="micro-links">${day.actions.map(item => `<a href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${item.label}</a>`).join('')}</div>`;
  [...daySwitcher.children].forEach((btn, idx) => btn.classList.toggle('active', idx === dayIndex));
}

function renderDaySwitcher(days){
  daySwitcher.innerHTML = '';
  days.forEach((day, index) => {
    const btn = document.createElement('button');
    btn.className = 'day-chip' + (index === 0 ? ' active' : '');
    btn.textContent = `Day ${day.day} · ${day.title}`;
    btn.addEventListener('click', () => renderDayDetail(index));
    daySwitcher.appendChild(btn);
  });
  renderDayDetail(0);
}

function renderWeather(practical){
  weatherToggle.innerHTML = `
    <button class="toggle-chip active" data-mode="sun">Sunny day</button>
    <button class="toggle-chip" data-mode="rain">Rain / low energy</button>`;
  const modes = practical.weather;
  function setMode(mode){
    weatherCopy.textContent = modes[mode];
    [...weatherToggle.querySelectorAll('.toggle-chip')].forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
  }
  weatherToggle.querySelectorAll('.toggle-chip').forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
  setMode('sun');
}

function renderChecklist(practical){
  const savedChecklist = JSON.parse(localStorage.getItem('tailormadeTripChecklist') || '{}');
  checklistBox.innerHTML = '';
  practical.checklist.forEach((item, index) => {
    const row = document.createElement('label');
    row.className = 'check-item' + (savedChecklist[index] ? ' done' : '');
    row.innerHTML = `<input type="checkbox" ${savedChecklist[index] ? 'checked' : ''}><span>${item}</span>`;
    row.querySelector('input').addEventListener('change', event => {
      savedChecklist[index] = event.target.checked;
      localStorage.setItem('tailormadeTripChecklist', JSON.stringify(savedChecklist));
      row.classList.toggle('done', event.target.checked);
    });
    checklistBox.appendChild(row);
  });
}

function renderCopyNotes(practical){
  copyStack.innerHTML = practical.copyNotes.map(item => `<button class="copy-card" data-copy="${item.replace(/"/g, '&quot;')}">Copy: ${item}</button>`).join('');
  document.querySelectorAll('.copy-card').forEach(card => {
    card.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(card.dataset.copy);
        const original = card.textContent;
        card.textContent = 'Copied';
        card.classList.add('copied');
        setTimeout(() => { card.textContent = original; card.classList.remove('copied'); }, 1200);
      } catch {
        card.textContent = 'Copy failed';
      }
    });
  });
}

function renderContacts(practical){
  contactsBox.innerHTML = practical.contacts.map((item, index) => `<a class="btn small ${index === 0 ? 'primary' : ''}" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${item.label}</a>`).join('');
}

function mountReveal(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add('in-view');
    else observer.observe(el);
  });
}

window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

async function init(){
  const res = await fetch(dataUrl);
  tripData = await res.json();
  renderHero(tripData);
  renderToday(tripData.days[3]);
  renderRoute(tripData.journeySummary);
  renderStays(tripData.stays);
  renderDaySwitcher(tripData.days);
  renderMoments(tripData.signatureMoments);
  renderWeather(tripData.practical);
  renderChecklist(tripData.practical);
  renderCopyNotes(tripData.practical);
  renderContacts(tripData.practical);
  mountReveal();
}

init().catch(err => {
  todayHeading.textContent = 'Failed to load itinerary';
  todayGrid.innerHTML = `<article class="glass-card"><p>${err.message}</p></article>`;
});
