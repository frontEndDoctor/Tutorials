 //Keypoints from first react class

 //Reactjs is for WebApp while React Native is for Mobile App 
 //React builds App by combining differening components
 // The codes in the return()statement is rendered on the browser screen
 // You need to install nodejs before you can use reactjs
 // To install Nodejs, go to https://nodejs.org/en/download/ and select 
 //the one suitable for your OS and machine



 // How to install create-react-app with CLI
 // Open your CLI and navigate to the folder where you wish to create the app
 // Enter this:npx create-react-app my-app cd my-app npm start
 // i.e create-react-app (name of your app)  cd (your app) npm start

//Notes on Types of Components
 const Students = <h1> Name of students </h1>;
// ReactDOM.render({Students}, document.getElementById('root'));

// Functional (or Stateless) Component
// const Sample =() =>{
//   return (
//     <h3> Something Random! </h3>
//   )

  
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(  
//     <Sample />
// )


// Class Component
import{ Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        <h1> My name is Tochukwu </h1>
      </div>
    );
  }
}

export default Name;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Name />
)
