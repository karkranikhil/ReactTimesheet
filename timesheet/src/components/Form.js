import React from 'react'
import {Field, reduxForm} from 'redux-form'

let Form = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return(
        <div className="formMainWrapper ">
        <h3>Change Personal Information</h3>
           <form onSubmit={handleSubmit}>
           <div className="feldsDiv">
               <label htmlFor="userName" className="formLabel">Username</label>
               <Field name="userName" component="input" type="text" className="formInput" disabled />
           </div>
           <div className="feldsDiv">
               <label htmlFor="phone" className="formLabel">Phone</label>
               <Field name="phone" component="input" type="text" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="email" className="formLabel">Email</label>
               <Field name="email" component="input" type="email" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="gender" className="formLabel">Gender</label>
               <Field name="gender" component="select" type="text" className="formInput">
               <option/>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="I prefer not to say">I prefer not to say</option>
               </Field>
           </div>
           <div className="feldsDiv">
               <label htmlFor="dob" className="formLabel">Date of birth</label>
               <Field name="dob" component="input" type="text" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="status" className="formLabel">Marital Status</label>
               <Field name="status" component="select" type="text" className="formInput">
                <option/>
                <option value="Married">Married</option>
                <option value="Never married">Never married</option>
                <option value="Engaged">Engaged</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
               </Field>
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