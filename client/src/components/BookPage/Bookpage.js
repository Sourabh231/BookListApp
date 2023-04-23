import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Bookpage() {
    const [books,setBooks] = useState([]);
    const navigate = useNavigate()

    // const getAllBooks = async()=>{
    //     try{
    //         const {data} = await axios.get('http://localhost:5000/api/v1/user/get');
    //         console.log(data);
    //         if(data?.sucess){
    //             setBookData(data?.bookData)
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/user/get')
        .then((resp)=>{
            setBooks(resp.data);
        }).catch(err=>{
            console.log('err',err)
    })
} ,[]);

const handleBook= (id)=>{
   console.log(id);
   navigate('/bookDetail')
}

  return (
    <div className='book_containe'>
      
        <div className='Header'>
        <h1>Books List</h1>
        </div>

        <div className='addbookbtn'>
            <button ><a href='/addbook'>+Add New Book</a></button>
        </div>
        <div className='bookData' onClick={()=>handleBook(books._id)}>
            <ul>
            {
            books.map((book)=>{
                return (
                    <div key={book._id}>
                       <img src='https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max'/>
                       <h3>{book.title}</h3>
                       <h3>{book.author}</h3>
                       <h3>{book.description}</h3>
                       <h3>{book.publisher}</h3>
                    </div>
                )
            })}
            </ul>
            
        </div>
    </div>
  )
}

export default Bookpage
