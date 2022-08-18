import { DogCard } from "./DogCard"


function DogCollection({dogs}) {

  const dogCards=dogs.map((dog, index )=> <DogCard dog={dog} key={index}/>)

  return (
    <div>
      {dogCards}
    </div>
  )
}

export {DogCollection}
