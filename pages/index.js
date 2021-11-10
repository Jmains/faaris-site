import { NextSeo } from "next-seo";
import AboutSection from "../components/sections/about/AboutSection";
import { DiscographySection } from "../components/sections/discography";
import { HeroSection } from "../components/sections/hero";
import { LatestRelease } from "../components/sections/latestRelease";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Faaris Music"
        description="I like to rap sometimes..."
        canonical="https://www.faarismusic.com/"
        openGraph={{
          url: "https://www.faarismusic.com/",
          title: "Faaris Music",
          description: "I like to rap sometimes...",
          images: [
            {
              url: "https://faarismusic.com/heroImg.jpg",
              width: 800,
              height: 600,
              alt: "faaris",
              type: "image/jpeg",
            },
            {
              url: "https://faarismusic.com/heroImg.jpg",
              width: 900,
              height: 800,
              alt: "faaris",
              type: "image/jpeg",
            },
            { url: "https://faarismusic.com/heroImg.jpg" },
            { url: "https://faarismusic.com/heroImg.jpg" },
          ],
          site_name: "Faaris Music",
        }}
        twitter={{
          handle: "@faaris_mp3",
          site: "@https://www.faarismusic.com/",
          cardType: "summary_large_image",
        }}
      />
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeroSection />
      {/* <LatestRelease /> */}
      <DiscographySection />
      <AboutSection />
    </div>
  );
}
