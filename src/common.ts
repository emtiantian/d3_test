import * as d3 from "d3"
import { ScaleLinear } from "d3"



export class MyD3 {
  defaultWidth: number = 500
  defaultHeight: number = 500

  d3Dom: any
  type: SelectorType
  width: number = 500
  height: number = 500

  constructor(selector: string, options?: MyD3Option) {
    this.type = options?.selectorType || "svg" as any
    this.height = options?.height || this.defaultHeight
    this.width = options?.height || this.defaultWidth
    this.d3Dom = d3.select(selector as any).append("svg")
      .attr("width", this.width)
      .attr("height", this.height)

  }
  // svg矩形
  initRect(data: Array<any>, linear: ScaleLinear<number, number, never>) {
    let rectHeight = 25
    this.d3Dom.selectAll("rect").
      data(data)
      .enter()
      .append("rect")
      .attr("x", 20)
      .attr("y", function (d: number, i: number) {
        return i * rectHeight
      })
      .attr("width", (d: number) => {
        return linear(d)
      })
      .attr("height", rectHeight - 2)
      .attr("fill", (d: number) => {
        return d === 0 ? '#eee' : this.colorMap(d / 100)
      })

  }
  // 颜色渐变
  colorMap = d3.interpolateRgb(
    d3.rgb('#d6e685'),
    d3.rgb('#1e6823')
  )
  // 线性比例尺
  linear(data: Array<number>, range: Array<number>) {
    let max = d3.max(data) as number
    let min = d3.min(data) as number
    return d3.scaleLinear().domain([min, max]).range(range)
  }


  // 序数比例尺
  ordinal(d: string, data: Array<string>, range: Array<number>) {
    return d3.scaleOrdinal().domain(data).range(range)(d)
  }
  // 坐标轴
  axis(className: string, linear: ScaleLinear<number, number, never>) {
    this.d3Dom.append("g")
      .attr("class", className)
      .attr("transform", "translate(20,230)")
      .call(d3.axisTop(linear));
  }
}