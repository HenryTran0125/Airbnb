/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Button({ children, height, width, borderRadius }) {
  const buttonStyle = {
    height: height || "auto",
    width: width || "auto",
    borderRadius: borderRadius || "0px",
    borderWidth: "0px",
    backgroundColor: "#fe6b6f",
    display: "flex",
    alignItems: "center",
  };
  return <button style={buttonStyle}>{children}</button>;
}

export default Button;
