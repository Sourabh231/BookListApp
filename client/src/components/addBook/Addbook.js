import React from 'react'
import './Addbook.css'
function Addbook() {
  return (
    <div className='addbookcontainer'>
          <button className='show_book'><a href='/bookpage'>ShowBook</a></button>
        <h1>Add Book</h1>
        <br/>
        <h4>Create New Book</h4>

        <form>
            <input type='text'
            placeholder='Title of the Book'
            name='title'/>

            <br/>
            <br/>
            <input type='text'
            placeholder='ISBN'
            name='ISBN'/>

            <br/>
            <br/>
            <input type='text'
            placeholder='Author'
            name='author'/>

            <br/>
            <br/>
            <input type='text'
            placeholder='Describe these Book'
            name='description'/>

            <br/>
            <br/>
            <input type='Date'
            placeholder='Published_Date'
            name='date'/>

            <br/>
            <br/>
            <input type='text'
            placeholder='publisher of these year'
            name='publisher'/>

            <br/>
            <br/>

            <button className='addBookbtn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Addbook
