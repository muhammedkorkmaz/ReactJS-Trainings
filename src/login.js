import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <table>
                    <tr>
                        <td colSpan="2">Login</td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button>Submit</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Login;