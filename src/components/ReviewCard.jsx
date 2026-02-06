function ReviewCard({ review }) {
  return (
    <div className="card h-100 d-flex flex-column">
      <div className="card-header">
        {review.name} – Vote: {review.vote}
      </div>

      <div className="card-body flex-grow-1">
        <p className="card-text">{review.text}</p>
      </div>

      <div className="card-footer text-body-secondary">
        Published: {review.created_at}
      </div>
    </div>
  );
}

export default ReviewCard;
