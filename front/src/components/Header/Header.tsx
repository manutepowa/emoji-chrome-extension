import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import './Header.scss'

export default function Header ({ setSearchEmoji }: {setSearchEmoji: Dispatch<SetStateAction<string>>}) {
  const inputSearch = useRef(null)

  useEffect(() => {
    inputSearch.current.focus()
  }, [])

  const handleQuery = (e) => {
    const value = e.target.value
    setSearchEmoji(value)
  }

  return <>
        <div className="header">
            <input ref={inputSearch} className="search" type="text" onChange={handleQuery}/>
        </div>
    </>
}
