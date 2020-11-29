import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="footer__container">
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
