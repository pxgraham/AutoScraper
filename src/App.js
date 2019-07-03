import React from "react";
// import { Container } from 'react-bootstrap';
// import Title from "./components/Title";
// import Background from "./components/images/Reactbackground.png";
// import './styles';


const backgroundStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: 'repeating-linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(24, 0, 0) 10%, rgb(0, 0, 0) 50%)',
};

const menuName = {    
    fontFamily: "BenchNine",
    fontSize: '45px'    
};

const menuItem = {
    fontFamily: "BenchNine",
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '25px'    
};


let project = {
    text: 'Project',
    active: false
}
const projectScreen = () => {
    if(!project.active) {
        project.active = true;
        project.text = 'asdlkfjas';
    }
    console.log(project.text)
}
function App() {
  return (      
    <div>
        <div style={backgroundStyle}></div> 
        <div className="container">
            <div className="row">
                <div className="col text-light">
                    <span style={menuName}>Peyton Graham</span>
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col text-light">
                    <br />
                    <span onClick={projectScreen} style={menuItem}>{project.text}</span>
                    <span style={menuItem}>About</span>
                    <span style={menuItem}>Contact</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    hi
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
