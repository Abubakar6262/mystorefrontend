import React, { useEffect, useState } from 'react'
import { GiftOutlined, LineChartOutlined, UndoOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import axios from 'axios'

export default function Home() {
  const [totalUsers, setTotalUsers] = useState(5)
  useEffect(() => {
    axios.get('http://localhost:5000/dashboard')
      .then((res) => {
        setTotalUsers(res.data.totalUsers)
      })
      .catch((error) => {
        console.log('somthing went wrong =>', error);
      })
  }, [])

  return (
    <div className="container">
      <div className="row ">
        <div className="col col-md-3 mb-2">
          <div className="card text-center p-3 p-md-2 border-0 rounded-1 shadow-lg">
            <LineChartOutlined style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: 10 }} />
            <p>Total Products : <b>5000</b> </p>
          </div>
        </div>
        <div className="col col-md-3 mb-2">
          <div className="card text-center p-3 p-md-2 border-0 rounded-1 shadow-lg">
            <GiftOutlined style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: 10 }} />
            <p>Complete orders : <b>2000</b> </p>
          </div>
        </div>
        <div className="col col-md-3 mb-2">
          <div className="card text-center p-3 p-md-2 border-0 rounded-1 shadow-lg">
            <UndoOutlined style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: 10 }} />
            <p>Panding Orders : <b>100</b> </p>
          </div>
        </div>
        <div className="col col-md-3 mb-2">
          <div className="card text-center p-3 p-md-2 border-0 rounded-1 shadow-lg">
            <UsergroupAddOutlined style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: 10 }} />
            <p>Total user : <b>{totalUsers}</b> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
