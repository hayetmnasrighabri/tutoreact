import React, { useState } from 'react'

function App() {
const[value, setValue]= useState('')
const handleChange=(e)=>{
  setValue(e.target.value)
}
 const [checked, setChecked]= useState(true)
 const toggleCheck=()=>{
  setChecked(!checked)
 }
return (
    <form>
   <textarea value={value} onChange={handleChange}/>
  <input type='checkbox' checked={checked} onChange={toggleCheck}/>
   {checked && <button type='submit'>Envoyer</button>}
   
   </form>
  )
}

export default App
