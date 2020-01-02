import { getData } from "../dataaccess/LinksData";

export const GET_LINKS_BEGIN = "GET_LINKS_BEGIN";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
export const GET_LINKS_FAILURE = "GET_LINKS_FAILURE";

export const getLinksBegin = () => ({
  type: GET_LINKS_BEGIN
});

export const getLinksSuccess = data => {
  return {
    type: GET_LINKS_SUCCESS,
    payload: { data }
  };
};

export const getLinksFailure = error => ({
  type: GET_LINKS_FAILURE,
  payload: { error }
});

export const getLinks = () => {
  return dispatch => {
    dispatch(getLinksBegin());
    getData(data => {
      dispatch(getLinksSuccess(data));
      return data;
    });
  };
};
