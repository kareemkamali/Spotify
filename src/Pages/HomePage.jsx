import React,{useEffect} from 'react'
import Artists from '../components/Artists/Artists'
import Login from '../components/Login/Login'
import MainHeader from '../components/MainHeader/MainHeader'
import { getTokenFromResponse } from '../ConnectSpotify/SpotifyLogin';
import {useDispatch,useSelector} from'react-redux';
import { addToken } from '../redux/tokenSlice';
import UserAuthentication from '../components/Authentication/UserAuthentication';
const Homepage = () => {
const dispatch=useDispatch();
const {token}=useSelector(state=>state.token);
const {isValid}=useSelector(state=>state.isValid);
console.log(isValid);
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
    {!isValid && !token &&<UserAuthentication/>}
 {!token &&isValid &&<Login/>}
 {token&&<Artists/>}

  </>
  )
}

export default Homepage