import React,{useState} from 'react';
import MaterialTable from 'material-table'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const emplist = [
  { id: 1, name: "Dhiraj", email: "dhiraj@gmail.com", date: "18-01-2022" },
  { id: 2, name: "Amar", email: "amar@gmail.com", date: "18-01-2022" },
  { id: 3, name: "Vikas", email: "vikas@gmail.com", date: "18-01-2022" },
  { id: 4, name: "Rohan", email: "rohan@gmail.com", date: "18-01-2022" }
]
const App = () => {
  const [data,setData]=useState(emplist)

  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Date", field: "date" }
  ]
  return (
    <div className='text-center'>
      <h3 className='text-center'>TODO List Table</h3>
      <hr />
      <MaterialTable
        title='TODO Table'
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve,reject)=>{
            const updateRows = [...data,{id: Math.floor(Math.random()*100),...newRow}]
            setData(updateRows);
            console.log(newRow)
            resolve()
          })
           
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
      <Link to={"/dell"} style={{ "text-decoration": "none" }} >
        <Button>Delete Records</Button>
      </Link>


    </div>
  )
}
export default App;