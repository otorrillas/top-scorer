# Top Scorer

Shows a list of some games from [SpeedRun][1] API.

Using `next.js` for SSR, `React` for UI, `redux` for state management.

---

## Commands

- `dev`: starts a next development server (with Hot Reloading)
- `build`: builds a next application for production
- `start`: starts a next application from a production build
- `test`: runs unit tests (in `jest`)
  - `test:watch`: runs tests in watch mode
- `lint` runs lint on `components/`, `pages/`, `store/` and `utils/` folders
- `pretty-quick` runs prettier on **staged** files

## Hooks

- `pre-commit`: runs `pretty-quick`, `lint` and `tests` before allowing a commit.

## Get started

1. Clone the repository:

```sh
git clone https://github.com/otorrillas/top-scorer.git
```

2. Run `npm install`
3. Run `npm dev` for starting a dev build

[1]: http://www.speedrun.com
