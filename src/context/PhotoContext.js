import createDataContext from './createDataContext';
import {FLICKR_API} from '../api/flickr';
import fetchJsonp from 'fetch-jsonp';

const flickrReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_photos':
      return action.payload;
    default:
      return state;
  }
};

const fetchPhotos = dispatch => async (tags) => {

  try {
    const endpoint = `${FLICKR_API}&tags=${tags}`;
    const response = await fetchJsonp(endpoint, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    }).then(response => response.json())
    console.log('response', response)
    dispatch({ type: 'fetch_photos', payload: response.items });
  } catch (error) {
    throw new Error(error);
  }
};


export const { Provider, Context } = createDataContext(
  flickrReducer,
  { fetchPhotos },
  []
);
