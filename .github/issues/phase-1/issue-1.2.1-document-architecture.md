# User Story 1.2.1: Document Current Architecture

## Story
**As a** developer
**I want to** document my current website architecture
**So that** I understand what needs to be migrated

## Acceptance Criteria
- [ ] Architecture diagram created (current state)
- [ ] All API endpoints documented
- [ ] Frontend components mapped
- [ ] Dependencies listed
- [ ] Pain points identified

## Tasks

### 1. Create Architecture Diagram
- [ ] Document current architecture flow:
  - WordPress (one.com) → WordPress REST API → Static site (Netlify)
- [ ] Tools you can use:
  - Draw.io (free, online): https://app.diagrams.net/
  - Excalidraw (free, simple): https://excalidraw.com/
  - Or just pen and paper, then take a photo!
- [ ] Include in diagram:
  - WordPress hosting (one.com)
  - WordPress REST API endpoints
  - Static HTML/CSS/JS site
  - Netlify hosting
  - Contact Form 7
  - Google Maps integration
  - Instagram embed

### 2. Document API Endpoints
Create a document listing all WordPress API endpoints currently used:

- [ ] List all endpoints from `js/utils/constants.js`:
  ```
  Base URL: https://assets.lykkeogliten.no/wp-json/

  Endpoints:
  1. GET /wp/v2/posts/?_embed&per_page=20
     - Purpose: Fetch all blog posts with embedded media
     - Used by: Homepage, Blog list

  2. GET /wp/v2/media?per_page=100
     - Purpose: Fetch media library images
     - Used by: Homepage slider, About page

  3. POST /contact-form-7/v1/contact-forms/146/feedback
     - Purpose: Submit contact form
     - Used by: Contact page

  4. GET /wp/v2/comments
     - Purpose: Fetch post comments
     - Used by: Blog detail page
  ```
- [ ] Document what data each endpoint returns
- [ ] Note which pages use which endpoints

### 3. Map Frontend Components
- [ ] List all HTML pages:
  - `index.html` - Homepage
  - `about/index.html` - About page
  - `bloglist/index.html` - Blog list page
  - `blogdetails/index.html` - Blog detail page
  - `contact/index.html` - Contact page
  - `location/index.html` - Location page

- [ ] List all JavaScript components in `js/components/`:
  - `blogdetails.js` - Blog detail rendering
  - `bloglist.js` - Blog list rendering
  - `category.js` - Category filtering
  - `comments.js` - Comments display
  - `contact_form_values.js` - Form handling
  - `mobilemenu.js` - Mobile navigation
  - `search.js` - Search functionality
  - `slider_homepage.js` - Homepage slider
  - `sliders.js` - General slider functionality

- [ ] Note dependencies between components

### 4. List All Dependencies
- [ ] External libraries/services:
  - Font Awesome (icons)
  - Google Fonts (Montserrat)
  - Instagram embed script
  - Hotjar analytics
  - Google Maps (on location page)
  - Contact Form 7 (WordPress plugin)

- [ ] WordPress plugins:
  - Contact Form 7

- [ ] CSS files - note which pages use which styles

### 5. Identify Pain Points & Improvement Areas
Create a list of current issues or limitations:

- [ ] Performance issues:
  - Loading speed
  - Image optimization
  - Multiple CSS files

- [ ] Maintenance issues:
  - Duplicated code?
  - Hard to update content (need WordPress admin)?
  - Any broken features?

- [ ] User experience issues:
  - Mobile responsiveness
  - Navigation
  - Form validation

- [ ] Technical debt:
  - Old JavaScript patterns
  - No TypeScript (type safety)
  - No component reusability
  - No build process

### 6. Create "Current vs. Target" Comparison

Document the transformation:

| Aspect | Current | Target |
|--------|---------|--------|
| **Frontend** | HTML/CSS/Vanilla JS | React + TypeScript |
| **Styling** | Multiple CSS files | Tailwind CSS |
| **Backend** | WordPress REST API | Azure Functions |
| **Database** | WordPress/MySQL | Azure SQL/Cosmos DB |
| **Hosting** | Netlify (frontend) + one.com (backend) | Azure Static Web Apps (full stack) |
| **Content Management** | WordPress admin | Custom admin panel |
| **Media Storage** | WordPress media library | Azure Blob Storage |
| **Forms** | Contact Form 7 | Custom API with validation |

### 7. Create Documentation File
- [ ] Create a markdown file: `ARCHITECTURE.md` in the root of your project
- [ ] Include all the information above
- [ ] Add screenshots of current website
- [ ] Export and include architecture diagram

## Template for ARCHITECTURE.md

```markdown
# Lykke og Liten - Current Architecture Documentation

## Overview
Brief description of current setup

## Architecture Diagram
[Insert diagram image/link]

## API Endpoints
[List all endpoints with details]

## Frontend Structure
[Map of pages and components]

## Dependencies
[List of all external dependencies]

## Pain Points & Improvements Needed
[List of issues and areas for improvement]

## Current vs. Target State
[Comparison table]

## Migration Priorities
[Which parts to migrate first and why]
```

## Learning Resources
- [How to Document Software Architecture](https://www.lucidchart.com/blog/how-to-document-software-architecture)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)

## Notes
- Take your time with this - good documentation is invaluable
- You'll reference this throughout the entire migration
- It's okay if you don't understand everything yet
- Update this document as you learn more

## Definition of Done
- ✅ Architecture diagram created and saved
- ✅ All API endpoints documented with examples
- ✅ All pages and components mapped
- ✅ All dependencies listed
- ✅ Pain points identified and prioritized
- ✅ `ARCHITECTURE.md` file created and committed to repository
- ✅ Current vs. Target comparison table completed

---

**Epic:** EPIC 1.2 - Current Site Analysis & Documentation
**Phase:** Phase 1 - Foundation & Setup
**Priority:** High
**Estimated Effort:** 3-5 hours
