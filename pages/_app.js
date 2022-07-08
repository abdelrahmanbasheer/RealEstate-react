import { Router } from "next/router"
import NProgress from "nprogress"
import Head from "next/head"
import {chakraProvider} from "@chakra-ui/react"

import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
