import React,{useState}  from  "react";

export const FavoritesContext = React.createContext()
export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites}}>
   {children}
    </FavoritesContext.Provider>
  )
}