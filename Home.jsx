import React, { useState } from 'react'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [value, setValue] = useState('');
    const navigateTo = useNavigate();

    const handleJoinMeeting = () => {
        navigateTo(`/room/${value}`)
        
    }
  return (
    <div>
        <Hero/>
        <div className="container">
            <h1>Join Meeting</h1>
            <div className='divv'>
                <input type="text" placeholder='Geenrate Meeting ID' value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button disabled={!value} onClick={handleJoinMeeting}>Join Meeting</button>
            </div>
        </div>
    </div>
  )
}

export default Home