export default function checkForCarSelection(
  economyButtonSelected,
  luxuryButtonSelected,
  premiumButtonSelected
) {
  if (
    economyButtonSelected === 0 &&
    luxuryButtonSelected === 0 &&
    premiumButtonSelected === 0
  ) {
    return false;
  }

  return true;
}
