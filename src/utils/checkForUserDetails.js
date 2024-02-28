export default function checkForUserDetails(
  userDetails,
  payByCash,
  payByByLink
) {
  if (
    userDetails.firstName === '' ||
    userDetails.lastName === '' ||
    userDetails.email === '' ||
    userDetails.mobileNumber === null ||
    userDetails.instructions === '' ||
    (payByCash === false && payByByLink === false)
  ) {
    return false;
  }
  return true;
}
