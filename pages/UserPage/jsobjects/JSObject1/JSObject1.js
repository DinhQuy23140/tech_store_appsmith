export default {
  saveIdToStore: () => {
    const queryParams = appsmith.URL.queryParams;
    if (queryParams && queryParams.branch) {
      const branchValue = queryParams.branch;
      if (branchValue.includes("?id=")) {
        const id = branchValue.split("?id=")[1]; // Tách lấy id
        storeValue("id", id); // Lưu giá trị id
        return getUser.run(); // Trả về id (nếu cần)
      }
    }
    return "Login"; // Trường hợp không có id
  }
}
