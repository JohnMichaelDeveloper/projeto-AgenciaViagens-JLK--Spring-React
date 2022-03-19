// import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
// import './styles.css';
// function Navbar(){

//   return(
//     <header>
//     <nav className="container">
//         <div className="dsmovie-nav-content">
//             <h1>DSMovie</h1>
//             <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
//                 <div className="dsmovie-contact-container">
//                     <GithubIcon />
//                     <p className="dsmovie-contact-link">/devsuperior</p>
//                 </div>
//             </a>
//         </div>
//     </nav>
// </header>
//   )
// }
// export default Navbar;


import React, {useState} from "react";
// import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import logo from "assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import './styles.css';
import CadastrarPacote from "pages/CadastrarPacote";




function Navbar(){
    
    // const [navbarState, setNavbarState] = useState(false);
  
  
  
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                        <img className="logoJust" src={logo} alt="" />
                    </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#pacote">Pacotes</a>
            </li>           
            <li className="nav-item">
                <a className="nav-link " href="/atendimento">Atendimento</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="/usuario">Cadastrar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="/usuario_logado">Entrar</a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}
export default Navbar;