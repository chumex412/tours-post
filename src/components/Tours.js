import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {

  const singleTour  = tours.map(tour =>
    <Tour key={tour.id} {...tour} removeTour={removeTour} />
  );

  return (
    <article>
      {singleTour}
    </article>
  );
}

export default Tours;