import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='background-gif' />
    <Component {...pageProps} />
  </> 
}

export default MyApp
