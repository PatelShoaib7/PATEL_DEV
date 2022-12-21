import { Question1 } from "../Components/Question1"
import { Home } from "./Home"
import { Result } from "./Result"

export const hanldeChnage =(num , question_DAT)=>{
    console.log(num , 'compnetn to re reder ')
   switch(num){
       case 1 : {
                  
           return <Question1 num={num} question_DAT={question_DAT} />
       }
       case 2 :{
           return <Question1 num={num}  question_DAT={question_DAT} />
       }
       case 3 :{
        return <Question1  num={num}   question_DAT={question_DAT}/>
        }
        case 4 :{
            return <Result />
        }
       default :{
           return   <Home />
       }
   }
}







