import { getData } from "../dataaccess/SplashLinksData";

export const GET_SPLASH_LINKS_BEGIN = "GET_SPLASH_LINKS_BEGIN";
export const GET_SPLASH_LINKS_SUCCESS = "GET_SPLASH_LINKS_SUCCESS";
export const GET_SPLASH_LINKS_FAILURE = "GET_SPLASH_LINKS_FAILURE";

export const getSplashLinksBegin = () => ({
  type: GET_SPLASH_LINKS_BEGIN
});

export const getSplashLinksSuccess = data => {
  return {
    type: GET_SPLASH_LINKS_SUCCESS,
    payload: { data }
  };
};

export const getSplashLinksFailure = error => ({
  type: GET_SPLASH_LINKS_FAILURE,
  payload: { error }
});

export const getSplashLinks = () => {
  return dispatch => {
    dispatch(getSplashLinksBegin());
    getData(data => {
      dispatch(getSplashLinksSuccess(data));
      return data;
    });
  };
};
