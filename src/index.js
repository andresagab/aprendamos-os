import React from 'react';
import { render } from 'react-dom';

// import styles
import './index.css';

// import components
import Router from "./Router";
import Footer from './components/Common/Footer/Footer';

// assets
import imgBackground from "./assets/img/main/home-background.jpg";

// i don´t know it is
import reportWebVitals from './reportWebVitals';

// define component
const Root = () => {
  
  return (
    <div className="flex flex-col w-full h-full md:h-screen bg-gray-300 p-4">
        <Router/>
        <Footer/>
    </div>
  )

}

// render Root component on root div
render(<Root/>, document.querySelector('#root'));


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
