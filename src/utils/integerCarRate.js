export const integerCarRate = (carRate) => {
  const trimmedCarRate = carRate.toString().split('.');
  if (trimmedCarRate.length > 1) {
    let integerCarValue = Number(trimmedCarRate[0]);
    const decimalRate = trimmedCarRate[1].substring(0, 2);
    if (decimalRate > 5) {
      integerCarValue += 1;
      return integerCarValue;
    }
  }
  return trimmedCarRate[0];
};
