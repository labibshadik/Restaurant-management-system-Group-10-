import React,{ useState } from "react";
 
const Bkash= ()=>{
  return (

  
<> 
  <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div>

  <section className="pricing-section padding-tb">
    <div className="container">
      <div className="section-header">
        <br />
        <br />
        
      </div>
      <center>
        <div className="price-item size">
          <div className="price-item-inner">
            {/* <div class="price-top">
                                  <h6>Gold Package</h6>
                                  <h2>$390.00</h2>
                                  <p>Pay your Bill using bkash app</p>
                              </div> */}
            <div className="price-bottom">
              <section style={{ backgroundColor: "#f9c9aa" }}>
                <div className="container py-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-lg-7 col-xl-5 div_size">
                      <div className="card">
                        <img
                          src="public\images\bkash.png"
                          className="card-img-top"
                          alt="Black Chair"
                        />
                        <div className="card-body">
                          <div className="card-title d-flex justify-content-between mb-0">
                            <p className="text-muted mb-0">Total Bill</p>
                            <p className="mb-0">$760</p>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom"
                          style={{ backgroundColor: "#eee" }}
                        >
                          <div className="card-body">
                            <p className="mb-4">Phone Number</p>
                            <div className="form-outline mb-3">
                              <input
                                type="text"
                                id="formControlLgXM8"
                                className="form-control"
                                placeholder="01xxxx xxx xxx"
                              />
                              <label
                                className="form-label"
                                htmlFor="formControlLgXM8"
                              >
                                Password
                              </label>
                            </div>
                            <div className="form-outline mb-3">
                              <input
                                type="password"
                                id="formControlLgXM8"
                                className="form-control"
                                placeholder="Bkash Password"
                              />
                            </div>
                            <button className="btn btn-info btn-block">
                              <a href="congo.html">Confirm Payment</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </center>
    </div>
  </section>
  
  
  <a href="#" className="scrollToTop">
    <i className="icofont-rounded-up" />
  </a>
 
</>



  )
                            };
export default Bkash;