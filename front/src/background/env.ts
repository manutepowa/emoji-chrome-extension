
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log(process.env.NODE_ENV)

export { isProd, isDev }
