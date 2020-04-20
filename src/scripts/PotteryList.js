import { usePottery } from "./PotteryCatalog.js";

const contentTarget = document.querySelector(".potteryList")

export const PotteryList = () => {
    const potteryCollection = usePottery()
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
        alert(`You sold a {shape of pottery} for {price}`)
    }
})