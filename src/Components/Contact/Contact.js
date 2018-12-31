import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    handleSubmit(e) { 
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('name', name)

        axios.post('/send', {name, email, message})
        .then((response)=>{
            console.log(response)
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        console.log('name2', name)
    }

   
render() {
    return ( 
        <div>
            <form id="contact-form" onSubmit={(event) => event.preventDefault()}>
                <h2>Please feel free to reach out!</h2>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" rows="5" id="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary"  onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </form>

        </div>
    );
    
}
}
 
export default Contact;