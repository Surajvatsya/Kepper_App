import React from "react";

const d = new Date();
const n = d.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright © {n} </p>
    </footer>
  );
}
export default Footer;
