# Sun Yat Sen High School of Iloilo — Website

A simple website made of plain files. No installation needed: double-click `index.html` to open it.

## Files
| File | What it is |
|---|---|
| `index.html` | The page itself (sections: Home, About, Programs, Awards, Contact) |
| `data.js` | **All the content you'll update** — programs, awards, phone, email, Facebook |
| `styles.css` | Colors and layout |
| `script.js` | Makes the award filter and phone menu work |
| `assets/logo.png` | Official school seal |
| `assets/news/` | Photos for news and award stories |

## Add a news story or award (with photo)
1. Put the photo in `assets/news/` (for example `assets/news/math-olympiad-2026.jpg`).
2. Open `data.js`, copy the example block at the bottom of the `NEWS` list to the **top** of the list, and fill it in: title, who, event, level, date, the photo path, the story paragraphs, and the Facebook post link.
3. Save. The newest story (first in the list) is featured as "Latest". Clicking any story opens its own page with the photo and the full story.

## How to update content
Open `data.js` in any text editor (Notepad works):
- **Add an award:** copy the example at the bottom of the `AWARDS` list, fill it in, save.
- **Contact info:** fill in `phone`, `email`, `facebook` in `SCHOOL`.
- Set `verified: true` once a fact is confirmed — this removes the "To be confirmed" tag.

## Add the official school logo
Save the official logo image as **`assets/logo.png`** (square, transparent background works best). That's it — the header, the opening animation, and the big hero logo all switch to it automatically. Until then the Blue Lions emblem is shown.

## Put it online (free options)
- **Netlify Drop:** go to app.netlify.com/drop and drag this whole folder in.
- **GitHub Pages:** upload the files to a GitHub repository, then Settings → Pages → deploy from the main branch.
- Or give the folder to whoever runs the school's web hosting.

## Please verify before publishing
Content was gathered from public sources and some items need checking with the school:
- Senior High strands (STEM, ABM) come from an older DepEd list — confirm current offerings.
- Awards marked "To be confirmed" (table tennis year, PRISAA/national meets, national exam ranking).
- Office hours, enrollment requirements, phone, email.

### Sources
- Wikipedia: https://en.wikipedia.org/wiki/Iloilo_Sun_Yat_Sen_High_School (history, grade levels, PRISAA, national exam)
- DepEd list of Senior High Schools: https://www.deped.gov.ph/k-to-12/senior-high-school/list-of-senior-high-schools/
- Panay News — regional table tennis tourney: https://www.panaynews.net/sun-yat-sen-holds-regl-table-tennis-tourney/
- Philstar — SBP-Passerelle Visayas finals: https://www.philstar.com/tags/iloilo-and-sun-yat-sen
- Outstanding Students Circle of Iloilo (2011): https://outstandingstudentscircleofiloilo.blogspot.com/2011/
