import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating';

export default function Start() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rating) => {
    setRating(rating)
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  )
}
