import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Service/Service';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Treatments from './Pages/Treatments/Treatments';

function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/treatments">
              <Treatments></Treatments>
            </PrivateRoute>

            <PrivateRoute path="/services/:serviceId">
              <Service></Service>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
