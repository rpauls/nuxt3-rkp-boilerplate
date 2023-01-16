# nuxt3-rkp-boilerplate
An opinionated eCommerce boilerplate based on Nuxt 3 / Vue3, Tailwind and OpenAPI specifications in mind. Currently build using Shopware 6 OpenAPI specification.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Dependencies

### ProdDependencies

#### nuxt-tailwind

> Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.

- Reference: https://nuxt.com/modules/tailwindcss

#### nuxt-i18n

> Module i18n for Nuxt

- Reference: https://nuxt.com/modules/i18n

#### nuxt-device

> This module injects flags that indicate a device type into the context and the component instance.

- Reference: https://nuxt.com/modules/device

#### nuxt-color-mode

> Dark and Light mode for NuxtJS with auto detection

- Reference: https://nuxt.com/modules/color-mode

#### nuxt-image

> Optimised images for NuxtJS, with progressive processing, lazy-loading, real-time resizes and providers support.

- Reference: https://nuxt.com/modules/image

#### nuxt-icon

> Icon module for Nuxt with 100,000+ ready to use icons from Iconify.

- Reference: https://nuxt.com/modules/icon

#### nuxt-auth

> `nuxt-auth` is a feature-packed, open-source authentication module for Nuxt 3 applications.

- Reference: https://nuxt.com/modules/nuxt-auth

#### nuxt-fontaine

> Font metric override implementation for Nuxt 3

- Reference: https://nuxt.com/modules/fontaine

#### nuxt-typed-router

> Provide a type safe router to Nuxt with auto-generated typed definitions for route names and autocompletion for route params.

- Reference: https://nuxt.com/modules/typed-router

#### nuxt-seo-kit

> Supercharge your Nuxt app with the all-in-one SEO layer.

- Reference: https://nuxt.com/modules/seo-kit

#### nuxt-session

> Nuxt session middleware to get a persistent session per app user, e.g., to store data across multiple requests. The nuxt session module provides the `useSession()` composable out of the box and sets up API endpoints to interact with your session to make working with sessions feel like a breeze.

- Reference: @sidebase/nuxt-session

#### nuxt-api-party

> This module enables you to securely fetch data from any API by proxying the request in a Nuxt server route. Composable names are dynamic – given `json-placeholder` set as the module option name in your Nuxt config, the composables `$jsonPlaceholder` and `useJsonPlaceholderData` will be available globally.

- Reference: https://nuxt.com/modules/api-party

#### delay-hydration

> Improve your Nuxt.js v2 Google Lighthouse score by delaying hydration.

- Reference: https://nuxt.com/modules/delay-hydration

#### Partytown

> Partytown integration for Nuxt - relocate resource intensive scripts into a web worker, and off of the main thread.

- Reference: https://nuxt.com/modules/partytown

#### lodash

> lodash module with auto-import and custom prefix

- Reference: https://nuxt.com/modules/lodash

### DevDependencies

#### Pinia

> Intuitive, type safe and flexible Store for Vue

- Reference: https://nuxt.com/modules/pinia

#### pinia-plugin-persistedstate

> Configurable persistence and rehydration of Pinia stores.

- Reference: https://nuxt.com/modules/pinia-plugin-persistedstate

#### @nuxtjs/robots

> A Nuxt.js module that injects a middleware to generate a robots.txt file

- Reference: https://nuxt.com/modules/robots

#### nuxt-security

> [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally.

- Reference: https://nuxt.com/modules/security

#### html-validator

> Automatically validate Nuxt server-rendered HTML and reduce hydration errors

- Reference: https://nuxt.com/modules/html-validator

#### VueUse

> Collection of essential Vue Composition Utilities for Vue 2 and 3

- Reference: https://nuxt.com/modules/vueuse

#### nuxt-swiper

> Fully featured Swiper.js module for Nuxt 3. Checkout [Swiper.js](https://swiperjs.com/) for more information about how to use.

- Reference: https://nuxt.com/modules/swiper
