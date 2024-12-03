import {useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import ProfileGallery from '../../components/ProfileGallery';
import Characters from '../CharInfo.json';
import Character from '../../components/ProfileGallery'

const charBio = () => {
  const {id} = useParams();
  
  return (
    <>
    <div className="grid-container">
    <div className="grid-item">James Forge
        <button id={`${Character.id}`}><NavLink to={`CharBio/${Character.id}`}><img src="../../../images/chargal/james.png"></img></NavLink></button>
    </div>
    <div className="grid-item">Eric Brooks
        <button id="ed"> <img src="../../../images/chargal/eric.png"></img></button>
    </div>
    <div className="grid-item">Laura Stanton
        <button id="ls"> <img src="../../../images/chargal/laura.png"></img></button>
    </div>
    <div className="grid-item">Amanda Xun
        <button id="ax"> <img src="../../../images/chargal/amanda.png"></img></button>
    </div>
    <div className="grid-item">Dean Knox
        <button id="dk"> <img src="../../../images/chargal/dean.png"></img></button>
    </div>
    <div className="grid-item">Fiona Kramer
        <button id="fk"> <img src="../../../images/chargal/fiona.png"></img></button>
    </div>
    <div className="grid-item">Lawrence Gabriels
        <button id="lg"> <img src="../../../images/chargal/lawrence.png"></img></button>
    </div>
    <div className="grid-item">Patrick Dempsey
        <button id="pd"> <img src="../../../images/chargal/patrick.png"></img></button>
    </div>
    <div className="grid-item">Kieran
        <button id="km"> <img src="../../../images/chargal/kieran.png"></img></button>
    </div>
    <div className="grid-item">Claire
        <button id="cm"> <img src="../../../images/chargal/claire.png"></img></button>
    </div>
    <div className="grid-item">LMS02-Morgan
        <button id="mm"> <img src="../../../images/chargal/morgan.png"></img></button>
    </div>
    <div className="grid-item">LMS01-Typhon
        <button id="tm"> <img src="../../../images/chargal/typhon.png"></img></button>
    </div>
</div>


{/* 
<div id="jfbio" className="modal">
<div className="modal-content">
<div className="modal-header">
<span className="close">&times;</span>
</div>
<div className="modal-info">
  <img src="../../../images/chargal/james.png"></img>
  <p className="charname">James Forge</p>
  <p>Age:23</p>
  <p>Birthday: January 28th</p>
  <p>Interests: Chemistry, Reading, Jogging, Excessive Introspection</p>
  <p>Occupation: Teaching Assistant</p>
</div>
<div className="modal-bio">James. He's a bit of a loser.</div>
</div>

</div> 

<div id="edbio" className="modal">
<div className="modal-content">
<div className="modal-header">
<span className="close">&times;</span>
</div>
<div className="modal-info">
  <img src="../../../images/chargal/eric.png"></img>
  <p className="charname">Eric Douglas</p>
  <p>Age:27</p>
  <p>Birthday: July 2nd</p>
  <p>Interests: Weightlifting, Marksmanship, People-Watching, Eavesdropping</p>
  <p>Occupation: Field Medic</p>
</div>
<div className="modal-bio">James's best friend. Keeps to himself otherwise.</div>
</div>

</div> 

<div id="lsbio" className="modal">
<div className="modal-content">
<div className="modal-header">
<span className="close">&times;</span>
</div>
<div className="modal-info">
  <img src="../../../images/chargal/laura.png"></img>
  <p className="charname">Laura Stanton</p>
  <p>Age:25</p>
  <p>Birthday: June 6th</p>
  <p>Interests: Information Technology, Cryptography, Baseball, Meeting new people</p>
  <p>Occupation: Shock Trooper</p>
</div>
<div className="modal-bio">The team's tech expert. Usually more interested in breaking things than fixing them, though.</div>
</div>

</div> 

<div id="axbio" className="modal">
<div className="modal-content">
<div className="modal-header">
  <span className="close">&times;</span>
  </div>
  <div className="modal-info">
    <img src="../../../images/chargal/amanda.png"></img>
    <p className="charname">Amanda Xun</p>
    <p>Age:31</p>
    <p>Birthday: February 27th</p>
    <p>Interests: Physics, Reading, Finance, Electric Guitar</p>
    <p>Occupation: Squad Leader</p>
  </div>
  <div className="modal-bio">The captain of Unit 27. Amanda leads with a fair hand and avoids making snap judgments even towards her enemies.</div>
</div>

</div> 

<div id="dkbio" className="modal">
<div className="modal-content">
  <div className="modal-header">
    <span className="close">&times;</span>
    </div>
    <div className="modal-info">
      <img src="../../../images/chargal/dean.png"></img>
      <p className="charname">Dean Knox</p>
      <p>Age:39</p>
      <p>Birthday: August 30th</p>
      <p>Interests: Physics, Computer Science, Gambling, Aviation</p>
      <p>Occupation: Mercenary General</p>
    </div>
    <div className="modal-bio">Head of TeraDyne Corporation's field operations and inventor of Urobium, Dean is just as much an accomplished Scientist as he is a powerful combatant.
      Dean's prowess is matched only by his ruthlessness, recruiting James into the company against his will. He seems to have a personal history with the squad of rogue androids...
    </div>
</div>

</div> 

<div id="fkbio" className="modal">
  <div className="modal-content">
    <div className="modal-header">
      <span className="close">&times;</span>
      </div>
      <div className="modal-info">
        <img src="../../../images/chargal/fiona.png"></img>
        <p className="charname">Fiona Kramer</p>
        <p>Age:31</p>
        <p>Birthday: September 21st</p>
        <p>Interests: Chemistry, Fashion, Illustration, Racing</p>
        <p>Occupation: Research Director</p>
      </div>
      <div className="modal-bio">Head of TeraDyne's R&D department. While her role is mostly administrative, Fiona applies her knowledge to the battlefield with her ability to generate
        reactive gases on the fly. Despite her explosive powers, Fiona is even-tempered and cautious, making her a useful foil to the more temperamental Dean.
        Even though they butt heads daily, the two remain reliable friends.
      </div>
  </div>

</div> 

<div id="lgbio" className="modal">
  <div className="modal-content">
    <div className="modal-header">
      <span className="close">&times;</span>
      </div>
      <div className="modal-info">
        <img src="../../../images/chargal/lawrence.png"></img>
        <p className="charname">Lawrence Gabriels</p>
        <p>Age:67</p>
        <p>Birthday: April 4th</p>
        <p>Interests: Robotics, Coffee brewing, Classic literature, social media</p>
        <p>Occupation: CEO</p>
      </div>
      <div className="modal-bio">CEO of TeraDyne energy and TeraDyne Security Corporations, Lawrence is a peculiarly laidback and jovial boss, not too concerned either with the company or even himself.
        This might be because he leaves all of the actual work to Dean, though his nominal subordinate doesn't particularly seem to mind.
      </div>
  </div>

</div> 

<div id="pdbio" className="modal">
  <div className="modal-content">
  <div className="modal-header">
    <span className="close">&times;</span>
    </div>
    <div className="modal-info">
      <img src="../../../images/chargal/patrick.png"></img>
      <p className="charname">Patrick Dempsey</p>
      <p>Age:54</p>
      <p>Birthday: February 29th</p>
      <p>Interests: TV Streaming, Smoking, Poker, Gossip</p>
      <p>Occupation: Executive Security</p>
    </div>
    <div className="modal-bio">Fiona's right hand... something. Patrick is theoretically Fiona's bodyguard, though if he's had any accomplishments she dare not notice them.</div>
  </div>
</div>


<div id="kmbio" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="close">&times;</span>
        </div>
        <div className="modal-info">
          <img src="../../../images/chargal/kieran.png"></img>
          <p className="charname">Kieran</p>
          <p>Age:???</p>
          <p>Birthday: September 30th</p>
          <p>Interests: Parkour, Reading, Theft, Horror Movies</p>
          <p>Occupation: Infiltrator</p>
        </div>
        <div className="modal-bio">A thief who turns James's life upside-down by breaking into his university to obtain the experimental device hidden within.
          Kieran has a sharp tongue, a sharp wit and a sharp blade, and is eager to demonstrate all three of them as the situation calls for it.
          Despite his harsh sense of humor and violent disposition, Kieran possesses an odd fondness for James specifically.
        </div>
      </div>
    </div>
  

  
  <div id="cmbio" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
          </div>
          <div className="modal-info">
            <img src="../../../images/chargal/claire.png"></img>
            <p className="charname">Claire</p>
            <p>Age:???</p>
            <p>Birthday: September 30th</p>
            <p>Interests: Combat Sports, Fashion, Debate, Sightseeing</p>
            <p>Occupation: Berserker</p>
          </div>
          <div className="modal-bio">A grouchy robot who's always seen with Kieran, the "sister" of the two has a temper as fierce as her claws.
            Despite that, Claire genuinely values the few who earn her respect and will die for them just as quickly as she'll kill her enemies.
          </div>
        </div>
      </div>
    

  
  <div id="mmbio" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
          </div>
          <div className="modal-info">
            <img src="../../../images/chargal/morgan.png"></img>
            <p className="charname">LMS-02 Morgan</p>
            <p>Age:??</p>
            <p>Birthday: ???</p>
            <p>Interests: Surfing, Day Trading, Racing, Boxing</p>
            <p>Occupation: Scout</p>
          </div>
          <div className="modal-bio">Kieran and Claire's "mother", Morgan is as steely as she is severe, not wasting words or time.
            While terse, Morgan always spares an ear for her two children and Typhon, and enjoys a strange rapport with Fiona Kramer despite their rivalry.
          </div>
        </div>
      </div>
    
  
    <div id="tmbio" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
          </div>
          <div className="modal-info">
            <img src="../../../images/chargal/typhon.png"></img>
            <p className="charname">LMS-01 Typhon</p>
            <p>Age:??</p>
            <p>Birthday: ???</p>
            <p>Interests: Warfare, History, Natural Sciences, Philosophy, Aviation</p>
            <p>Occupation: Siege Weapon</p>
          </div>
          <div className="modal-bio">The apparent leader of the rogue machines, Typhon has an intense hatred for Dean. 
            While on the battlefield his rage burns bright, Typhon is a devoted family man who fights for sport just as much as he does out of vengeance.
            Typhon also possesses a shocking hunger for knowledge to peer his archnemesis, though whether it's out of genuine curiosity or spite for his rival remains to be seen.
          </div>
        </div>
      </div>
     */}

</>
  )
}

export default charBio;