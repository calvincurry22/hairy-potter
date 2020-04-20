import { usePottery } from "./PotteryCatalog.js";
import { useThePottery, getPottery, deletePottery } from "./PotteryProvider.js";

const contentTarget = document.querySelector(".potteryList")
const eventHub = document.querySelector(".container")
export const PotteryList = () => {
        
    const potteryCollection = useThePottery()
    contentTarget.innerHTML = `
        ${potteryCollection.map(pot => {
            return `
                <section class="pottery" id="pottery--1">
                    <h2 class="pottery__shape">${pot.shape}</h2>
                    <div class="pottery__properties">
                        Item weighs ${pot.weight} pounds and is ${pot.height} inches in height
                    </div>
                    <div class="pottery__price">
                        Price is $${pot.price}
                    </div>
                    <button id="sell--${pot.id}">Sell Item</button>
                </section>
            `
        }).join("")}
    `
}


contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("sell--")) {
        const [prefix, potId] = clickEvent.target.id.split("--")
        const pottery = useThePottery()
        const foundPot = pottery.find(pot => pot.id === parseInt(potId))
        alert(`You sold a ${foundPot.shape} for $${foundPot.price}`)
        deletePottery(potId)
    }
})

eventHub.addEventListener("stateChange", CustomEvent => {
    contentTarget.innerHTML = ""
    PotteryList()
})
