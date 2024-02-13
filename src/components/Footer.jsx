import React from "react";
  
function Footer() {
  let today = new Date();
    let yearUpdate = today.getFullYear();

      return  <footer>
                <p> Created by DevFrank94 Copyright &copy; {yearUpdate} </p>
                {/* Wave animations */}
                <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
                </div>
              </footer>
}

export default Footer;