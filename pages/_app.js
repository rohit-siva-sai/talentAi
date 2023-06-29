import Footer from "@/components/hire_developers/footer";
import Navbar from "@/components/home/navbar";
import "@/styles/globals.css";
import SEO from "@bradgarropy/next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Turing"
        description="helping comapnies with ai"
        keywords={["aihlp",""]}
        icon="/icon2.webp"
       
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
