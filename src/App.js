import React, { useState } from 'react'

function App() {
//const [firstName, setFirstName] = useState('john Doe')
//const handleChange=(e)=>{
  //setFirstName(e.target.value)
//}
//const handleReset=()=>{
  //setFirstName('')
//}

const handleSubmit=(e)=>{
 e.preventDefault()
 console.log(new FormData(e.target.value))
}
  return (
    <form onSubmit={handleSubmit}>
   <input type='text' name='firstName' defaultValue="john"/>
   <button type='submit'>Envoyer</button>
   </form>
  )
}

export default App
