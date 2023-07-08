import { createContext } from 'react'

const UserContext = createContext({intro:null, setColor:null, setIntro:null, color:null, isLogoTexture:null, setIsLogoTexture:null, setIsFullTexture:null, isFullTexture:null, logoVal:null, setLogoVal:null, fullLogoVal:null, setFullLogoVal:null});

export default UserContext;