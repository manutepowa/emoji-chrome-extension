import { isDev } from './env'
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // onMessage must return "true" if response is async.
  const isResponseAsync = false

  if (request.popupMounted) {
    console.log('eventPage notified that Popup.tsx has mounted.')
    console.log({ request, sender })
    sendResponse('holaa')
  }
  return isResponseAsync
})

if (isDev) {
  console.log(isDev)

  chrome.tabs.create({
    url: 'popup.html'
  })
}
