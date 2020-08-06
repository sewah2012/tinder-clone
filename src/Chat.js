import './Chat.css'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const Chat = ({name, message,timeStamp,profilePic}) => {
	return (
		<div className = 'chat'>
			<Avatar className = 'chat__img'src = {profilePic} alt = {name} />
		
			<div className = 'chat__info'>
				<h2>{name}</h2>
				<p>{message}</p>
			</div>

			<p className = 'chat__timeStamp'>{timeStamp}</p>
			
		</div>
	)
}

export default Chat
