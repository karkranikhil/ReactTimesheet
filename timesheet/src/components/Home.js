import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {usersActions} from '../actions';
import Modal from './Modal';
import PersonalForm from './Form'
import PersonalInforCard from './personalInformation/personalInfoMain'

const HomeWrapper =  () => {
  const {user}  = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [isShowing, setShowing] = useState(false)

  useEffect(() => {
      dispatch(usersActions.getUser());
  },[dispatch])

  const toggleHandler = (data) => {
    console.log("data", data)
    setShowing(!isShowing)
  }

  const handleSubmit = (values) => {
     console.log("val", values)
     setShowing(!isShowing)
  }

  return(
    <>
       <Modal isShowing={isShowing} hide={toggleHandler} >
         <PersonalForm onSubmit={handleSubmit} ></PersonalForm>
       </Modal>

       <PersonalInforCard/>
      <button className="button" onClick={() => toggleHandler(user)}>Edit</button>
    </>
  )
}

export default HomeWrapper;