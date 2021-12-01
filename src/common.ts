import * as d3 from "d3"

export class MyD3 {

  d3Dom: any
  type: SelectorType
  width: number = 300
  height: number = 300

  constructor(selector: string, options?: MyD3Option) {
    this.type = options?.selectorType || "svg" as any
    this.height = options?.height || 300
    this.width = options?.height || 300
    this.d3Dom = d3.select(selector as any)
      .append(this.type as any)
      .attr("width", this.width)
      .attr("height", this.height)
  }
  // svg矩形
  initRect(data: Array<any>) {
    let rectHeight = 25
    this.d3Dom.append("rect").selectAll("rect").
      data(data)
      .enter()
      .append("rect")
      .attr("x", 20)
      .attr("y", function (d: number, i: number) {
        return i * rectHeight
      })
      .attr("width", function (d: number) {
        return d;
      })
      .attr("height", rectHeight - 2)
      .attr("fill", "steelblue");
  }
  colorMap = d3.interpolateRgb(
    d3.rgb('#d6e685'),
    d3.rgb('#1e6823')
  )
  // 柱状图
  count(data: Array<any>) {
    this.d3Dom
      .data(data)
      .enter()
      .append('rect')
      .style('height', (d: number) => d + 'px')
  }
  // 绘制类似github 活动日志
  githubCount(data: Array<any>): void {
    this.d3Dom.data(data).enter().append('div').style('background-color', (d: number) => {
      return d === 0 ? '#eee' : this.colorMap(d / 100)
    }).style('height', '20px')
  }
}