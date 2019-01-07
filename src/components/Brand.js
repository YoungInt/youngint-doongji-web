import React from "react";
import happy from "../images/main_happy";
import pola from "../images/main_brand_polapolar";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import brand_arrow from "../images/main_brand_arrow";
export default class Brand extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <React.Fragment>
        <div className="brand-container ">
          <div className="brand-wrap">
            <div className="brand happy" />
            <div className="brand pola" />
            <div className="box">
              <div className="center">
                <div className="brand-box happy">
                  <div className="container-title">
                    <h2 className="title">OUR BRAND</h2>
                  </div>
                  <div className="img">
                    <img className="happy-img" src={happy} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h3>HAPPYNAME</h3>
                      <h3 className="bold">
                        {/* 해피네임스티커 */}
                        <Text title={"detail-button"} text={text.t8[0]} />
                      </h3>
                    </div>

                    <Text text={text.p8[0]} />
                    <Link to="/happy">
                      <div
                        onClick={this.handleButton}
                        className="button happy-button"
                      >
                        <Text title={"detail-button"} text={text.button8} />
                        <div className="img">
                          <img src={brand_arrow} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="brand-box pola">
                  <div className="container-title" />
                  <div className="img">
                    <img className="pola-img" src={pola} alt="" />
                  </div>

                  <div className="content pola">
                    <div className="title">
                      <h3>POLAPOLAR</h3>
                      <h3 className="bold">
                        {/* 폴라폴라 */}
                        <Text text={text.t8[1]} />
                      </h3>
                    </div>

                    <Text text={text.p8[1]} />

                    <Link to="/polapolar">
                      <div className="button pola-button">
                        <Text text={text.button8} />
                        <div className="img">
                          <img src={brand_arrow} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
