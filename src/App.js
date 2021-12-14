function App() {
  return (

    <div className="App">
      <div className="mt-5">
        <h4 className="text-center mt-5">Item Management</h4>
        <div className="row mt-5">
          <div className="container">
           
             
         
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
              <button data-bs-toggle="modal" data-bs-target="#addItemModal" className="btn btn-success mb-2" >Add New Item</button>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Unit Description</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Test 1</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Test 2</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Test 3</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>

     

      <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Item</h5>
        <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form>
        <div class="modal-body">
          <div class="form-group">
            <label className='m-2'>Item Name</label>
            <input type="text" class="form-control" id="item_name" name="item_name" aria-describedby="emailHelp" placeholder="Enter Item Name" />
           
          </div>
          <div class="form-group">
            <label className="m-2">Item Price</label>
            <input type="number" class="form-control" id="item_price" name="item_price" placeholder="Enter Item Price" />
          </div>
          <div class="form-group">
            <label className="m-2">Unit Description</label>
            <textarea type="text" class="form-control" id="unit_description" placeholder="Enter Unit Description" />
          </div>
          <div class="form-group">
            <label className="m-2">Item Image</label>
            <input type="file" class="form-control" id="item_image" name="item_image"  />
          </div>
        </div>
        <div class="modal-footer border-top-0 d-flex">
          <button type="submit" class="btn btn-success">Add Item</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
