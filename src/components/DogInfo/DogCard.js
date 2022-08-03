

function DogCard({dog}) {



  return (
    <div>
      <h2>{dog.name}</h2>
      <img src = {dog.image} ></img>
      <h5>{dog.age}</h5>
      <h5>{dog.Sex}</h5>
      <h5>{dog.breed}</h5>

    </div>
  )
}

export {DogCard}
