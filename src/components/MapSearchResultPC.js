import React from "react";

export default class MapSearchResult extends React.Component {
  render() {
    const { filteredData, onClickPoint } = this.props;
    console.log(filteredData);
    return (
      <React.Fragment>
        <div>결과</div>
        {filteredData ? (
          filteredData.map(point => (
            <div key={point.vending_machine.place}>
              <div
                onClick={e => {
                  onClickPoint(point.map.latitude, point.map.longitude);
                }}
              >
                {point.vending_machine.place}
              </div>
            </div>
          ))
        ) : (
          <div>결과 없음</div>
        )}
      </React.Fragment>
    );
  }
}
