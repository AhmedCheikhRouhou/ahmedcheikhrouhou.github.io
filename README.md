# Ahmed Cheikh Rouhou: personal site

A static site (plain HTML, CSS and JavaScript, no build step) made for GitHub Pages.
Its one big idea: the same career, read through two lenses, **Research** and **Engineering**.
The lens changes the text, the order of projects and skills, which details are folded away,
the headline typeface, the accent colour and the background (ruled paper vs dot grid).

## Deploy on GitHub Pages (about 5 minutes)

1. Create a **public** repository named exactly `AhmedCheikhRouhou.github.io`
   (it must be `<your-github-username>.github.io`). Leave it empty: no README, no licence.
2. Upload everything in this folder to the repository root, either with the web
   uploader ("Add file → Upload files") or with git:

   ```bash
   cd path/to/this/folder
   git init -b main
   git add .
   git commit -m "Launch personal site"
   git remote add origin https://github.com/AhmedCheikhRouhou/AhmedCheikhRouhou.github.io.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages**. Under *Build and deployment* choose
   **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After a minute the site is live at **https://ahmedcheikhrouhou.github.io/**.
   Tick *Enforce HTTPS* if it is not already on.

The empty `.nojekyll` file tells GitHub to serve the files exactly as they are.

## Preview locally

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000. (Opening `index.html` directly also works, but a local
server behaves like GitHub Pages.)

## Edit the content

Everything you read on the page lives in **`assets/js/data.js`**: profile, the two lens
texts, every role and bullet, projects, publications, community, skills, education and
certificates. Change a string, save, refresh. You never need to touch the layout code.

* Each experience bullet has `lens: ["research"]`, `["engineering"]` or both. A bullet that
  does not match the active lens is folded under "Show N more details".
* Projects have `order: { research: n, engineering: n }` to rank them per lens.
* Publications take `tags` such as `"Document AI"` or `"First author"`; the filter buttons
  are built from the list `FILTERS` near the top of the publications code in `assets/js/app.js`.
* Add a paper by copying one object in `publications` and editing it.

### Update your CV downloads
Rebuild the PDFs in Overleaf, then replace these two files, keeping the names:

* `assets/cv/AhmedCheikhRouhou_CV_2page.pdf`
* `assets/cv/AhmedCheikhRouhou_CV_full.pdf`

### Other knobs
* **Default lens:** in the small script in the `<head>` of `index.html`, change `"engineering"` to `"research"`.
  Visitors can link to a lens directly with `?lens=research` or `?lens=engineering`.
* **Colours:** the design tokens are at the top of `assets/css/style.css`
  (`--indigo` is Research, `--teal` is Engineering).
* **Social preview image:** `assets/img/og.png` (1200 × 630).

## Things worth knowing

* **Contact:** the email address is assembled in JavaScript, so it is not sitting in the HTML
  for scrapers. The form never sends anything; it opens the visitor's own mail app with the
  message prepared. Your phone number is not published on the site (it is on the CV).
* **Privacy and speed:** no analytics, no trackers, no third-party requests. Fonts are
  self-hosted (Newsreader, Source Sans 3 and Caveat, all under the SIL Open Font License).
* **Certificate links:** the "Verify" links for the two 2025 NVIDIA certificates follow
  NVIDIA's `learn.nvidia.com/certificates?id=…` pattern. Click each once to confirm, and edit
  `href` in `data.js` if NVIDIA's address differs. Certificates without a link still show a
  credential ID with a "Copy ID" button.
* **Accessibility:** keyboard operable (the lens switch is a radio group; press `R` or `E`
  anywhere), visible focus, respects "reduce motion", works in light and dark themes.
* The page is also reasonable to print (the figure, toolbar and dialog are hidden in print).

## Structure

```
index.html            page skeleton, metadata and structured data
404.html              friendly not-found page
favicon.svg           AC monogram
robots.txt, sitemap.xml
assets/
  css/style.css       tokens, both lenses, layout, responsive rules
  js/data.js          ALL the content (edit this)
  js/app.js           rendering, lens switch, filters, dialog, menus
  fonts/              self-hosted .woff2 files
  cv/                 the two CV PDFs
  img/og.png          social share image
```
