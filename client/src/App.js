import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute';
import {Dashboard} from './Dashboard';
import {Login} from './Login';
import {Register} from './Register';
import {NavigationBar} from './components/NavigationBar';
import {NoMatch} from './NoMatch';
import {SQLpage} from './SQL-page';
import {NOSQLpage} from './NOSQL-page';
import {XSSpage} from './XSS-page';
import {CSRFpage} from './CSRF-page';
import {ResultsPage} from './ResultsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated : false,
      isLoading: true
    }
  }

  async componentDidMount() {
    const authorized = await (await fetch('/auth/login/success', {credentials: 'include'})).json()
    if (authorized.authenticated) {
      this.setState( {
        isAuthenticated : true,
        isLoading: false
      });
    } else {
      this.setState( {
        isLoading: false
      });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" render={() =>  <Redirect to="/dashboard" /> } />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path="/results" component={ResultsPage} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path="/modules/SQL" component={SQLpage} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path="/modules/NOSQL" component={NOSQLpage} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path="/modules/XSS" component={XSSpage} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} exact path='/modules/CSRF' component={CSRFpage} />
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} isLoading={this.state.isLoading} component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    )
  }  
}

export default App;
