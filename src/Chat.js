import './Chat.css'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'

const Chat = ({name, message,timeStamp,profilePic}) => {
	return (

		<Link to={`/chat/${name}`} >
			<div className = 'chat'>
			<Avatar className = 'chat__img'src = {profilePic} alt = {name} />
		
			<div className = 'chat__info'>
				<h2>{name}</h2>
				<p>{message}</p>
			</div>

			<p className = 'chat__timeStamp'>{timeStamp}</p>
			
		</div>
		</Link>
		
	)
}

export default Chat
