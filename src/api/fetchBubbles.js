import axios from "axios";

export const fetchBubbles = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      console.log(res);
      return setColorList(res.data);
    })
    .catch((err) => {
      return err;
    });
};
