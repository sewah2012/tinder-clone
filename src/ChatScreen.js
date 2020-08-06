import React from 'react'
import './ChatScreen.css'
import Chat from './Chat';


const ChatScreen = () => {


	return (
		<div className = 'chats'>
			<Chat
				name = 'Eman'
				message = 'Hi Super Lifter'
				timeStamp = '40 seconds ago'
				profilePic = '...'
			/>

		</div>
	)
}

export default ChatScreen
