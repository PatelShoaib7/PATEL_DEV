
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Select_OPt } from './Select_OPt';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Flex, Spacer , Heading } from '@chakra-ui/react'
export const Question1 = ({question_DAT , num}) => {
  const [mapingDATA , setMAPINGdAT]= useState([])
  const [save_Selcetd_Option , setSelectd]=useState([]);
  const [ALL_ANS_Data, setAllANs]=useState([]);
  
  const Map_Dta_Using_LOOP =()=>{
   for(let x in question_DAT ){
    if(x == "OPTIONS"){
      setMAPINGdAT([...question_DAT[x]])
    }
   }
  }

   const handleChange =(e)=>{
        const val =e.target.value;
        console.log(val ,'val')
      const updateDATA =mapingDATA.map((elem)=>{
          if(elem.op_id == val){
            return {
              ...elem,
              status:true
            }
          }else{
            return {
              ...elem,
              status:false
            }
          }
        })
        setMAPINGdAT(updateDATA);
         const Sinagl_Selct_OPTN = mapingDATA.filter((elem)=> elem.op_id == val);
         setSelectd(Sinagl_Selct_OPTN);
         setAllANs([...ALL_ANS_Data ,  ...save_Selcetd_Option])
    }
     
   const handleSubmit=(e)=>{
    e.preventDefault();
   
   }
  console.log(ALL_ANS_Data,'ALL_ANS_Data  ')

  useEffect(()=>{
    Map_Dta_Using_LOOP();
  },[num ])
  return (
    <div> <Heading>Q{question_DAT.Q_ID}{" : "}{question_DAT.Q1}</Heading>
        
    <div style={{display:"grid" , gridTemplateColumns:'repeat(2,1fr)' , border:'30px solid lightgrey' , width:'fit-content', margin:'auto' , height:'fit-content' , borderRadius:'12px'}}>
          <div style={{borderRight:'1px solid lightgrey'}}>
          
             <Select_OPt save_Selcetd_Option={save_Selcetd_Option} num={num} ALL_ANS_Data={ALL_ANS_Data}/>

          </div>
       <div >
           <form onSubmit={(e)=> handleSubmit(e)}>
            {  
            //mapingDATA.OPTIONS
            mapingDATA.map((elem)=>(
                              <div key={elem.op_id} style={{fontSize:'28px'}}>
                                 <input onChange={(e)=> handleChange(e)} type="radio" 
                                        value={elem.op_id}
                                         checked={elem.status}
                                  />
                                  {elem.name}
                                  <br />
                                  {/*  */}
                        </div>))
                          
            }
           
             </form>
       </div> 
          
       </div> 
    </div>
  )
}


















// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'


// // const question_DATA  =[{},
// //   {"Q1":"Who Is Captain of REB?" , "OPTIONS":["King Kohli","Captain Cool Dhoni","Angry Bird Gutam Gambhir","Chiken Lover Rohit Sharma"]},
// //  {"Q2":"Who Is Captain of REB?" , "OPTIONS":["King Kohli","Captain Cool Dhoni","Angry Bird Gutam Gambhir","Chiken Lover Rohit Sharma"]},
// //  {"Q3":"Who Is Captain of REB?" , OPTIONS:["King Kohli","Captain Cool Dhoni","Angry Bird Gutam Gambhir","Chiken Lover Rohit Sharma"]}
// // ]
// export const Question1 = ({question_DAT , num}) => {
//     console.log(question_DAT)
//     const [ans , setAns]=useState([])
//      const [statuNOW, setStatus]=useState([]);
//      console.log(ans )
//    const handleChange =(e)=>{
//          let val = e.target.value;
//           const upDatedDta = question_DAT.OPTIONS.map((elem)=> {
//             if(elem.id == val ){
//               console.log(elem.id,'id inside loop')
//               return {
//                 ...elem ,
//                 status:true
//               }
//             }else{
//               return {
//                 ...elem
//               }
//             }
//           })
//           setStatus(upDatedDta)
//        let save_To_LS = upDatedDta.filter((elem)=> elem.status == true);
//        setAns([...ans , ...save_To_LS])
//          localStorage.setItem("ALL_ANS" , JSON.stringify(save_To_LS))
//     }
//   useEffect(()=>{

//   },[statuNOW])
//   return (
//     <div>Question
//        <div>
//            {
//            statuNOW.length  ?  statuNOW.map((elem , i)=>(
//              <div><input onChange={(e)=> handleChange(e)} type="radio" 
//                    value={statuNOW.length ? question_DAT.OPTIONS.id : elem.id}
//                    checked={elem.status} />{elem.name}
//              </div>
//             )):  question_DAT.OPTIONS.map((elem)=>(
//               <div><input onChange={(e)=> handleChange(e)} type="radio" 
//               value={statuNOW.length ? question_DAT.OPTIONS.id : elem.id}
//                checked={elem.status}
//                />{elem.name}
//         </div>
//             ))
//            }   
//        </div>  
//     </div>
//   )
// }














// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import { Select_OPt } from './Select_OPt';

// export const Question1 = ({question_DAT , num}) => {
//   const [mapingDATA , setMAPINGdAT]= useState([])
//   //console.log(mapingDATA ,'mappping data ')
//   const [save_Selcetd_Option , setSelectd]=useState([]);
//   // console.log(save_Selcetd_Option,'save_Selcetd_Option')
 
//  const [final , setFinal]=useState([])
//   const Map_Dta_Using_LOOP =()=>{
//    for(let x in question_DAT ){
//     if(x == "OPTIONS"){
//       setMAPINGdAT([...question_DAT[x]])
//     }
//    }
//   }

//    const handleChange =(e)=>{
//         const val =e.target.value;
//         console.log(val ,'val')
//       const updateDATA =mapingDATA.map((elem)=>{
//           if(elem.op_id == val){
//             return {
//               ...elem,
//               status:true
//             }
//           }else{
//             return {
//               ...elem,
//               status:false
//             }
//           }
//         })
//         setMAPINGdAT(updateDATA)
//     }
     
   


//   useEffect(()=>{
//     Map_Dta_Using_LOOP();
//   },[num ])
//   return (
//     <div>Question <h2>{question_DAT.Q1}</h2>
        
//     <div style={{display:"grid" , gridTemplateColumns:'repeat(2,1fr)' , border:'1px solid black' , width:'50%', margin:'auto'}}>
//           <div style={{border:'2px solid blue'}}>
//              <Select_OPt save_Selcetd_Option={save_Selcetd_Option} num={num}/>

//           </div>
//        <div >
//             {  
//             //mapingDATA.OPTIONS
//             mapingDATA.map((elem)=>(
//                               <div key={elem.op_id}>
//                                  <input onChange={(e)=> handleChange(e)} type="radio" 
//                                         value={elem.op_id}
//                                          checked={elem.status}
//                                   />
//                                   {elem.name}
//                                   <br />
//                                   {/*  */}
//                         </div>))
                          
//             }
//        </div> 
      
//        </div> 
//     </div>
//   )
// }