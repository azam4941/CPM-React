import React , {Component } from 'react';
import { Link,Switch,Route } from 'react-router-dom'
import Login from '../../LoginAdmin/Login'
import Admin from '../../LoginAdmin/Admin'
import Logout from '../../LoginAdmin/Logout'
class AppLogin extends Component {
  render() {
  return (
    <Switch>
    <Route exact path="/" component={Login} />
    <Route  path="/admin" component={Admin} />
    <Route  path="/logout" component={Logout} />
    </Switch>
  );
  }
}
export default AppLogin;