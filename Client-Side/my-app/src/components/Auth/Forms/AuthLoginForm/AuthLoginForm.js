import React, { Component } from 'react';
import  classes from './AuthLoginForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogin } from '../../../../store/actions/index';

const AuthLoginForm = (props) => {
  const { values, errors, touched, isSubmitting } = props;
  return (
    <Form className={classes.AuthLoginForm}>
      {/* {!props.auth.loading && <p>IT IS TRUE</p>} */}
      <div>
         { touched.username && errors.username && <p>{errors.username}</p>}
         <Field type="text" name="username" placeholder="First Name"/>
       </div>
      <div>
         { touched.password && errors.password && <p>{errors.password}</p>}
         <Field type="password" name="password" placeholder="Password"/>
      </div>
      {/* <div>
         <label>
           <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
           Join to us.
         </label>
      </div> */}
      {/* <button disabled={isSubmitting}>Sign upa</button> */}
      <button>Sign in</button>
    </Form>
  )
};


const FormikAuthLoginForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || '',
      password: props.password || '',
    }
  },
  validationSchema: yup.object().shape({
    username: yup.string().min(1, 'must be 1 symbols').required(),
    password: yup.string().min(1, 'must be 1 symbols').required()
  }),
  handleSubmit(values, { props, setSubmitting }) {
    const { onAuth } = props;
    const authData = { username: values.username, password: values.password }
    console.log(authData);
    onAuth(authData).then(() => setSubmitting(false));
  },
})(AuthLoginForm);


const mapStateToProps = state => {
  return {
      auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onAuth: (authData) => dispatch(authLogin(authData)),
    }
  )
};

export default connect( mapStateToProps, mapDispatchToProps )(FormikAuthLoginForm);


// const mapDispatchToProps = dispatch => {
//   return {
//       onAuth: (firstName, password) => dispatch(auth(firstName, password)),
//   };
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({
  
// }, dispatch)

// const mapDispatchToProps = dispatch => {
//   return {
//       onIncrementCounter: () => dispatch(increment()),
//       onDecrementCounter: () => dispatch(decrement()),
//   };
// };