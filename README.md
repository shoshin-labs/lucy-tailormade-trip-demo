# Lucy Rogers Tailormade Trips — Dual-App Demo

Live demo: https://shoshin-labs.github.io/lucy-tailormade-trip-demo/

## Structure

- `/trip/` — client-facing bespoke trip microsite demo
- `/studio/` — Lucy-facing workflow / trip-builder app demo
- `/` — split landing page linking to both

## Product framing

This repo now demonstrates two separate products:

1. **Client trip site**
   - immersive, image-led, mobile-friendly
   - feels like a premium travel companion, not a PDF replacement
   - includes route, stays, today panel, practical actions, and daily flow

2. **Lucy studio**
   - shows how Lucy would create the site
   - enquiry → brief → route → stays → AI draft → publish/update workflow
   - makes the product operationally repeatable

## Local preview

```bash
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/`
- `http://localhost:8000/trip/`
- `http://localhost:8000/studio/`
