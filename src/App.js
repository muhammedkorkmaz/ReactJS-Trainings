import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';

//import Emp from './emp';

import Home from './home';
import Login from './login';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Example</h2>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }


    /*state = {
        employees: [
            {id: 101, name: 'Paul', salary: 5000},
            {id: 102, name: 'Sam', salary: 2000},
            {id: 103, name: 'Sid', salary: 3000},
            {id: 104, name: 'Muhammed', salary: 4000},
            {id: 105, name: 'Larissa', salary: 1000},
            {id: 106, name: 'Mike', salary: 6000}
        ]
    };

    delEmp = (index, e) => {
        const copyEmployees = Object.assign([], this.state.employees);
        copyEmployees.splice(index, 1);
        this.setState({employees: copyEmployees});
    };

    render() {
        return (
            <div>
                <table style={{width: '500px'}}>
                    <tbody>
                    {
                        this.state.employees.map((emp, id) => {
                            return (
                                <Emp salary={emp.salary}
                                     key={emp.id}
                                     deleteEvent={this.delEmp.bind(this, id)}
                                >
                                    {emp.name}
                                </Emp>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }*/
}

export default App;
