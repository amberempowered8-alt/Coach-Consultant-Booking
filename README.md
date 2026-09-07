Coach & Consultant Booking Template — Setup Guide
What You Got
A ready-to-launch booking website for coaches, consultants, and 1:1 service providers
Free hosting, no monthly fees, ever
No coding needed — everything is edited in one simple file
Step 1: Add Your Info

Open app.js. At the top, you'll see a CONFIG section — this is the only place you need to edit. Replace the placeholder text with your own:

coachName — Your name or business name
heroHeadline / heroSubtext — Your main headline and short intro
bookingLink — Your real Calendly, Cal.com, or booking link (see Step 2 — don't leave the placeholder link live)
availability — Your "This Week" schedule ledger (4-6 rows reads best)
credentials — Your trust badges (years of experience, clients served, certifications)
aboutHeading / aboutBody / aboutFacts — Your story and a few honest facts about how you work
services — Your session/package offerings, pricing, and descriptions
testimonials — Client quotes and names
Step 2: Connect Your Booking Link

Still inside CONFIG, find bookingLink and replace the placeholder with your real Calendly or Cal.com URL. Do not leave the placeholder link live — it's not a real working page, just text meant to be replaced. This is what the "Book This" buttons point to.

Step 3: Add Your Photos

Swap any placeholder photo boxes for real photos of you or your work — this builds trust faster than anything else on the page.

Step 4: Go Live (Free Hosting)
Click "Use this template" on GitHub to copy this into your own account.
Go to Settings → Pages, and turn on GitHub Pages.
Your site is now live at no cost, and stays free — no monthly bill.
Connecting a Custom Domain (e.g., www.yourdomain.com)

Already have your own domain from Squarespace Domains, Namecheap, GoDaddy, or Cloudflare? Here's how to point it at your free GitHub Pages site instead of using the default github.io link.

1. Set it in GitHub:

In your repository, go to Settings → Pages.
Scroll to Custom domain, enter your domain, and click Save.
Check the box for Enforce HTTPS — this turns on your free SSL security certificate. (Sometimes it takes a couple minutes to update, so if it doesn't let you click it, know it's updating.)

2. Update your domain's DNS settings:
Log into your domain provider's DNS management panel and add:

CNAME Record: Host/Name: www → Value/Target: YOUR_GITHUB_USERNAME.github.io
A Records (for the root domain @), pointing to GitHub's IP addresses:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

DNS changes typically take 5–30 minutes to go live, sometimes longer.

A Note on "Free"

Hosting is completely free to start. If you ever outgrow the free tier (very high traffic), a low-cost paid step may apply — but you'll never be locked into a recurring platform fee just to keep your site online.

Questions?

This is a self-guided template. For setup help, reach out through your support link.
