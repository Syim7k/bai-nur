import React from 'react'
import './ManPage.css'

const ManPage = () => {
  return (
    <div>
        <header className="header">
          <div className="container">
            <div className="man-block">
              <div className="man-wrapper">
                <h1 className='text-wrapper'>Для Мужчин</h1>
                  </div>
                   <div className='block-search-man'>
                    <input onChange={(event) => setValue(event.target.value)} className='input-searchMan' type="text" placeholder='search'/>
                  </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default ManPage