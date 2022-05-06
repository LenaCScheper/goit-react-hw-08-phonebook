
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container';
import PhonebookView from './views/PhonebookView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBar from './components/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import { Switch } from 'react-router-dom';
import PrivatRoute from "./components/PrivatRoute";
import PublicRoute from "./components/PublicRoute";

import './App.css';

export default function App() {
const dispatch = useDispatch();
const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(
    () => {
      dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]
  );

  return (
    !isFetchingCurrentUser && (
      <>
      <AppBar />
      <Container>
        
        
        
        <Switch>
           
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LoginView />
          </PublicRoute>


          <PrivatRoute >
            <PhonebookView path="/contacts" />
          </PrivatRoute>

        </Switch>
      </Container>
</>
    )
  );
  
    }

