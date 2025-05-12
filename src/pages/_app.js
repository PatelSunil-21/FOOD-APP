import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/utils/ContextReducer";

export default function App({ Component, pageProps }) {
  return (<CartProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CartProvider>
  );

}
