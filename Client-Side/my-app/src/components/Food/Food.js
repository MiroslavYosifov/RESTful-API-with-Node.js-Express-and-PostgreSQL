    import React, { Component } from 'react';
    import classes from './Food.module.css';

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
            }
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
                    <form>
                        {formElementsArray.map(formElement => (
                            <Input 
                                key={formElement.id} 
                                elementType={formElement.config.elementType} 
                                elementConfig={formElement.config.elementConfig} 
                                value={formElement.config.value}/>
                        ))}
                        <button>Success</button>
                    </form>
                </div>
            );
        }
    }
    
    export default Food;