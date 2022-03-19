import React from 'react';
import { Link } from 'react-router-dom';
import UploadImg from "../../components/UploadImg";
import './styles.css';


export default class CadastrarPacote extends React.Component {
  render() {
    return (
      <>
      <div className="ajuste bg-img">
        <div className="ajuste container mt-5 col-xs col-sm col-md col-lg col-xl ">
          <h2 className="mb-5">CADASTRAR PACOTES</h2>
          
          <div className="ajuste-form container mb-5 ml-5l">
          <form className=" row g-3">
          <div className="card ajust"> 
          
            <UploadImg /> 
          </div>          
            <div className="col-md-10">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome"/>
            </div>
            <div className="col-md-5">
              <label htmlFor="reservado" className="form-label">Diarias</label>
              <select id="reservado" className="form-select">
                <option selected></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
              </select>
            </div>
            <div className="col-md-5">
              <label htmlFor="origem" className="form-label">Origem</label>
              <select id="origem" className="form-select">
                <option selected></option>
                <option>Acre</option>
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
            <div className="col-md-5">
              <label htmlFor="destino" className="form-label">Destino</label>
              <select id="destino" className="form-select">
                <option selected></option>
                <option>Acre</option>
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
            <div className="col-md-3">
              <label htmlFor="saida" className="form-label">Saida</label>
              <input type="date" className="form-control" id="saida" placeholder="12/03/2022"/>
            </div>
            <div className="col-md-3">
              <label htmlFor="retorno" className="form-label">Retorno</label>
              <input type="date" className="form-control" id="retorno" placeholder="26/03/2022"/>
            </div>        
            <div className="col-md-4">
              <label htmlFor="preco" className="form-label">Preço (R$)</label>
              <input type="number" className="form-control" id="preco"/>
            </div>
            <div className="col-md-10">
              <label htmlFor="informacao" className="form-label">Informações</label>
              <textarea className="form-control align-middle col-md-10 rows3" id="informacao" ></textarea>
              
            </div>
           
            <div className="agencia-form-btn-container">
                <button type="submit" className="btn btn-primary agencia-btn">Salvar</button>
            </div>
          </form >
          <Link to="/">
              <button className="btn btn-primary agencia-btn mt-3">Cancelar</button>
          </Link>
          </div>
        </div>
        </div>
      </>
    );
  }
}