export default {
  saveIdToStore: async () => {
    const queryParams = appsmith.URL.queryParams;
    
    if (queryParams && queryParams.branch) {
      const branchValue = queryParams.branch;
      
      if (branchValue.includes("?resultId=")) {
        const id = branchValue.split("?resultId=")[1]; // Tách lấy resultId
        storeValue("resultId", id); // Lưu giá trị resultId vào store
        // Lưu tên người dùng vào store trước khi chạy API
        storeValue("resultname", getUser.data[0]?.name || "Unknown");
        // Chạy API getUser để lấy dữ liệu người dùng
        await getUser.run(); // Chạy API để lấy thêm dữ liệu
        // Trả về kết quả từ API (dữ liệu người dùng)
        return getUser.data; // Trả về dữ liệu từ getUser
      }
    }
    return "Login"; // Trường hợp không có resultId trong query params
  }
}
