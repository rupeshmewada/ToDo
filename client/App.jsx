import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { getdata } from '../server/controller/todo.controller'
function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const url = "http://localhost:3000/"

  // useEffect(() => {
  //   axios.get(url).then((items) => {
  //     console.log(items.dsetdataata)
  //     setData(items.data)
  //   })

  // }, [])

  // function deleteItem(e) {
  //   // console.log(e);
  //   const getData = data.filter((item) => {
  //     return item.id !== e
  //   }
  //   )
  //   // console.log(getData);
  //   setData(getData)
    
  // }


  // function updateItem(e){
  //   console.log('kld');
  //   const getData = data.filter((item) => {
  //     return item.id == e
  //   }
  //   )
  //   console.log(getdata);
    
    
  // }


  return (
    <>
      <div className="app">
        <form action="">
          <input type="text" placeholder='enter title here' />
          <input type="text" placeholder='enter title here' />
          <input type="button" value="Add" />
        </form>

        <div className="data">
          <table>
            <thead>

              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button className='update' onClick={() => updateItem(item.id)}>Update</button>
                      <button className='delete' onClick={() => deleteItem(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
