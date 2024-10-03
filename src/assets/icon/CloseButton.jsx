/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function CloseButton({ fill = "#fff", stroke = "#fff" }) {
  return (
    <svg
      height="40px"
      width="40px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}

export default CloseButton;
