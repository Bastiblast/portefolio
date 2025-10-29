import React, { useState } from 'react'

export default function Video() {
      const [isPlaying,setIsPlaying] = useState(false)

  const handleClick = () => setIsPlaying(!isPlaying)

  
  return (
             <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250"
         controls preload="none"
      >
        
        <source
          src="grok-libellule.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
