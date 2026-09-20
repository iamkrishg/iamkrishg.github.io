import { defineConfig } from 'astro/config';

// GitHub Pages serves a "project" repo (e.g. github.com/you/portfolio) at
// https://you.github.io/portfolio/ — everything after the domain is the "base".
// A "user/organization" repo named exactly <you>.github.io is served at the
// domain root instead, so base stays "/".
//
// The included GitHub Actions workflow sets BASE_PATH automatically at build
// time, so you normally don't need to touch this file at all.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base,
  trailingSlash: 'ignore',
});
