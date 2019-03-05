import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import "./assets/scss/base.css";
import { Provider } from "react-redux";
import store from "./store";
import Loadable from 'react-loadable';
import loadingPic from "./assets/image/loading.jpg"

const MyLoadingComponent = props => {
  if (props.isLoading) {
      return <img src={loadingPic} alt='' style={{position:'absolute',left:'50%', top:'50%',transform:'translate(-50%,-50%)'}}/>
  }
  else if (props.error) {
      return <div>Error! <button onClick={ props.retry }>重载</button></div>
  }
  else {
      return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('./page/home/index.jsx'),
  loading: MyLoadingComponent,
});
const AsyncPrice = Loadable({
  loader: () => import('./page/price/index.jsx'),
  loading: MyLoadingComponent,
});
const AsyncPriceTel = Loadable({
  loader: () => import('./page/price/index_tel.jsx'),
  loading: MyLoadingComponent,
});


class App extends Component {
  render() {
    return (
     <Fragment>
       <Provider store={store}>
          <Router>
            <Fragment>
              <Route path="/" component={AsyncHome} exact />
              <Route path="/price" component={AsyncPrice} exact />
              <Route path="/price_tel" component={AsyncPriceTel} exact />
            </Fragment>
          </Router>
        </Provider>
     </Fragment>
      
    );
  }
}

export default App;
