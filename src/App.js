import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Redirect to="/"/>
      </Switch>
    );


    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
