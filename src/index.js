//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
import { calculateStarAverage } from './logic.js'; 

function renderReview(review) {
  // main content container
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review_container'); 

  // image element
  const img = document.createElement('img'); 
  img.src = review.image; 
  reviewContainer.appendChild(img);

  // second div container
  const details = document.createElement('div');

  // username
  const username = document.createElement('p');
  username.textContent = review.username;
  details.appendChild(username);

  // star rating
  const starRating = document.createElement('p');
  starRating.textContent = `${review.star} stars`; 
  details.appendChild(starRating);

  // review 
  const reviewText = document.createElement('p');
  reviewText.textContent = review.review; 
  details.appendChild(reviewText);

  // appending the containers together
  reviewContainer.appendChild(details);

  // appending the dynamically created content within the HTML reviews sections
  document.querySelector('.reviews').appendChild(reviewContainer);
}

// rendering each review and looping through it
reviews.forEach(renderReview);
