# Portfolio Projects Structure

## Overview
This document outlines the improved project presentation structure for the portfolio website.

## Project Display System

### Featured Projects
Projects marked with `featured: true` appear prominently at the top of the Projects section with:
- Larger display cards
- Featured badge with star icon
- Enhanced visual hierarchy
- Support for both image-based and text-based presentations

### Regular Projects
Standard projects appear in a responsive grid layout below featured projects.

## Project Data Structure

Each project in `index.js` follows this structure:

```javascript
{
  id: number,              // Unique identifier
  name: string,            // Project title
  description: string,     // Detailed description (2-3 sentences)
  image: string | null,    // Path to screenshot or null for text-only
  link: string,            // URL to live project or demo
  technologies: array,     // Array of tech stack items
  featured: boolean        // Optional: true for featured projects
}
```

## Visual Presentation

### Projects WITH Screenshots
- Display project image with hover overlay
- "View Project" button appears on hover
- Image scales slightly on hover for interactivity

### Projects WITHOUT Screenshots (image: null)
- Clean text-based card with gradient background
- Code icon at the top for visual interest
- All information visible without hover
- "View Project" button at the bottom
- Maintains consistent height and spacing

## Current Projects

### Featured
1. **Big 3 University Quiz** - Viral personality quiz (text-only)
2. **Harbor.ph** - Events marketplace (with screenshot)

### Regular Projects
3. **Letter-Link Battle** - Multiplayer word game (text-only)
4. **To-Do List Manager** - Task management app (text-only)
5. **Weather Dashboard** - Real-time weather app (text-only)
6. **Expense Logger** - Finance tracking tool (text-only)
7. **Event Marketplace UI** - Event listing interface (text-only)

## Adding New Projects

To add a new project:

1. Open `index.js`
2. Add a new object to the `projects` array:

```javascript
{
  id: 8,
  name: 'Your Project Name',
  description: 'Detailed description explaining what the project does and key features.',
  image: null, // or 'images/your-screenshot.png'
  link: 'projects/your-project.html',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  featured: false // or true for featured projects
}
```

3. Save the file - changes will appear immediately

## Design Benefits

- **No "Under Construction" images** - Professional text-based presentation
- **Consistent layout** - All projects have uniform spacing and styling
- **Better descriptions** - More context about each project's purpose and features
- **Responsive design** - Works seamlessly on mobile, tablet, and desktop
- **Accessible** - Proper ARIA labels and semantic HTML
- **Performance** - No unnecessary image loading for text-only projects

## Styling

All project styles are in `main.css`:
- `.project-card` - Base card styling
- `.project-content.no-image` - Text-only project styling
- `.project-icon` - Icon for text-only projects
- `.featured-project-card` - Featured project styling
- `.featured-project-content.no-image` - Featured text-only styling

## Responsive Breakpoints

- Desktop (>992px): Multi-column grid
- Tablet (768-991px): 2-column grid
- Mobile (<768px): Single column, stacked layout
