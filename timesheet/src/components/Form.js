import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useSelector, connect } from 'react-redux';

let PersonalForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    
    const {user}  = useSelector(state => state.user)
    return(
        <div className="formMainWrapper ">
        <h3>Change Personal Information</h3>
           <form onSubmit={handleSubmit}>
           <div className="feldsDiv">
               <label htmlFor="username" className="formLabel">Username</label>
               <Field name="username" component="input" type="text" className="formInput" disabled  />
           </div>
           <div className="feldsDiv">
               <label htmlFor="phone" className="formLabel">Phone</label>
               <Field name="phone"  component="input" type="text" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="email" className="formLabel">Email</label>
               <Field name="email" component="input" type="email" className="formInput" />
           </div>
           <div className="feldsDiv">
               <label htmlFor="gender" className="formLabel">Gender</label>
               <Field placeholder="Female"  name="gender" component="input" type="gender" 
                className="formInput" disabled />
          </div>

           <div className="feldsDiv">
              <label htmlFor="dob" className="formLabel">Date of birth</label>
              <Field placeholder="15/12/1988" name="dateofbirth" component="input" type="dob" 
              className="formInput" disabled />
           </div>
 
           <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Unit no.</label>
               <Field name="address.suite" component="input" type="text" className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Street</label>
               <Field name="address.street"  component="input" type="text"
               className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">City</label>
               <Field name="address.city" component="input" type="text"
               className="formInput"/>
            </div>
            <div className="feldsDiv">
               <label htmlFor="address" className="formLabel">Zipcode</label>
               <Field name="address.zipcode" component="input" type="text"
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



PersonalForm = reduxForm({
    form: 'personalInfo', // a unique identifier for this form,
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true
  })(PersonalForm);

  PersonalForm = connect(
    state => {
        console.log(state.form.personalInfo)
        return ({
            initialValues: state.form.personalInfo?.values? state.form.personalInfo?.values : state.user.user // pull initial values from account reducer
          })
    }
  )(PersonalForm)
  

  export default PersonalForm
