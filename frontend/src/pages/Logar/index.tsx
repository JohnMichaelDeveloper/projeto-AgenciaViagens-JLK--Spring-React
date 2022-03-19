
import React from "react"



import "./styles.css";


export default class Logar extends React.Component {
  render() {
    return (
      <>
      <div className="bg_img">
        {/* <img src="https://drive.google.com/file/d/122H_J6iurxkXZoPkfh6v-64ga7VIjlg7/view?usp=sharinghttps://player.vimeo.com/external/333187445.sd.mp4?s=980ab5ba38a2e8a4fba36b1dece03081e49087ae&profile_id=139&oauth2_token_id=57447761" alt="" /> */}
        <br />
        <br />
      <div className="container mt-5 bg_form">
      
              <h2>QUE BOM QUE VOCÊ VEIO!</h2>
      
      <div className="container mt-5">
        <form className="row g-3">
          <div className="row-md-8">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4"/>
          </div>
                  
            <div className="row-md-8">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword"/>
            </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </>
    );
  }
}




