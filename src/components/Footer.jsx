import React from "react";
  
function Footer() {
  let today = new Date();
    let yearUpdate = today.getFullYear();

      return  <footer>
                <p> Created by DevFrank94 Copyright &copy; {yearUpdate} </p>
                {/* Wave animations */}
                <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
                </div>
              </footer>
}

export default Footer;