/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;
/*
`showPage` function
This function creates and inserts/appends the elements needed to display a "page" of nine students.
*/
function showPage(list, page) {
   // index for the first and last student on the page
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);

   /* QUESTION - Can I use the code below instead of querySelector? Why is querySelector better in this case?
      const studentList = document.getElementsByClassName('student-list')[0];
   */

   // creates a list of students that will be shown on the given page
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         var studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                  <h3> ${list[i].name.first} ${list[i].name.last} </h3>
                  <span class="email"> ${list[i].email} </span>
               </div>
               <div class="joined-details">
                  <span class="date"> Joined ${list[i].registered.date} </span>
               </div>
            </li>`;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/*
`addPagination` function
This function creates and inserts/appends the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length/itemsPerPage);

  // creates buttons 
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = "";
   for (let i = 1; i <= numOfPages; i++) {
      var button = `
         <li>
            <button type="button"> ${i} </button>
         </li>`;
      linkList.insertAdjacentHTML("beforeend", button);
   }

  // give the first pagination button a class of "active". If a button is clicked, 
  // the "active class" is removed from the first button and set for the button 
  // clicked. 'showPage' function is called.
   document.querySelector('button').className = "active";
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = "active";
         showPage(list, e.target.textContent);
      }
   })
}

// Call functions
showPage(data, 1);
addPagination(data);

/*
`addSearch` function
This function dynamically creates a search button
*/
function addSearch() {
   const label = document.createElement('label');
   label.setAttribute('for', 'search');
   label.setAttribute('class', 'student-search');
   const span = document.createElement('span');
   span.textContent = 'Search by name';
   label.appendChild(span);
   const input = document.createElement('input');
   input.setAttribute('id', 'search');
   input.setAttribute('placeholder', 'Search by name...');
   label.appendChild(input);
   const button = document.createElement('button');
   button.setAttribute('type', 'button');
   const img = document.createElement('img');
   img.setAttribute('src', 'img/icn-search.svg');
   img.setAttribute('alt', 'Search icon');
   button.appendChild(img);
   label.appendChild(button);
   const h2 = document.querySelector('header');
   h2.append(label);
}

addSearch();

/*
Event Listeners to add functionality to search component
*/
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
   e.preventDefault();

   const input_value = e.target.value.toLowerCase();
   //Creates an array with data that matches the inputValue
   let filteredData = [];
   for (let i = 0; i < data.length; i++) {
      let dataName = `${data[i].name.first} ${data[i].name.last}`.toLowerCase();
      if (dataName.includes(input_value)) {
         filteredData.push(data[i]);
      }
   }
   //If the inputValue does not match any names, "No results" is shown on the page
   ul = document.querySelector('ul');
   if (filteredData.length === 0) {
      ul.innerHTML = `<h2>No Results Found</h2>`;
      addPagination(filteredData);
   } else {
      showPage(filteredData, 1);
      addPagination(filteredData);
   }
});

const input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
   e.preventDefault();
   const input_value = e.target.value.toLowerCase();

   let filteredData = [];
   for (let i = 0; i < data.length; i++) {
      let dataName = `${data[i].name.first} ${data[i].name.last}`.toLowerCase();
      if (dataName.includes(input_value)) {
         filteredData.push(data[i]);
      }
   }
   ul = document.querySelector('ul');
   if (filteredData.length === 0) {
      ul.innerHTML = `<h2>No Results Found</h2>`;
      addPagination(filteredData);
   } else {
      showPage(filteredData, 1);
      addPagination(filteredData);
   }
}); 