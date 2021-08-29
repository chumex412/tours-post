import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  
  const read = readMore ? info : `${info.substring(0, 200)}...`;
  const readCond = readMore ? "See less" : "Read more";

  return (
    <section className="card my-4">
      <div className="card-img-top">
        <img src={image} alt={name} className="tour-img" />
      </div>
      <div className="card-body">
       <h3 className="h5 card-title">
         <span>{name}</span>
         <span className="price">{price}</span>
       </h3>
       <p className="parag card-text">
         {read}
         <button className="more-info" onClick={() => setReadMore(!readMore)}>{readCond}</button>
       </p>
       <div className="tour-btn">
        <button className="btn remove-tour mt-3" onClick={() => removeTour(id)}>Not Interested</button>
       </div>
      </div>
    </section>
  );
}

export default Tour;