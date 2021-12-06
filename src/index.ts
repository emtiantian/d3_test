
import { MyD3 } from "./common"
import './styles/index.css'

export const data: Array<any> = [4, 8, 15, 16, 23, 42, 89, 100]


let myD3 = new MyD3("#d3")
let linear = myD3.linear(data, [0, 300])
myD3.initRect(data, linear)
myD3.axis('axis', linear)

