# astro-tina

An Astro integration for Tina CMS.

At the moment, this integration only provides a client directive that only 
hydrates React components in the Tina CMS visual editor. This allows websites 
to support live editing without shipping React to the client.

```astro
<MyComponent client:tina {...props} />
```

## Setup

First, follow the [instructions](https://tina.io/docs/frameworks/astro) to set 
up Tina in your Astro project.

Then, install the integration...

```
npm install github:dawaltconley/astro-tina
```

...and add it to your project config.

```mjs
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tina from 'astro-tina'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tina()],
})
```

You can now hydrate components using the `client:tina` directive.
