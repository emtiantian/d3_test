import * as d3 from "d3"

console.log("1256789")
d3.select('#d3')
  .selectAll("div")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("div")
  .style("height", (d)=> d + "px")