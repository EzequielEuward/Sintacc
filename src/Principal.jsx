// import { Navbar } from './Office/components/Navbar'
import { Hero } from './Office/components/Hero'
// import {Navbar2} from './Office/components/Navbar2'
import { Header } from './Office/components/Header'
import { Pagos } from './Office/components/Pagos'
import { ContentFooter } from './Office/components/ContentFooter'
import { CaracterSection } from './Office/components/CaracterSection'
import { AboutPlataforma } from './Office/components/AboutPlataforma'
import { TeamDevelopers } from "./Office/components/TeamDevelopers";
import {Contacto} from './Office/components/Contacto'

export const Principal = () => {
  return (
    <>
      <Header />
      <Hero />
      <CaracterSection />
      <AboutPlataforma />

      <Pagos />
      <TeamDevelopers />
      <Contacto/>
      <ContentFooter />
    </>
  )
}

export default Principal
