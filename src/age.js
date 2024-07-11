import React from 'react'
function Login(){
    
    function displayInfo(event){
       event.preventDefault()
       
       let name = document.getElementById('name').value
       let pass = document.getElementById('pass').value

       let user = {name: name, password: pass}

       document.querySelector('.Info h1').innerHTML = `Hello ${user.name} your password is ${user.password}`
       document.getElementById('name').value = ''
       document.getElementById('pass').value = ''
    }
   


   return(
    <div>
        <form >
            <h2>login</h2>
            <div className='input-controls'>
                <label>Name</label>
                <input type="text" id='name'></input>
            </div>
            <div className='input-controls'>
                <label>password</label>
                <input type="text" id='pass' ></input>
            </div>
            <button className='btn' type='submit'>submit</button>
        </form>

        <div className='Info'>
            <h1> </h1>
        </div>

    </div>
   ) 
   
} 
export default Login