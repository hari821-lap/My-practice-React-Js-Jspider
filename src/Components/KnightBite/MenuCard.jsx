import React from 'react'

const MenuCard = () => {

    return (
        <article className="kb-card">
            <div className="kb-card-thumb"><div className="kb-thumb-text">Image</div></div>
            <div className="kb-card-body">
                <h3 className="kb-card-title">{item.name}</h3>
                <p className="kb-card-desc">{item.desc}</p>
            </div>
            <div className="kb-card-foot">
                <div className="kb-price">₹{item.price}</div>
                <button className="kb-btn kb-small" onClick={() => onAdd(item)}>Add</button>
            </div>
        </article>
    )

}

export default MenuCard
