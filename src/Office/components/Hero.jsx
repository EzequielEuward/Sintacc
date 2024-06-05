import { Button } from "react-bootstrap"

export const Hero = () => {
  return (
    <section
    id="home"
      className="position-relative w-100"
      style={{
        height: '100vh',
        backgroundImage: 'url("../../assets/img/slider2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 10 }}></div>
      <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 px-4 text-center" style={{ zIndex: 20 }}>
        <h2 className="display-4 fw-bold text-black">Bienvenido a nuestra aplicación</h2>
        <p className="mt-4 lead text-light">
          Descubre todas las funcionalidades que tenemos para ti.
        </p>
          <Button variant="success">Empezar ahora</Button>
      </div>
    </section>
  )
}
export default Hero;
