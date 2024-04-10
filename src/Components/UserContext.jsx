import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert";
import swal from "sweetalert2";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    itemname: "",
    description: "",
    category: "",
    manufacturer: "",
    unitOfMeasure: "",
    unitPrice: "",
    initialQuantity: "",
    reorderlevel:"",
    supplier:"",
    expirationDate: "",

    imageUpload: null,
    // suppliers:"",
    Actions: ""
  });
  const [previewImage, setPreviewImage] = useState();
  const [show, setShow] = useState(false); // This state manages the visibility of the modal
  const [existingData, setExistingData] = useState([]);
  const [col, setCol] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: "false", msg: "" });

  const handleShow = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const duplicateItem=existingData.some((eachitem)=>
   
  
    eachitem.itemname==formData.itemname && eachitem.manufacturer==formData.manufacturer
  
)
if(duplicateItem){
  Swal({
    title: "Duplicate Item!",
    text: "Item already existing in the records",
    icon: "error",
  });
}
else{
  axios.post("http://localhost:4000/ExistingData",formData).then((res)=>{
            Swal({
              title: "Good job!",
              text: "Item added to inventory successfully",
              icon: "success",
            });
          })
    
}
  
    setShow(true); // Show the modal preview
  };

  // const handleShow = () => setShow(true); // This function is called to show the modal
  // const handleClose = () => setShow(false); // You might have a function like this to close the modal

    const getData=()=>{

    
    setLoading(true);
    axios.get("http://localhost:4000/ExistingData")
      .then((res) => {
        setExistingData(res.data);
        setCol(Object.keys(res.data[0]));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching existing items", error);
        setLoading(false);
      });
    }
  useEffect(() => {
getData();
  }, []);

  console.log(col);

  const handleSubmit = (e) => {
    e.preventDefault();
    reorderlevel();

    axios.post("http://localhost:4000/ExistingData", formData)
      .then((res) => {
        Swal({
          title: "Good job!",
          text: "Item added to inventory successfully",
          icon: "success",
        });
      });
      getData()
    setShow(false); // Close the modal after form submission
  };

  // Handling delete function
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/ExistingData/${id}`)
          .then((res) => {
            setExistingData(existingData.filter((item) => item.id === id));
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };
  const reorderlevel=()=>{
    if(formData.initialQuantity===formData.reorderlevel){
      alert("matched")

    }
    else{
      alert("doesnot matched")
    }
  }

  return (
    <UserContext.Provider value={{
      formData, setFormData, handleDelete, handleSubmit, existingData,
      previewImage, setPreviewImage, show, setShow, handleShow, col,
      loading, setLoading, error, setError,reorderlevel
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const AddItemContext = () => {
  return useContext(UserContext);
};
