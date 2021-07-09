import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {usersActions} from '../actions';
import Modal from './Modal';
import Form from './Form'
import PersonalInforCard from './personalInformation/personalInfoMain'

const HomeWrapper =  () => {
  const {user}  = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [isShowing, setShowing] = useState(false)

  useEffect(() => {
      dispatch(usersActions.getUser());
  },[dispatch])

  const toggleHandler = (data) => {
    // console.log("d", data)
    setShowing(!isShowing)
  }

  const submit = (values) => {
     console.log("val", values)
  }

  return(
    <>
       <Modal isShowing={isShowing} hide={toggleHandler} >
         <Form onSubmit={submit} ></Form>
       </Modal>

       <PersonalInforCard user={user} editHandler={toggleHandler}/>
    </>
  )
}

export default HomeWrapper;