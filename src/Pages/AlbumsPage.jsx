import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainHeader from '../components/MainHeader/MainHeader'
import Button from '../UiElement/Button/Button'
import classes from './Albums.module.css'

const AlbumsPage = () => {
  const {token}=useSelector(state=>state.token)
    const {id}=useParams();
    //I can add the array of albums and articles inside redux but in this app not necessary
    const [albums,setAlbums]=useState([]);
    useEffect(()=>{

      try{
        async function fetchAlbums(){
          const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              
              },
           
          })
        
        
          
          setAlbums(data.items)
      }
  
      fetchAlbums();
  


      }catch(e){}



    },[id])
  return (
    <>
 <MainHeader/> 
 <Typography variant="h3">
{albums[0]?.artists[0].name}
  </Typography>
  <Typography variant="h4">
    Albums
  </Typography>
 <Grid className={classes.card} container>

  {albums?.map((albums)=>{
return(

  <Grid  key ={albums.id} item xs={5} md={2}  lg={2}>
  
  <Card>
    <CardMedia 
    style={{height:250,backgroundSize:'contain'}}
    image={albums?albums.images[0].url:'https://aitmonitor.com/wp-content/uploads/2022/01/Spotify.jpg'}
    title={albums.name}
    ></CardMedia>
 <CardContent className={classes.content}>
 <Typography variant='h5'>{albums.name}</Typography>
 <Typography>{albums.artists[0].name}</Typography>
 <Box className={classes.box}>
 <Typography  variant="subtitle1">{albums.release_date}</Typography>
 <Typography  variant="subtitle1">{albums.total_tracks} tracks</Typography>
 </Box>
 <CardActions className={classes.cardAction}>
 <Button className={classes.button} href={albums.external_urls.spotify}>View On Spotify</Button>
 </CardActions>
 </CardContent>
 </Card>
 </Grid>
 


);

  })}




</Grid>

 </>

  )
}

export default AlbumsPage