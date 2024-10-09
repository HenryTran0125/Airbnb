const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjEzLzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MjM2NDgwMDAwMCIsIm5iZiI6MTcyOTA5ODAwMCwiZXhwIjoxNzUyNTEyNDAwfQ.uUNx5EJJzaJzUXYGgn0BZoV7x0Jkr7m5OOUyEdCJvFE";
export default apiToken;

// src/utils/api.js

// Hàm lưu token vào localStorage
export const saveToken = (token) => {
  localStorage.setItem("access_token", token);
};

// Hàm lấy token từ localStorage
export const getToken = () => {
  return localStorage.getItem("access_token");
};

// Hàm thực hiện fetch API với token
export const fetchWithToken = async (url, options = {}) => {
  const token = getToken();
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`, // Thêm token vào headers
    };
  } else {
    console.log("Token không tồn tại, yêu cầu người dùng đăng nhập.");
    // Thực hiện logic chuyển hướng đến trang đăng nhập nếu cần
  }

  // Thực hiện fetch API
  const response = await fetch(url, options);

  // Kiểm tra nếu có lỗi
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json(); // Trả về dữ liệu JSON
};
