# CalmCove

CalmCove is a polished single-page brand presentation website built for a college Brand Building through Social Media assignment. It uses Next.js App Router, TypeScript, Tailwind CSS, structured JSON content, and a custom password-protected admin so the public site can be updated without editing code directly.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Custom admin with simple username/password
- Netlify deployment target

## Features

- Responsive one-page presentation site with sticky scrolling navigation
- Reusable section and card components
- JSON-driven content architecture
- Editable admin panel at `/admin`
- Simple login-based admin access
- Editable text, links, logos, images, visuals, and campaign content
- Netlify-ready configuration with GitHub-backed content publishing

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

3. Open the site at `http://localhost:3000`.

4. Open the admin at `http://localhost:3000/admin`.

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

Admin changes update these files directly in local development. On Netlify, the admin writes updates back to your GitHub repository through the GitHub Contents API. After Netlify rebuilds the site, the public page reflects the new content automatically.

## Using the Admin Page

The admin interface is available at `/admin`.

Default login credentials:

- Username: `admin`
- Password: `calmcove2026`

You can override them with environment variables:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

From the admin page you can update:

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

The admin currently uses a JSON editor per content file. Upload a new image, then paste the returned file path into the correct JSON field and save.

## Media Uploads and Replacements

- Admin uploads media into `public/uploads` or `public/logos`.
- Uploaded files are referenced with `/uploads/...` paths.
- Logo fields are editable by changing the JSON path values.
- Existing placeholder visuals can be replaced at any time from `/admin`.

## Netlify Deployment

1. Push this project to a GitHub repository.
2. In Netlify, create a new site from that repository.
3. Netlify should detect the Next.js project automatically.
4. Build command: `npm run build`
5. Publish handling is managed by the Netlify Next.js plugin in `netlify.toml`.
6. After the first deploy, confirm the public site works at the root URL and the admin works at `/admin`.

## Required Netlify Environment Variables

Set these in Netlify before using the deployed admin to save changes:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_REPO_OWNER`
- `GITHUB_REPO_NAME`
- `GITHUB_BRANCH` (optional, defaults to `main`)
- `GITHUB_COMMITTER_NAME` (optional)
- `GITHUB_COMMITTER_EMAIL` (optional)

GitHub token requirements:

- Use a GitHub personal access token with repository contents write access.
- The admin uses the GitHub Contents API to update JSON files and uploaded media in the repo. citeturn0search0

## Basic Admin Protection Guidance

- Change the default username and password in environment variables.
- Set a strong `ADMIN_SESSION_SECRET`.
- Keep the GitHub token limited to the target repository when possible.
- Do not expose the admin credentials publicly.

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
