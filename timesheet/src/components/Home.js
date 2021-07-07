import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {usersActions} from '../actions';
import Modal from './Modal';
import Form from './Form'

const HomeWrapper =  () => {

  const {users = {}} = useSelector(state => state.users)
  const dispatch = useDispatch();
  const [isShowing, setShowing] = useState(false)

  useEffect(() => {
      dispatch(usersActions.getUsers());
  },[dispatch])

  const toggleHandler = () => {
    setShowing(!isShowing)
  }

  const submit = (values) => {
     console.log("val", values)
  }

  return(
    <>
       <Modal isShowing={isShowing} hide={toggleHandler} >
         <Form onSubmit={submit}></Form>
       </Modal>
        <h2>
            Personal Information
        </h2>
        <ul className="personalInfoList">
          <li>Username: {users.username}</li>
          <li>Phone: {users.phone}</li>
          <li>Email: {users.email}</li>
          <li>Gender:Male</li>
          <li>Date of Birth:15/12/1988</li>
          <li>Marital Status: Married</li>
        </ul>
        <button className="button" onClick={toggleHandler}>Edit</button>                                                     
    </>
  )
}

export default HomeWrapper;