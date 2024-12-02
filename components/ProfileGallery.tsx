import React from 'react';
import Characters from '../src/CharInfo.json'

const ProfileGallery = (Character:Array<string>) => {
  return (
    <>
<div id="jfbio" className="modal">
  <div className="modal-content">
    <div className="modal-header">
      <span className="close">&times;</span>
    </div>
  <div className="modal-info">
  <img src="../../../images/chargal/james.png"></img>
  <p className="charname">{Character.CharName}</p>
  <p>Age:{Character.Age}</p>
  <p>Birthday: {Character.Birthday}</p>
  <p>Interests: {Character.Interests}</p>
  <p>Occupation: {Character.Occupation}</p>
  </div>
        <div className="modal-bio">{Character.Biography}</div>
  </div>
</div>
</>
  )
}

export default ProfileGallery;