import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// account
import SignUp from './components/account/SignUp';
import Login from './components/account/Login';
import PasswordReset from './components/account/PasswordReset';
// pages
import Home from './components/pages/Home';
import Teachers from './components/pages/Teachers';
import Courses from './components/pages/Courses';
import Tests from './components/pages/Tests';
import Paths from './components/pages/Paths';
// courses
import HtmlOverview from './components/html/HtmlOverview';
import HtmlIntro from './components/html/HtmlIntro';
import HtmlSemantics from './components/html/HtmlSemantics';
import HtmlTables from './components/html/HtmlTables';
import HtmlForms from './components/html/HtmlForms';
import HtmlMedia from './components/html/HtmlMedia';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )} />
            <Route path="/courses" component={Courses} />
            <Route path="/tests" component={Tests} />
            <Route path="/paths" component={Paths} />
            <Route path="/teachers" component={Teachers} />

            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/password-reset" component={PasswordReset} />

            <Route path="/html" component={HtmlOverview} />
            <Route path="/html-intro" component={HtmlIntro} />
            <Route path="/html-semantics" component={HtmlSemantics} />
            
            <Route path="/html-tables" component={HtmlTables} />
            <Route path="/html-forms" component={HtmlForms} />
            <Route path="/html-media" component={HtmlMedia} />
        </div>
      </Router>
      );
    }
}

export default App;

