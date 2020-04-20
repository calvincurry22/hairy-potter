// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5)
    console.log(mug)
let platter = makePottery("platter", 1.5, 3)
    console.log(platter)
let bowl = makePottery("bowl", 2, 4)
    console.log(bowl)
let vase = makePottery("round vase", 7, 10)
    console.log(vase)
let cylinderVase = makePottery("cylinder vase", 3, 9)
    console.log(cylinderVase)


// Fire each piece of pottery in the kiln
const fireMug = firePottery(mug, 1000)
const firePlatter = firePottery(platter, 2000)
const fireBowl = firePottery(bowl, 2100)
const fireVase = firePottery(vase, 2200)
const fireCylinderVase = firePottery(cylinderVase, 3000)

// Determine which ones should be sold, and their price
const sellMug = toSellOrNotToSell(fireMug)
    
const sellPlatter = toSellOrNotToSell(firePlatter)
    
const sellBowl = toSellOrNotToSell(fireBowl)
    
const sellVase = toSellOrNotToSell(fireVase)
    
const sellCylinder = toSellOrNotToSell(fireCylinderVase)
    

// Invoke the component function that renders the HTML list

PotteryList()