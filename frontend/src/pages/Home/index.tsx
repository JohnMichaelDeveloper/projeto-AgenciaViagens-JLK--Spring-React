
import homeImage from "assets/img/hero.png";
// import Listing from 'pages/Listing';
import Pacotes from "pages/Pacote";
import "./styles.css";


function Home() {

   return (
    < >
      <div className="section" id="hero">
      <div className="background">
        <img className="bg-just" src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="container title">
          <h1 className="line typing-animation">Encontre sua viagem Aqui</h1>
          <p>
            Partiu viajar? Aqui na JLK você encontra preços imbativeis e qualidade no serviço.
          </p>
        </div>
        
      </div>
    </div> 

    <div className="container pacote" id="pacote">
      <Pacotes />
    </div>     
    </>
  );
}


export default Home;