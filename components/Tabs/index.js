/* eslint-disable */
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

/* AXIOS: GET Request */
axios
  /* Request ( GET ) JSON Data for this URL */
  .get('https://lambda-times-backend.herokuapp.com/topics')
  /* Then perform this action */
  .then(res => {
    /* Assigning {res.data} ( response ) to {topics} */
    const { topics } = res.data;
    /* Perform the {forEach} Method on the array elements of {topics} */
    topics.forEach(topic => {
      /* Using {querySelector} to assign the element with the className of '.topics' to {topics} */
      const topics = document.querySelector('.topics');
      /* Appending {Tab} ( child ) with the param of {topic} to {topics} ( parent ) */
      topics.appendChild(Tab(topic));
    });
    /* CLG a success message with the array {topics} */
    console.log('👍', topics);
  })
  /* Catch/CLG Errors */
  .catch(err => {
    /* CLG a failure message with the response of the {.catch} */
    console.log('👎', err);
  });

function Tab(topic) {
  /* Using {createElement} to create a div that is assigned to {topicWrapper} */
  const topicWrapper = document.createElement('div');
  /* Using {setAttribute} to set the attribute name ( data-tab ) and value ( topic ) to the element {topicWrapper} */
  topicWrapper.setAttribute('data-tab', topic);
  /* Using {classList.add} to add a className ( tab ) to the element {topicWrapper} */
  topicWrapper.classList.add('tab');
  /* Using {textContent} to assign the text content of {topic} to the element {topicWrapper} */
  topicWrapper.textContent = topic;

  /* Using the {addEventListener} Method to attach an event handler to the element {topicWrapper} */
  /* Upon click ( event ) run clicky ( function ) */
  topicWrapper.addEventListener('click', clicky => {
    /* Using {querySelector} to assign the element with the className of '.card' to {cards} */
    const cards = document.querySelectorAll('.card');
    /* Using {querySelector} to assign the element with the className of '.active-tab' to {tabs} */
    const tabs = document.querySelectorAll('.active-tab');
    /* Using {classList.add} to add a className ( active-tab ) to the element {topicWrapper} */
    topicWrapper.classList.toggle('active-tab');
    /* Perform the {forEach} Method on the array elements of {tabs} */
    tabs.forEach(tab => {
      /* Removing the active-tab className from the {tab} element via the {classList.remove} Method */
      tab.classList.remove('active-tab');
    });

    /* if the element {topicWrapper} contains the className of active-tab execute the block of code specified within */
    if (topicWrapper.classList.contains('active-tab')) {
      /* Perform the {forEach} Method on the array elements of {cards} */
      cards.forEach(card => {
        /* if the element {card} has a attribute name {tab} in it's dataset that is stictly equal to {topic} ( type and value match ) */
        if (card.dataset.tab === topic) {
          /* Set the style to {display: 'flex'} */
          card.style.display = 'flex';
          /* else the above conditon is false */
        } else {
          /* Set the style to {display: 'none'} */
          card.style.display = 'none';
        }
      });
      /* else the above conditon is false */
    } else {
      /* Perform the {forEach} Method on the array elements of {cards} */
      cards.forEach(card => {
        /* Set the style to {display: flex} */
        card.style.display = 'flex';
      });
    }
  });

  /* Return the element created */
  return topicWrapper;
}
