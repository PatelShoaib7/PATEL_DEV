import { useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { Question1 } from '../Components/Question1'
import { hanldeChnage } from './Change'

import { Result } from './Result'
 let quesss = [{}, ]
  const question_DATA  =[{}, 
    { Q_ID:1,"Q1":"Who Is Captain of RCB?" , "OPTIONS":[ 
                                                {name:"Fab Duplisi" , status:false , op_id:1},
                                                {name:"Dhoni" ,       status:false ,       op_id:2},
                                                {name:"R Shrma" ,     status:false ,    op_id:3},
                                                {name:"V KOhli" ,       status:false ,     op_id:4}] , "status":false},
{Q_ID:2,"Q1":"Among Below Four , Who Has Taken Most Wickest In IPL?" , "OPTIONS":[
                                            {name:"Chahal Y" , status:false ,   op_id:1},
                                            {name:"Jadeja " ,       status:false , op_id:2},
                                            {name:"Ashwin" ,      status:false , op_id:3} ,
                                            {name:"Bravo" ,      status:false , op_id:4}] , "status":false},
{Q_ID:3,"Q1":"WHICH ONE OF THE FOLLOWING CAPTIN OWNS 2 TROPHIES FOR KKR?" , "OPTIONS":[
                                            {name:"Iyyer" ,    status:false , op_id:1},
                                            {name:"Dinesh" ,   status:false , op_id:2},
                                            {name:"Manish P" ,  status:false , op_id:3} , 
                                            {name:"Goutam G" ,   status:false , op_id:4}] , "status":false}
]
 localStorage.setItem("DATA", JSON.stringify(question_DATA))
export const Home = () => {
  
        const[num , setNUM]=useState(1);
        const ref = useRef(null);
        let timer;
     const handleTimer =()=>{
        timer = setTimeout(()=>{
            if(num != null)
            setNUM(num + 1) 
         },15000)
     }
      const Clen_Timer =()=>{
       clearInterval(timer)
      }


      









     const COMPONENT =  hanldeChnage(num ,question_DATA[num])
   
     useEffect(()=>{
        handleTimer();
       if(num == 4){
        Clen_Timer()
       }
     },[num])
     
  return (
    <div>
        <br />
        <div>
             {/* COMPONENT TOB BE MOUTED AFTER TWO MINITUE WILL BE DISPAYED HERE */}
                 {COMPONENT}
        </div>
    </div>
  )
}















// import React from 'react'
// import { useState } from 'react'
// import { useRef } from 'react'
// import { useCallback } from 'react'
// import { useEffect } from 'react'
// import { Question1 } from '../Components/Question1'

// import { Result } from './Result'
//  let quesss = [{}, ]
//   const question_DATA  =[{}, 
//     {"Q1":"Who Is Captain of RCB?" , "OPTIONS":[  {name:"Fab Deplisi" , status:false , id:"Q1A"},
//                                                 {name:"Dhoni" , status:false ,       id:"Q1B"},
//                                                 {name:"R Shrma" , status:false ,    id:"Q1C"},
//                                                 {name:"R Pant" , status:false ,     id:"Q1D"}] , "status":false},
// {"Q1":"Who Is Captain of CSK?" , "OPTIONS":[{name:"Dhoni" , status:false ,   id:"Q2A"},
//                                             {name:"Jadeja " , status:false , id:"Q2B"},
//                                             {name:"Ashwin" , status:false , id:"Q2C"} ,
//                                             {name:"R Pant" , status:false , id:"Q2D"}] , "status":false},
// {"Q1":"Who Is Captain of KKR?" , "OPTIONS":[{name:"Iyyer" , status:false , id:"Q3A"},
//                                             {name:"Dinesh" , status:false , id:"Q3B"},
//                                             {name:"Virat K" , status:false , id:"Q3C"} , 
//                                             {name:"R Pant" , status:false , id:"Q3D"}] , "status":false}
// ]
// export const Home = () => {
//         const[num , setNUM]=useState(1);
//         const ref = useRef(null);
//         let timer;
       
//       console.log(num ,'is currenbt value of num')
//      const handleTimer =()=>{
//         timer = setTimeout(()=>{
//             if(num != null)
//             setNUM(num + 1) 
//          },5000)
//      }
//       const Clen_Timer =()=>{
//        clearInterval(timer)
//       }
//      const COMPONENT =  hanldeChnage(num ,question_DATA[num])
//      useEffect(()=>{
//         handleTimer();
//        if(num == 4){
//         Clen_Timer()
//        }
//      },[num])
     
//   return (
//     <div>Home
//         <br />
//         <div>
//                  {COMPONENT}
//         </div>
//     </div>
//   )
// }




// const hanldeChnage =(a , question_DAT)=>{
//     console.log(a , 'compnetn to re reder ')
//    switch(a){
//        case 1 : {

//            return <Question1 question_DAT={question_DAT} />
//        }
//        case 2 :{
//            return <Question1 question_DAT={question_DAT} />
//        }
//        case 3 :{
//         return <Question1  question_DAT={question_DAT}/>
//         }
//         case 4 :{
//             return <Result />
//         }
//        default :{
//            return 
//        }
//    }
// }
