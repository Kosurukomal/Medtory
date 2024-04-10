import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddItemContext } from './UserContext';

function Preview() {
    const getData=AddItemContext();
    const{formData,
        setFormData,
        handleSubmit,
        previewImage,
        setPreviewImage,
        show,handleClose,
        col,
        setShow,
        existingData}=getData;
  console.log(col);

 
 

  return (
    <>
     

      <Modal show={show}  >
        {/* onHide={()=>setShow(false)} */}
        
        <Modal.Header closeButton>
          <Modal.Title>Preview item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className='table table-striped'>
         <tbody>
            
                <tr>
                    <th>{col[1]}</th>
                    {/* <th>Itemname:</th> */}
                    <td>{formData.itemname}</td>

                </tr>
                <tr>
                    <th>{col[2]}</th>
                    {/* <th>description:</th> */}

                    <td>{formData.description}</td>

                </tr>
                <tr>
                {/* <th>category:</th> */}

                    <th>{col[3]}</th>
                    <td>{formData.category}</td>

                </tr>
                <tr>
                {/* <th>manufacturer:</th> */}

                    <th>{col[4]}</th>
                    <td>{formData.manufacturer}</td>

                </tr>
                <tr>
                {/* <th>unitOfMeasure:</th> */}

                    <th>{col[5]}</th>
                    <td>{formData.unitOfMeasure}</td>

                </tr>
                <tr>
                {/* <th>unitPrice:</th> */}

                    <th>{col[6]}</th>
                    <td>{formData.unitPrice}</td>

                </tr>
                <tr>
                {/* <th>initialQuantity:</th> */}

                    <th>{col[7]}</th>
                    <td>{formData.initialQuantity}</td>

                </tr>
                <tr>
                {/* <th>expirationDate:</th> */}

                    <th>{col[8]}</th>
                    <td>{formData.expirationDate}</td>

                </tr>
                <tr>
                {/* <th>imageUpload:</th> */}

                    <th>{col[9]}</th>
                    <td>{formData.imageUpload}</td>

                </tr>
            
         </tbody>
        </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"
           onClick={()=>{setShow(false)}}
          >
            close
          </Button>
          <Button type='submit' variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Preview;