import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Timer } from './Timer'


export const Select_OPt = ({save_Selcetd_Option , num , ALL_ANS_Data}) => {

  useEffect(()=>{
  },[save_Selcetd_Option ])
  return (
    <div>
        <div style={{color:'lightgrey'}}>
               <p style={{fontSize:'25px'}}>SELECTED ANS </p>
        </div>
      <div style={{fontSize:'30px'}}> 
        {
             ALL_ANS_Data.length ? ALL_ANS_Data.map((elem)=><div key={elem.op_id}>  {elem.name} </div>)
             :save_Selcetd_Option.map((elem)=> <div key={elem.op_id}>  {elem.name} </div> )
        }
        </div>
        <br />
        {
           <Timer save_Selcetd_Option={save_Selcetd_Option} num={num}/>
        }
    </div>
  )
}
