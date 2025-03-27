import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [id, setId] = useState()
  const [editChange, setEditChange] = useState(true)
  const url = "http://localhost:3000"
  
  useEffect(() => {
    getdata()
  }, [])
  
  function getdata() {
    axios.get(url).then((items) => {
      setData(items.data)
    })

  }

  function deleteItem(e) {

    axios.delete(`${url}/${e}`).then((item) => {
    })
    getdata()
    toast("Delete data successfully !");
  }

  async function editItem(e) {
    console.log(data);
    
    const getData = data.filter((item) => {
      return item.id == e.id
    }
    )[0]
    setTitle(getData.title)
    setDescription(getData.description)
    setId(getData.id)

    const todo = {
      title: title,
      description: description,
    }

    setEditChange(false)
  }


  async function handleSubmit(e) {
    e.preventDefault()
    if (editChange == true) {

      const todo = {
        title: title,
        id: id,
        description: description,
      }

      await axios.post(url, todo).then((res) => {

        setData([...data, res.data])
        setTitle('')
        setDescription('')
      }
      )
      getdata()
      toast("Add data successfully")

    }

    if (editChange == false) {
      const todo = {
        title: title,
        description: description,
        id: id,
      }

      await axios.patch(`http://localhost:3000/${id}`, todo).then((item) => {
      })

      setTitle('')
      setDescription('')
      setEditChange(true)
      toast(" data update successfully")
      getdata()

    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover
        theme="light"
      />

      <div className="app bg-gray-700 text-white">
        <h1 className='font-bold text-3xl'>TODO LIST</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="text-input">

            <input className=' ' type="text" placeholder='enter title here'
              name='tit'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input className=' ' type="text" placeholder='enter description here'
              value={description}
              onChange={(e) => setDescription(e.target.value)}

            />
          </div>
          <div className="addbtn">
            {
              editChange &&
                editChange == true ?
                <input className='bg-purple-500 text-white ' type="submit" value="Add" /> :
                <input className='bg-slate-500 text-white ' type="submit" value="Update" />
            }
          </div>
          
        </form>

        <div className="data">
          <table >
            <thead>

              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Day</th>
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
                    <td>{item.date}</td>
                    <td className='w-1/4'>
                      <button className='update' onClick={() => editItem(item)}> <i class="fa-regular fa-pen-to-square"></i></button>
                      <button className='delete' onClick={() => deleteItem(item.id)}><i class="fa-regular fa-trash-can"></i></button>
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
