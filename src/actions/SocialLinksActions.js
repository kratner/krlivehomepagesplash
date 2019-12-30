import { getData } from "../dataaccess/SocialLinksData";

export const GET_SOCIAL_LINKS_BEGIN = "GET_SOCIAL_LINKS_BEGIN";
export const GET_SOCIAL_LINKS_SUCCESS = "GET_SOCIAL_LINKS_SUCCESS";
export const GET_SOCIAL_LINKS_FAILURE = "GET_SOCIAL_LINKS_FAILURE";

export const getSocialLinksBegin = () => ({
  type: GET_SOCIAL_LINKS_BEGIN
});

export const getSocialLinksSuccess = data => {
  return {
    type: GET_SOCIAL_LINKS_SUCCESS,
    payload: { data }
  };
};

export const getSocialLinksFailure = error => ({
  type: GET_SOCIAL_LINKS_FAILURE,
  payload: { error }
});

export const getSocialLinks = () => {
  return dispatch => {
    dispatch(getSocialLinksBegin());
    getData(data => {
      dispatch(getSocialLinksSuccess(data));
      return data;
    });
  };
};
