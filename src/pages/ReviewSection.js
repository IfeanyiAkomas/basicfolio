import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const ReviewsContainer = styled.section`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const ReviewCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 80%;
  height: 400px;
  max-width: 400px;
  margin: 20px;
  transition: transform 3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const ReviewCardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ReviewAuthor = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed (milliseconds)
    slidesToShow: 2, // Increase the number of slides to show
    slidesToScroll: 1,
    autoplaySpeed: 3000, // Set autoplay speed (milliseconds)
  };
  const reviews = [
    { author: 'Client 1', content: 'Excellent work, highly recommend!' },
    { author: 'Client 2', content: 'Great communication and fast delivery.' },
    // Add more reviews as needed
  ];

  return (
    <ReviewsContainer id="reviews">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: 30 }}>Client Reviews</h2>
      <div className='slide-container'>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewCardContent>
                <p>{review.content}</p>
                <ReviewAuthor>- {review.author}</ReviewAuthor>
              </ReviewCardContent>
            </ReviewCard>
          ))}
        </Slider>
      </div>
    </ReviewsContainer>
  );
};

export default ReviewsSection;
