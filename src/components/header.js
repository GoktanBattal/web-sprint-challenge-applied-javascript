const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerElem = document.createElement('div');
  headerElem.classList.add('header');
  const dateElem = document.createElement('span');
  dateElem.classList.add('date');
  dateElem.textContent = date;
  const titleElem = document.createElement('h1');
  titleElem.textContent = title;
  const tempElem = document.createElement('span');
  tempElem.classList.add('temp');
  tempElem.textContent = temp;
  headerElem.appendChild(dateElem);
  headerElem.appendChild(titleElem);
  headerElem.appendChild(tempElem);
  return headerElem;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const theHead = Header('Twitter is sold', '2022-11-13', 'template');
  const theContent  = document.querySelector(selector);
  theContent.appendChild(theHead);

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
