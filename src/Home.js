import React from 'react'
import NextPage from './NextPage'

const Home = ({books,setBooks}) => {
    function deleteBook(author){
        const newBook=books.filter(item=>item.author!==author)
        setBooks(newBook);
    }
   
  return (
    <div>
        <NextPage booklist={books} setBooklist={setBooks} title={"Lists of Books.."} dltBook={deleteBook}/>
    </div>
  )
}

export default Home