import { useEffect, useState } from 'react'
import { translateEsmoji } from '../service/translation'
import { Es } from '../types.d'

export function useEsmoji () {
  const [loading, setLoading] = useState<boolean>(false)
  const [esmoji, setEsmoji] = useState<Es[]>([])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const emojiData = await fetch('https://unpkg.com/emoji.json@13.1.0/emoji.json')
      const esmojiJson = await emojiData.json()
      const esmojiTranslated = esmojiJson.map(async (e: Es) => {
        e.name = await translateEsmoji(e.name)
        return e
      })

      setEsmoji(esmojiTranslated)
      setLoading(false)
    })()
  }, [])

  return { loading, esmoji }
}
