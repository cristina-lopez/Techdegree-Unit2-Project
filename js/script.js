/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const itemsPerPage = 9;

function showPage(list, page) {
   // index for the first and last student on the page
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);

  // select the element with a class of `student-list` and assign it to a variable
  /* QUESTION - Can I use this instead of querySelector? Why is querySelector better in this case?
  const studentList = document.getElementsByClassName('student-list')[0];
  */
   const studentList = document.querySelector('.student-list');

  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = '';

  // loop over the length of the `list` parameter
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {
   
}


// Call functions
