
import '../../Style/aboutplataforma.css';
import '../../../public/img/Dashboard1.png'

export const AboutPlataforma = () => {
    return (
        <>
            <section className="w-100 py-3 py-md-5 py-lg-5">
                <div className="container">
                    <div className="row align-items-center custom-gap custom-gap-lg">
                        <div className="col-lg-6 col-xl-6 mb-4 mb-lg-0">
                            <div>
                                <div className="mb-2">
                                    <h2 className="h3 fw-bold lh-tight sm-h1">Descubre nuestra solución innovadora</h2>
                                    <p className="text-muted">
                                        Nuestra plataforma te ofrece herramientas avanzadas para impulsar tu negocio al siguiente nivel. Simplifica tus procesos y enfócate en lo que realmente importa.
                                    </p>
                                </div>
                                <button className="align-items-center btn btn-success px-4 py-2 text-light shadow-sm transition">
                                    Conocer más
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 d-flex justify-content-center">
                            <img
                                src="../../../public/img/Dashboard1.png"
                                width="550"
                                height="310"
                                alt="Imagen descriptiva"
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default AboutPlataforma

