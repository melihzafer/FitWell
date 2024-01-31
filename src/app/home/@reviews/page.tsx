import ReviewsCard from "@/components/homeReviews/homeReviews";
import React from "react";
import { ReviewsCardProps } from "@/components/homeReviews/homeReviews";
function Reviews() {
  const reviews: ReviewsCardProps[] = [
    {
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "January 15, 2024",
      rating: 5,
    },
    {
      author: "Jane Smith",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "February 1, 2024",
      rating: 4,
    },
    {
      author: "Jacob Robberts",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "January 28, 2024",
      rating: 4.5,
    },
  ];

  return (
    <section className="customer-reviews container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewsCard
            author={review.author}
            content={review.content}
            date={review.date}
            rating={review.rating}
            key={(Math.random() * 0.15).toString()}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
