
import '../../Style/formulariocontacto.css';

export const Contacto = () => {
    return (
        <section className='bg-light py-5'>
            <div className="container text-center">
                <h1 className='text-center mb-4 text-capitalize fs-1 fw-bold'>Formulario de contacto</h1>
                <hr />
                <div className="d-flex align-items-center justify-content-center mb-5">

                    <form className="form mb-4">
                        <div className="title">Contactanos</div>
                        <input type="text" placeholder="Email" className="input form-control" />
                        <input type="text" placeholder="Asunto" className="input form-control" />
                        <textarea placeholder="Tu mensaje..." className="form-control"></textarea>
                        <button className="btn btn-primary">Enviar</button>
                    </form>
                </div>

            </div>
        </section>

    );
}


export default Contacto