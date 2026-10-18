# Nflix

A movie browsing app running on live [TMDB](https://www.themoviedb.org/) data, with playback handled by `video.js` and HLS streaming.

**Live:** https://nflix-rust.vercel.app

## What it does

- Browse trending, popular and by-genre catalogues, pulled live from TMDB
- Search films and series
- Watch with HLS streaming through `video.js`, with quality selection
- Detail pages with cast, crew and related titles

## Stack

| | |
|---|---|
| UI | React, Vite |
| Data | TMDB API |
| Playback | `video.js` with HLS |

The Laravel side of this project — HLS delivery, subscriptions and eSewa payments — lives in [`nflix-laravel`](https://github.com/rudalkunwar/nflix-laravel).

## Running locally

```bash
git clone https://github.com/rudalkunwar/nflix.git
cd nflix
npm install
npm run dev
```

Copy `.env.example` to `.env` and add your TMDB API key:

```bash
VITE_TMDB_API_KEY=your_key_here
```

Get a key at https://www.themoviedb.org/settings/api.

## Notes

- TMDB requires attribution. This project is not affiliated with or endorsed by TMDB or Netflix.
- Built as a full-stack exercise: front end in React, streaming and payment layer in Laravel.

## License

MIT
