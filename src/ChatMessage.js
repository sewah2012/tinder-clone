import React, {useState} from 'react'
import './ChatMessage.css';
import { Avatar } from '@material-ui/core';

const ChatMessage = (props) => {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([
		{
			name: 'Debbie', 
			imageUrl: 'https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/89909422_221646372318153_5949933948812394496_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_eui2=AeGuJujpEuOa8kGOMY-5PzThh0nspa_NhoaHSeylr82GhlS8_BTkch4HF5pm4wuEWAEDdw9Ot9tNn4mjEYo-YaUa&_nc_ohc=oY0cHaM57M4AX-MFO8S&_nc_ht=scontent.fcmn5-1.fna&oh=b03e6dafb38690267d7709960414acd7&oe=5F54A088',
			message: 'Hi bb '
		}, 

		{
			
			message: 'Hi huni '
			
		}, 

		{
			name: 'Debbie', 
			imageUrl: 'https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/89909422_221646372318153_5949933948812394496_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_eui2=AeGuJujpEuOa8kGOMY-5PzThh0nspa_NhoaHSeylr82GhlS8_BTkch4HF5pm4wuEWAEDdw9Ot9tNn4mjEYo-YaUa&_nc_ohc=oY0cHaM57M4AX-MFO8S&_nc_ht=scontent.fcmn5-1.fna&oh=b03e6dafb38690267d7709960414acd7&oe=5F54A088',
			message: 'Miss u huni '
		}
	]);

	//handleSend function 

	const handleSend = e=>{
		e.preventDefault();
		setMessages([...messages, {message: input}]);
		setInput('');
	}
	return (
		<div className = 'chatmessage'>
			<p className = 'chatmessage__timestamp'>You matched with Eman on the 08/08/2020</p>

			{
				messages.map(message =>(
					message.name ? 
					<div className = 'chatmessage__message'>
						<Avatar 
							className = 'chatmessage__image'
							alt = {message.name}
							src = {message.imageUrl}
						/>
						<p className = 'chatmessage__text'>{message.message}</p>
					</div> 
					:
					<div className = 'chatmessage__message'>
					
					<p className = 'chatmessage__textR'>{message.message}</p>
				</div>
				))
			}

			<div >
				<form className = 'chatmessage__input'>
					<input
						value = {input}
						onChange = {e=>setInput(e.target.value)} 
						placeholder = 'Send a message'
						className = 'chatmessage__inputcontainer'
						type = 'text' />
					<button type='submit' onClick ={handleSend} className = 'chatmessage__inputbutton'>Send</button>
				</form>
			</div>
		</div>
	)
}

export default ChatMessage
