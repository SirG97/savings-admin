import {
  actionStart,
  actionSuccess,
  actionFailed,
} from "../redux-store/ActionSlice";
import axios from "axios";

export const getCustomers = async (dispatch, params) => {
  
  dispatch(actionStart());
  try {
    const resp = await axios.get(
      process.env.REACT_APP_BASE_URL + "/user/customer/read",
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          page: params?.page,
          size: params?.perPage,
        },
      },
    );
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};

export const createCustomer = async (dispatch, data) => {
  dispatch(actionStart());
  try {
    const resp = await axios.post(
      process.env.REACT_APP_BASE_URL + `/user/customer/create`,
      data,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};

export const getCustomer = async (dispatch, id) => {
  
  dispatch(actionStart());
  try {
    const resp = await axios.get(
      process.env.REACT_APP_BASE_URL + `/user/customer/read/${id}`,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};

export const updateCustomer = async (dispatch, data) => {
  dispatch(actionStart());
  try {
    const resp = await axios.put(
      process.env.REACT_APP_BASE_URL + `/user/customer/update`,
      data,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};
