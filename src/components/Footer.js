import React from "react";
import { mainText } from "../API/textAPI";

export default class Footer extends React.Component {
  render() {
    const { lang } = this.props;
    const { footer } = mainText[lang];

    return (
      <React.Fragment>
        <footer className="footer">
          <div className="footer__wrap">
            <div className="copyright right">
              <p>
                <span className="bold">
                  Young International <br />
                </span>
                &copy; Copyright, Young International. All rights reserved
              </p>
            </div>
            <div className="left-wrap">
              <div className="left">
                <div className="business">{footer.business}</div>
                <address className="address">
                  <p>
                    {footer.address}
                    <a href={`tel:${footer.tel}`}>{footer.tel}</a>| FAX{" "}
                    {footer.fax}
                  </p>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
