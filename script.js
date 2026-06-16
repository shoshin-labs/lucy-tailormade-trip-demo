const siteData = {
  title: "Anna & Marcus — Oaxaca Highlands & Pacific Coast",
  clientBrief: [
    { title: "Who they are", body: "Early-40s London couple, well travelled, high discretionary spend, not interested in flashy luxury or standard resort packaging." },
    { title: "What they want", body: "Warm November trip with food, atmosphere, craft, cultural depth, beautiful stays, and one or two genuinely special access moments." },
    { title: "Key constraints", body: "11 nights, two or three bases maximum, slow enough to feel restorative, land budget around £12k–£14k excluding international flights." },
    { title: "What they do not want", body: "Daily early starts, overproduced tourist experiences, long admin emails, or a generic PDF itinerary that feels like anyone’s trip." }
  ],
  designLogic: [
    { title: "Immersive not obvious", body: "Oaxaca gives Lucy’s brand the right mix of story, cuisine, artisan culture, mountain texture, and off-the-beaten-track credibility." },
    { title: "Emotionally sequenced", body: "The route moves from urban immersion to highland stillness to coast-side decompression, so the trip has a narrative arc rather than a list of places." },
    { title: "Premium through judgement", body: "The value is not generic luxury but careful pacing, beautiful small stays, and experiences chosen for fit, not inventory." },
    { title: "Microsite-friendly", body: "This type of journey is visually rich and operationally layered, making it ideal for a proposal-to-live-itinerary product." }
  ],
  sections: [
    { title: "1. Home / overview", body: "Trip title, status badge, narrative paragraph, quick facts, why this trip fits, route snapshot, and primary next action." },
    { title: "2. Trip brief / design rationale", body: "What the clients asked for, travel style, non-negotiables, exclusions, and Lucy’s reasoning for route and pacing." },
    { title: "3. Route overview", body: "Map, stop sequence, nights per base, transfer logic, and a short explanation of the journey arc." },
    { title: "4. Stay collection", body: "One card per stay with why it was chosen, room concept, style notes, status, and practical details." },
    { title: "5. Day-by-day itinerary", body: "Indicative in proposal stage, then confirmed with timings, suppliers, and practical notes after booking." },
    { title: "6. Signature experiences", body: "The moments that sell the trip: mezcal, artisan visits, market-to-table cooking, mountain guide, and coast-based nature or rest options." },
    { title: "7. Practical travel companion", body: "Arrival, transfers, contacts, weather, packing notes, restaurant suggestions, maps links, and support information." },
    { title: "8. Budget / inclusions / version notes", body: "Elegant price framing, assumptions, inclusions, exclusions, payment milestones, and a visible ‘what changed’ section." }
  ],
  manualOps: [
    { title: "Interpret the brief", body: "Read between the lines of what the client says and what they are really trying to feel during the trip." },
    { title: "Design the route", body: "Choose the right places, rhythm, and sequencing; this is Lucy’s core premium value and should stay human." },
    { title: "Curate the special moments", body: "Select the stays, private guiding, producer visits, and subtle personal touches that make the trip memorable." },
    { title: "Handle revisions with judgement", body: "Decide what to change, what to protect, and how to keep the emotional logic intact when clients ask for edits." }
  ],
  templatedOps: [
    { title: "Microsite shell", body: "Branded page structure, reusable layout, mobile navigation, and state badges." },
    { title: "Content modules", body: "Stay cards, itinerary day cards, budget blocks, practical-info panels, signature-experience cards, and support modules." },
    { title: "Data structure", body: "Standard fields for client names, destinations, dates, stops, experiences, inclusions, exclusions, and contacts." },
    { title: "Version presentation", body: "Proposal, revised, and booked states with reusable highlighting and version-history slots." }
  ],
  automatedOps: [
    { title: "Generate site skeleton", body: "Create a private trip page from a form or CRM record using structured trip fields." },
    { title: "Pre-fill itinerary sections", body: "Populate stop, day, and stay cards from Lucy’s source data rather than manual copy/paste." },
    { title: "Version duplication", body: "Turn Proposal V1 into V2 with a generated ‘what changed’ panel and status update." },
    { title: "Post-booking enrichment", body: "Inject transfer times, support contacts, flight details, and practical notes from admin records." }
  ],
  workflow: [
    { title: "1. Enquiry", body: "Client arrives through site or email with rough dates, travellers, budget band, travel style, and dream cues.", points: ["Collect core facts", "Flag high-value enquiries", "Create internal trip record"] },
    { title: "2. Discovery brief", body: "Lucy translates conversation into a concise design brief: who they are, what they want to feel, and what to avoid.", points: ["Traveller profile", "Pacing principles", "Non-negotiables + exclusions"] },
    { title: "3. Proposal site", body: "A private microsite is generated as the first premium client-facing artifact, replacing the generic PDF.", points: ["Narrative-led home", "Indicative itinerary", "Budget frame + feedback CTA"] },
    { title: "4. Revision round", body: "Clients respond inside the same artifact. Lucy updates Version 2 rather than creating another detached document.", points: ["Version notes", "Changed route/stays", "Decision log"] },
    { title: "5. Booked version", body: "Once approved and deposited, the same site becomes the source of truth for confirmed trip details.", points: ["Confirmed hotels", "Transfers + contacts", "Pre-departure practicals"] },
    { title: "6. Live itinerary", body: "During travel, the site acts as a mobile companion with today/tomorrow views and useful local context.", points: ["Today panel", "Map/contact links", "Restaurant + contingency notes"] }
  ],
  stays: {
    proposal: [
      { title: "Oaxaca City courtyard hotel", meta: "4 nights · proposed stay concept", body: "A design-led small hotel in the historic centre, chosen for atmosphere, walkability, and easy access to markets, food, and artisan districts." },
      { title: "Sierra Norte mountain lodge", meta: "2 nights · proposed highland stay", body: "A simple but beautiful base in the highlands, adding air, quiet, and perspective after the city without overcomplicating logistics." },
      { title: "Pacific coast hideaway", meta: "5 nights · proposed coast finish", body: "A low-key boutique retreat near Puerto Escondido for rest, beach time, and one or two carefully chosen excursions rather than overprogramming." }
    ],
    revision: [
      { title: "Oaxaca City courtyard hotel", meta: "4 nights · still recommended", body: "Retained because it anchors the trip culturally and suits the clients’ preference for texture over corporate polish." },
      { title: "Sierra Norte mountain lodge", meta: "1 night · shortened after feedback", body: "Reduced from two nights to one so the mountain experience remains special but the overall rhythm stays lighter." },
      { title: "Pacific coast design hotel", meta: "6 nights · updated stay option", body: "Coast finish extended and upgraded to a smaller, more intimate property with stronger design character and a calmer setting." }
    ],
    live: [
      { title: "Casa Silencio-style Oaxaca stay", meta: "27–30 Nov · confirmed", body: "Confirmed boutique city stay with breakfast, airport pickup note, and an easy walking radius for markets, dinner, and galleries." },
      { title: "Sierra Norte eco-lodge", meta: "30 Nov–1 Dec · confirmed", body: "Confirmed one-night mountain stay with private transfer, guided walk, and luggage handling note included in the live practical section." },
      { title: "Pacific coast retreat", meta: "1–6 Dec · confirmed", body: "Confirmed design-led coast base with beach access, flexible final days, and optional lagoon or boat excursion depending on weather and energy." }
    ]
  },
  signature: {
    proposal: [
      { title: "Private market-to-table day", body: "A market morning followed by a cooking session that gives the city texture rather than just restaurant reservations." },
      { title: "Mezcal producer visit", body: "A visit framed around place and craft, not a generic tasting circuit." },
      { title: "Artisan studio encounter", body: "A conversation-led stop with a maker whose work reflects the region’s material culture." },
      { title: "Mountain quiet", body: "A short shift into Sierra Norte for contrast, perspective, and a sense of having gone beyond the obvious." }
    ],
    revision: [
      { title: "Food-led day strengthened", body: "Client interest in food becomes more explicit, so the culinary day becomes a headline experience rather than a nice extra." },
      { title: "Hotel style upgraded", body: "A more intimate coast property better matches the clients’ taste for subtle design and privacy." },
      { title: "Pacing eased", body: "The mountain section becomes shorter, preserving contrast while reducing friction." },
      { title: "Beach time expanded", body: "The coast portion becomes more restorative, which better reflects the couple’s stated priorities." }
    ],
    live: [
      { title: "Today’s dinner shortlists", body: "Three nearby restaurant suggestions with Lucy’s note on why each suits tonight’s mood." },
      { title: "Driver + guide details", body: "Named contacts, pickup windows, meeting points, and copyable phone numbers." },
      { title: "Optional weather pivot", body: "If sea conditions are poor, the site can suggest a market day, spa, or gallery alternative instead." },
      { title: "Post-trip keepsake mode", body: "The same site can later preserve highlights, photos, and notes for future referrals or rebooking." }
    ]
  },
  itinerary: {
    proposal: [
      { title: "Day 1 — Arrive into Oaxaca", meta: "Arrival + settle in", body: "Airport meet and transfer, soft landing at the city hotel, and dinner in walking distance to absorb place without over-scheduling.", bullets: ["Private airport transfer", "First-evening restaurant note", "No fixed activities beyond arrival"] },
      { title: "Day 2 — Market life and old Oaxaca", meta: "Culture + food", body: "Guided introduction to the city through architecture, daily life, and food, with enough space to browse and pause.", bullets: ["Morning market exploration", "Long lunch opportunity", "Optional rooftop mezcal at dusk"] },
      { title: "Day 4 — Craft and mezcal", meta: "Signature day", body: "Studio visit and mezcal producer experience chosen for depth and fit rather than volume of stops.", bullets: ["Private artisan encounter", "Producer visit", "Evening kept free"] },
      { title: "Day 5 — Sierra Norte shift", meta: "Mountain contrast", body: "Move into the highlands for one or two quiet nights depending on final version, with gentle walking and a change of pace.", bullets: ["Scenic transfer", "Guide-led orientation", "Fireside dinner feel"] }
    ],
    revision: [
      { title: "Day 1 — Arrive into Oaxaca", meta: "Unchanged", body: "Keep the same soft arrival structure because it respects the clients’ desire for calm, not instant activity.", bullets: ["Airport meet", "Easy dinner", "Concierge-style settling-in notes"] },
      { title: "Day 3 — Culinary Oaxaca", meta: "Added emphasis", body: "A stronger food-focused day is introduced after the clients respond positively to that angle.", bullets: ["Market-to-table cooking", "Open late afternoon", "Suggested bar or gallery options"] },
      { title: "Day 5 — One-night mountain stay", meta: "Revised", body: "Mountain section is trimmed to a single night so the contrast remains but the trip feels less segmented.", bullets: ["Less repacking fatigue", "Same scenery payoff", "Cleaner onward flow"] },
      { title: "Day 6–11 — Extended coast finish", meta: "Rebalanced", body: "Six nights on the coast allow proper rest, optional boat/nature activity, and a more generous ending.", bullets: ["More free time", "Optional excursion day", "Better restorative close"] }
    ],
    live: [
      { title: "Today — Oaxaca studio and mezcal", meta: "Thu 29 Nov · live itinerary", body: "10:00 pickup in hotel courtyard. Textile studio visit first, producer lunch second, return around 16:30. Lucy notes one dinner suggestion nearby for tonight.", bullets: ["Wear light layers", "Bring cash for maker purchases", "Driver: Javier +52 ..."] },
      { title: "Tomorrow — Sierra Norte transfer", meta: "Fri 30 Nov · practical mode", body: "09:15 transfer departure. Overnight bag only recommended; main luggage moves onward. Arrival walk is gentle and weather dependent.", bullets: ["Meeting point: reception", "Estimated drive: 2h15", "Rain plan included"] },
      { title: "Sun 2 Dec — Coast arrival", meta: "Confirmed logistics", body: "Private transfer to the coast hotel, check-in from 15:00, free afternoon, and a curated shortlist for sunset drinks or a quiet dinner.", bullets: ["Hotel address + map link", "Backup lunch stop", "Swim/beach guidance"] },
      { title: "Flexible final days", meta: "Open but guided", body: "The site gives three optional paths: boat/nature outing, full rest day, or local food-and-town meander, depending on energy and conditions.", bullets: ["Option cards", "Weather-aware suggestions", "Support contacts always visible"] }
    ]
  },
  companion: {
    proposal: [
      { title: "What it would become after booking", body: "Transfer details, support info, practical notes, and a simplified today/tomorrow travel layer are visible as placeholders in proposal mode." },
      { title: "Premium reassurance", body: "Even before confirmation, the client can see that the trip will eventually live in one elegant, well-organized place." }
    ],
    revision: [
      { title: "Decision clarity", body: "Clients can see what has changed without re-reading a full document or comparing multiple PDFs by email." },
      { title: "Faster sign-off", body: "The same page becomes a cleaner decision environment for agreeing route, pacing, and spend." }
    ],
    live: [
      { title: "Today / tomorrow view", body: "Fast-access panels for timings, meeting points, weather pivots, and what to bring." },
      { title: "Support + maps", body: "Tap-to-call contacts, map links, and named drivers or guides." },
      { title: "Local recommendations", body: "Shortlists for dinner, coffee, browsing, or free-time gaps near the current base." },
      { title: "Contingency notes", body: "Alternate options if weather changes or clients want more rest than originally planned." }
    ]
  },
  versions: {
    proposal: [
      { title: "Version 1 framing", body: "Introduce the emotional logic of the trip and make the proposed route feel tangible without over-specifying operations too early." },
      { title: "Budget style", body: "Use a confident land-only range with assumptions, not a dense spreadsheet." },
      { title: "Client action", body: "Invite feedback on pace, stay style, and where they want more or less energy." }
    ],
    revision: [
      { title: "What changed", body: "Mountain stay cut from two nights to one; coast extended from five to six nights; food-led day strengthened; coast hotel made more intimate and design-led." },
      { title: "Commercial effect", body: "The site becomes a negotiation tool that still feels luxurious rather than administrative." },
      { title: "Client action", body: "Approve direction, ask for one more pass, or move to deposit and confirmation." }
    ],
    live: [
      { title: "Operational upgrade", body: "Proposal narrative remains, but confirmed dates, hotels, transfer notes, and support details become primary." },
      { title: "Daily usefulness", body: "Each day card gains timings, contacts, what-to-bring notes, and optional fallback ideas." },
      { title: "Long-tail value", body: "After the trip, archive mode can preserve highlights and support repeat bookings or referrals." }
    ]
  },
  hero: {
    proposal: {
      narrative: "A November journey designed around atmosphere rather than checklist tourism: market mornings, mezcal and conversation, mountain quiet, and a coast finale with time to exhale.",
      summary: "In proposal mode, the site behaves like a premium sales artifact: it proves Lucy understands the clients, makes the trip feel real, and gives them a better decision experience than email + PDF.",
      status: "Draft proposal",
      cls: "status-proposal",
      meta: ["11 nights", "Mexico", "Couple trip", "Warm late-autumn escape", "£12k–£14k land only"]
    },
    revision: {
      narrative: "The same private site is updated after feedback, preserving the trip’s core story while clearly showing what changed and why the new version fits better.",
      summary: "In revision mode, the microsite becomes the single source of truth for feedback, refinement, and commercial confidence — without collapsing into admin clutter.",
      status: "Revised proposal",
      cls: "status-revision",
      meta: ["Version 2", "Mountain stay shortened", "Coast extended", "Food focus strengthened", "Design-led hotel updated"]
    },
    live: {
      narrative: "After deposit and confirmation, the site upgrades into a live itinerary and travel companion: confirmed stays, transfer notes, support details, and a useful today/tomorrow rhythm.",
      summary: "In booked / in-trip mode, this stops being a nice idea and becomes an operational client product — one that can reduce friction while increasing perceived care.",
      status: "Booked / in trip",
      cls: "status-live",
      meta: ["Confirmed stays", "Live logistics", "Today + tomorrow panels", "Support contacts", "Keepsake-ready archive"]
    }
  },
  mvp: `
    <div class="rich-text">
      <p><strong>Best MVP:</strong> a private proposal-to-booked trip microsite using one reusable template and three lifecycle states: <strong>proposal</strong>, <strong>revised proposal</strong>, and <strong>booked/live itinerary</strong>.</p>
      <ul>
        <li>Keep it as a static site workflow first, not a full travel platform.</li>
        <li>Use a private link or simple password gate rather than building account systems.</li>
        <li>Start with serious leads and booked high-value trips, where the premium positioning is easiest to justify.</li>
        <li>Measure value by close-rate lift, faster revision cycles, reduced admin after booking, and stronger perceived differentiation.</li>
      </ul>
      <p><strong>Commercial logic:</strong> the site should not be sold as a free extra. It should be framed as Lucy’s signature planning experience and the operational home of the trip.</p>
    </div>
  `,
  nextDemo: `
    <div class="rich-text">
      <p><strong>Build next:</strong> one high-fidelity, responsive client microsite for this Oaxaca sample trip, with a lifecycle toggle exactly like this demo.</p>
      <ul>
        <li><strong>State 1:</strong> proposal with route, narrative, indicative itinerary, stays, and budget range.</li>
        <li><strong>State 2:</strong> revision with a visible “what changed” section and updated pacing/hotel choices.</li>
        <li><strong>State 3:</strong> booked / in-trip mode with confirmed hotels, transfer cards, practical notes, and today/tomorrow panels.</li>
      </ul>
      <p><strong>Why this is the right demo:</strong> it validates positioning, IA, usefulness, and repeatability in one artifact — without needing a backend first.</p>
    </div>
  `
};

const stateButtons = document.querySelectorAll('.state-button');
const heroMeta = document.getElementById('heroMeta');
const tripNarrative = document.getElementById('tripNarrative');
const statusBadge = document.getElementById('statusBadge');
const stateSummary = document.getElementById('stateSummary');

function checklistHtml(items) {
  return items.map(item => `
    <div class="check-item">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
    </div>
  `).join('');
}

function sectionsHtml(items) {
  return items.map(item => `
    <div class="section-card">
      <h4>${item.title}</h4>
      <p>${item.body}</p>
    </div>
  `).join('');
}

function workflowHtml(items) {
  return items.map((item, idx) => `
    <div class="timeline-step">
      <span class="step-number">0${idx + 1}</span>
      <strong>${item.title}</strong>
      <p>${item.body}</p>
      <ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function staysHtml(items) {
  return items.map(item => `
    <div class="stay-card">
      <div class="stay-header">
        <h4>${item.title}</h4>
        <span class="meta">${item.meta}</span>
      </div>
      <p>${item.body}</p>
    </div>
  `).join('');
}

function experiencesHtml(items) {
  return items.map(item => `
    <div class="experience-card">
      <div class="exp-header">
        <h4>${item.title}</h4>
      </div>
      <p>${item.body}</p>
    </div>
  `).join('');
}

function itineraryHtml(items) {
  return items.map(item => `
    <div class="day-card">
      <div class="day-header">
        <h4>${item.title}</h4>
        <span class="meta">${item.meta}</span>
      </div>
      <p>${item.body}</p>
      <ul>${item.bullets.map(point => `<li>${point}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderStatic() {
  document.getElementById('clientBrief').innerHTML = checklistHtml(siteData.clientBrief);
  document.getElementById('designLogic').innerHTML = checklistHtml(siteData.designLogic);
  document.getElementById('siteSections').innerHTML = sectionsHtml(siteData.sections);
  document.getElementById('workflowTimeline').innerHTML = workflowHtml(siteData.workflow);
  document.getElementById('manualOps').innerHTML = checklistHtml(siteData.manualOps);
  document.getElementById('templatedOps').innerHTML = checklistHtml(siteData.templatedOps);
  document.getElementById('automatedOps').innerHTML = checklistHtml(siteData.automatedOps);
  document.getElementById('mvpRecommendation').innerHTML = siteData.mvp;
  document.getElementById('nextDemo').innerHTML = siteData.nextDemo;
}

function renderState(state) {
  const hero = siteData.hero[state];
  tripNarrative.textContent = hero.narrative;
  stateSummary.textContent = hero.summary;
  statusBadge.textContent = hero.status;
  statusBadge.className = `status-badge ${hero.cls}`;
  heroMeta.innerHTML = hero.meta.map(text => `<span class="pill">${text}</span>`).join('');

  document.getElementById('versionNotes').innerHTML = checklistHtml(siteData.versions[state]);
  document.getElementById('signatureMoments').innerHTML = experiencesHtml(siteData.signature[state]);
  document.getElementById('itineraryDays').innerHTML = itineraryHtml(siteData.itinerary[state]);
  document.getElementById('stays').innerHTML = staysHtml(siteData.stays[state]);
  document.getElementById('companionBlocks').innerHTML = checklistHtml(siteData.companion[state]);

  stateButtons.forEach(btn => {
    const active = btn.dataset.state === state;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

stateButtons.forEach(button => {
  button.addEventListener('click', () => renderState(button.dataset.state));
});

renderStatic();
renderState('proposal');
