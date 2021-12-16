import { useEffect, useState } from "react";
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import axios from "axios";
import moment from 'moment';

function App() {

  var data = [
    {
      'id': 1,
      'item_name': 'Item 1',
      'unit_price': 200,
      'unit_description': 'Test Description 1',
      'created_date': '2021-12-16T13:39',
      'item_image': 'https://picsum.photos/200/300'
    },
    {
      'id': 2,
      'item_name': 'Item 2',
      'unit_price': 300,
      'unit_description': 'Test Description 2',
      'created_date': '2021-12-16T13:39',
      'item_image': 'https://picsum.photos/200/300'
    },
    {
      'id': 3,
      'item_name': 'Item 3',
      'unit_price': 400,
      'unit_description': 'Test Description 3',
      'created_date': '2021-12-16T13:39',
      'item_image': 'https://picsum.photos/200/300'
    },
    {
      'id': 4,
      'item_name': 'Item 4',
      'unit_price': 500,
      'unit_description': 'Test Description 4',
      'created_date': '2021-12-16T13:39',
      'item_image': 'https://picsum.photos/200/300'
    },
    {
      'id': 5,
      'item_name': 'Item 5',
      'unit_price': 600,
      'unit_description': 'Test Description 5',
      'created_date': '2021-12-16T13:39',
      'item_image': 'https://picsum.photos/200/300'
    }
  ]


  const [items] = useState(data);
  const [item_name, setItemName] = useState("");
  const [item_image, setItemImage] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [created_date, setCreatedDate] = useState("");
  const [unit_description, setUnitDescription] = useState("");
  const [item_id, setItemId] = useState("");

  useEffect(() => {

    $(document).ready(function () {
      $('#myTable').DataTable({
        responsive: true,
        processing: true,
      });
    });

  }, [])

  const editItem = (item) => {

    setItemName(item.item_name);
    setUnitPrice(item.unit_price);
    setUnitDescription(item.unit_description);
    setItemId(item.id);
    setCreatedDate(item.created_date)
  }

  const viewItem = (item) => {
    setItemName(item.item_name);
    setUnitPrice(item.unit_price);
    setUnitDescription(item.unit_description);
    setItemId(item.id);
    setItemImage(item.item_image)
    setCreatedDate(item.created_date)
  }

  //  Creating an Item
  const createItem = () => {
    axios.post('https://localhost:9000/items/create-item', {
      /* column name : input value */
      item_name: 'item_name',
      unit_price: 'unit_price',
      unit_description: 'unit_description',
      item_image: 'item_image'
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //  Retriving All Items
  const getAllItems = () => {
    axios.get('https://localhost:9000/items/all-items')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  //  Updating an Item
  const updateItem = () => {
    axios.patch('https://localhost:9000/items/update-item/' + item_id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //  Deleting an Item
  const deleteItem = (id) => {

    var confirm = window.confirm('Are You Sure You Want to Delete this Item ?');

    if (confirm) {

      axios.delete('https://localhost:9000/items/delete-item/' + id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (

    <div className="App">
      <div className="mt-5">
        <h4 className="text-center mt-5">Item Management</h4>
        <div className="row mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <button data-bs-toggle="modal" data-bs-target="#addItemModal" className="btn btn-success mb-4" >Add New Item</button>
                <table id="myTable" className="table table-striped nowrap">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Unit Description</th>
                      <th scope="col">Image</th>
                      <th scope="col">Date / Time</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{item.item_name}</td>
                          <td>{item.unit_price}</td>
                          <td>{item.unit_description}</td>
                          <td><img src={item.item_image} width={20} height={20} /></td>
                          <td>{moment(item.created_date).format("M/DD/YYYY HH:mm:ss A")}</td>
                          <td><i style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#viewItemModal" onClick={() => {
                            viewItem(item)
                          }} className="fas fa-search text-secondary"></i>&nbsp;&nbsp;&nbsp;<i style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#editItemModal" onClick={() => {
                            editItem(item)
                          }} className="fas fa-edit text-info"></i>&nbsp;&nbsp;&nbsp;
                            <i style={{ cursor: "pointer" }} onClick={() => deleteItem(item.id)} className="fas fa-trash text-danger"></i></td>
                        </tr>
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Unit Description</th>
                      <th scope="col">Image</th>
                      <th scope="col">Date / Time</th>
                      <th scope="col">Action</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Item */}

      <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label className='m-2'>Item Name</label>
                  <input type="text" className="form-control" id="item_name" name="item_name" aria-describedby="emailHelp" placeholder="Enter Item Name" />
                </div>
                <div className="form-group">
                  <label className="m-2">Item Price</label>
                  <input type="number" className="form-control" id="item_price" name="item_price" placeholder="Enter Item Price" />
                </div>
                <div className="form-group">
                  <label className="m-2">Unit Description</label>
                  <textarea type="text" className="form-control" id="unit_description" placeholder="Enter Unit Description" />
                </div>
                <div className="form-group">
                  <label className="m-2">Item Image</label>
                  <input type="file" accept="image/png, image/gif, image/jpeg" className="form-control" id="item_image" name="item_image" />
                </div>
                <div className="form-group">
                  <label className="m-2">Date / Time</label>
                  <input type="datetime-local" className="form-control" id="date_time" name="date_time" />
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex">
                <button type="button" onClick={() => createItem} className="btn btn-success">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Item Modal */}
      <div className="modal fade" id="editItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label className='m-2'>Item Name</label>
                  <input type="text" className="form-control" id="item_name" name="item_name" defaultValue={item_name} aria-describedby="emailHelp" placeholder="Enter Item Name" />
                </div>
                <div className="form-group">
                  <label className="m-2">Item Price</label>
                  <input type="number" className="form-control" id="item_price" name="item_price" defaultValue={unit_price} placeholder="Enter Item Price" />
                </div>
                <div className="form-group">
                  <label className="m-2">Unit Description</label>
                  <textarea type="text" className="form-control" id="unit_description" defaultValue={unit_description} placeholder="Enter Unit Description" />
                </div>
                <div className="form-group">
                  <label className="m-2">Created Date / Time</label>
                  <input type="datetime-local" defaultValue={created_date} className="form-control" id="date_time" name="date_time" />
                </div>
                <div className="form-group">
                  <label className="m-2">Item Image</label>
                  <input type="file" accept="image/png, image/gif, image/jpeg" className="form-control" id="item_image" name="item_image" />
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex">
                <button type="button" onClick={updateItem} className="btn btn-primary">Update Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* View Item Modal */}
      <div className="modal fade" id="viewItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">View Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className='m-2'>Item Name</label>
                <input type="text" className="form-control" readOnly id="item_name" name="item_name" defaultValue={item_name} aria-describedby="emailHelp" placeholder="Enter Item Name" />
              </div>
              <div className="form-group">
                <label className="m-2">Item Price</label>
                <input type="number" className="form-control" readOnly id="item_price" name="item_price" defaultValue={unit_price} placeholder="Enter Item Price" />
              </div>
              <div className="form-group">
                <label className="m-2">Unit Description</label>
                <textarea type="text" className="form-control" readOnly id="unit_description" defaultValue={unit_description} placeholder="Enter Unit Description" />
              </div>
              <div className="form-group">
                <label className="m-2">Created Date / Time</label>
                <input type="datetime-local" defaultValue={created_date} readOnly className="form-control" id="date_time" name="date_time" />
              </div>
              <div className="form-group mb-5">
                <label className="m-2">Item Image</label><br></br>
                <img className="img-fluid" src={item_image} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
