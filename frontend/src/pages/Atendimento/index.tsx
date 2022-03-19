
import React from 'react';
import Bimg from '../../assets/img/Destination1.png';
import './styles.css';

export default class Atendimento extends React.Component {
  
  

  render() {
    
    return (

<>
      <div className="container mt-5">
        <h2>ATENDIMENTO</h2>
      </div>
      {/* <div className="bg-img" id=""><img src={Bimg} alt="" /></div> */}
      <div className="container mt-5 mb-5 ">
      <form className="row g-3 col-sm-10 offset-xs-3  col-md-10 offset-sm-3  col-lg-10 offset-md-3">
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg- 12">
        <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" aria-label="First name"/>
        </div>
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg- 12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg- 12">
          <label htmlFor="data" className="form-label">Data</label>
          <input type="date" className="form-control" id="data"/>
        </div>
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg- 12">
        <label htmlFor="duvida" className="form-label">Comentario</label>
              <textarea className="form-control align-middle col-md-10 rows3" id="duvida" ></textarea>
        </div>       
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
  </div>
</>
    );
  }
}