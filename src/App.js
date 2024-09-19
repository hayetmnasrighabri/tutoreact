import React, { useState } from 'react'

function App() {
const [firstName, setFirstName] = useState('john Doe')
const handleChange=(e)=>{
  setFirstName(e.target.value)
}
const handleReset=()=>{
  setFirstName('')
}
  return (
    <form>
   <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
    {firstName}
   <button type='submit' onClick={handleReset}>reset</button>
   </form>
  )
}

export default App
