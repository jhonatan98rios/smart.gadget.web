import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <h3 style={{
        position: "absolute",
        top: '0px',
        right: '10px',
        color: 'red'
      }}>
        BETA
      </h3>
    </>
  )
}

export default MyApp
