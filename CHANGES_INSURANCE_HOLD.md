# Insurance Hold — Change Record

Insurance is pending a license and was taken off the live site on request.
No pages were deleted — everything below is either a feature-flag toggle
(instant, one-line revert) or a small wording edit (word removed, nothing
else changed). Restore steps are listed at the bottom.

## 1. Feature flags (nav/footer/listing visibility)

New file: `data/featureFlags.js`

```js
export const INSURANCE_LIVE = false;
export const ROADSIDE_ASSISTANCE_LIVE = false;
```

**To restore: flip both to `true`.** Everything wired to these flags comes
back automatically:

| Flag | What it controls | Files |
|---|---|---|
| `INSURANCE_LIVE` | Desktop "Insurance" nav dropdown, mobile "Insurance" accordion, footer "Insurance" link (Our Company column) | `components/Navbar.jsx`, `components/Footer.jsx` |
| `ROADSIDE_ASSISTANCE_LIVE` | "Roadside Assistance" entry in the Services nav dropdown (desktop + mobile) and the `/services` listing page | `components/Navbar.jsx`, `app/services/page.js` |
 
None of the actual pages (`/insurances`, `/services/[each-insurance-slug]`,
`/services/roadside-assistance`) were touched — they're just unlinked, and
remain reachable by direct URL.

## 2. Wording edits — "insurance" word removed from copy

Each of these is a literal, minimal removal of the word "insurance" (or the
smallest surrounding phrase needed to keep the sentence grammatical). No
other content changed.

| Location | File | What changed |
|---|---|---|
| Homepage exit-intent popup | `components/ExitIntentPopup.jsx` | "Investment, **Insurance**, Tax Planning" → "Investment, Tax Planning" |
| Homepage hero slider (slide 2 subtitle) | `components/HeroCarousel.jsx` | "Investments **and Insurance** to Tax..." → "Investments to Tax..." |
| Women's Corner description | `data/services.js` (`women-corner`) | "investing, **insurance** or inheritance" → "investing or inheritance" |
| Financial Literacy Workshops description | `data/services.js` (`financial-literacy`) | "tax planning, **insurance design** and wealth transfer" → "tax planning and wealth transfer" |
| GIFT City description | `data/services.js` (`gift-city`) | "banking, **insurance** and fund management" → "banking and fund management" (appears twice: main description + "Global Financial Hub Ecosystem" feature) |
| E-Gold description | `data/services.js` (`e-gold`) | "no safes, no **insurance** worries" → "no safes, no worries" |

**To restore:** re-insert the word/phrase shown above at each location.

## 3. Removed content

| What | File | Notes |
|---|---|---|
| Atul Bhola testimonial | `components/TestimonialSection.jsx` | Entire testimonial object (id 4, quote + author + image) deleted from the `testimonials` array — requested as a full removal, not a hold-for-license item. Not tied to a flag; re-add manually from git history if needed. |

## 4. Open item

- Gift City "icon" — client mentioned an icon reference to "insurance" that
  wasn't found in the rendered page (only appears in the icon *file path*,
  e.g. `/insurance-icons/gift-city-1.png`, not visible to users). Pending
  clarification/screenshot before any change is made here.
