import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: 'john',
    lastName: 'Doe',
    age:18
  })
const IncrementeAge=()=>{
  setPerson({...person, age: person.age+1})
}


const [count, setCount]= useState(0) 
const IncrementeCount=()=>{
   setCount(count+1)
}
  return (
    <>
    <p>age de {person.firstName}: {person.age}</p>
    <button onClick={IncrementeAge}>Gagner une année</button>
    <p>compteur: {count}</p>
    <button onClick={IncrementeCount}>Incrementer</button>
   </>
);
}

export default App;
