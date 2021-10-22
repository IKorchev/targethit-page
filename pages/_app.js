import "../styles/globals.css"
import { DappProvider } from "@usedapp/core"

import Layout from "../components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
