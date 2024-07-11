import { Cursor } from "mongoose";
import React from "react";
import ColorGrid from "./colorgrid";



const containerStyle = {
    width: "100vw",
    height: "98vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    overflowX: "none"
};

const formStyle = {
    width: "35%",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    backgroundColor: "whitesmoke",
    border: "1px solid grey",
    borderRadius: "15px",
    padding: "5%"
}

const inputStyle = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "20px",
    padding: "10px",
    width: "90%",
    height: "5.5vh",
    backgroundColor: "#c5c6c7",
    fontFamily: "Arial",
    border: "none",
    borderRadius: "5px",
    margin: "4px"

};

const buttonStyle = {
    color: "black",
    fontFamily: "sans-serif",
    fontSize: "25px",
    padding: "10px",
    width: "91%",
    height: "7vh",
    backgroundColor: "blueviolet",
    fontFamily: "Arial",
    border: "none",
    borderRadius: "23px",
    marginTop: "-20px",
    color: "white",
    cursor: 'pointer'
    
};
const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "20px",
    marginTop: "-1px",
    textAlign: "center",
    textDecoration: "none"
}


function Register(){
    return(
        <div>
           
            <div className="Container" style={containerStyle}>
                <form style={formStyle}>
                    <div style={{display: "flex", justifyContent: "right", marginTop: "-2px"}}>
                        <ColorGrid />
                    </div>
                    <h2 style={{color: "blueviolet", fontFamily: "sans-serif", fontSize: "35px", userSelect: "none", textAlign: "center", marginTop: "-5px" }}>Sign In</h2>
                    <div className="Inputs" style={{marginTop: "-5px"}}>
                        <input type="text" name="user" className="inputField" placeholder="UserName" style={inputStyle} />
                        
                        <input type="email" name="email" className="inputField" placeholder="E-mail" style={inputStyle} />

                        <input type="password" name="password" className="inputField" placeholder="Password" style={inputStyle} />
                        <input type="password" name="Confpass" className="inputField" placeholder="Confirm Password" style={inputStyle} />
                    </div>
                    
                    <div className="text">
                        <p style={textStyle}>Already have an Account? <a href="#" style={textStyle}>Sign up</a></p> 
                    </div>

                    <div className="Button"  >
                        <button type="submit" style={buttonStyle}>Sign In</button>
                    </div>

                    

                </form>
            </div>
        </div>
    )
}

export default Register;