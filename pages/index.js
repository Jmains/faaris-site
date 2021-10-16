import { NextSeo } from "next-seo";
import AboutSection from "../components/sections/about/AboutSection";
import { DiscographySection } from "../components/sections/discography";
import { HeroSection } from "../components/sections/hero";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Faaris Music"
        description="Faaris music showcasing"
        // canonical="https://www.easy-warrant.vercel.app/"
        // openGraph={{
        //   url: "https://www.easy-warrant.vercel.app/",
        //   title: "Faaris Music",
        //   description:
        //     "Streamline the warranting process and take the waiting game out of the scenario.",
        //   images: [
        //     {
        //       url: "https://easy-warrant.vercel.app/policeCar.jpg",
        //       width: 800,
        //       height: 600,
        //       alt: "faaris",
        //       type: "image/jpeg",
        //     },
        //     {
        //       url: "https://easy-warrant.vercel.app/policeCar.jpg",
        //       width: 900,
        //       height: 800,
        //       alt: "police car",
        //       type: "image/jpeg",
        //     },
        //     { url: "https://easy-warrant.vercel.app/policeCar.jpg" },
        //     { url: "https://easy-warrant.vercel.app/policeCar.jpg" },
        //   ],
        //   site_name: "Faaris Music",
        // }}
        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
      />
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeroSection />
      <DiscographySection />
      <AboutSection />
    </div>
  );
}
