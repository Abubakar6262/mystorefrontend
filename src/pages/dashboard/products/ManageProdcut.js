import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'



const columns = [
  {
    name: 'Serial Number',
    selector: row => row._id,
    // sortable: true,
  },
  {
    name: 'Title',
    selector: row => row.title,
    // sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
    // sortable: true,
  },
  {
    name: 'Color',
    selector: row => row.color,
    // sortable: true,
  },
  {
    name: 'Stock',
    selector: row => row.stock,
    // sortable: true,
  },
  {
    name: 'Actions',
    cell: row => (
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        <button type='button' className="btn btn-sm btn-outline-warning me-2 my-1" data-toggle="modal" data-target="exampleModal">
          Edit
        </button>
        <button className="btn btn-sm btn-danger my-1" onClick={() => handleDelete(row)}>
          Delete
        </button>
      </div>
    ),
  },
];

export default function ManageProdcut() {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([])
  const [isLoasing, setIsLoading] = useState(true)


  const filteredData = products.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );



  useEffect(() => {
    axios.get('http://localhost:5000/dashboard/readproduct')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])



  return (
    <div className="container">
      {isLoasing
        ? <div className="row d-flex justify-content-center align-items-center h-100 my-5"><div className="spinner-border spinner-border-lg"></div></div>
        : <div className="row">
          <div className="col-12 col-md-2 mb-2">
            <input
              className='form-control'
              type="text"
              placeholder="Search by title"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
          <div className="col-12">
            <DataTable
              columns={columns}
              // data={data}
              data={filteredData}
              pagination
              highlightOnHover
              striped
              dense
            // defaultSortField="serialNumber"
            />
            
          </div>
        </div>
      }
    </div>

  )
}



// const handleEdit = row => {
// <ModalEdit/>
//   // console.log('Edit:', row);
// };

// Model for handleEdit logic
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


const handleDelete = async (row) => {
  // const [isProcessing, setIsProcessing] = useState(true)

  const productId = row._id

  try {
    // setIsProcessing(true)
    const response = await axios.get(`http://localhost:5000/dashboard/deleteprodcut/${productId}`);
    console.log(response.data);
    window.notify('Product deleted successfully', 'success');
    // onDelete(); // Trigger a callback to update the product list or perform any other necessary action
  } catch (error) {
    console.error('Error deleting product:', error);
    window.notify('Product cannot deleted successfully', 'error');
  }
  // finally {
  //   // setIsProcessing(false)
  // }
  console.log('Delete:', row);
};