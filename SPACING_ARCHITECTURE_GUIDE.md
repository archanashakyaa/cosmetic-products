# 📐 Spacing Architecture Guide | GlowLab Homepage

## Overview
A comprehensive spacing system that maintains visual rhythm, hierarchy, and consistency across all pages and components. All spacing follows an **8px base unit system**.

---

## 🎯 Core Spacing Scale

The entire spacing system is built on 8px increments:

```
4px   (0.25rem) - --space-2xs
8px   (0.5rem)  - --space-xs
16px  (1rem)    - --space-sm
24px  (1.5rem)  - --space-md
32px  (2rem)    - --space-lg
40px  (2.5rem)  - --space-xl
48px  (3rem)    - --space-2xl
56px  (3.5rem)  - --space-3xl
64px  (4rem)    - --space-4xl
80px  (5rem)    - --space-5xl
```

**CSS Variables Reference:**
```css
--space-2xs: 0.25rem;   /* 4px */
--space-xs: 0.5rem;     /* 8px */
--space-sm: 1rem;       /* 16px */
--space-md: 1.5rem;     /* 24px */
--space-lg: 2rem;       /* 32px */
--space-xl: 2.5rem;     /* 40px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 3.5rem;    /* 56px */
--space-4xl: 4rem;      /* 64px */
--space-5xl: 5rem;      /* 80px */
```

---

## 📱 Responsive Container Padding

### Section Padding (Vertical Spacing)
Controls top and bottom padding for major sections.

**Desktop:**
```
--section-padding-desktop: 5rem 2rem;  /* 80px vertical, 32px horizontal */
```

**Tablet:**
```
--section-padding-tablet: 4rem 1.5rem; /* 64px vertical, 24px horizontal */
```

**Mobile:**
```
--section-padding-mobile: 2.5rem 1rem; /* 40px vertical, 16px horizontal */
```

**Usage:**
```html
<section class="section-py">
  <!-- Content automatically gets responsive padding -->
</section>
```

---

## 🎨 Component-Level Spacing

### Hero Section
```
Container: Full width
Vertical Padding: 80px (desktop) → 64px (tablet) → 40px (mobile)
Content Gap: 32px between elements
Text Spacing:
  - H1 → Subtitle: 24px
  - Subtitle → Paragraph: 16px
  - Paragraph → CTA: 32px
```

### Section Headers (Collections, About, Ritual, etc.)
```
Label → Title: 16px
Title → Description: 24px
Description → Content: 48px (desktop) / 32px (mobile)
Section → Section: 80px (min. space between sections)
```

### Product Cards
```
Card Container:
  - Padding: 20px (mobile) → 24px (tablet) → 24px (desktop)
  - Border Radius: 12px (rounded-xl)
  - Shadow: md (hover: lg)

Internal Card Spacing:
  - Category → Title: 12px
  - Title → Description: 16px
  - Description → Price: 16px
  - Price Section: 16px (top & bottom padding)
  - Price → Rating: 16px
```

### Grid Gaps
```
Product Grid:
  - Mobile (2 cols): 16px gap (grid-cols-2 gap-6)
  - Tablet (2 cols): 24px gap (md:grid-cols-2 md:gap-6)
  - Desktop (4 cols): 24px gap (lg:grid-cols-4 xl:gap-8)
  - XL Screens: 32px gap (xl:gap-8)

Collections/Featured:
  - Gap between image & grid: 32px (mb-12 md:mb-16)
  - Between featured & grid: 32px
```

### Body Text Spacing
```
Paragraph → Paragraph: 16px
Line Height:
  - H1: 1.15 (tight, impactful)
  - H2: 1.25 (readable headings)
  - H3: 1.3 (subsections)
  - Body: 1.65 (comfortable reading)
  - Small: 1.6 (compact info)
```

### Newsletter Section
```
Label → Title: 16px
Title → Description: 16px
Description → Form: 24px
Form → Success Message: 16px
Input Height: 48px (touch-friendly, mobile)
Button Size: 48px height minimum
```

### Footer Spacing
```
Section → Section: 32px
Column → Column: 24px
Link → Link: 12px
Text → Text: 8px
```

---

## 🔲 Button & Interactive Spacing

### Button Dimensions
```
Small Button:
  - Padding: 8px 12px
  - Min Height: 40px

Medium Button:
  - Padding: 12px 16px
  - Min Height: 48px (mobile, touch-friendly)

Large Button:
  - Padding: 16px 24px (--button-padding-desktop: 1rem 2rem)
  - Min Height: 48px+

Letter Spacing: 1.25px (uppercase buttons)
```

### Interactive Elements
```
Hover Lift: -2px (translateY)
Focus Outline: 2px solid gold (#C9A96E)
Outline Offset: 2px
Transition Duration: 300ms ease-in-out
```

---

## 📊 Vertical Rhythm Architecture

### Heading Stack
```
H1 (Hero Title)
  ↓ 24px
H2 (Section Title)
  ↓ 24px
Body Large (Intro)
  ↓ 16px
Body Regular (Content)
  ↓ 16px
Body Regular (Content)
  ↓ 16px
Small Text (Caption)
```

### Content Block
```
[H2] Section Title
  ↓ 24px
[Body] Paragraph
  ↓ 16px
[Body] Paragraph
  ↓ 32px
[H3] Subsection
  ↓ 16px
[Body] Content
```

### Card Stack
```
[Badge] Top Label
  ↓ 12px
[H4] Card Title
  ↓ 16px
[Body-sm] Description
  ↓ 16px
[Price] Section (bordered)
  ↓ 16px
[Rating] Stars & Count
```

---

## 🎯 Section-by-Section Breakdown

### NAVBAR
```
Container Height: 64px
Horizontal Padding: 24px (desktop) / 16px (mobile)
Logo ↔ Nav Gap: Auto (space-between)
Nav Item Gap: 32px
Mobile Menu Padding: 16px (all sides)
```

### HERO SECTION
```
Section Padding: 80px (vertical desktop) → 40px (vertical mobile)
Slide Height:
  - Mobile: 500px
  - Tablet: 600px
  - Desktop: 700px
Content Padding: 24px (mobile) / 48px (desktop)
Text Spacing: 24px between major text blocks
CTA Button: 48px min height
```

### COLLECTIONS SECTION
```
Section Padding: 80px vertical (desktop) → 40px (mobile)
Heading Margin: 48px (bottom)
  - Label: 16px from top
  - Title: 16px from label
  - Description: 16px from title

Featured Banner:
  - Height: 192px (mobile) → 384px (desktop)
  - Margin Bottom: 48px (desktop) / 32px (mobile)
  - Content Padding: 24px (mobile) / 48px (desktop)

Product Grid:
  - Gap: 24px (all screens)
  - Cards per row: 2 (mobile) → 4 (desktop)
  - Card aspect ratio: 4:5
```

### ABOUT SECTION
```
Section Padding: 80px vertical (desktop) → 40px (mobile)
Two-Column Gap: 80px (desktop) / 24px (mobile)
  - Left Column: Image + decorative circle
  - Right Column: Text + values

Heading Stack:
  - Label: 16px margin
  - Title: 24px from label
  - Subtitle (italic): Same line

Values List:
  - Item Gap: 24px
  - Icon → Text: 16px (horizontal)
  - Value Title → Description: 8px gap
  - Description Line Height: 1.6

CTA Button Margin: 24px (top)
```

### RITUAL SECTION (3-Step Process)
```
Section Padding: 80px (vertical desktop) → 40px (mobile)
Heading Margin: 48px (bottom)

Timeline Gap: 32px (between steps)
Step Card:
  - Number (Step): 24px font, light weight
  - Title: 24px (h3 sizing)
  - Description: 16px line height 1.6
  - Image Height:
    - Mobile: 240px
    - Desktop: 380px

Image ↔ Content Gap: 32px (desktop) / 16px (mobile)
```

### PRODUCTS SECTION
```
Section Padding: 80px (vertical desktop) → 40px (mobile)
Header Margin: 48px (bottom to grid)

Grid Layout:
  - Columns: 2 (mobile) → 2 (tablet) → 4 (desktop)
  - Gap: 24px (all screens)
  - Card Height: Auto (flex)

Card Info Container:
  - Padding: 20px (mobile) → 24px (desktop)
  - Section Dividers: 16px padding (top/bottom)
```

### STORIES/BLOG SECTION
```
Section Padding: 80px (vertical desktop) → 40px (mobile)
Heading: 48px (bottom margin)

Featured Article:
  - Image Height: 400px (desktop) / 280px (mobile)
  - Content Padding: 32px (desktop) / 24px (mobile)
  - Content Gap: 16px (between elements)

Article Grid:
  - Gap: 24px
  - Columns: 1 (mobile) → 2 (tablet) → 3 (desktop)
  - Aspect Ratio: 16:9
```

### NEWSLETTER SECTION
```
Section Padding: 80px (vertical desktop) → 40px (mobile)

Container:
  - Max Width: 520px
  - Padding: 40px (desktop) / 24px (mobile)

Label: 12px, 16px margin
Title: 24px, 16px margin (bottom)
Description: 14px, 16px margin
Form: 24px margin (top)

Input Height: 48px
Input Padding: 12px 16px
Button Padding: 12px 16px
Button Height: 48px
```

### FOOTER
```
Section Padding: 64px (vertical) / 32px (horizontal)
Column Gap: 32px (desktop) / 24px (mobile)
List Item Gap: 12px
Text Spacing: 8px

Bottom Bar:
  - Top Border: 1px solid beige
  - Padding: 24px 0
  - Content Gap: 16px
  - Font Size: 12px
```

---

## 🎨 Spacing by Content Type

### Text Hierarchy
```
Display (Hero H1)    → 56px font, 1.15 line-height
Section Title (H2)   → 44px font, 1.25 line-height, 24px below
Subsection (H3)      → 30px font, 1.3 line-height, 16px below
Body Large           → 18px font, 1.7 line-height
Body Regular         → 16px font, 1.65 line-height
Small Text           → 15px font, 1.6 line-height
Caption              → 14px font, 1.5 line-height
```

### Spacing Within Content
```
Between Headings: 32px
Between Heading & Intro: 24px
Between Paragraphs: 16px
Between Sections: 80px (minimum)
Between Cards: 24px (grid gap)
Between List Items: 12px
```

### Margin Collapsing
```
Prevention: Use padding or explicit margins on containers
Best Practice: Set margin-bottom on elements, 0 margin-top
Example: <p> gets 16px margin-bottom, 0 top
```

---

## 📱 Mobile-First Breakpoints

### Responsive Spacing Adjustments

**Mobile (< 640px)**
```
Section Padding: 2.5rem 1rem (40px vertical, 16px horizontal)
Container Gap: 16px
Product Columns: 2
Button Height: 48px (min, touch-friendly)
Font Sizes: Reduced 15-20%
```

**Tablet (640px - 1024px)**
```
Section Padding: 4rem 1.5rem (64px vertical, 24px horizontal)
Container Gap: 24px
Product Columns: 2
Grid Gap: 24px
Font Sizes: 90% of desktop
```

**Desktop (1024px+)**
```
Section Padding: 5rem 2rem (80px vertical, 32px horizontal)
Container Gap: 32px
Product Columns: 4
Grid Gap: 24px (xl: 32px)
Font Sizes: Full
```

---

## ✅ Spacing Checklist

- [ ] All sections have vertical padding (40px mobile → 80px desktop)
- [ ] Heading stacks follow vertical rhythm (24px, 16px increments)
- [ ] Product cards use consistent internal spacing
- [ ] Grid gaps are uniform across breakpoints
- [ ] Button heights ≥ 48px for mobile touch
- [ ] Line heights maintain readability (1.6-1.7 for body)
- [ ] Margins collapse intentionally (use padding when needed)
- [ ] Hover/active states maintain spacing consistency
- [ ] Cards maintain aspect ratios (4:5 for product cards)
- [ ] Form inputs have adequate padding (12px minimum)

---

## 🔧 Implementation Examples

### Using CSS Variables
```css
/* Section */
section {
  padding: var(--space-5xl) var(--space-xl); /* 80px vertical, 40px horizontal */
}

/* Heading Stack */
h2 {
  margin-bottom: var(--space-md); /* 24px */
}

p {
  margin-bottom: var(--space-sm); /* 16px */
}

/* Grid */
.grid {
  gap: var(--space-xl); /* 40px */
}
```

### Card Spacing
```jsx
<div className="p-5 md:p-6">
  {/* 20px padding mobile, 24px desktop */}
  <h3 className="mb-4">Title</h3>
  {/* 16px margin below */}
  <p className="mb-4">Description</p>
  {/* 16px margin below */}
  <div className="border-t pt-4">
    {/* 16px padding top */}
    Rating Content
  </div>
</div>
```

---

## 📐 Measurements Reference

```
8px = 0.5rem
16px = 1rem
24px = 1.5rem
32px = 2rem
40px = 2.5rem
48px = 3rem
56px = 3.5rem
64px = 4rem
80px = 5rem
```

---

## 🎯 Final Notes

1. **Consistency is Key**: Always use the spacing scale. Never use arbitrary values.
2. **Vertical Rhythm**: Maintain consistent line-height and paragraph spacing.
3. **Responsive**: Scale padding/margins for mobile, tablet, and desktop.
4. **Accessibility**: Ensure minimum touch targets (48px for buttons).
5. **White Space**: Use spacing strategically to improve readability and hierarchy.
6. **Components**: Each component should define its internal spacing independently.

---

**Last Updated:** February 13, 2026  
**Status:** Active & Current  
**Version:** 1.0
