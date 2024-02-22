import React from 'react'
import MoreOutlined from '@ant-design/icons'

function OrderList() {
    return (
        <div className='row bg-secondary p-2 '>
            <div className='col-12 d-flex justify-content-between align-items-center py-3'>
                <h3 className='text-bolder m-0'>Orders</h3>
                <button className='btn btn-warning btn-sm rounded-0'>New Order</button>
            </div>
            <div className='col-12 bg-white'>
                <form className='p-2' >
                    <input type="search" className='form-control p-2 rounded-0 ' placeholder='Start typing to search for Order' />
                </form>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" /> </th>
                            <th scope="col">Number</th>
                            <th scope="col">Date</th>
                            <th scope="col">Custormer</th>
                            <th scope="col">Paid</th>
                            <th scope="col">Status</th>
                            <th scope="col">Items</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><MoreOutlined /></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderList