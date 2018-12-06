import React from "react";
import { history } from "react-router";
import { MapConsumer } from "../context/MapContext";

export default class MapSearchResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MapConsumer>
          {({ filteredData, changeUrl }) => (
            <div>
              <div>결과</div>
              {filteredData ? (
                filteredData.map((point, index) => (
                  <div key={index}>
                    <div
                      onClick={e => {
                        changeUrl(point.id);
                      }}
                    >
                      {point.vending_machine.place}
                    </div>
                  </div>
                ))
              ) : (
                <div>결과 없음</div>
              )}
            </div>
          )}
        </MapConsumer>
      </React.Fragment>
    );
  }
}
