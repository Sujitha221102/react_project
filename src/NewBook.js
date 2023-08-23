import React, { useState } from 'react'

const NewBook = ({ bookss, setBookss }) => {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');

  function submitBtn(e) {
    e.preventDefault();
    const id = bookss.length ? bookss[bookss.length - 1].id + 1 : 1;
    const newBook = { id: id, title: book, author: author};
    const allbooks = [...bookss, newBook];
    setBookss(allbooks);
  }
  return (
    <div  className='form'>
      <h2>NewBook</h2>
      <div>
        <label htmlFor="title">Title: </label>
        <input type='text' id='title' required value={book} onChange={(e) => setBook(e.target.value)} />
      </div>
      <div>
        <label htmlFor="author">Author: </label>
        <input type='text' id='author' required value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button onClick={submitBtn}>Add</button>
    </div>
  )
}

export default NewBook