let potteryInventory = []

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const stateChangeEvent = new CustomEvent("stateChange")
    eventHub.dispatchEvent(stateChangeEvent)
}


export const getPottery = () => {
    return fetch("http://localhost:3000/pottery")
    .then(res => res.json())
    .then(parsed => potteryInventory = parsed)
}



export const useThePottery = () => potteryInventory.slice()


export const deletePottery = (potteryId) => {
    return fetch(`http://localhost:3000/pottery/${potteryId}`, {
        method: "DELETE"
    })
        .then(getPottery)
        .then(dispatchStateChangeEvent)
}