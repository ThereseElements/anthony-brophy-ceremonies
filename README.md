# Anthony Brophy Ceremonies website

Static site: one page (`index.html`) plus `privacy.html`. No build step, no database, nothing to update. It runs on Cloudflare Pages exactly like www.elementsmarketing.ie.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site. Every section is labelled with an HTML comment (`<!-- ===== HERO ===== -->`). |
| `css/style.css` | Brand colours, fonts and layout. Colours are set once at the top (`--navy`, `--gold`, `--cream`, `--sage`). |
| `js/main.js` | Mobile menu and FAQ accordion. |
| `thank-you.html` | Where the enquiry form lands after sending. |
| `assets/img/` | Logos (primary, horizontal, reversed for dark backgrounds), favicon, share image. Add photos here. |
| `_headers` | Cloudflare security headers and caching. Leave as is. |
| `robots.txt`, `sitemap.xml` | For Google. Update the domain if it is not anthonybrophyceremonies.ie. |

## Before going live (placeholders to replace)

1. **Contact details**: in. Phone 087 117 6676, anthonybrophyceremonies@gmail.com, Carlow, Instagram @anthonybrophyceremonies. Add Facebook or other links in the CONTACT section if wanted.
2. **About Anthony copy**: written (family details in). Add where he is based and a line on his background if wanted.
3. **Portrait**: `assets/img/anthony.jpg` is the FuturFaith registration photo, converted to warm monochrome because the room was lit red. A proper headshot in daylight would be better; replace the file with one of the same name.
4. **Testimonials**: section `<!-- ===== TESTIMONIALS ===== -->`. Three real reviews with first names and ceremony type.
5. **Contact form (Web3Forms, free, no account needed)**: set up and the access key is in `index.html`. Enquiries arrive at anthonybrophyceremonies@gmail.com and the visitor lands on `thank-you.html`. The Web3Forms dashboard (log in with that Gmail) shows submissions and lets you change the destination address.
6. **Photos**: the hero, ceremony cards, candle band and contact photo are free Unsplash stock (Unsplash licence, free for commercial use, no credit required), saved in `assets/img/`. Fine to launch with; swap for Anthony's own photos as they come in by replacing the file with one of the same name.
7. **Reviews**: the three reviews are illustrative, written to show the layout. Replace with real ones before launch.
8. **Domain**: anthonybrophyceremonies.ie (confirmed).

## Going live on Cloudflare Pages (domain at Blacknight)

1. Create a GitHub repo (for example `owleeeee/anthony-brophy-ceremonies`) and push these files to `main`.
2. Cloudflare dashboard, Workers & Pages, Create, Pages, Connect to Git. Pick the repo. Framework preset: None. Build command: leave blank. Output directory: `/`. Deploy.
3. Pages, Custom domains, add `anthonybrophyceremonies.ie` and `www.anthonybrophyceremonies.ie`.
4. Either (a) move DNS to Cloudflare: add the site in Cloudflare, then at Blacknight change the nameservers to the two Cloudflare gives you (takes up to 24 hours), or (b) keep DNS at Blacknight and add the CNAME records Cloudflare shows on the Custom domains screen.
5. Set the www version as the primary and let Cloudflare redirect the bare domain.

After that, any change merged to `main` is live in about a minute.

## Maintaining it through Claude

Ask for the change in plain words ("change the phone number", "add a review from Mary and John", "swap the hero photo"). Claude edits the file in GitHub on a branch, opens a pull request, and Cloudflare publishes a preview link to check before it merges.

## House rules baked in

British and Irish English, no em-dashes, Playfair Display for headings, Montserrat for body text, brand colours from the ABC brand guidelines (Midnight Navy #0F2D4A, Antique Gold #C9A962, Soft Cream #F8F6F1, Sage #D7DCCF).
