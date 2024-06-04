import { Navbar } from './Office/components/Navbar'
// import {Navbar2} from './Office/components/Navbar2'
import { Hero } from './Office/components/Hero'
import { Pagos } from './Office/components/Pagos'
import { ContentFooter } from './Office/components/ContentFooter'
import { CaracterSection } from './Office/components/CaracterSection'
import { AboutPlataforma } from './Office/components/AboutPlataforma'
import { TeamDevelopers } from "./Office/components/TeamDevelopers";
export const Principal = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CaracterSection />
      <AboutPlataforma />

      <Pagos />
      <TeamDevelopers />
      <ContentFooter />
    </>
  )
}

export default Principal
