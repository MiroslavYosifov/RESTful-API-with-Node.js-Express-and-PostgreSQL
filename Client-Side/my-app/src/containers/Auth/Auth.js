import React, { Component } from 'react';
import  classes from './Auth.module.css';
import { useFormik } from 'formik';

import userService from '../../services/user-service';



const Auth = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          password: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className={classes.Auth} onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Submit</button>
        </form>
      );
}

export default Auth;


// class Auth extends Component {
//     state = {
//         controls: {
//             firstName: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'First Name'
//                 },
//                 value: '',
//             },
//             password: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'password',
//                     placeholder: 'Password'
//                 },
//                 value: '',
//             },
//         }
//     }


//     // inputChangedHandler = (event, formElementKey) => {

//     //     const updatedControls = {
//     //         ...this.state.controls
//     //     };

//     //     const updatedFormControls = {
//     //         ...updatedControls[formElementKey]
//     //     }
        
//     //     updatedFormControls.value = event.target.value;
//     //     updatedControls[formElementKey] = updatedFormControls;

//     //     this.setState({ controls: updatedControls });
//     // }

//     // loginHandler = (event) => {
//     //     event.preventDefault();
//     //     const formData = {};

//     //     for (const formElementIdentifier in this.state.controls) {
//     //         formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
//     //     }

//     //     const order = {
//     //         orderData: formData
//     //     }

//     //     console.log(order);
//     //     userService.login(order)
//     //         .then(response => {
//     //             console.log('PROPS', this.props);
//     //             console.log('HISTORY',this.props.history);
//     //             console.log(response);
//     //             localStorage.setItem('token', response.token);
//     //             this.props.history.push('/');
//     //         })
//     //         .catch(error => {
//     //             console.log(error);
//     //         })
//     // }

//     logoutHandler = (event) => {
//         console.log(event);
//         event.preventDefault();
//         userService.logout()
//             .then(response => {
//                 console.log(response);
//                 //this.props.history.push('/');
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     render() {
//         const formElementsArray = [];
//         for (const key in this.state.controls) {
//             formElementsArray.push({
//                 id: key,
//                 config: this.state.controls[key]
//             })
//         }

//         const form = formElementsArray.map(formElement => (
//             <input 
//                 key={formElement.id} 
//                 value={formElement.config.value}
//                 onChange={(event) => this.inputChangedHandler(event, formElement.id)}
//                 />
//         ));

//         return (
//             <div className={classes.Auth}>
//                 <form onSubmit={formik.handleSubmit}>
//                     {form}
//                     <button>Login</button>
//                 </form>
//                 <form onSubmit={this.logoutHandler}>
//                     <button>Logout</button>
//                 </form>
//             </div>
//         );
//     }
// }
