import React from 'react';
import { AddItemContext } from './UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Preview from './Preview';
import Header from './Header';



const Additem = () => {

    const getData=AddItemContext()
    const{formData,setFormData,handleSubmit,previewImage,existingData,setPreviewImage,handleShow,loading,setLoading,col}=getData;
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
   {/* <Preview/> */}
    <div className='w-100 d-flex justify-content-center align-item-center '>
      <form className='w-75 '>
        <h1 className='text-center' >AddItem</h1>
        <div className="inputfields " style={style}>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="Itemname" className='form-label '>
            ItemName
        </label><span>*</span>
        <input type="text" 
         name="itemname" 
         id="Itemname"
          className="form-control " 
          value={formData.itemname}
          onChange={(e)=>setFormData({...formData,itemname:e.target.value})}
          required
          
          />
            </div>
        
        
            <div className='col-lg-6 col-md-6 col-sm-12 p-3'>
        <label htmlFor="Itemname" className='form-label'>
        description
        </label><span>*</span>
        <input type="text" 
         name="description" 
         id="description"
          className="form-control" 
          value={formData.description}
          onChange={(e)=>setFormData({...formData,description:e.target.value})}
          
          />
          </div>
        
            <div className='col-lg-6 col-md-6 col-sm-12 p-3'>
        <label htmlFor="category" className='form-label'>
        category
        </label>
        <select name="category"
         id="category"
         className='form-control'
         value={formData.category}
         onChange={(e)=>setFormData({...formData,category:e.target.value})
        }
        required>
            <option selected>select...</option>
            <option value="medical">medical</option>
            <option value="dolo">dolo</option>
            <option value="citrizs">citrizs</option>
            <option value="toxy">toxy</option>

         </select>
         </div>
        
        
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="manufacturer" className='form-label '>
        manufacturer
        </label><span>*</span>
        <input type="text" 
         name="manufacturer" 
         id="manufacturer"
          className="form-control " 
          value={formData.manufacturer}
          onChange={(e)=>setFormData({...formData,manufacturer:e.target.value})}
          required
          
          />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="unitOfMeasure" className='form-label '>
        unitOfMeasure
        </label><span>*</span>
        <select 
         name="unitOfMeasure" 
         id="unitOfMeasure"
          className="form-control " 
          value={formData.unitOfMeasure}
          onChange={(e)=>setFormData({...formData,unitOfMeasure:e.target.value})}
          required>
            <option selected>select...</option>
            <option value="box">Box</option>
            <option value="stripes">stripes</option>
            <option value="cipla">cipla</option>


            </select>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="unitPrice" className='form-label '>
        unitPrice
        </label><span>*</span>
        <input type="text" 
         name="unitPrice" 
         id="unitPrice"
          className="form-control " 
          value={formData.unitPrice}
          onChange={(e)=>setFormData({...formData,unitPrice:e.target.value})}
          
          
          />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="initialQuantity" className='form-label '>
        initialQuantity
        </label><span>*</span>
        <input type="text" 
         name="initialQuantity" 
         id="initialQuantity"
          className="form-control " 
          value={formData.initialQuantity}
          onChange={(e)=>setFormData({...formData,initialQuantity:e.target.value})}
          
          
          />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="reorderlevel" className='form-label '>
        Reorderlevel
        </label><span>*</span>
        <input type="text" 
         name="reorderlevel" 
         id="reorderlevel"
          className="form-control " 
          value={formData.reorderlevel}
          onChange={(e)=>setFormData({...formData,reorderlevel:e.target.value})}
          
          
          />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="supplier" className='form-label '>
        Supplier
        </label><span>*</span>
        <input type="text" 
         name="supplier" 
         id="supplier"
          className="form-control " 
          value={formData.supplier}
          onChange={(e)=>setFormData({...formData,supplier:e.target.value})}
          
          
          />
            </div>
            
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 '>
        <label htmlFor="expirationDate" className='form-label '>
        expirationDate
        </label>
        <input type="date" 
         name="expirationDate" 
         id="expirationDate"
          className="form-control " 
        
          value={formData.expirationDate}
          // ? new Date(formData.expirationDate).toISOString().split('T')[0]:''}
          onChange={(e)=>setFormData({...formData,expirationDate:e.target.value})}
          
          
          />
            </div>
            
            <label htmlFor="imageUpload">Upload Image</label>
            <div className='col-lg-12 col-sm-12 col-md-12 mb-3 p-3 imguploaddiv' >
              <input type="file" 
              className='imgUpload1'
              name="imageUpload" 
              id="imageUpload"
              onChange={(e)=>{
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
                setFormData({...formData,imageUpload:e.target.files[0].name},
              
                )}} 
             
              />
              <label htmlFor="imageUpload" className='imgUpload2'>
                {
                  formData.imageUpload? formData.imageUpload:"choosefile..."
                }
              <FontAwesomeIcon icon={faUpload} />
              </label>
            </div>
           <img src={previewImage} alt="" width={"100px"}  height={"100px"}/>

          {/* <div>
            <label htmlFor="imageUpload" className='form-label'>imageUpload</label>
            <input type="file" name="imageUpload" id="imageUpload"/>
          </div>
         */}
            
       
        </div>
        <div className='d-flex justify-content-end p-3' style={style}>
            <button className='btn btn-primary' onClick={handleShow}>Preview</button>
            </div>
            
      </form>

    </div>
   
       
    
    
   
    
    </>
  )

}

export default Additem;
