# Etsy / Product Seller Storefront — Setup Guide

## What You Got
- A ready-to-launch storefront for handmade, print-on-demand, or digital product shops
- Free hosting, no monthly fees, ever
- No coding needed — everything is edited in one simple file

## Step 1: Add Your Info
Open `app.js`. At the top, you'll see a `CONFIG` section — this is the only place you need to edit. Replace the placeholder text with your own. Here's exactly where each piece lives (line numbers may shift slightly if you add/remove lines above them):

- **Line 8** — Your shop name
- **Lines 10-11** — Your headline and short intro
- **Line 14** — Your shop link (see Step 2 — don't click the placeholder link, it's not a real destination)
- **Lines 17-24** — Your color/variant swatches
- **Lines 26-30** — Your credentials
- **Lines 32-36** — Your product categories
- **Lines 38-54** — Your featured products
- **Further down** — Your "about" section and reviews

## Step 2: Connect Your Shop Link
Still inside `CONFIG`, find `shopLink` (**line 14**) and replace the placeholder with your real Etsy shop URL or checkout link. **Do not click the placeholder link as-is** — it's not a real working page, just text meant to be replaced. This is what the "Visit the Shop" and "Browse the Shop" buttons point to.

## Step 3: Add Your Photos
Swap the "Shop Photo" and "Product Photo" placeholder boxes for real photos of your shop and products — this is what actually sells the piece.

## Step 4: Go Live (Free Hosting)
1. Click "Use this template" on GitHub to copy this into your own account.
2. Go to Settings → Pages, and turn on GitHub Pages.
3. Your site is now live at no cost, and stays free — no monthly bill.

## Connecting a Custom Domain (e.g., www.yourdomain.com)

Already have your own domain from Squarespace Domains, Namecheap, GoDaddy, or Cloudflare? Here's how to point it at your free GitHub Pages site instead of using the default `github.io` link.

**1. Set it in GitHub:**
1. In your repository, go to **Settings → Pages**.
2. Scroll to **Custom domain**, enter your domain (e.g., `www.yourdomain.com`), and click **Save**.
3. Check the box for **Enforce HTTPS** — this turns on your free SSL security certificate.

**2. Update your domain's DNS settings:**
Log into your domain provider's DNS management panel and add:
- **CNAME Record:** Host/Name: `www` → Value/Target: `YOUR_GITHUB_USERNAME.github.io`
- **A Records** (for the root domain `@`), pointing to GitHub's IP addresses:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

DNS changes typically take 5–30 minutes to go live, sometimes longer.

## A Note on "Free"
Hosting is completely free to start. If you ever outgrow the free tier (very high traffic), a low-cost paid step may apply — but you'll never be locked into a recurring platform fee just to keep your site online.

## Questions?
This is a self-guided template. For setup help, reach out through your support link.
