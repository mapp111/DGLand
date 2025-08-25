export function ValidateInput(data) {
  if (!data.collaborator) {
    alert("Collaborator is required.");
    return false;
  }
  if (!data.leader) {
    alert("Leader is required.");
    return false;
  }
  if (!data.phoneNumber || !/^\d{10,11}$/.test(data.phoneNumber)) {
    alert("Phone number must be 10 or 11 digits.");
    return false;
  }
  if (!data.address) {
    alert("Address is required.");
    return false;
  }
  if (!data.consultingPrice || isNaN(Number(data.consultingPrice))) {
    alert("Consulting price must be a valid number.");
    return false;
  }
  if (!data.time || !/^[0-9]{1,2}h[0-9]{2}$/.test(data.time)) {
    alert("Time must be in format HhMM (e.g., 9h30).");
    return false;
  }
  if (!data.date) {
    alert("Date is required.");
    return false;
  }
  if (!data.id) {
    alert("ID is required.");
    return false;
  }
  return true;
}