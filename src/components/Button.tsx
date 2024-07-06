import React, { useState } from 'react'
import ReferralModal from './ReferralModal'

const Button = ({name}:{name:string}) => {
const [showModal,setShowModal]= useState(false)

  return (<div>

    <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={()=>{setShowModal(true)}}>{name}</button>
    {showModal?  <ReferralModal isOpen={true} onClose={()=>{setShowModal(false)}} /> : null}


    
  
  </div>
  )
}

export default Button