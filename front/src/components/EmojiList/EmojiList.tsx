import React, { useEffect, useState } from 'react'
import { useEsmoji } from '../../hooks/useEsmoji'
import { Es } from '../../types.d'
import './EmojiList.scss'

export default function EmojiList ({ searchEmoji }: {searchEmoji: string}) {
  const { loading, esmoji } = useEsmoji()
  const [filteredEsmoji, setFilteredEsmoji] = useState<Es[]>(esmoji)

  useEffect(() => {
    if (!loading && esmoji.length !== 0) {
      setFilteredEsmoji(esmoji)
    }
  }, [loading, esmoji])

  useEffect(() => {
    const filteredE: Es[] = esmoji.filter(({ name }: {name: string}) => name.match(new RegExp(searchEmoji, 'gi')))
    setFilteredEsmoji(filteredE)
  }, [searchEmoji])

  return (
        <div className="esmoji-list">
            {
              loading
                ? <h1>loading</h1>
                : filteredEsmoji.map(({ char }, i) => {
                  return <p className={i === 1 ? 'focus' : '' } key={i}>{char}</p>
                })
            }
        </div>
  )
}
