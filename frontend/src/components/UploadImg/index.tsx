import React, { Component } from "react";
import "./styles.css";


class UploadImg extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };
  imageHandler = (etes: { target: { files: Blob[]; }; }) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(etes.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className=".container-img">
          
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="image"
            // onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload mr-3" htmlFor="image">
              <i className="material-icons align-middle mt-3t ">add_photo_alternate</i>
              <h4 className="align-middle mt-3t mr-3">Upload</h4>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImg;
