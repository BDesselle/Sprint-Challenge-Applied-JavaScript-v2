/* eslint-disable */
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/* AXIOS: GET Request */
axios
  /* Request ( GET ) JSON Data for this URL */
  .get('https://lambda-times-backend.herokuapp.com/articles')
  /* Then perform this action */
  .then(res => {
    /* Assign {res.data.articles.javascript} ( response ) to jsArticles */
    const jsArticles = res.data.articles.javascript;
    /* Assign a string to {jsArticles} */
    jsArticles.data = 'javascript';
    /* Assign {res.data.articles.bootstap} ( response ) to bsArticles */
    const bsArticles = res.data.articles.bootstrap;
    /* Assign a string to {bsArticles} */
    bsArticles.data = 'bootstrap';
    /* Assign {res.data.articles.technology} ( response ) to techArticles */
    const techArticles = res.data.articles.technology;
    /* Assign a string to {techArticles} */
    techArticles.data = 'technology';
    /* Assign {res.data.articles.jquery} ( response ) to jqArticles */
    const jqArticles = res.data.articles.jquery;
    /* Assign a string to {jqArticles} */
    jqArticles.data = 'jquery';
    /* Assign {res.data.articles.node} ( response ) to nodeArticles */
    const nodeArticles = res.data.articles.node;
    /* Assign a string to {nodeArticles} */
    nodeArticles.data = 'node.js';

    /* Storing the elements collected from the GET request in an array */
    const articles = [
      jsArticles,
      bsArticles,
      techArticles,
      jqArticles,
      nodeArticles,
    ];

    /* Perform the {forEach} Method on the array elements of {articles} */
    articles.forEach(article => {
      /* ((Nested forEach)) Perform the {forEach} Method on the array elements of {article} */
      article.forEach(art => {
        /* Using {querySelector} to assign the element with the className of '.cards-container' to {cards} */
        const cards = document.querySelector('.cards-container');
        /* Assigning the element {Article(art)} to {card} */
        const card = Article(art);
        /* Using {setAttribute} to set the attribute name ( data-tab ) and value ( article.data ) to the element {card} */
        card.setAttribute('data-tab', article.data);
        /* Appending the {card} elements ( children ) to {cards} element ( parent ) */
        cards.appendChild(card);
      });
    });
    /* CLG a success message with {res} data */
    console.log('👍', res);
  })
  .catch(err => {
    /* CLG a failure message with {err} data */
    console.log('👎', err);
  });

function Article(obj) {
  /* Creating elements per the provided HTML structure */
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  /* Adding classNames to the elements that were created */
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  /* Adding content to the elements that were created */
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  authorName.textContent = obj.authorName;

  /* Appending the elements that were created ( children ) to the parents */
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  /* Return the element created */
  return card;
}
