import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import AddPhoto from '../Components/AddPhoto'


const Galery = () => {
  const[showModal,setShowModal]=useState(false)
  const tours=useSelector(store=>store.tours)
  return (
    <>
      
      <div className='photos'>
      {tours.map(tour=> <div className='sharedPhoto'> <img src={tour.photo} alt='sharedPhoto'/></div>)}
      <div className='addPhoto' onClick={()=> setShowModal(true)} >
      <h1 id="plus"><FontAwesomeIcon icon={faPlus} /></h1>
      </div>
      {showModal && <AddPhoto  setShowModal={setShowModal}/>}
      </div>
    </>
  )
}

export default Galery
