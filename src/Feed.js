import React, { useEffect , useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import firebase from "firebase"
import { db } from './firebase'


function Feed() {

    const [input, setInput] = useState("")

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        )
    }, [])

    const sendPost = e => {
        e.preventDefault()

        db.collection('posts').add({
            name: 'Ali',
            desc: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
            </div>
        </div>

        {/* Posts */}
        {posts.map(({id, data: { name, desc, message, photoUrl }}) => {
            <Post
                key={id}
                name={name}
                desc={desc}
                message={message}
                photoUrl={photoUrl}
            />
        })}

        <Post name='Ali Bidkhori' desc='This is a test' message='WOW this worked'/>

    </div>
  )
}

export default Feed