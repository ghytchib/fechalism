
Fechalism static website
-----------------------
Files in this package:
- index.html
- scripture.html (contains the Book of Forutanda content you provided)
- chapters.html
- join.html (simple email join that opens mail client + creates downloadable CSV)
- styles.css
- script.js
- README (this file)

How to use / host:
1) Unzip the folder and inspect files. Edit them in any text editor to adjust copy, images, or styling.
2) To host publicly for free: push to a GitHub repo and enable GitHub Pages (choose 'main' branch / root). Or use Netlify / Vercel drag-and-drop deploy.
3) For a real, server-backed signup (collect emails without relying on mailto/download), connect the form to Formspree, Netlify Forms, or Google Forms as described in the README and replace the client JS appropriately.

Notes about privacy and content:
- The join flow is static and privacy-respecting by design: emails are not stored by this code. If you want central collection, add a backend or a form provider.
- The scripture content is included verbatim from your submission. Edit or remove any parts you don't want published before hosting publicly.
