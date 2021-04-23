
export const translateEsmoji = async (name: string) => {
  const uri = `https://api.mymemory.translated.net/get?q=${name}&langpair=en%7Ces`
  const translation = await fetch(uri)
  return await translation.json()
}
