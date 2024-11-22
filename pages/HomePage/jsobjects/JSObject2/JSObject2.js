export default {
  saveIdToStore: async () => {
    const queryParams = appsmith.URL.queryParams;
    if (queryParams && queryParams.branch) {
      const branchValue = queryParams.branch;
      if (branchValue.includes("?resultId=")) {
        const id = branchValue.split("?resultId=")[1]; // Tách lấy resultId
        storeValue("resultId", id); // Lưu giá trị resultId vào store
        // Lưu tên người dùng vào store
        storeValue("resultname", getUser.data[0].name);
        // Chạy API getUser sau khi lưu giá trị vào store
        await getUser.run(); // Chạy API để lấy thêm dữ liệu nếu cần
      }
    }
  }
}
