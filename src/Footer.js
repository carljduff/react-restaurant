import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase about">About Us</h5>
                <p>348 E Main St, Lexington, KY.</p>
                <p>Contact us: awesome@inc.com</p>
                <p>Phone: (859) 123-4567</p>
            </div>

            <hr className="clearfix w-50 d-md-none pb-0"/>

            <div className="col">
                <h5 className="text-uppercase about">Hours of Operation</h5>
                <ul className="list-unstyled">
                    <li>Monday-Thursday: 11am-6pm</li>
                    <li>Friday-Saturday: 8am-8pm</li>
                   
                </ul>
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">This Website is under construction. 
    </div>

</footer>

export default Footer