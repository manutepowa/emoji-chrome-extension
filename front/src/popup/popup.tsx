import React, { useState } from 'react'
import Header from '../components/Header/Header'
import EmojiList from '../components/EmojiList/EmojiList'
import './popup.scss'

export default function Popup () {
  const [searchEmoji, setSearchEmoji] = useState<string>('')

  // useEffect(() => {
  //   if (searchEmoji.length > 0) {

  //   }
  // }, [searchEmoji])

  return (
        <div className="popupContainer">
            <Header setSearchEmoji={setSearchEmoji} />
            <EmojiList searchEmoji={searchEmoji} />
        </div>
  )
}
