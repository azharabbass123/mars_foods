import React from 'react'

const Navbar = ({filterItem, manuList}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
            {manuList.map((curElem)=>{
                return(
                    <button 
                    className="btn-group__item"
                    onClick={filterItem(curElem)} key={curElem}>
                        {curElem}
                    </button>
                )
            })}
        </div>
    </nav>
    </>
  )
}

export default Navbar