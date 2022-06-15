import  Rating  from '@material-ui/lab/Rating/Rating';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../UiElement/Card/Card';
import classes from './Artists.module.css';
import {FiSearch} from 'react-icons/fi'

const Artists = () => {
const {token}=useSelector(state=>state.token)
    const[artists,setArtists]=useState([]);
    const[search,setSearch]=useState();


    const SearchHandler=(e)=>{
    
setSearch(e.target.value);
console.log(search)
    }

    useEffect(()=>{
        try{
            async function fetchArtist(){
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`,
            
            },
            params: {
                q: search,
                type: "artist"
            }
        })
        console.log(data.artists.items,'asd');
        
  setArtists(data.artists.items)
    }

    fetchArtist();

    }catch(e){

        console.log(e)
    }

    },[search])

  return (
   <div className={classes.artists}>
    <div className={classes.input}>
    <input 
    placeholder={`'Search for an artists...'`}
    type='search'
    onChange={SearchHandler}
    >
    </input>
    <FiSearch size={'15px'} className={classes.icon}/>
    </div>

     <div className={classes.container} >
      {search===""?'Empty Please Enter Artist Name':
      artists?.map((artist,i)=>{
        return(
        
      
       <Card key={artist.id} className={classes.card}>
        <Link to={`/albums/${artist.id}`}>
        <div className={classes.image}>
         <img src={artist.images[0]?artist.images[0].url:'https://aitmonitor.com/wp-content/uploads/2022/01/Spotify.jpg'} alt={artists.name}/>
        </div>
        <div className={classes.info}>
        <h1>{artist.name}</h1>
        <h2>{artist.followers.total.toLocaleString()} Followers</h2>
        </div>
        <div className={classes.rating}>
            <Rating name="read-only" precision={0.5} value={Number((artist.popularity*5/100))} readOnly />
            <h2>{artist.popularity} popularity</h2>
        </div>
        </Link>   


       </Card>
     
     
        )
     })}
        
    
 </div>

   </div>
  )
}

export default Artists