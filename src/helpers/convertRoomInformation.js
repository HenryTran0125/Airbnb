/* eslint-disable no-unused-vars */
export function convertInformation(text) {
  const lookUp = {
    mayGiat: "Máy giặt",
    banLa: "Bàn là",
    tivi: "Tivi",
    wifi: "Wifi",
    doXe: "Chỗ đỗ xe",
    hoBoi: "Hồ bơi",
    banUi: "Bàn ủi",
    bep: "Bếp",
    dieuHoa: "Điều hòa",
    phongNgu: "Phòng ngủ",
    giuong: "Giường",
    phongTam: "Phòng tắm",
    khach: "Khách",
  };

  text = lookUp[text];

  return text;
}
