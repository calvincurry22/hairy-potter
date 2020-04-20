let inventory = []

export const toSellOrNotToSell = (potteryObject) => {
  
   if(potteryObject.cracked) {
       return false
   } else {
        (potteryObject.weight >= 6) ? potteryObject.price = 40 : potteryObject.price = 20
        inventory.push(potteryObject)
        
   }
}

export const usePottery = () => inventory.slice()