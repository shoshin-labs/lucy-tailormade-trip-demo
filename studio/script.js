const steps = [
  {
    name: '1. Create trip record',
    state: 'draft intake',
    body: [
      'Lucy starts by creating a trip record rather than opening a blank design canvas. This means every proposal, revision, and live-trip update is tied back to one source of truth.',
      'The first screen should feel operational: client names, dates, budget band, trip purpose, route status, and privacy level.'
    ],
    modules: [
      'Create trip: client name, dates, budget, proposal/live state',
      'Choose a trip template: cultural circuit / beach finish / family / honeymoon',
      'Generate private slug and working URL immediately'
    ],
    assistant: [
      'Summarise the enquiry in one paragraph',
      'Suggest the best-fit trip template based on tone and season',
      'Draft a first hero headline from the client brief'
    ],
    panel: `
      <div class="builder-grid">
        <div class="builder-card"><span class="label">Trip record</span><div class="mini-list"><div class="mini-item"><span>Client</span><strong>Anna & Marcus</strong></div><div class="mini-item"><span>Dates</span><strong>27 Nov – 8 Dec</strong></div><div class="mini-item"><span>Budget</span><strong>£8k–£12k</strong></div></div></div>
        <div class="builder-card"><span class="label">Template</span><div class="tag-row"><span class="tag">Culture-first</span><span class="tag">Design-led</span><span class="tag">Beach finish</span></div></div>
        <div class="builder-card"><span class="label">Private URL</span><p class="muted">lucytrips.com/anna-marcus-oaxaca</p><span class="pill-note">created automatically</span></div>
      </div>`
  },
  {
    name: '2. Import enquiry + notes',
    state: 'source material loaded',
    body: [
      'Next, Lucy imports what already exists: enquiry emails, call notes, PDF snippets, WhatsApp summaries, and supplier references. The goal is to stop information being scattered across inboxes and documents.',
      'Imported text does not publish automatically. It becomes source material for Lucy to shape.'
    ],
    modules: [
      'Paste email / questionnaire / notes into one import panel',
      'Auto-extract travellers, dates, budget, style cues, and exclusions',
      'Flag missing information for follow-up'
    ],
    assistant: [
      'Extract structured fields from messy notes',
      'List contradictions or missing essentials',
      'Suggest follow-up questions before the next call'
    ],
    panel: `
      <div class="import-grid">
        <div class="import-card"><span class="label">Imported enquiry</span><textarea readonly>We want Mexico for late November. We'd love something cultured, atmospheric, and not overly hectic. A few very well-chosen stays. We like food, design, and meaningful local texture but do not want an over-programmed trip.</textarea></div>
        <div class="import-card"><span class="label">Extracted fields</span><div class="tag-row"><span class="tag">Late November</span><span class="tag">2 travellers</span><span class="tag">Culture</span><span class="tag">Slow pace</span><span class="tag">Beach finish</span></div><div class="mini-list"><div class="mini-item"><span>Missing</span><strong>flight preference</strong></div><div class="mini-item"><span>Missing</span><strong>room layout</strong></div></div></div>
      </div>`
  },
  {
    name: '3. Shape brief + route',
    state: 'brief approved internally',
    body: [
      'This is where Lucy does the premium work. She turns raw input into trip logic: why this destination, what pace suits them, how many bases is enough, and what the trip should never become.',
      'The software should make those decisions legible, not replace them.'
    ],
    modules: [
      'Edit trip brief and “why this fits” narrative',
      'Set route structure, stay logic, and signature moments',
      'Mark optional experiences versus core anchors'
    ],
    assistant: [
      'Rewrite Lucy notes into polished proposal copy',
      'Stress-test the route against stated pace preferences',
      'Generate three alternate headings for each major section'
    ],
    panel: `
      <div class="draft-grid">
        <div class="draft-card"><span class="label">Trip logic</span><p class="muted">Oaxaca gives culture and food weight immediately; the mountain night creates contrast; the coast gives a calm final memory.</p></div>
        <div class="draft-card"><span class="label">Signature moments</span><div class="mini-list"><div class="mini-item"><span>Maker visit</span><strong>core</strong></div><div class="mini-item"><span>Cooking day</span><strong>core</strong></div><div class="mini-item"><span>Lagoon excursion</span><strong>optional</strong></div></div></div>
      </div>`
  },
  {
    name: '4. Generate proposal site',
    state: 'proposal v1',
    body: [
      'Once the route is shaped, Lucy generates the first private site from structured modules: hero, route cards, stay cards, itinerary cards, and proposal framing.',
      'This should feel like a signature client experience rather than a generic brochure PDF.'
    ],
    modules: [
      'Pick state: proposal / revised / booked / live',
      'Choose which modules are visible in proposal mode',
      'Publish a preview link Lucy can send immediately'
    ],
    assistant: [
      'Turn structured data into elegant section copy',
      'Suggest stronger editorial sequencing',
      'Produce a concise cover note for the client email'
    ],
    panel: `
      <div class="builder-grid">
        <div class="builder-card"><span class="label">Site state</span><div class="state-row"><span class="state-pill active">Proposal</span><span class="state-pill">Revised</span><span class="state-pill">Booked</span><span class="state-pill">Live trip</span></div></div>
        <div class="builder-card"><span class="label">Visible blocks</span><div class="tag-row"><span class="tag">Hero</span><span class="tag">Route</span><span class="tag">Chosen stays</span><span class="tag">Signature moments</span></div></div>
        <div class="builder-card"><span class="label">Send</span><p class="muted">Share private link + short note from Lucy.</p><span class="pill-note">one-click copy later</span></div>
      </div>`
  },
  {
    name: '5. Revise + publish live site',
    state: 'booked / live',
    body: [
      'Client feedback updates the same trip record. After booking, Lucy adds the operational layer: contacts, live plan, packing, maps, support, and today/tomorrow panels.',
      'That is what turns the microsite into a premium working product rather than a static sales artefact.'
    ],
    modules: [
      'Revision log with client-visible change summary',
      'Booked mode adds maps, support contacts, and day-of-use blocks',
      'Publish live update without rebuilding the site manually'
    ],
    assistant: [
      'Write a clear “what changed” summary',
      'Generate concise mobile-friendly day prompts',
      'Prepare post-trip keepsake mode after return'
    ],
    panel: `
      <div class="draft-grid">
        <div class="timeline-card"><span class="label">Revision log</span><div class="mini-list"><div class="mini-item"><span>Version 2</span><strong>mountain stay reduced to 1 night</strong></div><div class="mini-item"><span>Version 3</span><strong>coast property upgraded</strong></div><div class="mini-item"><span>Live mode</span><strong>contacts + maps added</strong></div></div></div>
        <div class="timeline-card"><span class="label">Publish actions</span><div class="action-stack"><button class="action-btn primary" type="button">Push client update</button><button class="action-btn" type="button">Copy change summary</button></div></div>
      </div>`
  }
];

const nav = document.getElementById('stepNav');
const title = document.getElementById('stepTitle');
const body = document.getElementById('stepBody');
const assistantStack = document.getElementById('assistantStack');
const statePill = document.getElementById('statePill');

function render(i){
  const step = steps[i];
  title.textContent = step.name;
  statePill.textContent = `State: ${step.state}`;
  body.innerHTML = step.body.map(p => `<div class="module"><p class="muted">${p}</p></div>`).join('') +
    `<div class="module"><span class="label">Core modules</span><ul>${step.modules.map(m => `<li>${m}</li>`).join('')}</ul></div>${step.panel}`;

  assistantStack.innerHTML = `
    <div class="module"><span class="label">Agent actions</span><ul>${step.assistant.map(a => `<li>${a}</li>`).join('')}</ul></div>
    <div class="module"><span class="label">Human stays in charge of</span><ul><li>destination judgement</li><li>route pacing</li><li>supplier/stay choice</li><li>final quality bar and tone</li></ul></div>`;

  [...nav.children].forEach((btn, idx) => btn.classList.toggle('active', idx === i));
}

steps.forEach((step, i) => {
  const btn = document.createElement('button');
  btn.className = 'step-link' + (i === 0 ? ' active' : '');
  btn.textContent = step.name;
  btn.addEventListener('click', () => render(i));
  nav.appendChild(btn);
});
render(0);

document.getElementById('newTripBtn').addEventListener('click', () => render(0));
document.getElementById('importBtn').addEventListener('click', () => render(1));
document.getElementById('publishBtn').addEventListener('click', () => render(4));
document.getElementById('generateBtn').addEventListener('click', () => render(3));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach(el => {
  if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
    el.classList.add('in-view');
  } else {
    observer.observe(el);
  }
});
