import React from "react";

function Contact() {
    return (
        <div>
            <div class = "everything" >
                <div>
                    <h1 class = "join-us-page">Get in touch!</h1> 
                    <h1 class = "join-us-underline"></h1>
                    <h3 class = "form-message">Please fill out the following form if you have any questions! We will get back to you as soon as possible :)</h3>
                </div>
            </div>
            <div >
                <form action="https://public.herotofu.com/v1/3f030650-5244-11ed-9f58-f3ab7f1a635a" method="post" >
                    <div class = "form-box">
                    <div>
                        <label class = "form-name" for="name">Your Name</label>
                        <br></br>
                        <input class = "form-name-input" name="Name" id="name" type="text" required />
                    </div>
                    <div>
                        <label class = "form-name" for="email">Your Email</label>
                        <br></br>
                        <input class = "form-name-input" name="Email" id="email" type="email" required  />
                    </div>
                    <div>
                        <label class = "form-name" for = "message">Message</label>
                        <br></br>
                        <input class = "form-name-input" name = "Message" id = "message" type = "message" required/>
                    </div>
                    <div>
                        <input class = "form-submit" type="submit" value="Submit"/>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;