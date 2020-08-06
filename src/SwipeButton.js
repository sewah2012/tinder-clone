import React from 'react'
import './SwipeButton.css'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButton = () => {
	return (
		<div className = 'swipeButton'>
			<IconButton>
				<ReplayIcon fontSize= 'large' className='swipeButton__replayIcon'/>
			</IconButton>
			<IconButton>
				<CloseIcon fontSize= 'large' className='swipeButton__CloseIcon'/>
			</IconButton>
			<IconButton>
				<StarRateIcon fontSize= 'large' className='swipeButton__StarRateIcon'/>
			</IconButton>
			<IconButton>
				<FavoriteIcon fontSize= 'large' className='swipeButton__FavoriteIcon'/>
			</IconButton>
			<IconButton>
				<FlashOnIcon fontSize= 'large' className='swipeButton__FlashOnIcon'/>
			</IconButton>
		</div>
	)
}

export default SwipeButton;
