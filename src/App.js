
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>


            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
