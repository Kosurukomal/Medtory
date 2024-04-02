import { createContext, useContext,useState } from "react";
import swal from "sweetalert";


export const UserContext=createContext();
 export const UserProvider=({children})=>{
      const [formData,setFormData]=useState(
        {
    itemname: "",
    description: "",
    category: "",
    manufacturer: "",
    unitOfMeasure: "",
    unitPrice: "",
    initialQuantity: "",
    expirationDate: "",
    imageUpload: null,
        }
      );
      const handleSubmit=(e)=>{
         e.preventDefault()
      }
      
      return(
        <UserContext.Provider value={{formData,setFormData,handleSubmit}}>{children}
        </UserContext.Provider>

      )
    
  
 }
 export const AddItemContext=()=>{
    return useContext(UserContext)
}