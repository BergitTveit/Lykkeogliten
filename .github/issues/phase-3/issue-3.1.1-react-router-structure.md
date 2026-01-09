# User Story 3.1.1: Create React Router Structure

## Story
**As a** website visitor
**I want to** navigate between different pages
**So that** I can access all website sections

## Acceptance Criteria
- [ ] React Router configured
- [ ] All routes work (Home, About, Blog, Contact, Location)
- [ ] Navigation menu works on desktop
- [ ] Mobile menu works and toggles
- [ ] 404 page exists and displays for invalid routes

## Tasks

### 1. Install React Router
```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

- [ ] Install React Router
- [ ] Verify installation in package.json

### 2. Create Page Components
Create placeholder components for each page in `/src/pages/`:

- [ ] Create `src/pages/Home.tsx`:
```typescript
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mt-8">Welcome to Lykke og Liten</h1>
      <p className="mt-4">Professional tailoring services in Haugesund</p>
    </div>
  );
};

export default Home;
```

- [ ] Create `src/pages/About.tsx` (similar structure)
- [ ] Create `src/pages/BlogList.tsx`
- [ ] Create `src/pages/BlogDetail.tsx`
- [ ] Create `src/pages/Contact.tsx`
- [ ] Create `src/pages/Location.tsx`
- [ ] Create `src/pages/NotFound.tsx` (404 page)

### 3. Set Up Router Configuration
Create `src/App.tsx`:

```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Location from './pages/Location';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

- [ ] Create App.tsx with router configuration
- [ ] Test that routes render different components

### 4. Create Navigation Component

Create `src/components/Navigation.tsx`:

```typescript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Desktop Navigation */}
      <nav className="hidden md:block container mx-auto px-4 py-4">
        <ul className="flex space-x-6 justify-center">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/location" className="hover:text-blue-600">Location</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Lykke og Liten</Link>
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-4">
            <Link
              to="/"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/location"
              className="block py-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Location
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
```

- [ ] Create Navigation component
- [ ] Test desktop navigation
- [ ] Test mobile menu toggle
- [ ] Verify all links work

### 5. Create Footer Component

Create `src/components/Footer.tsx`:

```typescript
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/lykkeogliten/"
          aria-label="Visit our Facebook page"
          className="hover:text-blue-400"
        >
          <i className="fa-brands fa-facebook text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/lykkeogliten/"
          aria-label="Visit our Instagram page"
          className="hover:text-pink-400"
        >
          <i className="fa-brands fa-square-instagram text-2xl"></i>
        </a>
        <a
          href="mailto:lykkebooking@gmail.com"
          aria-label="Email us"
          className="hover:text-red-400"
        >
          <i className="fa-solid fa-envelope text-2xl"></i>
        </a>
        <a
          href="tel:+4791583211"
          aria-label="Call us"
          className="hover:text-green-400"
        >
          <i className="fa-solid fa-phone text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] Create Footer component
- [ ] Test all social media links
- [ ] Verify responsive layout

### 6. Create 404 Not Found Page

Create `src/pages/NotFound.tsx`:

```typescript
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-gray-500 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
```

- [ ] Create 404 page
- [ ] Test by navigating to invalid URL
- [ ] Verify "Go Back Home" link works

### 7. Add Font Awesome
Since you're using Font Awesome icons, add to `public/index.html`:

```html
<script
  src="https://kit.fontawesome.com/0334ff4491.js"
  crossorigin="anonymous"
></script>
```

- [ ] Add Font Awesome to index.html
- [ ] Verify icons display in navigation and footer

### 8. Test All Routes
- [ ] Navigate to `/` - Home page displays
- [ ] Navigate to `/about` - About page displays
- [ ] Navigate to `/blog` - Blog list displays
- [ ] Navigate to `/blog/123` - Blog detail displays (with ID parameter)
- [ ] Navigate to `/contact` - Contact page displays
- [ ] Navigate to `/location` - Location page displays
- [ ] Navigate to `/invalid-url` - 404 page displays
- [ ] Test browser back/forward buttons
- [ ] Test mobile menu on small screen

### 9. Add Active Link Styling (Bonus)
Make current page link highlighted:

```typescript
// In Navigation.tsx, use NavLink instead of Link
import { NavLink } from 'react-router-dom';

// Replace Link with NavLink and add activeClassName
<NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
  }
>
  Home
</NavLink>
```

- [ ] Update Navigation to use NavLink
- [ ] Test active link styling

## Learning Resources
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [React Router TypeScript Guide](https://reactrouter.com/en/main/start/overview#type-safety)
- [Tailwind CSS Navigation Components](https://tailwindui.com/components/application-ui/navigation)

## TypeScript Types to Know
```typescript
// React.FC is a type for Function Components
const MyComponent: React.FC = () => { ... }

// Route params type
import { useParams } from 'react-router-dom';
const { id } = useParams<{ id: string }>();
```

## Notes
- Keep page components simple for now (placeholder content)
- We'll add real content in later stories
- Focus on navigation structure and routing
- Test on both desktop and mobile viewports

## Definition of Done
- ✅ React Router installed and configured
- ✅ All 6 pages created and routable
- ✅ Navigation component works on desktop
- ✅ Mobile menu toggles open/closed
- ✅ Footer displays with social links
- ✅ 404 page displays for invalid routes
- ✅ All links work without page refresh (SPA behavior)
- ✅ Active link styling works
- ✅ Responsive on mobile and desktop

---

**Epic:** EPIC 3.1 - Core React Application
**Phase:** Phase 3 - Frontend Migration to React
**Priority:** Critical
**Estimated Effort:** 3-4 hours
