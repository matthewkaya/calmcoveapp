# CalmCove

CalmCove is a polished single-page brand presentation website built for a college Brand Building through Social Media assignment. It uses Next.js App Router, TypeScript, Tailwind CSS, structured JSON content, and Decap CMS so the public site can be updated from an admin interface without editing code directly.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Decap CMS
- Netlify deployment target

## Features

- Responsive one-page presentation site with sticky scrolling navigation
- Reusable section and card components
- JSON-driven content architecture
- Editable admin panel at `/admin`
- Editable text, links, logos, images, visuals, and campaign content
- Netlify-ready configuration with Decap CMS Git-based publishing

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
  ui/
content/
  analytics.json
  content-calendar.json
  home.json
  influencer-campaign.json
  paid-campaign.json
  personas.json
  site-settings.json
  social-posts.json
  youtube.json
lib/
  content.ts
  types.ts
public/
  admin/
    config.yml
    index.html
  logos/
  uploads/
netlify.toml
```

## Install and Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the site:

   ```bash
   npm run dev
   ```

3. Start the site and Decap local backend together:

   ```bash
   npm run dev:all
   ```

4. Open the site at `http://localhost:3000`.

5. Open the CMS at `http://localhost:3000/admin`.

## Content Architecture

The public site reads presentation content from JSON files in `content/`.

- `content/site-settings.json`: metadata, nav links, social links, logos
- `content/home.json`: hero, overview, target market, brand identity, platform strategy, content strategy, summary
- `content/personas.json`: persona cards and images
- `content/content-calendar.json`: one month content calendar entries
- `content/social-posts.json`: sample post cards, captions, hashtags, CTAs, visuals
- `content/youtube.json`: YouTube rationale and video concepts
- `content/paid-campaign.json`: ad campaign copy, mockups, metrics, budget
- `content/influencer-campaign.json`: influencer plan, outreach, mockups, growth tactics
- `content/analytics.json`: KPI cards, chart data, recommendations

Any published CMS change updates these files in the repo. Once Netlify rebuilds the site, the public page reflects the new content automatically.

## Using the Admin Page

The admin interface is available at `/admin`.

From Decap CMS you can update:

- Hero section text
- Brand overview text
- Mission statement
- Target market content
- Persona content and profile images
- Brand identity content
- Platform strategy and content strategy text
- Content calendar entries
- Sample social posts and visuals
- YouTube strategy content and storyboard visuals
- Paid campaign content and ad visuals
- Influencer campaign content and visuals
- Analytics content
- Summary section
- Social media links
- Logo fields
- Main brand images and campaign visuals

## Media Uploads and Replacements

- Decap uploads media into `public/uploads`.
- Uploaded files are referenced with `/uploads/...` paths.
- Logo fields are editable from the CMS and can point to new uploaded files.
- Existing placeholder visuals can be replaced at any time from the image widgets in `/admin`.

## Netlify Deployment

1. Push this project to a GitHub repository.
2. In Netlify, create a new site from that repository.
3. Netlify should detect the Next.js project automatically.
4. Build command: `npm run build`
5. Publish handling is managed by the Netlify Next.js plugin in `netlify.toml`.
6. After the first deploy, confirm the public site works at the root URL and the admin works at `/admin`.

## Enabling Decap CMS on Netlify

For deployed editing, configure Netlify Identity and Git Gateway:

1. In Netlify, enable Identity for the site.
2. Set registration to invite-only if you want tighter control.
3. Enable Git Gateway in the Identity settings.
4. Invite the admin user who should edit the site.
5. Open `/admin` on the deployed site and log in with the invited account.

Important note:

- `local_backend: true` in `public/admin/config.yml` supports local editing with `npm run dev:all`.
- The deployed site uses the `git-gateway` backend defined in the same CMS config.

## Basic Admin Protection Guidance

- Keep Netlify Identity set to invite-only.
- Only invite approved editors.
- Do not share the `/admin` login widely.
- If you need stronger protection, add additional access controls at the Netlify project level.

## Build and Production Commands

```bash
npm run build
npm run start
```

## Notes

- The project is optimized for Netlify, not Vercel-specific deployment.
- No database is required.
- Content changes are Git-based and deployment-friendly.
- Placeholder visuals are intentionally easy to swap later.
