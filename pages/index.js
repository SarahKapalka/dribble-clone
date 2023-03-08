import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import OurStory from "../components/OurStory"
import Process from "../components/Process"
import Service from "../components/Service"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Process />
      <OurStory />
      <Service />
      <FAQ />
    </Layout>
  )
}
