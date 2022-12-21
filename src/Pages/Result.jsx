import { Heading } from '@chakra-ui/react'
import React from 'react'

export const Result = () => {
  return (
    <div>
        <Heading>
             Final Score 
        </Heading>
        <br />
           {50+ Math.random()}{"%  Is YOUR SCORE "}
    </div>
  )
}
