import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task] //Jisse purana wala note bhi intact rhe jab ham new note ko add karenge.

    copyTask.push({ title, detail })

    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white bg-cover bg-[url("https://imgs.search.brave.com/GuY5ZOEpan1xFgDTxu2m0nQyVJsjn423uLHHfw0yo78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/NzQyLzgxNC9zbWFs/bC93ZWJzaXRlLWxh/bmRpbmctcGFnZS10/ZW1wbGF0ZS1iYWNr/Z3JvdW5kLXZlY3Rv/ci5qcGc")]'>

      <div className='flex w-80 flex-col justify-between items-center border-3 gap-2 py-20 px-5 text-amber-50 font-medium text-xl'><img className='h-50' src='https://imgs.search.brave.com/na9znUYdbuw0y_rJNCotS4fC0Pn0hgtye7HUl8j3cMY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc2LzI4Ni9zbWFs/bC9hLW1hbi1pbi1h/LWNhcC13cml0aW5n/LXdpdGgtYS1wZW4t/cG5nLnBuZw' alt='' />
        Notly : Your own note taking site.
      </div>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col p-10 gap-4'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* First Input */}
        <input type='text' className='px-5 w-full font-medium py-2 border-2 rounded outline-none' placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        {/* Second Input - detailed */}
        <textarea type='text' className='px-5 py-2 font-medium w-full border-2 h-32 flex items-start flex-row rounded outline-none' placeholder='Text'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }} />


        <button className='bg-white text-black active:scale-95 px-5 py-2 font-medium w-full rounded-2xl outline-none'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] mt-5 overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='flex flex-col items-start justify-start relative h-45 w-60 bg-cover rounded-2xl text-black pt-9 pb-4 py-4 px-4
            bg-[url("https://imgs.search.brave.com/PHE6u7JJAZbpiGi770TKDJRgkSNn-0_9_EjRn8f3_Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3NS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 mb-2 text-2xs leading-tight font-semibold text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 text-white bg-red-500 rounded-full py-1 text-xs font-bold'>Delete</button>
            </div>
          })}



        </div>
      </div>

    </div>
  )
}

export default App
