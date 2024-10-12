import Chance from "chance";

const chance=Chance()
export const sendName=()=>{
   return  chance.name({ middle: true })
}
