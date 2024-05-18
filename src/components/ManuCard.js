import React from 'react'

const ManuCard = ({manuData}) => {
  return (
    <>
        <section className="main-card--cointainer">
            {manuData.map((curElem) =>{
                const {id, name, category, image, descriprion} = curElem;
                return(
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span><br />
                                    <span className="card-auther subtle">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">
                                        {descriprion}
                                    </span>
                                    <div className="card-read">Read</div>
                                    <img src={image} alt="" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </div>
                    </>
                    )
            })}
        </section>
    </>
  )
}

export default ManuCard