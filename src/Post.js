import { Avatar } from '@mui/material'
import React from 'react'
import './post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'


function Post({name, desc, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ShareOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={SendOutlinedIcon} title='Like' color='gray'/>
        </div>
        
    </div>
  )
}

export default Post