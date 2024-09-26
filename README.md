# Turborepo stack

This repo can be used as a template for monorepos that will require:

- A design-system
- A shared database between services (APIs, webapps, dashboards...)
- Library versionnning

Why?

I needed a template that fits all of those requirements, using my tech stack. After a few years of developping apps, I feel comfortable using:

- NextJS
- Tailwind
- Tailwind-variants
- Shadcn-ui (or at least radix-ui)
- Prisma
- Dayjs
- Vitest + Playwright

This stack meets a lot of technical requirements, like testing, validation, formatting or typesafety

## What's inside?

### Apps and Packages

#### Apps

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: a [Next.js](https://nextjs.org/) app using tailwind &

#### Packages

Packages are like internal libraries. Create your own config, clients or helper functions that will be used in several of your apps

- `@repo/database`: a [Prisma](https://www.prisma.io/docs) package to share across your apps or packages to keep the excellent Prisma DX between your services that are connected to the same database
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/tailwind-config`: an editable [tailwind-config](https://tailwindcss.com/docs/configuration) shared across all apps and packages
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/ui`: a ready-to-edit React component library based on [Tailwind](https://tailwindcss.com/) and [tailwind-variants](https://www.tailwind-variants.org/)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

You can still create your own packages if needed. Possible good package ideas are:

- validation (defining your own validation logic with [Valibot](https://valibot.dev/))
- format (date formatting with [DayJS](https://day.js.org/), i18n formatting with the vanilla [Intl namespace object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), string manipulation...)

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind](https://tailwindcss.com/) for good styling on your apps
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Tools

I included [changesets](https://github.com/changesets/changesets) for managing different versions of your packages. This includes publishing to npm if you want

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
pnpm turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
