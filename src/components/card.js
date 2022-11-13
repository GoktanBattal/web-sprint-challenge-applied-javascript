const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardElem = document.createElement('div');
  cardElem.classList.add('card');

  const headlineElem =document.createElement('div');
  headlineElem.classList.add('headline');
  headlineElem.textContent = article.headline;

  cardElem.appendChild(headlineElem);

  const authorElem = document.createElement('div');
  authorElem.classList.add('author');

  const imgContainerElem = document.createElement('div');
  imgContainerElem.classList.add('img-container');

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', article.authorPhoto);

  imgContainerElem.appendChild(imgElem);

  const authorNameElem = document.createElement('span');
  authorNameElem.textContent = "By " + article.authorName;

  authorElem.appendChild(imgContainerElem);
  authorElem.appendChild(authorNameElem);

  cardElem.appendChild(authorElem);

  cardElem.addEventListener('click', () => {
    console.log(artice.headline);
  });

  return cardElem;


}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles').then((response) =>{
    let articles = Object.values(response.data.articles).flat();
    articles = Object.values(articles)
    const contentBody = document.querySelector(selector);
    articles.map((article) => {
      contentBody.appendChild(Card(article));
    });
  }).catch((error) => console.error(error));
}

export { Card, cardAppender }
