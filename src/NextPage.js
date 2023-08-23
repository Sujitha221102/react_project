import React, { useState } from 'react';

const Nextpage = ({ title, dltBook, booklist}) => {
    const [readIndices, setReadIndices] = useState([]);

    function toggleRead(index) {
        if (readIndices.includes(index)) {
            setReadIndices(readIndices.filter(i => i !== index));
        } else {
            setReadIndices([...readIndices, index]);
        }
    }

    return (
        <div>
            <h1 className='title'>{title}</h1>
            {booklist.map((item, index) => (
                <div className={`booklist ${readIndices.includes(index) ? 'background' : ''}`} key={index}>
                    <h2>{item.title}</h2>
                    <p>{"author is " + item.author}</p>
                    <button onClick={() => dltBook(item.author)}>Delete</button>
                    <button onClick={() => toggleRead(index)}>Read</button>
                </div>
            ))}
        </div>
    );
}

export default Nextpage;




// import React, { useState } from 'react';

// const Nextpage = ({ title,dltBook, booklist}) => {
//     const [readIndex, setReadIndex] = useState(null);

//     function clrChange(index) {
//         setReadIndex(index);
//     }

//     return (
//         <div>
//             <h1 className='title'>{title}</h1>
//             <h4>Total Books Are :{booklist.length}</h4>
//             {booklist.map((item, index) => (
//                 <div className={`booklist ${readIndex === index ? 'background' : ''}`} key={index}>
//                     <h2>{item.title}</h2>
//                     <p>{"author is " + item.author}</p>
//                     <button onClick={() => dltBook(item.author)}>Delete</button>
//                     <button onClick={() => clrChange(index)}>Read</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Nextpage;



// import React,{useState} from 'react'

// const Nextpage = ({title,dltBook,booklist}) => {
//     const [changeColor, setChangeColor] = useState(false);
//         function clrChange() {
//             setChangeColor(true);
//         }
   
//   return (
//     <div>
//         <h1 className='title'>{title}</h1>
//         {booklist.map((item) => (
//             <div className={`booklist ${changeColor ? 'green-background' : ''}`}>
//                 <h2 className='book'>{item.title}</h2>
//                 <p className='author'>{"Author is "+item.author}</p>
//                 <button onClick={()=>dltBook(item.author)}>Delete</button>
//                 <button onClick={clrChange}>Read</button>
//             </div>
//         ))}
//     </div>
//   );
// }

// export default Nextpage