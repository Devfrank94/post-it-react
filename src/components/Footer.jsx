import React from "react";
  
function Footer() {
  let today = new Date();
    let yearUpdate = today.getFullYear();

      return  <footer>
                <p> Created by DevFrank94 Copyright &copy; {yearUpdate} </p>
              </footer>
}

export default Footer;