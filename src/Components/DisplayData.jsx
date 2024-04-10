import React from 'react'
import Header from './Header';
import { AddItemContext } from './UserContext';

const DisplayData = () => {
    const getData=AddItemContext()
    const{formData,setFormData,handleSubmit,previewImage,existingData,setPreviewImage,handleShow,handleDelete,loading,setLoading,col}=getData;
  const  style={
     width:"75%",
     display:"flex",
     flexWrap:"wrap",
     marginLeft:"auto",
     marginRight:"auto",
    }
  return (
    <>
      <Header/>
      <div>
          <table class="table table-striped">
  <thead>
    <tr>
      {
        col.map((eachcol)=>{
          return(
            <th scope="col">{eachcol}</th>
            
          )
        })
      }
      <th>Actions</th>
     
      
    </tr>
  </thead>
  <tbody>
    {
      existingData.map((eachitem,index)=>{
        return(
          <tr key={index}>
      <td>{eachitem.id}</td>

      <td>{eachitem.itemname}</td>
      <td>{eachitem.description}</td>
      <td>{eachitem.category}</td>
      <td>{eachitem.manufacturer}</td>
      <td>{eachitem.unitOfMeasure}</td>
      <td>{eachitem.unitPrice}</td>
      <td>{eachitem.initialQuantity}</td>
      <td>{eachitem.expirationDate}</td>
      <td>{eachitem.imageUpload}</td>
      <td>
        <button className='btn-Edit mx-2 '>Edit</button>
        <button className='btn-Del' onClick={()=>handleDelete(eachitem.id)}>Delete</button>
      </td>

      


            
          </tr>
        )
      })
    }
    
  </tbody>
</table>
        </div>
      
    </>
  )
}

export default DisplayData;
