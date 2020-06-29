## Testing

The testing process is outlined below. It includes:
- Testing user stories
- Validating HTML, CSS and JavaScript code
- Checking website compatibility on different browsers
- Checking responsiveness of design on all screen sizes
- Manually testing the quiz feature
- Manually testing the newsletter sign up form

To return to the previous document, click [here](https://github.com/mkthewlis/Milestone-Project-2/blob/master/README.md).

### Testing User Stories

Based on the User Stories listed earlier:

1. As this user was fairly new to the concept of plastic waste in our oceans, they would follow the prompts and be directed to the second page, 'A Plastic Problem', as it is filled with facts and information. Once completed, they could move on to the quiz to find a fun way to test what they have learnt. They would then leave the website with the confidence that they know more now than they did before.

2. This user knows that plastic waste is a problem and now wants to stay up to date. This website provides several options to do so, most notably by directly navigating to the 'Newsletter' page and submitting the form to stay up to date. Secondly, they could also use the Google Maps feature to find the links to Wikipedia pages with more information about the five major areas of waste in our oceans, which is updated periodically by Wikipedia users. Finally, they could follow the link to the organisation [The Ocean Cleanup](https://theoceancleanup.com/), to learn more about possible solutions and what is being done.

3. As a primary school teaching looking to introduce this topic to their students, the teacher could do so with two steps: by beginning to go through the facts about plastic waste whilst explaining each point to the students and then continuing to the complete the quiz together. With the buttons changing color depending on the selected answer and the scores shown at the end, it could be a fun way to engage the students and motivate them to learn more about protecting our oceans.

4. All elements of the website are responsive on smaller screens, so the design is still visually appealing on the user's iPad Pro.

5. The creators of this platform would want a consistent and encouraging design to inspire the users to be more excited than intimidated by the subject, as learning about plastic waste can be a daunting topic to think about at first. Through the light color scheme and interactive quiz, the creators could feel confident that a positive user experience would lead to more requests to join the newsletter, thereby increasing their following.

### Validating the HTML, CSS and JavaScript code

#### HTML
My HTML code was passed through the [W3C Markup Validation Service](https://validator.w3.org/).
Doing so brought up the errors below that I resolved in the following way:
 - *index.html* - The first section of my 'Home' page was missing a heading title, so I changed a paragraph `<p></p>` element to an `<h1></h1>`element to correct this.
 - *plastic.html* - This file passed without any errors.
 - *quiz.html* - The validator brought up an error that explained that I had an empty element on this page. However, this is intentionally done, as this element's content is added with JavaScript once the user submits their quiz results. I tested the code again after completing the quiz and the error disappeared.
 - *resutls. html* - I was shown I did not need to include `type="text/javascript"` in my script tag to my local JavaScript quiz.js file. I removed this and the code then passed the tests.
 - *newsletter.html* - Here I was also shown that I did not need a `type="text/javascript"` in my script tag. However, as it was for EmailJS and copied directly from the service's instructions, I decided to keep it in as it was.

#### CSS
I checked my CSS code with the [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/). 
This test did not produce any errors.

#### JavaScript
I used [JSHint](https://jigsaw.w3.org/css-validator/) to check my JavaScript files.
This brought up the following errors and what I did to correct them:
- *maps.js* - This file passed without any errors.
- *arrows.js* - I was alerted me to the fact that I was missing three semicolons in my code, as seen in the screenshot below. I corrected this accordingly.
![Errors shown with JSHint validator](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/jshint.png)
- *quiz.js* - Here I was also missing four semicolons in one of my functions, which I also corrected by adding them to my code. 
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

These manual tests led to minor changes in image height, margins and padding of certain features targeted with media queries, which can be viewed by seeing changes to my project through the [commit history](https://github.com/mkthewlis/Milestone-Project-2/commits/master).
One noticable change worth mentioning was removing the animated arrows between each question for the 'Quiz' page on the smallest screens. I made this decision as keeping them would have led to a negative user experience, as the arrows are unnecessary when scrolling on a small screen and I realised that removing them would not compromise the overall design whilst keeping them might irritate the user. 
Here is the result of the quiz without the arrows on small screens:
![Quiz without arrows on small screen](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/readme-images/no-arrows.png)

However, at the end of the project I realised that there would be a better way to achieve the same results for making certain aspects of my design responsive. Instead of changing the margins and alignment of classes to be responsive for each screen individually, I could have reduced the amount of code to get the same result of centering a text box on each screen with the following steps:
- Place my textbox content in a `<div>` within another with the Bootstrap class `col-6` instead of `<col-12>`
- Give this class the property `margin: auto` to ensure that it is always aligned to the center of the screen.

As it would take a significant amount of time to totally recreate the same effects with less code, I decided to keep the code as it is with several classes and media queries targeting different elements. My reason for doing so was the time constraint of my course. However, this has been a really insightful lesson and the experience gained from this one that I will definitely incorporate in all future projects.

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





