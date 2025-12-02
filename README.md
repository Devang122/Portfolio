# Academic Portfolio

A professional academic portfolio website built with Jekyll, showcasing research, publications, presentations, and teaching activities.

## Project Structure

```
portfolio/
├── _config.yml              # Site configuration
├── _data/                   # Data files (navigation)
├── _includes/               # Reusable HTML components
├── _layouts/                # Page templates
├── _pages/                  # Main pages (About, CV, etc.)
├── _publications/           # Academic publications
├── _talks/                  # Conference talks and presentations
├── _teaching/               # Teaching materials and courses
├── _portfolio/              # Portfolio projects
├── _posts/                  # Blog posts (optional)
├── assets/
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── images/              # Images and graphics
├── Gemfile                  # Ruby dependencies
└── README.md
```

## Getting Started

### Prerequisites
- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Bundler

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Build and serve the site:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and navigate to `http://localhost:4000`

## Customization

### Update Author Information

Edit `_config.yml` and update the author section with your information:

```yaml
author:
  name: "Your Name"
  avatar: "/assets/images/profile.png"
  email: "your.email@example.com"
  # Add your social links
```

### Update Navigation

Edit `_data/navigation.yml` to customize menu items.

### Add Content

- **Publications**: Add `.md` files to `_publications/` folder
- **Talks**: Add `.md` files to `_talks/` folder
- **Teaching**: Add `.md` files to `_teaching/` folder
- **Portfolio**: Add `.md` files to `_portfolio/` folder
- **Blog Posts**: Add `.md` files to `_posts/` folder

### Customize Styling

Edit `assets/css/style.css` to customize the appearance.

## YAML Front Matter Examples

### Publication
```yaml
---
title: "Paper Title"
collection: publications
permalink: /publication/YYYY-MM-DD-paper-slug
excerpt: "Brief description"
date: YYYY-MM-DD
venue: 'Journal Name'
paperurl: 'https://link-to-paper.com'
citation: 'Citation format'
---
```

### Talk
```yaml
---
title: "Talk Title"
collection: talks
type: "Keynote|Presentation|Tutorial"
permalink: /talks/YYYY-MM-DD-talk-slug
date: YYYY-MM-DD
venue: 'Conference Name'
location: 'City, State'
---
```

### Teaching
```yaml
---
title: "Course Title"
collection: teaching
permalink: /teaching/YYYY-course-slug
date: YYYY
---
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository named `yourusername.github.io`
2. GitHub will automatically build and serve your site
3. Access it at `https://yourusername.github.io`

### Other Hosting

Build the site:
```bash
bundle exec jekyll build
```

Upload the `_site` folder to your hosting provider.

## Features

- Clean, professional design
- Responsive layout (mobile-friendly)
- Collections for publications, talks, teaching, and portfolio
- Customizable author profile
- Navigation menu
- Archive layouts for all collection types
- Lightweight CSS styling
- SEO-friendly

## Support

For Jekyll documentation, visit: https://jekyllrb.com/docs/

For more information about Jekyll collections: https://jekyllrb.com/docs/collections/
