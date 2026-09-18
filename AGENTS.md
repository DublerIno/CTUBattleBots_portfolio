# CTU BattleBots Website

This repository contains the public showcase website for a student BattleBots team at Czech Technical University in Prague.

The website is primarily a visual and engineering portfolio.

It should feel artistic, experimental, mechanical and modern rather than like a conventional university club website or SaaS landing page.

---

# Main goals

1. Showcase our competitive BattleBots.
2. Present our educational Antweight robot kit.
3. Introduce the team.
4. Create a memorable visual identity for the team.
5. Keep the website simple enough to maintain as students.
6. Make the engineering itself part of the visual design.

---

# Technology

Use:

* Next.js
* React
* TypeScript
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger where scroll-linked motion is useful
* CSS transforms
* CSS masks
* clip-path
* gradients only for subtle lighting effects
* Next/Image for raster images

Do NOT use:

* Three.js
* React Three Fiber
* WebGL scenes
* 3D model viewers
* generic UI component libraries as the visual foundation
* shadcn-style cards everywhere
* unnecessary backend infrastructure
* database
* CMS
* authentication

This is primarily a static portfolio website.

---

# Codex skills

When available, use these skills:

1. frontend-app-builder

   * for page design and frontend implementation

2. frontend-testing-debugging

   * after visual or interaction work
   * inspect the rendered site
   * check mobile and desktop
   * check animation behavior
   * check console errors

3. react-best-practices

   * after meaningful React/Next.js changes

4. agent-browser

   * when available
   * use it to visually inspect the running website and interactions

Do not activate Three.js, React Three Fiber or WebGL-oriented skills.

---

# Site architecture

The main navigation contains only:

* Competitive
* Education Kit
* Team

Additionally show:

* [sponeond@fel.cvut.cz](mailto:sponeond@fel.cvut.cz)
* CTU logo

The CTU logo asset will be provided later in both black and white versions.

Do not invent or recreate the CTU logo.

Use a simple placeholder until the real asset is added.

---

# Routes

The default landing page is Competitive.

Preferred route structure:

* `/` → Competitive
* `/education` → Education Kit
* `/team` → Team

The homepage `/` must therefore open directly into the Competitive experience.

---

# Navigation

Navigation should be a small persistent interface positioned around the upper-left corner.

It is inspired by minimalist creative portfolio navigation such as seventyfour.work.

Do NOT copy the reference website literally.

The navigation should feel like a compact physical interface or label attached to the workspace.

It should not look like a conventional horizontal website navbar.

Navigation interaction should include restrained visual effects such as:

* small light responses
* subtle glow
* small translations
* slight scale changes
* moving highlight
* opacity transitions
* text transformations
* small mechanical-feeling motion

Hover interaction should be noticeable but minimal.

No bouncing.
No playful cartoon animation.
No glowing cyberpunk UI.

The menu must remain usable with keyboard navigation and touch devices.

---

# Global background

Every page uses a route-specific CUTTING MAT as its visual foundation:

* Competitive uses blue
* Education Kit uses green
* Team uses red

The cutting mat should make the website feel like the robots and components are physically placed on an engineering workbench. Keep every route color dark, desaturated and physical.

Until a final background asset is provided, create the cutting mat using CSS.

It may include:

* blue base
* subtle square measurement grid
* larger grid subdivisions
* very subtle measurement markings if useful
* slight variation in texture

Do not make it visually noisy.

Content must remain clearly readable over it.

The mat should feel physical and slightly imperfect rather than like a bright CAD grid.

---

# Overall aesthetic

Keywords:

* engineering workshop
* experimental
* industrial
* BattleBots
* prototype
* technical
* physical
* tactile
* precise
* artistic
* modern
* mechanical
* university engineering
* restrained

The website should look intentionally designed.

It must NOT look like:

* SaaS startup
* crypto website
* generic AI-generated portfolio
* university department page
* Bootstrap template
* dashboard
* ecommerce site

---

# Content philosophy

Use relatively little text.

Prefer:

* robot name
* robot number
* robot class
* engineering specifications
* one strong render or photo
* short engineering description

Avoid:

* galleries
* carousels
* dozens of cards
* long marketing copy
* fake statistics
* filler text

Technical information is part of the graphic design.

For example:

MELTY / 01

CLASS
ANTWEIGHT

MCU
ESP32-C3

BATTERY
7.4 V

STATUS
PROTOTYPE

Specifications should visually resemble engineering annotations, equipment labels or prototype documentation rather than an ordinary HTML specification table.

---

# Competitive page

The Competitive page is currently the most important page.

It consists of:

1. Intro / landing scene
2. Competitive opening hero
3. MELTY / 01
4. MELTY / 02
5. End of competitive section

The page should feel like a continuous visual sequence as the user scrolls.

Avoid presenting all robots as cards in a grid.

Each robot receives its own large section.

---

# Robot sections

Each competitive robot section should contain:

* robot identifier
* robot name
* weight class
* short description
* engineering specifications
* one large image or Blender render

No photo gallery.

No carousel.

No thumbnails.

One strong image is enough.

Robot imagery will be supplied later.

Until then, create clearly intentional image placeholders with the correct proportions.

The placeholder must not contain fake AI-generated robots.

---

# Initial robots

Create two placeholder robots.

## MELTY / 01

Temporary information:

Name:
MELTY / 01

Class:
Antweight

MCU:
ESP32-C3

Battery:
7.4 V

Other specifications:
TBD

Description:
Placeholder copy only. Real engineering text will be supplied later.

Image:
Placeholder.

---

## MELTY / 02

Temporary information:

Name:
MELTY / 02

Class:
Beetleweight

MCU:
TBD

Battery:
TBD

Other specifications:
TBD

Description:
Placeholder copy only. Real engineering text will be supplied later.

Image:
Placeholder.

---

# Education page

Do not fully design the educational kit content yet.

For now create only a visually intentional placeholder page.

It should use the same:

* cutting mat
* navigation
* typography
* visual language
* transition system

Show something similar to:

EDUCATION KIT

ANTWEIGHT PLATFORM

DETAILS COMING SOON

Do not invent specifications or features.

---

# Team page

Do not fully design the Team page yet.

Create a visually intentional placeholder using the same design system.

Example content:

TEAM

CTU BATTLEBOTS
PRAGUE

TEAM PAGE COMING SOON

Do not invent team members.

---

# Animation

Motion is an important part of the website.

Use GSAP for coordinated animation.

Use CSS for simple hover states where GSAP is unnecessary.

Good motion includes:

* masked text reveals
* clipping
* light sweeps
* subtle rotation
* subtle translation
* object scale changes
* scroll-linked image movement
* image reveal masks
* navigation indicator movement
* controlled typography movement
* subtle simulated lighting
* elements appearing as if placed onto the workbench

Animations should feel physical.

Imagine:

* workshop lighting
* mechanical movement
* a camera moving over a workbench
* prototype components being inspected

Avoid decorative animation that has no relationship to the content.

---

# Intro

Create a short intro animation when the website is initially loaded.

The intro should be approximately 1.5–2.5 seconds in feeling.

It should establish the visual identity without delaying the user unnecessarily.

Possible sequence:

CTU BATTLEBOTS

small technical information

light sweep

brief transformation

transition into the cutting-mat workspace

The intro should transition naturally into the Competitive hero.

Do not replay the complete intro whenever the user switches between internal pages.

Respect `prefers-reduced-motion`.

---

# Responsive behavior

The website must be designed for:

* desktop
* laptop
* tablet
* phone

Do not simply shrink the desktop composition.

On phones:

* maintain strong typography
* simplify animations where needed
* ensure navigation remains usable
* keep robot specifications readable
* ensure robot images remain visually important

---

# Accessibility

Always support:

* keyboard navigation
* visible focus states
* semantic HTML
* meaningful image alt text
* reduced-motion preference
* sufficient contrast

Motion must never prevent users from reaching content.

---

# Performance

Performance matters.

Prefer:

* transforms
* opacity
* optimized images
* lightweight DOM
* lazy-loaded images below the fold

Avoid:

* unnecessarily large JavaScript bundles
* huge animation libraries beyond what is required
* continuously running animations when off-screen
* giant unoptimized source images

---

# Design workflow

Do not attempt to redesign the entire website every time a small feature is requested.

Preserve the existing visual language.

When implementing significant visual changes:

1. read this file
2. read DESIGN.md
3. inspect the existing site
4. implement the requested section
5. run the development server
6. inspect it visually
7. test desktop and mobile
8. check animation and interaction behavior
9. fix obvious visual problems before considering the task complete

If a design decision is established during development and should remain consistent throughout the project, add it to DESIGN.md.
