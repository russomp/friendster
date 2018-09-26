import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://randomuser.me/api/?results=30')
    .then(response => response.json())
    .then(({ results }) =>
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: results })
    )
    .catch(error =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error.message })
    );
};
