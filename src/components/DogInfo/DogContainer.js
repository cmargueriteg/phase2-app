import { useEffect, useState } from "react"
import { DogCollection } from "./DogCollection"
import { DogSearch} from "./DogSearch"



function DogContainer() {

const [dogs, setDogs] = useState([])

const fetchData = () => {
fetch("http://localhost:3000/dogs")
.then(resp => resp.json())
.then(data => setDogs(data))}

useEffect (() => {
  fetchData()

  
}, [])



  return (
    <div>
      <DogCollection dogs={dogs}/>
      <DogSearch />
      
      
    </div>
  )
}

export {DogContainer}
