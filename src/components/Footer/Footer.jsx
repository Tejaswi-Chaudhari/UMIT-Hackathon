import React from 'react'
import './Footer.css'

const Footer = () => {
    
       // <div> 
       
     
        return (

          <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Arcturus team. 
                  </h1>
                  
                  
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                    </div>

                    <div className="row">
                    </div>
                    

                    <button
    
                      type="submit"
                      className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='footer1'>
          
           <p>2022 All rights reserved. Hackathon conducted by UMIT Councils team, Mumbai.<div><br></br></div> Site developed by- <a href="#">Developer's team</a></p>
        </div>
      </section>
      
        )
        //</div>
         
    
}

export default Footer
