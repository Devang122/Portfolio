---
# This file documents the structure and setup of your Academic Portfolio

title: "Academic Portfolio Setup Guide"
---

# Academic Portfolio - Complete Setup

I've successfully recreated the academic portfolio based on the ajitsinghacademic.github.io repository. Here's what has been created:

## ✅ Completed Components

### 1. **Project Structure**
- ✅ _layouts/ - Page templates (default, single, talk, archive)
- ✅ _includes/ - Reusable components (masthead, sidebar, footer, archive-single)
- ✅ _pages/ - Main pages (about, publications, talks, teaching, portfolio, cv)
- ✅ _publications/ - Academic papers collection
- ✅ _talks/ - Presentations and talks collection
- ✅ _teaching/ - Teaching materials collection
- ✅ _portfolio/ - Portfolio projects collection
- ✅ _data/ - Navigation and site data
- ✅ assets/css/ - Stylesheets
- ✅ assets/js/ - JavaScript files
- ✅ assets/images/ - Image storage

### 2. **Core Files**
- ✅ _config.yml - Jekyll configuration with collections
- ✅ Gemfile - Ruby dependencies
- ✅ .gitignore - Git ignore rules
- ✅ README.md - Project documentation

### 3. **Layouts Created**
- ✅ default.html - Base layout with masthead and footer
- ✅ single.html - Single page/post layout
- ✅ talk.html - Talk layout with date/venue
- ✅ archive.html - Collection archive layout

### 4. **Includes Created**
- ✅ masthead.html - Navigation header
- ✅ sidebar.html - Author profile sidebar
- ✅ footer.html - Footer with links
- ✅ archive-single.html - Individual item in archive

### 5. **Pages Created**
- ✅ about.md - Home page (/)
- ✅ publications.md - Publications page
- ✅ talks.md - Talks and presentations page
- ✅ teaching.md - Teaching page
- ✅ portfolio.md - Portfolio page
- ✅ cv.md - Curriculum Vitae page

### 6. **Sample Content**
- ✅ 2 sample publications
- ✅ 2 sample talks
- ✅ 2 sample teaching items
- ✅ 2 sample portfolio projects

### 7. **Styling**
- ✅ assets/css/style.css - Complete stylesheet with:
  - Responsive design
  - Navigation styling
  - Archive layout (grid)
  - Footer styling
  - Mobile breakpoints

## 🚀 Next Steps

### 1. Update Configuration
Edit `_config.yml` to personalize:
```yaml
title: "Your Portfolio Title"
author:
  name: "Your Name"
  email: "your.email@example.com"
  bio: "Your bio here"
```

### 2. Update Navigation
Edit `_data/navigation.yml` to customize menu items

### 3. Add Your Content
- Update the sample markdown files in each collection
- Add your actual publications, talks, and projects
- Replace placeholder text with your information

### 4. Add Images
- Place your profile picture in `assets/images/`
- Update the avatar path in `_config.yml`

### 5. Run Locally
```bash
cd portfolio
bundle install
bundle exec jekyll serve
```
Then open http://localhost:4000

### 6. Deploy
Options for deployment:
- **GitHub Pages**: Push to `yourusername.github.io` repo
- **Netlify**: Connect your GitHub repo
- **Traditional Hosting**: Upload the `_site` folder

## 📁 File Organization

```
portfolio/
├── _config.yml
├── Gemfile
├── README.md
├── .gitignore
├── index.html (home page)
├── _layouts/
│   ├── default.html
│   ├── single.html
│   ├── talk.html
│   └── archive.html
├── _includes/
│   ├── masthead.html
│   ├── sidebar.html
│   ├── footer.html
│   └── archive-single.html
├── _pages/
│   ├── about.md
│   ├── publications.md
│   ├── talks.md
│   ├── teaching.md
│   ├── portfolio.md
│   └── cv.md
├── _publications/ (sample files)
├── _talks/ (sample files)
├── _teaching/ (sample files)
├── _portfolio/ (sample files)
├── _data/
│   └── navigation.yml
└── assets/
    └── css/
        └── style.css
```

## 🎨 Features Included

- ✅ Responsive design (mobile-friendly)
- ✅ Clean, professional styling
- ✅ Navigation menu
- ✅ Author profile sidebar
- ✅ Multiple collection types
- ✅ Archive layouts
- ✅ SEO-friendly structure
- ✅ Easy to customize colors and fonts
- ✅ Footer with links
- ✅ Professional typography

## ⚙️ Customization Tips

### Change Colors
Edit `assets/css/style.css` and update color values:
```css
a {
  color: #0071e3;  /* Change this to your brand color */
}
```

### Add Social Links
Edit `_config.yml` author section to add links to your social profiles

### Modify Layout
Edit `_layouts/` files to customize page structure

### Update Styling
Edit `assets/css/style.css` for custom CSS

## 📝 Collection Front Matter

### Publications
```yaml
---
title: "Paper Title"
collection: publications
date: YYYY-MM-DD
venue: "Journal Name"
paperurl: "https://..."
citation: "Your citation"
---
```

### Talks
```yaml
---
title: "Talk Title"
collection: talks
type: "Keynote|Presentation|Tutorial"
date: YYYY-MM-DD
venue: "Conference Name"
location: "City, Country"
---
```

### Teaching
```yaml
---
title: "Course Title"
collection: teaching
date: YYYY
---
```

### Portfolio
```yaml
---
title: "Project Title"
collection: portfolio
excerpt: "Project description"
---
```

## 🎯 Your Portfolio is Ready!

The foundation is complete. Now customize it with your:
- Profile information
- Academic publications
- Presentations and talks
- Teaching experience
- Portfolio projects
- Custom branding

Enjoy your new academic portfolio! 🎓
