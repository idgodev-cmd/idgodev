---
title: "Why I Switched from React to Astro"
description: "Single Page Applications are overkill for content sites. Here is why I migrated to Island Architecture."
pubDate: 2024-01-12
heroImage: "/images/blog/idgo_blog.png"
category: "Architecture"
featured: true
---

The web has become bloated. We send megabytes of JavaScript just to render a static blog post.

For years, the default approach to building websites has been to ship more and more JavaScript to the browser. Frameworks get bigger, bundles get heavier, and users pay the price.

This is the story of why I decided to move away from a traditional React SPA and rebuild this site using Astro.

---

## The Problem

When I first started building this portfolio, I used Create React App. It was the standard at the time.

At first, everything felt fine.

But when I checked my Lighthouse score, I was shocked.

- Time to Interactive (TTI) was over **2 seconds** on mobile.
- JavaScript bundle size was **huge** for a site that was mostly just text.
- Every page load felt heavier than it should be.

All of this… just to render a mostly static blog.

That’s when I realized:

> We are using app-level tools to solve document-level problems.

---

## The Root Cause

Modern SPAs treat every website like a web application.

That means:

- Everything is hydrated
- Everything ships JavaScript
- Everything waits for JS before becoming interactive

Even when the page is just:

- Headings
- Paragraphs
- Images

This is massive overkill.

---

## The Solution: Astro and Island Architecture

Astro takes a completely different approach.

Instead of assuming everything is an app, Astro assumes:

> The web is mostly documents, not applications.

By default, Astro:

- Builds your site to **static HTML**
- Ships **zero JavaScript** unless you explicitly ask for it
- Lets you add interactivity only where it’s actually needed (Islands)

This means:

- Faster load times
- Better Lighthouse scores
- Better SEO
- Happier users

---

## The Migration

I rebuilt this site using:

- Astro
- Markdown for content
- A few small interactive components for things that actually need JS

The result?

- Lighthouse score: **95–100**
- Near-instant page loads
- Much simpler architecture
- Much better developer experience

---

## When You Should (and Shouldn’t) Use Astro

Astro is perfect for:

- Blogs
- Portfolios
- Marketing sites
- Documentation
- Content-heavy websites

Astro is NOT meant for:

- Complex dashboards
- Apps with heavy client-side state
- SaaS products with lots of interactivity

Use the right tool for the right job.

---

## Final Thoughts

Switching to Astro reminded me of an important principle:

> Most websites are not apps. They are documents.

And documents deserve to be:

- Fast
- Simple
- Accessible

Astro helps you get back to that.

---

Thanks for reading.
