    import React, { Component } from 'react';
    import { withRouter } from 'react-router-dom';
    import classes from './Food.module.css';

    import foodService from '../../services/food-service';
    import Input from '../UI/Input/Input';

    class Food extends Component {
        state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Food name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                },
                kind: {
                    elementType: 'select',
                    elementConfig: {
                        options:[
                            { value: 'vegetables', displayValue: 'Vegetables' },
                            { value: 'fruits', displayValue: 'Fruits' },
                            { value: 'nuts', displayValue: 'Nuts, legumes, grain and seeds' },
                            { value: 'meat', displayValue: 'Meat' },
                            { value: 'seafood', displayValue: 'Fish and seafood' },
                            { value: 'dairy', displayValue: 'Dairy foods' },
                            { value: 'eggs', displayValue: 'Eggs' }
                        ]
                    },
                    validation: {},
                    valid: true,
                    value: 'vegetables',
                    touched: false
                },
                protein: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Protein quantity'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                },
                carbohydrate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Carbohydrate quantity'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                },
                fat: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Fat quantity'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                },
            },
            formIsValid: false,
            loading: false
        }

        checkValidity(value, rules) {
            let isValid = false;

            if(!rules) {
                return true;
            }

            if(rules.required) {
                isValid = value.trim() !== '';
            }

            if(rules.minLength) {
                isValid = value.length >= rules.minLength;
            }

            return isValid;
        }

        inputChnagedHandler = (event, inputIndentifier) => {
            const updatedOrderForm = {
                ...this.state.orderForm
            };

            const updatedFormElement = {
                ...updatedOrderForm[inputIndentifier]
            };

            updatedFormElement.value = event.target.value;

            updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
            updatedFormElement.touched = true;

            updatedOrderForm[inputIndentifier] = updatedFormElement;

            let formsIsValid = true;
            for (let inputIndentifier in updatedOrderForm) {
                formsIsValid = updatedOrderForm[inputIndentifier].valid && formsIsValid;
            }

            this.setState({ orderForm: updatedOrderForm, formsIsValid: formsIsValid });

        }

        orderHandler = (event) => {
            event.preventDefault();
            const formData = {};

            for (const formElementIdentifier in this.state.orderForm) {
                formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            }

            const order = {
                orderData: formData
            }

            foodService.addFood(order)
                .then(response => {
                    console.log('PROPS', this.props);
                    console.log('HISTORY',this.props.history);
                    this.props.history.push('/');
                })
                .catch(error => {
                    console.log(error);
                })
        }

        render() {
            const formElementsArray = [];
            for (const key in this.state.orderForm) {
                formElementsArray.push({
                    id: key,
                    config: this.state.orderForm[key]
                })
            }

            return (
                <div className={classes.Food}>
                    <h2>I AM FOOD COMPONENT</h2>
                    <form onSubmit={this.orderHandler}>
                        {formElementsArray.map(formElement => (
                            <Input 
                                key={formElement.id} 
                                elementType={formElement.config.elementType} 
                                elementConfig={formElement.config.elementConfig} 
                                value={formElement.config.value}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                changed={(event) => this.inputChnagedHandler(event, formElement.id)}/>
                        ))}
                        <button disabled={!this.state.formIsValid}>Success</button>
                    </form>
                </div>
            );
        }
    }
    
    export default withRouter(Food);