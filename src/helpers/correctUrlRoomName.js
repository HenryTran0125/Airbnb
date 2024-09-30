/* eslint-disable no-unused-vars */
export function correctUrlRoomName(text) {
  const correctText = text.includes("/") ? text.split("/").join("-") : text;

  return correctText;
}
