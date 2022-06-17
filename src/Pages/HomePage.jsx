import React,{useEffect} from 'react'
import Artists from '../components/Artists/Artists'
import Login from '../components/Login/Login'
import MainHeader from '../components/MainHeader/MainHeader'
import { getTokenFromResponse } from '../ConnectSpotify/SpotifyLogin';
import {useDispatch,useSelector} from'react-redux';
import { addToken } from '../redux/tokenSlice';

const Homepage = () => {
const dispatch=useDispatch();
const {token}=useSelector(state=>state.token);

  useEffect(()=>{
const hash=getTokenFromResponse();
window.location.hash="";
const _getToken=hash.access_token;
console.log(_getToken)
if(_getToken)
dispatch(addToken({token:_getToken}))
  },[]);
  return (
    <>
    <MainHeader/>
 {!token  &&<Login/>}
 {token&&<Artists/>}

  </>
  )
}

export default Homepage