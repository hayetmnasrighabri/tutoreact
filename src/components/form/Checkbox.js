import React from 'react'

function Checkbox({checked, label, onChange, id}) {
  return (
    <div className='form-check'>
      
        <input
          type='checkbox'
          className='form-check-input'
          checked={checked}
          onChange={(e)=>onChange(e.target.checked)}
        />
      <label className='form-check-label'>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
