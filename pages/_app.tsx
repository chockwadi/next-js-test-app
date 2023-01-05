import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import type { AppProps } from "next/app";
import Layout from '../components/Layout';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
config.autoAddCss = false
library.add(fas)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
