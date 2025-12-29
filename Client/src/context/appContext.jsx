import axios from "axios";
import { createContext, useEffect, useState,} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate()

  const loadCreditsData = async ()=>{
    try {
      const {data} = await axios.get(`${backendUrl}/api/user/credits`,
        {headers: {token}})

        if(data.success){
          setCredit(data.credits)
          setUser(data.user)
        }

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const generateImage = async (prompt)=>{
    try {
      const {data} = await axios.post(`${backendUrl}/api/image/generate-image`,
        {prompt}, {headers: {token}})

      if(data.success){
        loadCreditsData()
        return data.resultImage 
      }else{
        toast.error(data.message)
        loadCreditsData()

        if(data.creditBalance === 0){
          navigate("/buy")
        }
      }

    } catch (error) {
      toast.error(error.message)
      return null
    }
  }

  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    setUser(null)
    setCredit(0)
  }

  useEffect(()=>{
    if(token){
      loadCreditsData()
    }
  },[token])

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
