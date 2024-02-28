export const trimmedDistance = (distance) => {
  let finalDistance;
  if (distance.includes(',')) {
    finalDistance = distance.split(',');
    finalDistance = finalDistance[0] + finalDistance[1];
    finalDistance = parseInt(finalDistance);
    return finalDistance;
  } else {
    finalDistance = distance.split(' ');
    finalDistance = parseInt(finalDistance[0]);
    return finalDistance;
  }
};
