
import { MyD3 } from "./common"
import * as d3 from 'd3'

const d3Div = d3.select('#d3')
const colorMap = d3.interpolateRgb(
  d3.rgb('#d6e685'),
  d3.rgb('#1e6823')
)
export const data: Array<any> = [4, 8, 15, 16, 23, 42, 89, 100]

// githubCount(data)
// let myD3 = new MyD3("#d3")
// myD3.initRect(data)
function githubCount(array) {
  d3Div.selectAll('div').data(array).enter().append('div').style('background-color', (d) => {
    return d === 0 ? '#eee' : colorMap(d / 100)
  }).style('height', '20px')
}
githubCount(data)