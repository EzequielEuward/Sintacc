import {CopyFooter} from "./CopyFooter"


export const ContentFooter = () => {
  return (
    <>

      <footer className="bg-dark text-wite pt-5 pb-4">
        <div className="container text-center text-s-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">SINTACC</h5>
              <p className="text-white">Este es la primera version del proyecto SINTACC de muestra</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-aauto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Productos</h5>
              <p><a href="#" className="text-decoration-none text-success">Productos</a></p>
              <p><a href="#" className="text-decoration-none text-success">Atencion al cliente</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Navegacion</h5>
              <p><a href="#" className="text-decoration-none text-success">Inicio</a></p>
              <p><a href="#" className="text-decoration-none text-success">Contacto</a></p>
              <p><a href="#" className="text-decoration-none text-success">Sobre nosotros</a></p>
            </div>
          </div>
        </div>
      </footer>
      <CopyFooter/>
    </>
  )
}

export default ContentFooter
