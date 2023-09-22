import type { ClientDirective } from 'astro'

const clientTina: ClientDirective = (load) => {
  try {
    const isEditor =
      window.frameElement && window.frameElement.id === 'tina-iframe'
    if (isEditor) {
      load().then((hydrate) => hydrate())
    }
  } catch (e) {
    console.error(e)
  }
}

export default clientTina
