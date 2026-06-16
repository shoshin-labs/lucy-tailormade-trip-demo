const steps = [
  {
    name: '1. Capture enquiry',
    body: [
      'Lucy starts with a structured enquiry intake: who is travelling, when, budget band, desired feeling, exclusions, and how bespoke the brief sounds.',
      'The point is not to automate taste. It is to stop good leads disappearing into loose email threads.'
    ],
    modules: [
      'Fields: travellers, dates, budget, trip purpose, style cues, exclusions',
      'Quick lead score: low / medium / high fit',
      'Save source material once; use it everywhere else downstream'
    ],
    assistant: [
      'Summarise the client in one paragraph',
      'Extract non-negotiables and contradictions',
      'Suggest three route directions based on season + budget + style'
    ]
  },
  {
    name: '2. Shape the brief',
    body: [
      'Lucy turns raw notes into a travel design brief: emotional goal, pace, stay style, movement tolerance, and what the trip should never become.',
      'This is where Lucy’s premium judgement sits: not just where to go, but what the journey should feel like.'
    ],
    modules: [
      'Brief editor with free text + structured toggles',
      'Trip design principles box',
      'Open questions list for next client call'
    ],
    assistant: [
      'Draft “why this trip fits you” copy',
      'Rewrite the brief into a clean design rationale',
      'Flag if pacing is inconsistent with stated preferences'
    ]
  },
  {
    name: '3. Build proposal site',
    body: [
      'Lucy selects a route, proposes stays and signature moments, and generates the first private trip site from reusable blocks rather than a blank page.',
      'This should feel like a signature proposal experience, not a templated travel brochure.'
    ],
    modules: [
      'Choose site state: proposal / revised / booked / in trip',
      'Stay cards and itinerary cards from a structured schema',
      'Narrative hero assembled from Lucy notes + approved design language'
    ],
    assistant: [
      'Turn day notes into elegant itinerary cards',
      'Suggest stronger headings and tighter editorial copy',
      'Generate a version note explaining the route logic'
    ]
  },
  {
    name: '4. Revise with AI',
    body: [
      'When clients ask for changes, Lucy updates the same trip record and the site becomes Version 2 rather than a disconnected second document.',
      'The AI agent is useful here for summarising what changed, not for deciding whether the change is wise.'
    ],
    modules: [
      'Revision log',
      'Diff of stays / nights / cost framing',
      'Approve direction or request another pass'
    ],
    assistant: [
      'Write “what changed” in client-friendly language',
      'Highlight knock-on impacts of adding/removing a base',
      'Draft a reply Lucy can send with the updated link'
    ]
  },
  {
    name: '5. Publish booked site',
    body: [
      'After deposit, the same content model is enriched with practical details: transfers, contacts, arrival notes, and the useful in-trip layer.',
      'That is what turns the microsite into an operational product rather than just a sales artifact.'
    ],
    modules: [
      'Publish private URL',
      'Add support contacts, map links, practical notes',
      'Toggle today/tomorrow panels and archive mode'
    ],
    assistant: [
      'Generate packing/weather notes',
      'Summarise each day into concise mobile-friendly prompts',
      'Create post-trip archive copy and rebooking suggestions'
    ]
  }
];
const nav = document.getElementById('stepNav');
const title = document.getElementById('stepTitle');
const body = document.getElementById('stepBody');
const assistantStack = document.getElementById('assistantStack');
function render(i){
  const step = steps[i];
  title.textContent = step.name;
  body.innerHTML = step.body.map(p=>`<div class="module"><p class="muted">${p}</p></div>`).join('') + `<div class="module"><span class="label">Core modules</span><ul>${step.modules.map(m=>`<li>${m}</li>`).join('')}</ul></div>`;
  assistantStack.innerHTML = `<div class="module"><span class="label">Agent actions</span><ul>${step.assistant.map(a=>`<li>${a}</li>`).join('')}</ul></div><div class="module"><span class="label">Human stays in charge of</span><ul><li>destination judgement</li><li>route pacing</li><li>supplier/stay choice</li><li>final quality bar and tone</li></ul></div>`;
  [...nav.children].forEach((btn, idx)=>btn.classList.toggle('active', idx===i));
}
steps.forEach((step, i)=>{
  const btn = document.createElement('button');
  btn.className = 'step-link' + (i===0 ? ' active':'');
  btn.textContent = step.name;
  btn.addEventListener('click', ()=>render(i));
  nav.appendChild(btn);
});
render(0);
