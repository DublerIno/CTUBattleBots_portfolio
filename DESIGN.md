# CTU BattleBots — Visual Direction

## Core idea

The website is a digital engineering workbench.

Every page exists on top of a route-specific cutting mat: blue for Competitive, green for Education Kit and red for Team.

Robots, text, measurements and navigation should feel like objects, labels and documentation placed onto that work surface.

The website should not try to imitate a futuristic computer interface.

It should feel physical.

---

# Inspiration

The interaction quality and restraint of creative portfolio websites such as seventyfour.work are useful references.

Important qualities from this type of site:

* strong typography
* unusual composition
* restrained navigation
* confident empty space
* smooth transitions
* small responsive interactions
* carefully choreographed motion

Do not reproduce another website's specific layout or animation.

Use these principles to create an original BattleBots identity.

---

# Background

Primary environment:

ROUTE-SPECIFIC CUTTING MAT

* Competitive: blue
* Education Kit: green
* Team: red

Approximate feeling:

deep/desaturated cutting-mat blue

with:

* thin square grid
* slightly stronger major grid
* very subtle markings
* small surface imperfections if possible

The grid is background texture rather than primary content.

Avoid a glowing digital grid.

---

# Material language

Visual references:

* cutting mat
* aluminium
* PCB
* machining
* black plastic
* fasteners
* labels
* workshop photography
* technical drawings
* measurement markings
* prototype numbers

UI elements can borrow from physical objects such as:

* stickers
* printed equipment labels
* etched aluminium labels
* ruler markings
* status lights
* inspection markers

Do this subtly.

---

# Color

Primary:

cutting-mat blue, green or red according to route

Content:

black
off-black
warm white
off-white

Accent:

small white or pale indicator lights

Potential robot-specific accents may be introduced later based on actual robot imagery.

Avoid:

* rainbow gradients
* purple AI gradients
* neon cyan
* excessive glow

---

# Typography

Use two complementary typographic voices.

## Display

Used for:

* MELTY
* page names
* major statements
* robot identifiers

Characteristics:

* large
* bold
* slightly industrial
* clean
* graphic

## Technical

Used for:

* ESP32-C3
* 7.4 V
* ANTWEIGHT
* IDs
* measurements
* engineering specifications

Characteristics:

* monospace or technical grotesk
* smaller
* precise
* highly readable

Do not use monospace for every piece of text.

---

# Navigation

Position:

upper-left area

Persistent across pages.

It should feel like a small control attached to the cutting mat rather than a normal navbar.

Content:

COMPETITIVE
EDUCATION KIT
TEAM

plus:

[sponeond@fel.cvut.cz](mailto:sponeond@fel.cvut.cz)

and the supplied CTU logo.

The CTU logo should remain visually secondary to the BattleBots identity.

---

# Navigation interaction

Idle state:

quiet and minimal.

Hover state may combine approximately 2–3 of:

* tiny indicator light activates
* text translates 2–5 px
* text width/spacing changes
* underline or rule slides
* slight scale change
* local highlight appears
* nearby element shifts mechanically

Interactions should feel precise.

Animation durations should usually be fast.

Approximately:

150–350 ms

Avoid springy movement unless there is a very specific reason.

---

# Page transitions

Switching between:

Competitive
Education Kit
Team

should feel designed.

Potential transition language:

* light sweep
* wipe
* clipping mask
* grid-aligned panel
* text briefly collapsing
* short exposure/brightness transition

Keep transitions short enough that navigation remains fast.

---

# Site intro

Initial load:

dark or reduced-visibility cutting mat

↓

small technical indicator

↓

CTU BATTLEBOTS

↓

short lighting/transformation effect

↓

workspace becomes visible

↓

Competitive hero appears

The intro should create atmosphere rather than tell a long story.

---

# Competitive hero

The first viewport should be simple.

Primarily:

large centered text

with a large amount of space around it.

Possible temporary structure:

CTU
BATTLEBOTS

COMPETITIVE ROBOTICS
PRAGUE

or:

WE BUILD
COMBAT ROBOTS.

Do not settle permanently on hero copy until real content is supplied.

Treat current hero wording as placeholder content.

Scrolling leads directly into MELTY / 01.

---

# Robot visual system

Every robot gets a large independent section.

Do not place robots into ordinary cards.

Think of every robot as a physical engineering specimen placed onto the cutting mat.

Suggested composition:

MELTY / 01

large robot render

technical annotations around it

short description

engineering specifications

The image should normally be one of the largest elements in the viewport.

---

# Robot identification

Use a strong naming system.

Example:

MELTY / 01

and:

MELTY / 02

The `/ 01` identifier is important to the identity.

Possible additional small labels:

UNIT 01
REV A
ANTWEIGHT
PROTOTYPE

Only use labels that correspond to real information.

Do not invent fake engineering data just because it looks good.

---

# Technical data

Specifications are a visual element.

Example:

CLASS
ANTWEIGHT

MCU
ESP32-C3

VBAT
7.4 V

STATUS
PROTOTYPE

Possible layout treatments:

* aligned technical columns
* measurement-line annotations
* text connected to robot by thin lines
* small labels near the image
* grid-aligned typography

Avoid a conventional striped table.

---

# MELTY / 01 placeholder

For the initial prototype:

MELTY / 01

CLASS
ANTWEIGHT

MCU
ESP32-C3

VBAT
7.4 V

STATUS
TBD

Use one large empty robot-image placeholder.

Placeholder should clearly communicate where the final render goes.

---

# MELTY / 02 placeholder

MELTY / 02

CLASS
BEETLEWEIGHT

MCU
TBD

VBAT
TBD

STATUS
TBD

Use one large robot-image placeholder.

---

# Scroll

Competitive should feel continuous.

Potential sequence:

Hero

↓

MELTY / 01 identifier appears

↓

render enters/reveals

↓

technical specifications reveal

↓

robot moves out / next section enters

↓

MELTY / 02

↓

end section

Do not make every piece move independently.

Animations should feel choreographed.

---

# Image animation

Robot images are static renders/photos for now.

Create depth using subtle 2D motion such as:

* translate
* scale
* masked reveal
* slight rotation
* shadow change
* lighting overlay
* parallax relative to text

Do not fake full 3D rotation.

If prerendered Blender frame sequences or videos are provided later, they may be integrated separately.

---

# Education Kit

For now:

large page title

EDUCATION KIT

small secondary text

ANTWEIGHT PLATFORM

DETAILS COMING SOON

Optionally include an intentionally empty object area where future kit imagery could appear.

Do not design the final page yet.

---

# Team

For now:

TEAM

CTU BATTLEBOTS
PRAGUE

TEAM PAGE COMING SOON

Keep it minimal.

Do not invent names, roles or photographs.

---

# Composition rules

Prefer:

asymmetry
large objects
intentional empty areas
grid alignment
oversized typography
small engineering labels

Avoid:

six equal cards
three-column feature grids
hero + CTA button templates
pill-shaped tags everywhere
rounded rectangular containers around everything
floating glass panels

Content does not need to be inside a box.

---

# Corners and borders

Use sharp or almost-sharp geometry.

Rounded corners should be rare.

Thin rules and technical lines are preferred.

---

# Lighting effects

Lighting can make the cutting mat feel physical.

Use subtle:

* cursor-local illumination
* hover illumination
* passing light
* directional shadows
* exposure change

Do not create a permanent glow behind every object.

---

# Cursor effects

Desktop may use very subtle cursor-reactive illumination.

Do not replace the normal cursor with a gimmicky large circle.

Interactive items should still clearly behave like links/buttons.

Disable cursor-specific effects on touch devices.

---

# Motion hierarchy

Level 1:
navigation feedback

Level 2:
text and section reveals

Level 3:
robot presentation

Level 4:
page transition / intro

The robot should receive more visual attention than decorative UI.

---

# Final test

Before calling a visual implementation finished, ask:

Does this look like a BattleBots engineering team?

Would the design still make sense if all decorative gradients were removed?

Is the cutting mat visible as part of the identity?

Is the robot the main subject?

Does technical information look deliberate?

Does anything look like a generic AI-generated landing page?

If yes to the last question, simplify it.

---

# Prototype decisions — September 2026

The first visual prototype uses the generated Team-page concept as its master reference. Its defining traits should remain consistent in future work:

* deep near-black cutting-mat blue with a restrained fine/major grid
* ruler ticks along the outer top and left edges on desktop
* warm, chalk-like off-white display type paired with precise monospace labels
* sharp frames, registration crosses and thin engineering rules
* open asymmetrical layouts rather than cards or floating panels

Navigation uses a compact equipment-label composition. The active route is identified by a sharp squared outline, a pale indicator light and a small corner registration mark. It should not become a filled conventional menu tab.

The desktop navigation remains expanded at all times. Its complete bordered menu-and-logo unit uses the same dark translucent, backdrop-blurred material as the mobile navigation so it stays legible over oversized page typography without becoming an opaque floating card.

The mobile navigation collapses to a CTU-logo placeholder plus a touch-sized MENU control. Robot sections place the single render area before the technical information on narrow screens so imagery remains dominant.

The initial intro runs once per browser-tab session. Route transitions use a short grid-aligned vertical wipe. Reduced-motion mode removes the intro, route wipe, scroll-linked transforms and pointer lighting while preserving all content.

Placeholder robot imagery is always an empty registration frame. Never add silhouettes, generated robots or invented technical copy while final renders and specifications are unavailable.

When a transparent robot render is available, place it directly over the cutting mat within the established registration frame. Preserve its alpha channel, use `object-fit: contain`, and add only a restrained physical drop shadow; do not introduce an opaque image plate or decorative backdrop.

The navigation uses the supplied CTU lion mark as a white local SVG. Keep it centered and visually secondary on desktop, left-aligned within the mobile navigation label, and preserve the source/license record in `ASSET_ATTRIBUTION.md`.

Route color is part of the cutting-mat system: Competitive uses deep desaturated blue, Education Kit uses deep desaturated engineering green, and Team uses deep workshop red. Only the mat/panel material color changes; grid density, typography, warm-white ink, navigation geometry and motion language stay shared.
