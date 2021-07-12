import React from 'react'

export default function PersonalInfoMain ({user}) {
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
          {/* <li>Address:  {street}</li> */}
          <li>Address:  {user?.address?.suite} / {user?.address?.street}, {user?.address?.city} {user?.address?.zipcode}</li>
        </ul>
    </>
  )
}