import {useParams} from 'react-router-dom';
import {CharacterInfo, GetImage} from "@/data/CharacterInfo.ts";
import {NavLink} from 'react-router-dom';



let ProfileGallery = () => {
    const {id} = useParams();
    const characterInfo = CharacterInfo.find(charInfo => charInfo.id === id);

    return (
        <div>
            {
                characterInfo
                    ? (<div key={characterInfo.id}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close"><NavLink to='/characters'>&times;</NavLink></span>
                            </div>
                            <div className="modal-info">
                                <img src={GetImage(characterInfo)}></img>
                                <p className="charname">{characterInfo.charName}</p>
                                <p>Age:{characterInfo.age}</p>
                                <p>Birthday: {characterInfo.birthday}</p>
                                <p>Interests: {characterInfo.interests}</p>
                                <p>Occupation: {characterInfo.occupation}</p>
                            </div>
                            <div className="modal-bio">{characterInfo.biography}</div>
                        </div>
                    </div>)
                    : (<div>N/A</div>)
            }
        </div>
    );
};

export default ProfileGallery;