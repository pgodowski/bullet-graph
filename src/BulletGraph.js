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
      label: props.label,
      orientation: props.orientation
    };
  } 

  _renderVerticalGraph() {
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
   var labelOffset = 30;
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
        yLabel={this.state.label}
        labelOffset={labelOffset}
      />
    </Chart>
   );
  }

  _renderHorizontalGraph(){
    var Chart = require('react-d3-core').Chart;
    var Xaxis = require('react-d3-core').Xaxis;

    var x = function(d) {
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
   var margins = {right: 20, bottom: 50, left: 20, top: 50};
   var xScale = 'linear';
   var xDomain = [0, this.state.high];
   var totalWidth = this.state.high;
   var chartWidth = this.state.width-margins.left-margins.right
   var rectMaxWidth = ((this.state.high-this.state.mid) * chartWidth)/totalWidth;
   var rectMidWidth = ((this.state.mid-this.state.low)*chartWidth)/totalWidth;
   var rectLowWidth = (this.state.low*chartWidth)/totalWidth;
   var actualWidth = (this.state.actual*chartWidth)/totalWidth;
   var targetWidth = (this.state.target*chartWidth)/totalWidth;
   var labelOffset = 30;
   var barHeight = 80;
   var lineHeight = 40;
   var l1Height = 10;
   return (
     <Chart
      width={this.state.width}
      height={this.state.height}
      margins={margins}>
      <rect style={style3} height="80" x="0" y={this.state.height-margins.bottom-margins.top-barHeight} width={rectLowWidth}/>
      <rect style={style2} height="80" x={rectLowWidth} y={this.state.height-margins.bottom-margins.top-barHeight} width={rectMidWidth}/>
      <rect style={style1} height="80" x={rectLowWidth+rectMidWidth} y={this.state.height-margins.bottom-margins.top-barHeight} width={rectMaxWidth}/>
      <line stroke="black" strokeWidth="6" x1="0" y1={this.state.height-margins.bottom-margins.top-lineHeight} x2={actualWidth} y2={this.state.height-margins.bottom-margins.top-lineHeight}></line>
      <line stroke="black" strokeWidth="3" x1={targetWidth} y1={this.state.height-lineHeight-margins.bottom-l1Height-margins.top} x2={targetWidth} y2={this.state.height-margins.bottom-margins.top-lineHeight+l1Height}></line>
      <Xaxis
        width={this.state.width}
        height={this.state.height}
        margins={margins}
        x={x}
        xDomain={xDomain}
        xScale={xScale}
        xLabel={this.state.label}
        labelOffset={labelOffset}
      />
    </Chart>
   );


  } 

  render() {
    var graphData;
    if(this.state.orientation === 'vertical' ) {
      graphData = this._renderVerticalGraph();
    } else if(this.state.orientation === 'horizontal') {
      graphData = this._renderHorizontalGraph();
    }
    return(graphData);
  }
}

export default BulletGraph;
