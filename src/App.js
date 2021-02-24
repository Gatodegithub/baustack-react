import logo from './logoBaustack.png';
import imgheader from './imgheader.png';
import './App.css';
import './styles.css'

function App() {
  return (
    <>
      
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container py-3">
          <a className="navbar-brand" href="true"><img src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item my-2">
                <a className="nav-link active" aria-current="page" href="true"><span>Comunícate con ventas</span></a>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link" href="true">Iniciar sesión</a>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link btn-primary text-white rounded-pill py-1 mt-md-1" href="true">Empezar ahora</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <header className="container">
        <div className="row header min-vh-100">
          <div className="col-lg-6 my-auto text-start pb-5">
            <h1 className="display-2 fw-bold">Una sola fuente de información</h1>
            <p className="me-5">Aprovecha las ventajas de trabajar en una base de datos, con la simpleza de una planilla Excel</p>
            <a href="true" className="btn btn-lg btn-primary text-white rounded-pill">Empezar ahora</a>
          </div>
          <div className="col-lg-6 my-auto">
              <img src={imgheader} className="img-fluid rounded w-auto" alt="img-header"></img>
          </div>
        </div>
      </header>
      <section className="container-fluid py-5 bg-light">
        <div className="row">
          <div className="col-lg-12 px-md-5">
            <h2 className="text-center px-lg-5">Crear tu propia aplicación nunca fue tan fácil, no necesitas conocimientos técnicos!</h2>
          </div>
        </div>
      </section>
      <div className="section container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center py-5">Contacto</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <form id="form" className="pb-3 px-5">
              <div className="mb-3">
                <label htmlFor="to_name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="to_name" name="to_name" required="" pattern="[A-Za-z ]{4,15}"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="cc_to" className="form-label">Correo</label>
                <input type="text" className="form-control" id="cc_to" name="cc_to" pattern="^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$" required=""></input>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" name="message" maxLength="200" placeholder="Escríbeme..."></textarea>
              </div>
      
              <input className="btn btn-primary w-100 rounded-pill py-2" type="submit" id="button" value="Enviar"></input>
            </form>
          </div>
        </div>
      </div>
      <footer className="container border-top">
        <div className="row mx-auto pt-4">
          <div className="col-md-4">
            <img src={logo} className="img-fluid rounded w-auto" alt="img-header"></img>
            <p className="text-start pt-2">Crea tus propias aplicaciones
            en la nube de forma autónoma,
            sin la necesidad de
            conocimientos técnicos.</p>
          </div>
          <div className="col-md-4">
            <h4>Links importantes</h4>
            <p className="text-start pt-2">Templates.<br></br>
              Pricing<br></br>
              FAQ<br></br>
              Términos de uso<br></br>
              Política de privacidad<br></br>
            </p>
          </div>
          <div className="col-md-4">
            <h4>Síguenos en:</h4>
            <ul className="list-unstyled d-flex justify-content-evenly pt-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
