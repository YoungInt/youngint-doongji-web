import React from "react";

export default class MapSearchPC extends React.Component {
  state = {
    inputText: "",
    district: "전체"
  };
  districts = [
    "전체",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충청북도",
    "충청남도",
    "전라남도",
    "전라북도",
    "경상북도",
    "경상남도",
    "제주"
  ];
  handleOptionChange = e => {
    this.setState({
      district: e.target.value
    });
  };
  handleInputSubmit = e => {
    e.preventDefault();
    const { onSearchFilter } = this.props;
    onSearchFilter(this.state.district, this.state.inputText);
  };
  handleInputChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };
  render() {
    const { onSearchFilter } = this.props;
    return (
      <React.Fragment>
        <div className="search__filter">
          <div className="search__filter-option">
            <select name="" id="" onChange={this.handleOptionChange}>
              {this.districts.map(district => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="search__filter-input">
            <form onSubmit={this.handleInputSubmit}>
              <input type="text" onChange={this.handleInputChange} />
              <button>검색</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
