
import React from 'react';

export default class CadastrarUsuario extends React.Component {
  
  

  render() {
    
    return (

<>
      <div className="container mt-5">
        <h2>CADASTRO DE USUÁRIO</h2>
      </div>
      <div className="container mt-5 mb-5">
      <form className="row g-3">
        <div className="col-md-12">
        <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" aria-label="First name"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input type="password" className="form-control" id="senha"/>
        </div>        
        <div className="col-12">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input type="text" className="form-control" id="endereco" placeholder="Rua..., Lt... Qd:"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="cidade" className="form-label">Cidade</label>
          <input type="text" className="form-control" id="cidade"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="estado" className="form-label">Estado</label>
          <select id="estado" className="form-select">
            <option selected></option>
            <option >Acre</option>
            <option>Alagoas</option>
            <option>Amapá</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="cep" className="form-label">Cep</label>
          <input type="text" className="form-control" id="cep"/>
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