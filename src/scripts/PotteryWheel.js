let potteryId = 1

export const makePottery = (shape, weight, height) => {
    const potteryObject = {
        potShape: shape,
        potWeight: weight,
        potHeight: height,
        id: potteryId++
    }
    return potteryObject
}