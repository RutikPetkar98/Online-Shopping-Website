import React from 'react';
import './TabletCard.css';
import {Link} from 'react-router-dom';

const TabletCard = ({ tablet }) => {
  const  {_id,url,title,content,price}  = tablet;
  

  return (
    <div className="tablet-card">
      <img src={url} alt={title} />
      <div className="tablet-details">
        <h2>{title}</h2>
        <p> {content}</p>
        <h4>Price: ₹ {price}</h4>
        <Link to={`/tablet-blog/${_id}`}>
        <button className='order-btn'>Read more ...</button></Link>
        {}
      </div>
    </div>
  );
};

export default TabletCard;