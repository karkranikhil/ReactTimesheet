import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useSelector } from 'react-redux';

let Form = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    
    const {user}  = useSelector(state => state.user)
    return(
        <div className="formMainWrapper ">
        <h3>Change Personal Information</h3>
           <form onSubmit={handleSubmit}>
           <div className="feldsDiv">
               <label htmlFor="username" className="formLabel">Username</label>
               <Field name={user.username} placeholder={user.username} component="input" type="text" className="formInput"  />
           </div>
           <div className="feldsDiv">
               <label htmlFor="phone" className="formLabel">Phone</label>
               <Field name={user.phone} placeholder={user.phone} component="input" type="text" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="email" className="formLabel">Email</label>
               <Field name={user.email} placeholder={user.email} component="input" type="email" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Unit no.</label>
               <Field name="address" placeholder={user.address.suite} component="input" type="text" className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Street</label>
               <Field name="address" placeholder={user.address.street} component="input" type="text"
               className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">City</label>
               <Field name="address" placeholder={user.address.city} component="input" type="text"
               className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Zipcode</label>
               <Field name="address" placeholder={user.address.zipcode} component="input" type="text"
               className="formInput"/>
           </div>
           <div className="mainDiv">
               <button type="submit" disabled= {pristine || submitting} className="button">Submit</button>
               <button type="submit" disabled= {pristine || submitting} className="button" onClick={reset}>Reset</button>
           </div>
           </form>
    </div>
    )
}

Form = reduxForm({
    form:'personlaInfo'
})(Form)

export default Form;