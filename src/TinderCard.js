import React, {useState} from 'react'
import Tinder from 'react-tinder-card';
import './TinderCard.css';

const TinderCard = (props) => {
	const [people, setPeople] = useState([
		{ name: 'Emmanuel S. Sewah', imageUrl: 'https://lh3.googleusercontent.com/TPJ2ao5lSoZK0bdf6omO9iUvzYNiVTvuTYcGp2B8CKHz3mdG1vYU5Y2StZFpt6MQQx3LC06ys5azmRagxizgIx7zj_kUbdf85uc8z8AN52QyoWfqlWPqCoMe0Yz1b2TxSkRakB8TaIONd3z91CjpDCxTqkZ0z-yGzbx9-t9C08jA-kYlK_kBvPw4Vg_J8oZMy0sMZbPhmKwbPYbZg9rL-B39WfFrfVtCdWjsyqN8A-X63l-6U4ydTWB1w_2wruiCutXvFVbrj4Bu59mxuHuDkPoAu4NdgkygqsTJJohlTssE9J2Gp71FiQ2twPByrQKXkVTCraQ-EEi4FfECqfAFbUPNzcZCUxXn5y3mmwnOR_iCLKvp7guilmGmDSlLWNu_JpCnNPC345laE-k7KdInqyBepQcKCRmYnshLxoPf18pIdMsJmjZboG1gDLGOLiQ0haQYZ-YbaoUIcxzWqD5APt6BUgxw6lW9oeuqiboWiAJulLywkkE7yWEGI1o5I_r8DgwRXZEbMJhO12JECKPYxby3Altw-MEmwrMVU2jVGw6ZL0Yp_VcQZvpALkbG5x0MCIx_Wo8mD-Kx2l0BuY8Zbv17fhacwWGHMMaZqtRFzRDFK0POrHZJoKEWpE3xVLrvZOwYzR0LOOEQ0VsNxDsoTgDdo96iN0tx_2GAHtpa_vJuTFpphWPXvyKpV_e6=w426-h757-no?authuser=0'},
		{ name: 'Anthony Habar', imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQH8pwF2iqXBCw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=I3ohZiIoZiwyHyNhSwHWSv8jpQ6QVPsrYD_t3WsVPao' }
	]);

	return (
		<div className='tinderCard__cardContainer'>
			{people.map(person => (
				<Tinder className = 'swipe'
					key = {person.name}
					preventSwipe = {['up','down']}
				>
					<div style = {{background: `url(${person.imageUrl})`}} className = 'card'>
						<h3>{person.name}</h3>
					</div>
				</Tinder>
			))}
		</div>
	)
}

export default TinderCard
