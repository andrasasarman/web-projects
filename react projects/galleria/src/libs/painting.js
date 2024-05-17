import  axios  from 'axios';

export function getPaintings(){
    return axios.get('http://localhost:3000/paintings');
}

export function getPaintingById(id){
    return axios.get(`http://localhost:3000/paintings/${id}`);
}