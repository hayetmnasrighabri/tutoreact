import React, { useState } from 'react'

function App() {
const[value, setValue]= useState('')
const handleChange=(e)=>{
  setValue(e.target.value)
}
  return (
    <form>
   <textarea value={value} onChange={handleChange}/>
   <button type='submit'>Envoyer</button>
   </form>
  )
}

export default App
