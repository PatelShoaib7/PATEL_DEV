import React from 'react'
import { useEffect , useState} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const Timer = ({save_Selcetd_Option , num}) => {
    const [number , setNumber]=useState(1)
useEffect(()=>{

},[save_Selcetd_Option])
  return (
    <div>
<div>
  <svg>
  <defs>
    <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
      <stop offset="5%" stopColor="gold" />
      <stop offset="95%" stopColor="red" />
    </linearGradient>
  </defs>
</svg>
   <CountdownCircleTimer
    size={100}
    isPlaying
    duration={15}
    colors="url(#your-unique-id)"
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
        // do your stuff here
        return { shouldRepeat: true, delay: 0 } // repeat animation in 1.5 seconds
      }}
  >
    {({ remainingTime }) => remainingTime}
  
  </CountdownCircleTimer>
  </div>
    </div>
  )
}
