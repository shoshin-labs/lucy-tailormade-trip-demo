const dataUrl = '../data/oaxaca-journey.json';
const nav = document.getElementById('stepNav');
const title = document.getElementById('stepTitle');
const body = document.getElementById('stepBody');
const assistantStack = document.getElementById('assistantStack');
const statePill = document.getElementById('statePill');
const tripHeading = document.getElementById('tripHeading');
const tripPill = document.getElementById('tripPill');
const recordSummary = document.getElementById('recordSummary');
const recordInputs = document.getElementById('recordInputs');
const recordOutput = document.getElementById('recordOutput');
const schemaSummary = document.getElementById('schemaSummary');
const schemaView = document.getElementById('schemaView');
const previewCopy = document.getElementById('previewCopy');
const pipelineList = document.getElementById('pipelineList');
const modeSwitch = document.getElementById('modeSwitch');

let tripData;
let currentStep = 0;
let currentMode = 'Proposal';

const modeCopy = {
  'Proposal': 'Proposal mode keeps the structure elegant but selective: hero, route, chosen stays, and a representative itinerary.',
  'Revised': 'Revised mode adds change clarity: fewer surprises, clearer rationale, and a visible trail from version one to version two.',
  'Booked': 'Booked mode turns the proposal into an operational itinerary with confirmed hotels, apartments, transfers, and day-by-day logistics.',
  'Live trip': 'Live trip mode adds today panels, practical notes, and mobile-first prompts for use during the journey itself.'
};

function renderModeSwitch(modes){
  modeSwitch.innerHTML = '';
  modes.forEach(mode => {
    const btn = document.createElement('button');
    btn.className = 'mode-pill' + (mode === currentMode ? ' active' : '');
    btn.textContent = mode;
    btn.addEventListener('click', () => {
      currentMode = mode;
      renderModeSwitch(modes);
      updateModeState();
    });
    modeSwitch.appendChild(btn);
  });
}

function renderRecordBoard(){
  const { site, studio, stays, days } = tripData;
  tripHeading.textContent = `${site.clients} — ${site.tripName}`;
  tripPill.textContent = `${site.nights} nights · ${site.bases} bases · ${days.length} itinerary days`;

  recordSummary.innerHTML = `
    <span class="label">Trip summary</span>
    <div class="mini-list">
      <div class="mini-item"><span>Clients</span><strong>${site.clients}</strong></div>
      <div class="mini-item"><span>Dates</span><strong>${site.dates}</strong></div>
      <div class="mini-item"><span>Status</span><strong>${site.status}</strong></div>
      <div class="mini-item"><span>Template</span><strong>${studio.templates[0]}</strong></div>
    </div>`;

  recordInputs.innerHTML = `
    <span class="label">Imported inputs</span>
    <ul>
      <li>Enquiry email and call notes</li>
      <li>Stay shortlist narrowed to ${stays.length} booked bases</li>
      <li>${studio.parsedFields.style.join(', ')}</li>
      <li>Missing fields still visible before publish</li>
    </ul>`;

  recordOutput.innerHTML = `
    <span class="label">Rendered outputs</span>
    <ul>
      <li>Proposal site</li>
      <li>Revision history</li>
      <li>Booked itinerary with hotels and apartment details</li>
      <li>Live-trip companion with daily schedule</li>
    </ul>`;
}

function renderSchema(){
  const compact = {
    site: tripData.site,
    stays: tripData.stays.map(({ name, range, type, area }) => ({ name, range, type, area })),
    itineraryDays: tripData.days.map(({ day, date, title, base }) => ({ day, date, title, base }))
  };
  schemaSummary.innerHTML = `
    <span class="label">Schema health</span>
    <div class="mini-list">
      <div class="mini-item"><span>Shared JSON file</span><strong>1</strong></div>
      <div class="mini-item"><span>Booked stays</span><strong>${tripData.stays.length}</strong></div>
      <div class="mini-item"><span>Itinerary days</span><strong>${tripData.days.length}</strong></div>
      <div class="mini-item"><span>Client modes</span><strong>${tripData.studio.modes.length}</strong></div>
    </div>`;
  schemaView.textContent = JSON.stringify(compact, null, 2);
}

function renderPipeline(){
  pipelineList.innerHTML = tripData.studio.workflowSteps.map((step, index) => `
    <div class="pipeline-row"><strong>${index + 1}.</strong><span>${step.modules[0]}</span></div>`).join('');
}

function createStepPanel(index){
  const step = tripData.studio.workflowSteps[index];
  const dayTitles = tripData.days.slice(0, 4).map(day => `<div class="mini-item"><span>${day.date}</span><strong>${day.title}</strong></div>`).join('');
  if (index === 0) {
    return `
      <div class="panel-grid">
        <div class="panel-card"><span class="label">Trip record</span><div class="mini-list"><div class="mini-item"><span>Client</span><strong>${tripData.site.clients}</strong></div><div class="mini-item"><span>Dates</span><strong>${tripData.site.dates}</strong></div><div class="mini-item"><span>Budget</span><strong>${tripData.studio.parsedFields.budget}</strong></div></div></div>
        <div class="panel-card"><span class="label">Template chooser</span><div class="tag-row">${tripData.studio.templates.map(template => `<span class="tag">${template}</span>`).join('')}</div></div>
        <div class="panel-card full"><span class="label">Generated identifiers</span><div class="mini-list"><div class="mini-item"><span>Private slug</span><strong>anna-marcus-oaxaca</strong></div><div class="mini-item"><span>Working URL</span><strong>/trip/?mode=${currentMode.toLowerCase().replace(/\s+/g,'-')}</strong></div></div></div>
      </div>`;
  }
  if (index === 1) {
    return `
      <div class="panel-grid">
        <div class="panel-card"><span class="label">Imported notes</span><p class="muted">${tripData.studio.sourceNotes}</p></div>
        <div class="panel-card"><span class="label">Parser output</span><div class="tag-row">${tripData.studio.parsedFields.style.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><div class="mini-list">${tripData.studio.parsedFields.missing.map(item => `<div class="mini-item"><span>Missing</span><strong>${item}</strong></div>`).join('')}</div></div>
      </div>`;
  }
  if (index === 2) {
    return `
      <div class="panel-grid">
        <div class="panel-card"><span class="label">Route logic</span><p class="muted">${tripData.journeySummary.map(item => item.place).join(' → ')}</p><div class="tag-row"><span class="tag">${tripData.site.bases} bases only</span><span class="tag">Cultural density first</span><span class="tag">Calm coast finish</span></div></div>
        <div class="panel-card"><span class="label">Stay structure</span><div class="mini-list">${tripData.stays.map(stay => `<div class="mini-item"><span>${stay.range}</span><strong>${stay.name}</strong></div>`).join('')}</div></div>
        <div class="panel-card full"><span class="label">First itinerary pass</span><div class="mini-list">${dayTitles}</div></div>
      </div>`;
  }
  if (index === 3) {
    return `
      <div class="panel-grid">
        <div class="panel-card"><span class="label">Mode controls</span><div class="tag-row">${tripData.studio.modes.map(mode => `<span class="tag">${mode}</span>`).join('')}</div></div>
        <div class="panel-card"><span class="label">Visible modules</span><div class="tag-row"><span class="tag">Hero</span><span class="tag">Route</span><span class="tag">Booked stays</span><span class="tag">Daily itinerary</span></div></div>
        <div class="panel-card full"><span class="label">Proposal builder</span><p class="muted">This step renders the first polished site from the same JSON content model that later powers booked and live-trip views.</p></div>
      </div>`;
  }
  return `
    <div class="panel-grid">
      <div class="panel-card"><span class="label">Revision log</span><div class="mini-list"><div class="mini-item"><span>Version 2</span><strong>Mountain stay reduced to 1 night</strong></div><div class="mini-item"><span>Version 3</span><strong>Coast apartment upgraded</strong></div><div class="mini-item"><span>Booked mode</span><strong>Transfers + daily plans added</strong></div></div></div>
      <div class="panel-card"><span class="label">Live itinerary scope</span><div class="mini-list"><div class="mini-item"><span>Confirmed stays</span><strong>${tripData.stays.length}</strong></div><div class="mini-item"><span>Daily schedule cards</span><strong>${tripData.days.length}</strong></div><div class="mini-item"><span>Practical modules</span><strong>3 active</strong></div></div></div>
      <div class="panel-card full"><span class="label">Publish action</span><p class="muted">Pushing live mode should never mean rebuilding from scratch. It just exposes more of the same data model: contacts, daily plans, weather pivots, and copyable notes.</p></div>
    </div>`;
}

function renderStep(index){
  const step = tripData.studio.workflowSteps[index];
  currentStep = index;
  title.textContent = step.name;
  body.innerHTML = step.body.map(copy => `<div class="module"><p class="muted">${copy}</p></div>`).join('') + `<div class="module"><span class="label">Core modules</span><ul>${step.modules.map(item => `<li>${item}</li>`).join('')}</ul></div>${createStepPanel(index)}`;
  assistantStack.innerHTML = `
    <div class="module"><span class="label">Assistant actions</span><ul>${step.assistant.map(item => `<li>${item}</li>`).join('')}</ul></div>
    <div class="module"><span class="label">Human stays in charge of</span><ul><li>Destination judgement</li><li>Pacing and route logic</li><li>Hotel / apartment selection</li><li>Final editorial quality bar</li></ul></div>`;
  [...nav.children].forEach((btn, idx) => btn.classList.toggle('active', idx === index));
}

function renderStepNav(){
  nav.innerHTML = '';
  tripData.studio.workflowSteps.forEach((step, index) => {
    const btn = document.createElement('button');
    btn.className = 'step-link' + (index === currentStep ? ' active' : '');
    btn.textContent = step.name;
    btn.addEventListener('click', () => renderStep(index));
    nav.appendChild(btn);
  });
}

function updateModeState(){
  statePill.textContent = `Mode: ${currentMode}`;
  previewCopy.innerHTML = `<div class="module"><span class="label">Current mode</span><p class="muted">${modeCopy[currentMode]}</p></div><div class="module"><span class="label">What renders for the client</span><ul><li>${tripData.days.length} clear itinerary days</li><li>${tripData.stays.length} booked stay cards including hotel and apartment phases</li><li>Route, signature moments, practical actions, and support modules</li></ul></div>`;
}

function mountInteractions(){
  document.getElementById('newTripBtn').addEventListener('click', () => renderStep(0));
  document.getElementById('importBtn').addEventListener('click', () => renderStep(1));
  document.getElementById('schemaBtn').addEventListener('click', () => schemaView.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  document.getElementById('publishBtn').addEventListener('click', () => { currentMode = 'Live trip'; renderModeSwitch(tripData.studio.modes); updateModeState(); renderStep(4); });
  document.getElementById('generateBtn').addEventListener('click', () => { currentMode = 'Proposal'; renderModeSwitch(tripData.studio.modes); updateModeState(); renderStep(3); });
}

function mountReveal(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add('in-view');
    else observer.observe(el);
  });
}

async function init(){
  const res = await fetch(dataUrl);
  tripData = await res.json();
  renderRecordBoard();
  renderSchema();
  renderPipeline();
  renderModeSwitch(tripData.studio.modes);
  renderStepNav();
  renderStep(0);
  updateModeState();
  mountInteractions();
  mountReveal();
}

init().catch(err => {
  title.textContent = 'Failed to load studio data';
  body.innerHTML = `<div class="module"><p class="muted">${err.message}</p></div>`;
});
