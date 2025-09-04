# PeerRated Documentation

This repository contains the documentation site for PeerRated, built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/) for documentation.

It is currently being hosted on [Vercel](https://vercel.com).

## Setup and Installation

#### Prerequisites
- [NodeJS](https://nodejs.org) - most recent version is okay
- [pnpm](https://pnpm.io/installation) - I use `pnpm` instead of `npm`. Feel free to read the differences between `npm` vs `pnpm` [here](https://pnpm.io/pnpm-vs-npm)

#### Run Deployment Server

Run `pnpm dev` to start the localserver which you can open from your browser. 

Run `pnpm build` to build the project and test for any errors before deployment.

#### Husky Precommit Hooks

This repo uses [Husky](https://typicode.github.io/husky/) to enforce quality before committing. Whenever you commit, it will run whatever is in `.husky/pre-commit` file. Usually we will have the basics of running builds, tests, linting, and any other commands.

The idea here is it enforces code quality to ensure no broken build gets published to PR. You can catch these issues before even checking in a commit.

## Project Structure

- `app/[[...mdxPath]]/page.tsx` → Catch-all route for Nextra docs pages (shouldn't need to update this)
- `content/` → All .mdx documentation files live here, structure is defined by the `_meta.json` files
- `theme.config.tsx` → Nextra theme configuration (navigation, logo, etc.)
- `public/images/` → Where we store our images and assets

## Contributing

To learn how to contribute to this repo, please read the following [How To Documentation](https://peerrated-documentation.vercel.app/writing).

When you have tested your changes and ready to publish, create a new branch such as `docs/<page you are updating>` then make a PR to main for review. Be sure to fill in the PR description