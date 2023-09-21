import type { AstroIntegration } from 'astro'

declare module 'astro' {
  interface AstroClientDirectives {
    'client:tina'?: boolean
  }
}

const { pathname: entrypoint } = new URL(
  '../client-directives/tina.mjs',
  import.meta.url,
)

export default (): AstroIntegration => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({ addClientDirective }) => {
      addClientDirective({
        name: 'tina',
        entrypoint,
      })
    },
  },
})
