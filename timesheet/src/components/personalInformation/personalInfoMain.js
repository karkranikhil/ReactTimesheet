import React from 'react'
import {reduxForm } from 'redux-form'
import {connect} from 'react-redux'
let PersonalInforCard = (props) =>{
  const user = {...props.state}
  return(
    <>
        <h2>
            Personal Information
        </h2>
        <ul className="personalInfoList">
          <li>Username: {user?.username}</li>
          <li>Phone: {user?.phone}</li>
          <li>Email: {user?.email}</li>
          <li>Gender:  Male</li>
          <li>Date of Birth:  15/12/1988</li>
          <li>Address:  {user?.address?.suite} / {user?.address?.street}, {user?.address?.city} {user?.address?.zipcode}</li>
        </ul>
    </>
  )
}


PersonalInforCard = reduxForm({
  form: 'personalInfoMain', // a unique identifier for this form,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true
})(PersonalInforCard);

PersonalInforCard = connect(
  state => {
      const personInfo = state.form?.personalInfo?state.form?.personalInfo.values:{} 
      return ({
          state: {...state.user.user, ...personInfo}
        })
  }
)(PersonalInforCard)


export default PersonalInforCard