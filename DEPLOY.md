# Deploying doctormeisam.com without Emergent

This repo was originally generated and previewed inside Emergent. It's a two-part app:

- `frontend/` — a React (Create React App + craco) single-page site, calling the backend at `REACT_APP_BACKEND_URL`.
- `backend/` — a FastAPI service backed by MongoDB, with one AI-powered endpoint (the symptom checker) and one optional WordPress blog proxy.

## What changed to make it portable

- The symptom checker used to call Emergent's own AI proxy (`emergentintegrations` + `EMERGENT_LLM_KEY`), which only works inside Emergent. It now calls the official Anthropic API directly via `ANTHROPIC_API_KEY`.
- `backend/requirements.txt` was trimmed from Emergent's full base-image dependency list down to only what `server.py` actually imports.
- The frontend's dev-only `@emergentbase/visual-edits` package was removed (it only powered Emergent's in-browser visual editor and was already handled gracefully as optional).
- The two hero/about photos were switched from Emergent's CDN (`customer-assets.emergentagent.com/job_.../...`) to local files at `frontend/public/images/`. **You still need to add the actual image files** — see step 1 below.

## 1. Recover the two photos

`frontend/src/lib/site.js` now expects:

- `frontend/public/images/hero-doctor.webp`
- `frontend/public/images/about-doctor.jpg`

Download the originals from the live Emergent preview (or wherever you have the source files) and drop them in `frontend/public/images/` under those names before deploying, otherwise those two spots on the page will show broken images. (The four Unsplash background images were left as-is — those URLs aren't tied to Emergent.)

## 2. Set up the pieces you'll need accounts for

| Piece | Where | Notes |
|---|---|---|
| Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Free M0 tier is enough. Create a cluster, a database user, and copy the `mongodb+srv://...` connection string. Under Network Access, allow access from anywhere (`0.0.0.0/0`) since Render's IPs aren't static on the free/starter plan. |
| AI key | [console.anthropic.com](https://console.anthropic.com) | Create an API key for the symptom checker. Pay-as-you-go, low volume here. |
| Backend host | [Render](https://render.com) | New Web Service → connect this GitHub repo → Render will pick up `render.yaml` at the repo root automatically. |
| Frontend host | [Vercel](https://vercel.com) | New Project → import this GitHub repo → set **Root Directory** to `frontend`. |

## 3. Configure environment variables

**Render (backend)** — in the service's Environment tab, fill in the values `render.yaml` leaves blank:
- `MONGO_URL` — the Atlas connection string
- `ANTHROPIC_API_KEY` — your Anthropic key

Everything else (`DB_NAME`, `ANTHROPIC_MODEL`, `CORS_ORIGINS`) already has sensible defaults in `render.yaml` — adjust `CORS_ORIGINS` if your final domain differs from `doctormeisam.com` / `www.doctormeisam.com`.

**Vercel (frontend)** — in Project Settings → Environment Variables, add:
- `REACT_APP_BACKEND_URL` — the `.onrender.com` URL Render gives your backend service (e.g. `https://doctormeisam-api.onrender.com`)

Redeploy the frontend after setting this (Vercel bakes env vars in at build time).

## 4. Point the domain at the new hosts

In whatever registrar/DNS host manages `doctormeisam.com`:
- Add the records Vercel's dashboard shows you for the custom domain (usually an `A` record to Vercel's IP for the root domain, and a `CNAME` for `www`).
- The backend can stay on its `onrender.com` subdomain — no DNS change needed there unless you want a branded `api.doctormeisam.com`, in which case Render's dashboard will show you the CNAME to add.

## 5. Smoke test

Once both are live:
- Load the site, confirm both photos render.
- Try the symptom checker end to end.
- Check `https://<your-backend>.onrender.com/api/` returns `{"message": "Dr. Meisam Lund API"}`.

Render's free tier spins the backend down after inactivity (first request after idle takes ~30–60s to wake up) — the `starter` plan in `render.yaml` avoids that if you want it always warm; swap `plan: starter` for `plan: free` in `render.yaml` if cost matters more than that cold-start delay.
