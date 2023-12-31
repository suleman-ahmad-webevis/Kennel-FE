import API from "../../utils/Interceptor";

const getAllCategory = async () => {
  let API_URL = `category/getAllCategory`;
  const res = await API.get(API_URL);
  return res.data;
};

const categoryService = {
  getAllCategory,
};

export default categoryService;
