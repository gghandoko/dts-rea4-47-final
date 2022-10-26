import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import Register from './components/RegisterUser';
import ProtectedComponent from './components/ProtectedComponent';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';
import NavBar from './components/NavBar';
import SearchMovie from './containers/SearchMovie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={

            <ProtectedComponent>
              <NavBar>
                <HomePage />
              </NavBar>
            </ProtectedComponent>
          }
        >
          
        </Route >
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/detail/:movieId"
          element={
            <ProtectedComponent>
              <NavBar>
                <DetailPage />
              </NavBar>
            </ProtectedComponent>
          }
        >

        </Route>
        <Route
          path="search/:queryStr"
          element={
            <ProtectedComponent>
            <NavBar>
              <SearchMovie />
            </NavBar>
              </ProtectedComponent>
          }
        >

        </Route>
        <Route path="/navbar" element={<NavBar />} />
        {/* <Route path="*" element={
          <ProtectedComponent>
              <NavBar>
                <HomePage />
              </NavBar>
            </ProtectedComponent>
        }></Route> */}
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
