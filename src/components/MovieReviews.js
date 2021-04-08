// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
	<div className="review-list">
		{reviews.map(review => {
			return (
				<div className="review">
					<h3> 
						<a href={review.link.url}>{review.headline}</a>
					</h3>
					<h5>By: {review.byline}</h5>
					<p>{review.summary_short}</p>
					<br />
				</div>
			)
		})}
	</div>
)

export default MovieReviews