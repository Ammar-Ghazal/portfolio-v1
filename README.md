# Portfolio v1

An earlier personal portfolio site, built with React, TypeScript, Vite, Sass and Framer Motion.

Live site: https://ammar-ghazal.github.io/portfolio-v1/

## Run locally

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build    # outputs to dist/
npm run deploy   # builds, then publishes dist/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch. Asset paths are relative (`base: './'` in `vite.config.ts`), so the site keeps working if the repository is renamed.

## Notes

The component boards under `src/_codux/` were scaffolded with [Codux](https://codux.com).

## License

MIT. See [LICENSE](LICENSE).
