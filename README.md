# Tailormade Trip Demo — Dual-App Prototype

Live demo: https://shoshin-labs.github.io/lucy-tailormade-trip-demo/

## Structure

- `/trip/` — client-facing bespoke trip itinerary site
- `/studio/` — internal trip-builder workflow app
- `/data/oaxaca-journey.json` — shared content model powering both apps
- `/` — landing page linking to both

## Product framing

This repo demonstrates two connected products:

1. **Client trip site**
   - immersive, image-led, mobile-friendly
   - feels like a premium travel companion, not a PDF replacement
   - includes route, booked stays, today panel, practical actions, and full daily itinerary

2. **Trip builder studio**
   - shows how the trip record gets created, imported, shaped, and published
   - workflow: create trip → import notes → shape route → generate proposal → publish booked/live view
   - makes the product operationally repeatable with one shared data source

## Local preview

```bash
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/`
- `http://localhost:8000/trip/`
- `http://localhost:8000/studio/`
