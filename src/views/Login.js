import React from 'react';
import CardLogic from '../containers/CardLogic';

class Login extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                 <h1>LOGIN</h1>
                 <CardLogic/>
            </div>
        );
    }
}

export default Login;