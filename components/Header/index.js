/* eslint-disable */
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerData = {
  date: 'SMARCH 28, 2019',
  title: 'Lambda Times',
  temp: '98°',
};

function Header() {
  /* Creating elements per the provided HTML structure */
  const headerWrapper = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  /* Adding classNames to the elements that were created */
  headerWrapper.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  /* Adding content to the elements that were created */
  headerDate.textContent = `${headerData.date}`;
  headerTitle.textContent = `${headerData.title}`;
  headerTemp.textContent = `${headerData.temp}`;
  /*
  # OLD Content
  headerDate.textContent = 'SMARCH 28, 2019';
  headerTitle.textContent = 'Lambda Times';
  headerTemp.textContent = '98°';
  */

  /* Appending the elements that were created ( children ) to {headerWrapper} ( parent ) */
  headerWrapper.appendChild(headerDate);
  headerWrapper.appendChild(headerTitle);
  headerWrapper.appendChild(headerTemp);

  /* Return the element created */
  return headerWrapper;
}

/* Using {querySelector} to assign the element with the className of 'header-container' to {headerContainer} */
const headerContainer = document.querySelector('.header-container');
/* Appending {Header} ( child ) with no params to {headerContainer} ( parent ) */
headerContainer.appendChild(Header());
