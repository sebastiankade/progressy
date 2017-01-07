import fetch from 'isomorphic-fetch'

const getConfig = () => ({ type: 'GET_CONFIG' });

const getConfigSuccess = (data) => {
  return { type: 'GET_CONFIG_SUCCESS', payload: data };
}

const getConfigFailed = (error) => {
  return { type: 'GET_CONFIG_ERROR', error };
}

const fetchConfig = () => {
  return (dispatch) => {
    dispatch(getConfig())

    return fetch('http://frontend-exercise.apps.staging.digital.gov.au/bars')
      .then(response => response.json())
      .then(json => {
        dispatch(getConfigSuccess(json));
      })
      .catch(err => {
        dispatch(getConfigFailed(err));
      });
  }
}

export default fetchConfig;
