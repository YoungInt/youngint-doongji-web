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
                <div className="business">
                  {/* (주)영인터내셔널 | 사업자 등록번호: 120-88-01280 | 대표:
                  김영은 */}
                  {footer.business}
                </div>
                <address className="address">
                  <p>
                    {/* 경기도 용인시 기흥구 신갈로 121 영인터내셔널(16967) | */}
                    {footer.address}
                    {/* <a href="tel:070-8856-6377"> 070-8856-6377 </a>| FAX
                    070-8611-0771 */}
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
