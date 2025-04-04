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
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review_container'); 

  const img = document.createElement('img'); 
  img.src = review.image; 
  reviewContainer.appendChild(img);

  const details = document.createElement('div');

  const username = document.createElement('p');
  username.textContent = review.username;
  details.appendChild(username);

  const starRating = document.createElement('p');
  starRating.textContent = `${review.star} stars`; 
  details.appendChild(starRating);

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

// selecting the form
const form = document.querySelector('form');

function handleFormSubmission(e) {
  e.preventDefault(); 

  const username = document.getElementById('username').value;
  const image = document.getElementById('image').value;
  const star = parseInt(document.getElementById('star').value);  
  const reviewText = document.getElementById('review').value;

  // creating a new review Object
  const newReview = {
    username: username,
    image: image,
    star: star,
    review: reviewText,
  };

  // adding a new review to the original reviews array
  reviews.push(newReview);

  // rendering the new review 
  renderReview(newReview);

  // resetting the form fields after the submission
  form.reset();
}

// event listener for the submission
form.addEventListener('submit', handleFormSubmission);