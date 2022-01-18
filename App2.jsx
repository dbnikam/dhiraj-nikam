import React, { useState } from 'react';
import MaterialTable from 'material-table'
const empList =[
    { id: 1, name: "Dhiraj", email: "dhiraj@gmail.com", date: "18-01-2022" },
    { id: 2, name: "Amar", email: "amar@gmail.com", date: "18-01-2022" },
    { id: 3, name: "Vikas", email: "vikas@gmail.com", date: "18-01-2022" },
    { id: 4, name: "Rohan", email: "rohan@gmail.com", date: "18-01-2022" }
  ]
  const App2 =()=>{
    const [data,setData]=useState(empList)
    
    const columns=[
      {title: "ID" ,field:"id" ,editable:false},
      {title: "Name" ,field:"name"},
      {title: "Email" ,field:"email"},
      {title: "Date" ,field:"date"} 
    ]
    return(
      <div>
        <h3 className='text-center'>TODO List Table</h3>
        <hr/>
        <MaterialTable
        title='TODO Table'
        data={data}
        columns={columns}
        editable={{
          onRowDelete: selectedRow => new Promise((resolve,reject)=>{
            const index = selectedRow.tableData.id;
            const updateRows = [...data]   
            updateRows.splice(index,1)
            setData(updateRows)
            resolve()
           })  
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition:"first"
        }}       
        />      
      </div>
    )
  }
  export default App2;