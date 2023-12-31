import { toast } from "react-toastify";
import API from "../../utils/Interceptor";

const createDogNft = async ({ obj, allFormsData }) => {
  let API_URL = `dogNft/createDogNft`;
  const res = await API.post(API_URL, allFormsData);
  if (res.status === 200 || res.status === 201) {
    obj.navigate("/create-dog-nft/congratulations");
    sessionStorage.setItem("nftId", res?.data?.nftId);
  }
  toast.success(res?.data?.message, { theme: "colored" });
  return res.data;
};

const updateDogNft = async ({ obj, allFormsData }) => {
  let API_URL = `dogNft/updateDogNft/${obj.nftId}`;
  const res = await API.put(API_URL, allFormsData);
  sessionStorage.setItem("nftId", obj?.nftId);
  if (res.status === 200 || res.status === 201) {
    obj.navigate("/edit-dog-nft/congratulations");
  }
  toast.success(res?.data?.message, { theme: "colored" });
  return res.data;
};

const getAllDogNft = async () => {
  let API_URL = `dogNft/getAllNfts`;
  const res = await API.get(API_URL);
  return res.data;
};

const getDogNft = async (obj) => {
  let API_URL = `dogNft/getDogNft/${obj.dogId}`;
  const res = await API.get(API_URL);
  return res.data;
};

const categoryService = {
  createDogNft,
  updateDogNft,
  getAllDogNft,
  getDogNft,
};

export default categoryService;
