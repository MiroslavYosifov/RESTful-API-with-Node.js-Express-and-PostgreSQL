    import React, { Component } from 'react';
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
                    value: ''
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
                    value: ''
                },
                protein: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Protein quantity'
                    },
                    value: ''
                },
                carbohydrate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Carbohydrate quantity'
                    },
                    value: ''
                },
                fat: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Fat quantity'
                    },
                    value: ''
                },
            },
            loading: false
        }

        inputChnagedHandler = (event, inputIndentifier) => {
            const updatedOrderForm = {
                ...this.state.orderForm
            };

            const updatedFormElement = {
                ...updatedOrderForm[inputIndentifier]
            };

            updatedFormElement.value = event.target.value;
            updatedOrderForm[inputIndentifier] = updatedFormElement;

            this.setState({ orderForm: updatedOrderForm });

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

            console.log(formElementsArray);

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
                                changed={(event) => this.inputChnagedHandler(event, formElement.id)}/>
                        ))}
                        <button>Success</button>
                    </form>
                </div>
            );
        }
    }
    
    export default Food;