#!/usr/bin/env node
// Pings IndexNow — a protocol Bing (and Yandex) support that tells their
// index "these URLs are new/changed, go recrawl them now" instead of
// waiting for the next scheduled crawl. This is the thing that actually
// feeds ChatGPT's search/browsing tool: ChatGPT search draws on Bing's
// index, so getting a page into Bing's index faster gets it into ChatGPT's
// results faster too. This is a completely different tool from Bing Places
// (the Maps/business-listing product) — no account, no login, no mailed
// verification PIN. Ownership is proven entirely by the key file below
// being live on the site; IndexNow checks that it can fetch it before
// accepting the submission.
//
// IMPORTANT: run this AFTER deploying, once you've confirmed
// https://www.doctormeisam.com/18d6c05cadf29533d8e2ee967ecf44dc.txt loads
// and returns exactly the key below. Submitting before that file is live
// will fail, since that's how IndexNow verifies you actually own the site.
//
// Usage:   node scripts/submit-indexnow.js
// Needs Node 18+ (uses the built-in fetch — no npm install required).

const HOST = "www.doctormeisam.com";
const KEY = "18d6c05cadf29533d8e2ee967ecf44dc";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Every real page on the site today. IndexNow only needs to hear about
// what's new or changed — you don't have to resubmit everything each
// time — but submitting the full list is harmless, so this stays the
// simplest thing to run after any update. Add a new URL here the next
// time a page is added (a new condition page, a new article, etc.).
const URLS = [
  "/",
  "/about",
  "/blog",
  "/conditions/gallbladder-surgery",
  "/conditions/hernia-surgery",
  "/conditions/appendicitis-emergency-surgery",
  "/conditions/stomach-bowel-conditions",
  "/conditions/colon-small-bowel-surgery",
  "/conditions/endoscopy",
  "/conditions/second-opinion-surgical-decisions",
  "/blog/do-i-really-need-surgery",
  "/blog/gallstones-explained",
  "/blog/hernia-myths",
  "/blog/when-abdominal-pain-becomes-serious",
  "/blog/recovery-after-keyhole-surgery",
  "/blog/value-of-a-second-opinion",
  "/blog/gallbladder-hernia-appendicitis-differences",
  "/blog/preparing-for-surgery-checklist",
].map((path) => `https://${HOST}${path}`);

async function main() {
  console.log(`Checking key file is live at ${KEY_LOCATION} ...`);
  const keyCheck = await fetch(KEY_LOCATION);
  const keyText = (await keyCheck.text()).trim();
  if (!keyCheck.ok || keyText !== KEY) {
    console.error(
      `Key file isn't live yet (got HTTP ${keyCheck.status}, content "${keyText}"). ` +
        `Deploy frontend/public/${KEY}.txt first, then re-run this.`
    );
    process.exit(1);
  }
  console.log("Key file confirmed live. Submitting URLs to IndexNow...");

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: URLS,
    }),
  });

  console.log(`IndexNow responded: ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (body) console.log(body);

  if (res.status === 200 || res.status === 202) {
    console.log(`Submitted ${URLS.length} URLs successfully.`);
  } else {
    console.log("Unexpected response — the submission may not have gone through.");
  }
}

main().catch((err) => {
  console.error("IndexNow submission failed:", err);
  process.exit(1);
});
