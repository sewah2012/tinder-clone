import React, { useState, useEffect } from 'react'
import Tinder from 'react-tinder-card';
import './TinderCard.css';
import database from './firebase';

const TinderCard = (props) => {
	const [people, setPeople] = useState([]);

	//piece of code which runs based on a condition ...
	useEffect(() => {
		const unsubscribe = database
			.collection('People')
			.onSnapshot(snapshot => {
				setPeople(snapshot.docs.map(doc => doc.data()))
			});

			//clean up function 
			return ()=>{
				unsubscribe();
			}
	}, []);

	return (
		<div>
			<div className='tinderCard__cardContainer'>
				{people.map(person => (
					<Tinder className='swipe'
						key={person.name}
						preventSwipe={['up', 'down']}
					>
						<div style={{ background: `url(${person.imageUrl})` }} className='card'>
							<h3>{person.name}</h3>
						</div>
					</Tinder>
				))}
			</div>
		</div>

	)
}

export default TinderCard
