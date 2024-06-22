import React, { useEffect, useState } from 'react';
import './Feed.css';

import InputOption from './InputOption/InputOption';
import Post from './Post/Post';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import { db } from '../../core/components/dependency/Firebase/Firebase';
import firebase from 'firebase';
//import { auth } from '../../core/components/dependency/Firebase/Firebase';

function Feed() {
    
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => (
        setPosts(snapshot.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    ));
}, []);

  const sendPost = (e) => { 
    e.preventDefault();
    db.collection('posts').add({
        name: 'Prashil Lonakar',
        description : 'This is Test',
        message: input,
        photoUrl: '',
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">  
            <div className="feed__input"> 
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendPost} type='submit' >Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>            
        </div>
        {
            posts.map(({id ,data:{name,description,message,photoUrl}}) => ( 
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))
        }
        <Post name="Prashil Lonakar" description="This is a test" message="woow works" />
    </div>
  )
}

export default Feed;