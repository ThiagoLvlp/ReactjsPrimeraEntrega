
import logonav from '../imgs/LogoNav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function NavBar (props) { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                  <img src={logonav} alt="logonav" className="ps-5 modal-sm w-25 img-fluid"/>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Inicio</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Saligna</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Eucaliptus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Polietilenos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              </ul>
              <a id="botonCarrito" data-bs-toggle="modal" data-bs-target="#idModalCarrito" class="btn btn-secondary">
              <FontAwesomeIcon icon={faShoppingCart}/> 
              </a>
          </div>
          </div>
      </nav> 
      )}

export default NavBar;
