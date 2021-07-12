import React from 'react'

export default function PersonalInfoMain ({user}) {
  const {
    username,
    email,
    phone,
  } = user;

  return(
    <>
        <h2>
            Personal Information
        </h2>
        <ul className="personalInfoList">
          <li>Username: {username}</li>
          <li>Phone: {phone}</li>
          <li>Email: {email}</li>
          <li>Gender:  Male</li>
          <li>Date of Birth:  15/12/1988</li>
          {/* <li>Address:  {street}</li> */}
          {/* <li>Address:  {user?.address?.suite} / {user?.address?.street}, {user?.address?.city} {user?.address?.zipcode}</li> */}
        </ul>
    </>
  )
}