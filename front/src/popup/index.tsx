import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Popup from './popup'

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  ReactDOM.render(
        <React.StrictMode>
            <Popup />
        </React.StrictMode>,
        document.querySelector('#popup')
  )
})
