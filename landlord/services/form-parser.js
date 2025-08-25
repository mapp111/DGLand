export default class ScheduleData {
  constructor(collaborator, leader, phoneNumber, address, consultingPrice, time, date, id) {
    this.collaborator = collaborator;
    this.leader = leader;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.consultingPrice = consultingPrice;
    this.time = time;
    this.date = date;
    this.id = id;
  }

  static parseFormData(formData) {
    const collaborator = (formData.match(/CTV:\s*([^L\n]*)/)?.[1] || "").trim();
    const leader = (formData.match(/Leader:\s*([^\n]*)/)?.[1] || "").trim();
    const phoneNumber = (formData.match(/Sđt khách:\s*([^\n]*)/)?.[1] || "").trim();
    const address = (formData.match(/Địa chỉ\s*([^\n]*)/)?.[1] || "").trim();
    const consultingPrice = (formData.match(/Tư vấn giá\s*:\s*([^\n]*)/)?.[1] || "").trim();

    // Bắt thời gian dạng "14h00"
    const timeDateMatch = formData.match(/Thời gian xem:\s*([0-9]{1,2}h[0-9]{2})\s*Ngày:\s*([^\n]*)/);
    const time = timeDateMatch?.[1]?.trim() || "";
    const date = timeDateMatch?.[2]?.trim() || "";

    const id = (formData.match(/Mã xem phòng:\s*([^\n]*)/)?.[1] || "").trim();

    return new ScheduleData(collaborator, leader, phoneNumber, address, consultingPrice, time, date, id);
  }
}