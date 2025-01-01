import {
  actionStart,
  actionSuccess,
  actionFailed,
} from "../redux-store/ActionSlice";
import axios from "axios";

export const getDashboardData = async (dispatch) => {
  
  dispatch(actionStart());
  try {
    const resp = await axios.get(
      process.env.REACT_APP_BASE_URL + "/user/dashboard/read",
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      },
    );
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};

