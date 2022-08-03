import { DogCard } from "./DogCard"


function DogCollection({dogs}) {

  const dogCards=dogs.map(dog => <DogCard dog={dog}/>)

  return (
    <div>
      {dogCards}
    </div>
  )
}

export {DogCollection}
