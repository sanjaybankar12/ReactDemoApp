import React , { Component } from 'react';
import './User.css';
class User extends Component {

    render() {
        return(
            <div id="user_form" className="form-horizontal">
                <h2>User Form</h2>
                <div className="form-group">
                    <label className="control-label" for="firstname"></label>
                    <input type="text" className="form-control" id="firstname" placeholder="firstname" name="firstname"/>
                </div>
                <div className="form-group">
                    <label className="control-label" for="lastname"></label>
                    <input type="text" className="form-control" id="lastname" placeholder="lastname" name="lastname"/>
                </div>
            </div>
        );
    }
}
 export default User;