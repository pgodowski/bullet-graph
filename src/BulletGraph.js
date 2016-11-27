import React, { Component } from 'react';

class BulletGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      actual: props.actual,
      target: props.target,
      low: props.low,
      high: props.high,
      mid: props.mid,
    };
  }  

  render() {
    var Chart = require('react-d3-core').Chart;
    var Yaxis = require('react-d3-core').Yaxis;

    var y = function(d) {
      return +d.value;
    };
    var style1 = {
    fill: '#E8E8E8'
    };
    var style2 = {
      fill: '#B0B0B0'
    };
    var style3 = {
      fill: 'gray'
    };
   var margins = {top: 20, right: 50, bottom: 20, left: 50};
   var yScale = 'linear';
   var yDomain = [0, this.state.high];
   var totalHeight = this.state.high;
   var chartHeight = this.state.height-margins.top-margins.bottom
   var rectMaxHeight = ((this.state.high-this.state.mid) * chartHeight)/totalHeight; 
   var rectMidHeight = ((this.state.mid-this.state.low)*chartHeight)/totalHeight;
   var rectLowHeight = (this.state.low*chartHeight)/totalHeight;
   var actualHeight = (this.state.actual*chartHeight)/totalHeight;
   var targetHeight = (this.state.target*chartHeight)/totalHeight;
   return (
   <Chart
      width={this.state.width}
      height={this.state.height}
      margins={margins}>
      <rect style={style1} width="80" y="0" height={rectMaxHeight}/>
      <rect style={style2} width="80" y={rectMaxHeight} height={rectMidHeight}/>
      <rect style={style3} width="80" y={rectMaxHeight+rectMidHeight} height={rectLowHeight}/>
      <line stroke="black" strokeWidth="6" x1="40" y1={chartHeight} x2="40" y2={this.state.height-margins.top-margins.bottom-actualHeight}></line>
      <line stroke="black" strokeWidth="3" x1="30" y1={this.state.height-margins.top-margins.bottom-targetHeight} x2="50" y2={this.state.height-margins.top-margins.bottom-targetHeight}></line>
      <Yaxis
        width={this.state.width}
        height={this.state.height}
        margins={margins}
        y={y}
        yDomain={yDomain}
        yScale={yScale}
      />
    </Chart>
   );
  }
}

export default BulletGraph;
