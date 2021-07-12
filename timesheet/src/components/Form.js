import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux';

let Form = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return(
        <div className="formMainWrapper ">
        <h3>Change Personal Information</h3>
           <form onSubmit={handleSubmit}>
           <div className="feldsDiv">
               <label htmlFor="username" className="formLabel">Username</label>
               <Field name="username" component="input" type="text" className="formInput" />
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
               <label htmlFor="address" className="formLabel">Address</label>
               <Field name="address" component="input" type="text" className="formInput"/>
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

Form = connect(
    state => ({
      initialValues: state.user // pull initial values from account reducer
    }),
)(Form)
  

export default Form;