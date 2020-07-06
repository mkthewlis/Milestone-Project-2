## Testing

The testing process is outlined below. It includes:
- Testing User Stories
- Validating HTML, CSS and JavaScript code
- Checking website compatibility on different browsers
- Checking responsiveness of design on all screen sizes
- Manually testing the functionality of all links
- Manually testing the quiz feature
- Manually testing the newsletter sign up form

To return to the previous document, click [here](https://github.com/mkthewlis/Milestone-Project-2/blob/master/README.md).

### Testing User Stories

These following tests were conducted to test the experience of each user outlined earlier.

#### Project stakeholders

The creators of this platform would want a consistent and encouraging design to inspire the users to be more excited than intimidated by the subject, as learning about plastic waste can be a daunting topic to think about at first. This is achieved through consistent design of buttons, rounded borders on all information boxes, consistent use of bright colors and encouraging the user to move on to the next page.
Specifically through the use of a light color scheme and an interactive quiz, the creators could feel confident that a positive user experience would lead to more requests to join the newsletter, thereby increasing their following and meeting their aims.

#### New users

*User one (who is new to the concept of plastic waste):*
- As this user was fairly new to the concept of plastic waste in our oceans, they would come to this website to learn more. Testing their process of navigation leads to the following journey through the website:
    * Home: The user would use the arrows to scroll down the home page before selecting the 'Learn more about plastic' button at the bottom
    * 'A Plastic Problem': Arriving here, they would use the arrows to scroll through each section about plastic waste, reading each feature and interacting with the map. At the bottom, they would either choose to visit 'The Ocean Cleanup' website to learn more, or continue on to the quiz (which we assume they do now).
    * 'Quiz': Here the user answers each question about plastic waste, noticing how the answer button changes color depending on their choice of answer. They would again use the arrows to scroll down. At the bottom, they would click 'Submit' to view their results, and could either choose to try again or to continue to view the correct answers (which we assume they do now).
    * 'Results': With the quiz complete, the user can now view a list with the correct answers listed. This page is only accessible after submitting the quiz and cannot be accessed by the menu bar. However, once the user has scrolled down through the answers, they can choose to either return to the quiz with one button, or continue on to sign up to the newsletter with another (which we assume they do now).
    * 'Newsletter': Having gone through each of the pages of the website, the user can now submit a request to join the newsletter. When clicking 'submit', a modal pops up with a thank you message personalised with their name, leaving a positive final impression. Closing the modal refreshes the screen and they can scroll down to see a box with three final tips to make a difference. With all features explored, the user can choose to navigate the page again with the menu bar or return another day.
- This user would leave with a positive experience, confident that they know more now than they did before.

*User two (who wants to stay up to date about plastic waste):*
- As this user might already know the basics about plastic waste, their main aim is to get to the newsletter page. To do so, they could either:
    * Use the menu bar to immediately select 'Newsletter' and arrive at the form to complete.
    * Scroll to the bottom of the home page and select the 'Sign me up to the newsletter' button to arrive at the correct page.
    * Offering two solutions in this way eases this user's process and leaves a positive user experience.
- However, if this user decides to stay on this website, the user also has a positive experience of learning perhaps more than they already did with the following:
    * They could navigate to 'A Plastic Problem' and use the Google Maps feature to find the links to Wikipedia pages with more information about the five major areas of waste in our oceans, which is updated periodically by Wikipedia users.
    * At the bottom of this page, they could follow the link to the organisation [The Ocean Cleanup](https://theoceancleanup.com/), to learn more about possible solutions and what is being done.

#### Returning users

*User one (primary school teacher):*
- This user has used the website earlier when teaching students about plastic waste in the oceans. For the purpose of using it in the classroom, the teacher does the following:
    * They explain to the students that the lesson will begin with a fun quiz and will then navigate to the 'Quiz' page 
    * Here, they will go through each question, picking a student to say which answer to select until the quiz is complete
    * Once complete, the teacher reveals the score with the 'Submit' button and reviews the correct answers
- If time allows, the teacher can choose to navigate to 'A Plastic Problem' to use the interactive map as a way to teach the students about the location of plastic waste in the oceans. At the end of the lesson, the teacher can choose to try the quiz with the students once agian.
- The website is ultimately successful in the classroom as it has a bright color scheme, has a responsive quiz with answers that change color (making it exciting) and this experience might leave them motivated to learn more about plastic waste in the future.

*User two (who wants to remind themselves of the location of the five largest gyres):*
- As a returning user, this user has previously visited the website to learn the basics about plastic waste. Now, they want to remind themselves of where the largest gyres are located by doing the following:
    * From the home page, select 'A Plastic Problem' from the menu bar, or scroll down to the bottom and select the 'Learn more about plastic' button
    * Scroll down to the section about gyres and use the Google Maps feature to view their location.
- As well as viewing the location, the user can also follow the links to the respective Wikipedia pages, thereby leaving an additional positive experience as they learnt more on this visit to the website.

#### Tablet user

As a tablet user, this user wanted to have a positive experience of all aspects of the website design. They would navigate the website in the same way as the first new user described above, with these differences:
- Certain elements are presented in rows, as opposed to columns to allow a visually satisfying experience. 
- The height of some background images are shorter, to make a more balanced design (as otherwise the margins below the text would be far too large, compromising the success of the design).
The user would discover that the website is fully functioning on a smaller screen and would leave positive and willing to return again.

### Validating the HTML, CSS and JavaScript code

#### HTML
My HTML code was passed through the [W3C Markup Validation Service](https://validator.w3.org/).
Doing so brought up the errors below that I resolved in the following ways:
 - *index.html* - The first section of my 'Home' page was missing a heading title, so I changed a paragraph `<p></p>` element to an `<h1></h1>`element to correct this.
 - *plastic.html* - This file passed without any errors.
 - *quiz.html* - The validator brought up an error that explained that I had an empty element on this page. However, this is intentionally done, as this element's content is added with JavaScript once the user submits their quiz results. I tested the code again after completing the quiz (so the content is added to the element) and the error disappeared.
 - *resutls.html* - I was shown that I did not need to include the `type="text/javascript"` in my script tag to my local JavaScript quiz.js file. I removed this and the code then passed the tests.
 - *newsletter.html* - Here I was also shown that I did not need a `type="text/javascript"` in my script tag. However, as it was for EmailJS and copied directly from the service's instructions, I decided to keep it in as it was.

#### CSS
I checked my CSS code with the [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/). 
This test did not produce any errors.

#### JavaScript
I used [JSHint](https://jigsaw.w3.org/css-validator/) to check my JavaScript files.
This brought up the following errors with the steps I took to correct them:
- *All JavaScript files* - The validator showed me that I had placed my local JavaScript tags at the end of my code outside of the `</body>` tag. I corrected this subsequently in each file.
- *maps.js* - This file passed without any errors.
- *arrows.js* - I was alerted to the fact that I was missing three semicolons in my code, as seen in the screenshot below. I corrected this by adding semicolons accordingly.
![Errors shown with JSHint validator](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/jshint.png)
- *quiz.js* - Here I was also missing four semicolons in one of my functions, which I also corrected by adding them to my code as above.
- *newsletter.js* - This file passed without any errors.

### Testing compatibility with different browsers

I manually tested the website on the following web browsers, checking that buttons, responsiveness and design worked as planned:
- Google Chrome 
- Mozilla Firefox 
- Apple Safari

### Testing the design's responsiveness on several screen sizes

I manually tested the design of the live project by doing the following:
- Using Google Developer Tools to view the project on devices with different screen sizes.
- Checking whether the Google Maps feature still worked as planned on smaller devices, without compromising the ability to view the information stored on each marker. 
- Controlling whether the hidden results area for the quiz would expand the background area to fit the content on smaller screens.
- Asking for feedback from friends and family who opened and interacted with the project on their devices.

#### Results and changes

- These manual tests led to minor changes in image height, margins and padding of certain features targeted with media queries, which can be viewed by seeing changes to my project through the [commit history](https://github.com/mkthewlis/Milestone-Project-2/commits/master).
- One noticable change worth mentioning was removing the animated arrows between each question for the 'Quiz' page on the smallest screens. I made this decision as keeping them would have led to a negative user experience, as the arrows are unnecessary when scrolling on a small screen and I realised that removing them would not compromise the overall design whilst keeping them might irritate the user. 
- Here is the result of the quiz without the arrows on small screens:

![Quiz without arrows on small screen](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/no-arrows.png)

- At the end of the project I realised that there would be a better way to achieve the same results for making certain aspects of my design responsive. Instead of changing the margins and alignment of classes to be responsive for each screen individually, I could have reduced the amount of code to get the same result of centering a text box on each screen with the following steps:
    * Place my textbox content in a `<div>` within another with the Bootstrap class `col-6` instead of `<col-12>`
    * Give this class the property `margin: auto` to ensure that it is always aligned to the center of the screen.

As it would take a significant amount of time to totally recreate the same effects with less code, I decided to keep the code as it is with several classes and media queries targeting different elements. My reason for doing so was the time constraint of my course. However, this has been a really insightful lesson and the experience gained from this one that I will definitely incorporate in all future projects.

### Manually testing the functionality of all links

The following tests were made to see that all links responded as they should:
- Social media links were clicked on to make sure that they open in a new tab at the correct corresponding landing page.
- Manu bar items were clicked on from each page to make sure that they navigate to the correct page and that they are correctly shown as 'active' when selected.
- All buttons were clicked on to check that they take the user to the correct page.
- The Wikipedia links contained in the Google Maps infowindows were checked to ensure that they led to the corresponding Wikipedia page.
- The newsletter 'Submit' button only accepts the form when it has been completed with all required fields filled in. Once done so and clicked, the 'Submit' button opens the personalised modal as expected.
- The 'Back to top' button in the footer of each page successfully scrolls the user up to the top of the page.
- Each arrow on all pages were clicked to make sure that they lead to the correct section below when clicked. 
- Clicking on the logo in the menu bar leads the user back to the home page.


### Manually testing the 'Quiz' page

Before beginning my project, I created a practice repository to determine the outline of the JavaScript and jQuery code required to build a quiz (as mentioned earlier in the main README.md document). Whilst building the quiz, I continued to test it's validity with JSHint, as described throroughly above. 
This practice quiz in preparation for my project can be found [here](https://github.com/mkthewlis/quiz-practice).

#### Results and changes

Once I began working on this project, I continued testing as I developed the quiz code. This led to the following changes, corrections and observations:
- I realised I would need to include different messages to the user depending on their score, either congratulating them or encouraging them to try again. I therefore changed the `if` statement for my function to check the user's results and alter the message accordingly.
- I also realised I had to add a message if the user submitted the quiz without clicking any answers and therefore leading to a score of 0, with the message alerting them to their mistake and swiftly prompting them to try again. Here is the result of this change:
![Error message when quiz score is 0](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/quiz-error.png)
- As the user's results are based on clicking a answer button, I had to prevent users from clicking a correct answer multiple times, artificially increasing their score in the process. I therefore included the following code to only run the function once when clicked: `$('.true').one('click', function(){`

### Manually testing the 'Newsletter' form

The sign up form was made responsive using the EmailJS service, fully referenced and discussed in the previous document. In order to test the success of the code, I tried submitting the form without meeting the requirements. 

#### Results and changes

The form produced the correct error message as expected, as shown below. There were therefore no necessary changes to make.
![Error message on newsletter form](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/form-error.png)

[Return to previous document here](https://github.com/mkthewlis/Milestone-Project-2/blob/master/README.md).



