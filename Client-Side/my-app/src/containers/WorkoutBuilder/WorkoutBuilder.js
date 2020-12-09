import React, { Component } from 'react';
import './WorkoutBuilder.module.css';

import Workout from '../../components/Workout/Workout';


class WorkoutBuilder extends Component {
    constructor (props) {
        super(props)
    }

    state = {
        exercises: [],
        workout: ['pyrva', 'vtora']
    }

    componentDidMount () {
        fetch('http://localhost:3333/api/workout')
            .then(response => response.json())
            .then(data => {
                this.setState( {
                    exercises: data
                });
            });
    }

    
    render() {

        return (
            <div>
                <h1>THESE ARE THE EXERCISES</h1>
                <div>
                    {this.state.exercises.map((ex, index) => {
                        return <Workout key={index} exercise={ex.name}/>
                    })}
                </div>
                
            </div>
            
        );
    }
}

export default WorkoutBuilder;