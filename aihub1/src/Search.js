import React from 'react'
const Search = ({search,setsearch,search2,setsearch2}) => {
  return (
    <div className='searchSession'>
        <form className='search'>
            <label>Search:</label>
            <input 
               type="text"
               placeholder='Search by NAME'
               autoFocus
               value={search}
               onChange={(e)=>setsearch(e.target.value)}
            />
            <label>Search:</label>
            <input 
               type="text"
               placeholder='Search by CATEGORY'
               autoFocus
               value={search2}
               onChange={(e)=>setsearch2(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Search