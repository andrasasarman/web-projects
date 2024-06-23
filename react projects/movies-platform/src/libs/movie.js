import { url, axios } from './config'

const basePath = `${url}/movies`;

export function getMovies(accessToken) {
  return fetch(`${basePath}`, {
    headers: 
    {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if(!response.ok){
      throw response;
    }
    return response.json()})
}

export function getMovie(id, accessToken) {
    return axios.get(`${basePath}/${id}`, {
      headers: getDefaultHeaders(accessToken),
    });
  }

export function createMovie(movie, accessToken){
    return axios.post(`${basePath}`, movie, {
        headers: getDefaultHeaders(accessToken)
    })
}

export function patchMovie(id, partialMovieProperties, accessToken) {
    return axios.patch(`${basePath}/${id}`, partialMovieProperties, {
      headers: getDefaultHeaders(accessToken),
    });
  }

export function deleteMovie(id, accessToken){

    return axios.delete(`${basePath}/${id}`,{
        headers: getDefaultHeaders(accessToken)
    })
}

function getDefaultHeaders(accessToken) {
    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
}