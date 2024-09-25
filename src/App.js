import React  from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import Input from './components/form/Input'
function App() {
  const [firstname, setFirstname]=useState('John')
  const [password, setPassword]=useState('MotDePasse')
    const security= useMemo(()=>{
      return passwordSecurity(password)
    },[password])
   
  return (
    <div className='container my-3 vstack gap-2'>
      
      <Input
      label="nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />
     <div>
      <label>Password</label>
      <Input
       value={password}
       onChange={setPassword}
      />
   </div>
      securité:{security}
    </div>
  )
}
function passwordSecurity(password){
  let startTime= performance.now()
  while(performance.now()-startTime<100){

  }
  if (password<3){
    return"faible"

  }else if(password<6){
    return"Moyen"
  }
  return "fort"
}
export default App
