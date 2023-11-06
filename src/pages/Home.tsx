import { useEffect,useState} from "react"
import axios from 'axios'
export const Home = ()=>{
  // const [reminders,setReminders] = useState()
  useEffect(()=>{
    (async()=>{
      try{
        const res  = await axios.get("/api/v1/courses")
        console.log(res)
      }catch(e){
        console.log(e)
      }
    })()
  },[])
  return <main className=" py-4">
    <h1>Hello world</h1>
  </main>
}