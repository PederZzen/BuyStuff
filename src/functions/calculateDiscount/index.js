export const calculateDiscount = (x, y) => {
    let percentage = (x - y) / x * 100
    if (percentage === 0) {
      return
    }
    return `-${Math.floor(percentage)}%`
}
