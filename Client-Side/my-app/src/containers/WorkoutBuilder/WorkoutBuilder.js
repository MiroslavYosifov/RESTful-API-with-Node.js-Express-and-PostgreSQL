import React, { Component } from 'react';
import  classes from './WorkoutBuilder.module.css';
import workoutServices from '../../services/workout-service';

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
        workoutServices.getWorkouts().then(data => {
            this.setState({
                exercises: data
            });
        });
    }

    
    render() {

        return (
            <div className={classes.WorkoutBuilder}>
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