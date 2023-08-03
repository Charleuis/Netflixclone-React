import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageurl } from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovie] = useState([])
  const [urlId,setUrlId]=useState([])

 useEffect(()=>{
  axios.get(props.url).then(response=>{
    setMovie(response.data.results)
  }).catch(err=>{
    alert('Network Error') 
  })
 },[])
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const handleMovie=(id)=>{
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.lenght!=0){
      setUrlId(response.data.results[0])
    }
  })
 
}

return (
  <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj) => (
        <div className="movie-container" key={obj.id}>
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${imageurl + obj?.backdrop_path}`}
            alt="poster"
          />
          <p className="hover-text">{obj.name || obj.title}</p>
        </div>
      ))}
    </div>
    {urlId ? <Youtube opts={opts} videoId={urlId.key} /> : ""}
  </div>
);

}

export default RowPost
