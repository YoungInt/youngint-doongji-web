import React from "react";

export default class MapSearchResult extends React.Component {
  render() {
    const { filteredData, onClickPoint } = this.props;

    return (
      <React.Fragment>
        <div>결과</div>
        {filteredData ? (
          filteredData.map((point, index) => (
            <div key={index}>
              <div
                onClick={e => {
                  onClickPoint(
                    point.map.latitude,
                    point.map.longitude,
                    point.id
                  );
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
