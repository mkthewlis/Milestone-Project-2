# Our Oceans, Our Plastic

## Code Institute: Milestone Project 2


![Our Oceans, Our Plastic Responsive Design](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/responsive-project.png)


*Our Oceans, Our Plastic* is a fictional organisation that aims aims to inform the general public about plastic waste in our 
oceans. My aim with this project was to create a website that allows to user to learn more about the issues of plastic waste 
in an interactive way, keeping them interested, inspired and motivated to continue to learn more. 

The idea for this project came to me as I believe that plastic waste in our oceans is an important topic to discuss and I wanted
to create an unintimidating environment to learn more abot it. As I had just covered an introductory module on JavaScript, I 
decided to implement JavaScript in different ways throughout my project: with a Google Maps API, a short interactive quiz, 
animated arrows to guide the user on and a form to subscribe to a fictional newsletter. 

This was the second of four Milestone Projects that made up the Full Stack Web Development Program at *The Code Institute*. 
The main requirements were to make an interactive and responsive website with HTML5, CSS3 and JavaScript.

[Click here to view the project live.](https://mkthewlis.github.io/Milestone-Project-2/)

## UX

### Main aims

- To provide a platform for users to learn more about plastic waste in the oceans in an interactive and intuitive way.

- To make the website interactive through the use of JavaScript, with a Google Maps API feature, a quiz and the chance to sign up to a newsletter.

- To make learning about the plastic waste problem seem exiting to users, by creating a project that both teaches and then tests the user on what they've learnt.

- To make it easy for users to make their way through each feature on the website, by having a clear menu bar but also including links to different parts of the website throughout with a consistent design.

- To create a design that would be fully responsive on all devices and screen sizes. 

### User Stories

1. I am a user who has never really considered that plastic waste in our oceans might be a problem. I want to use this website to learn more about the problem and want to see how much I've actually now learnt by taking the quiz.

2. I am a user who wants to stay up to date on the plastic waste problem, preferably with the latest news and tips on what I can do to help.

3. I am a primary school teacher who wants to discuss plastic waste with my students. I think it would be useful to introduce them to the topic then test them on what they've learnt. 

4. I am a user who primarily uses an iPad Pro to browse websites. I want to have a good experience on this website and view all the features in an equally aesthetic way. 

5. I am one of the creators of this platform. I would like to attract users in the hope of raising awarenss about plastic waste in our oceans and increasing our newsletter followers.

### Design Process

1. I began the design process by outlining the key features that I wanted my website to have, with a focus on the JavaScript that I wanted to experiment with and ultimately implement. This led me to decide that I wanted to focus on three key features: a page with a Google Maps API, a quiz to test users and the chance for them to sign up to a newsletter. This helped me to formulate the structure of my design, with five seperate pages: 'Home', 'A Plastic Problem', 'Quiz', 'Results', 'Newsletter'.

2. For my design to work, I knew it would be important to create a theme that would keep the user interested in the topic. Thinking of plastic waste can feel overwhelming, as it is such an intimidating topic with solutions that are not yet fully clear to us. My first design decision was therefore to make the website seem welcoming, rather than daunting, with light colours and images of plastic waste that would not be shocking enough to prevent the user from continuing on (as this would of course prevent them from learning, which is one of the main objectives).

3. I then considered the pace that I wanted to user to navigate the website. I wanted it to be easy for them to use the menu to move between each page, but that they would mostly rely on the strategically placed buttons taking them through each page in order. This would keep the pace going as they swiftly move through the design, learning throughout the process before ultimately signing up to the newsletter.

4. I started a workspace on [Figma](https://www.figma.com/file/Hv9GYC33ydTGLuwIxydgRr/Code-Institute?node-id=170%3A1) and began experimenting with my wireframe. As with my first Milestone Project, I found it useful to have my hero image in place to extract complementary colors for the theme from it. I also began designing my logo ideas on [Canva](https://www.canva.com/design/DAD-9OmoVNg/wbnoii0XoGRt1jnc77ivOQ/view?utm_content=DAD-9OmoVNg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton) as I felt this would be important to the theme of the design. In the end I settled with a blue and yellow theme: the blue (#528FCB) was extracted from the hero image and represents the ocean, whilst the yellow (#F5F862) complements the blue color and sybolises the hope of solving the problem and sets a 'fun' and interactive tone for the design.

5. With the wireframes complete, I began experimenting with the quiz in a seperate workspace to create the JavaScript needed to make this aspect of my project work. I created the basic structure and code with HTML and JavaScript and the repository can be found on GitHub [here](https://github.com/mkthewlis/quiz-practice).  

> Note: Throughout the design process, I kept referring back to my original 'Main Aims' and 'User Stories' to make sure that my project was developing as intended.

### Wireframing my project on Figma

Design for desktop devices:
![My workspace on Figma](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/figma_screenshot.png)

Design for mobile devices:
![My responsive design for mobile devices](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/figma_mobile.png)

Design for tablet devices:
![My responsive design for tablet devices](https://github.com/mkthewlis/Milestone-Project-2/blob/master/assets/images/figma_tablet.png)

[The entire workspace can be viewed on Figma with this link.](https://www.figma.com/file/Hv9GYC33ydTGLuwIxydgRr/Code-Institute?node-id=170%3A1)

## Features

### Existing Features

This project consists of five pages, four of which can be reached through the menu bar and one which is accessed after submitting the quiz answers.

#### Consistent features across all pages

- The menu at the top of the page and footer are consistent and responsive throughout the website. 
- Each page uses interactive arrows to visually encourage the user to scroll down. These can also be clicked on to take them further down the page. The arrows are either the theme blue or yellow to remain consistent on each page.
- Certain images are used more than once at various points in the website for consistency and familiarity.
- Each page begins with an image with a fixed background and is then divided into clear sections in a similar pattern.

#### Home

- The user meets a simple title that explains the purpose of the website and encourages them to read on.
- The user is then presented with a fact about ocean waste and the mission of *Our Oceans, Our Plastic*.
- The end of the page provides three links for the user: to learn more, take the quiz or sign up to the newsletter.

#### A Plastic Problem

- The title section introduces the user to more facts about plastic waste.
- They are then presented with facts about gyres (areas of plastic and waste in our oceans).
- An interactive map (Google Maps API) follows with the location of the five largest gyres in our oceans. These markers can be clicked on to reveal their name and a link to their corresponding Wikipedia page.
- The section ends with two buttons for the user to choose between: a link to take the quiz or a link to the organisation [The Ocean CleanUp](https://theoceancleanup.com/) to learn more about plastic waste.

#### Quiz

- The quiz features a title to welcome the users to the quiz.
- The quiz is then divided into six sections (five questions and one bonus question) with a question and the choice of answers to choose between.
- The answers change color depending on whether the correct one is selected, and all other answers for that question fade out. Each correct answer adds a point to the user's score and the bonus question adds an additional point if correct.
- At the end the user can click on the 'submit' button to view their results in a section that emerges from being hidden. The user's score is presented here along with a button to refresh the score. The message above the button varies depending on the user's score.
- The final section features a link to a page with the correct answers - a page that can only be accessed once the 'submit' button has been pressed.

#### Results

- This page is hidden from the user until they have submitted their results, but features the same menu bar and footer as the other pages for ease of navigation and consistency.
- The first section contains a title and then a box with a list of the correct answers. 
- The page ends with a link to return to the quiz or to sign up to the newsletter.

#### Newsletter
- The first section of this page features a title and information about the newsletter.
- It also features a form that the user's can complete to register, created with [EmailJS](https://www.emailjs.com/). This leads to a personalised alert with their name when complete.
- It ends with a section thanking the user for their time. It provides three quick steps they can take to make a difference to the plastic waste in our oceans.

### Features Left to Implement

- A future feature could be to create a way for the user to download a copy of their results by making a form that fills in with their quiz results and name - much like a certificate or personalised score card. Initially I had planned to add this feature, but quickly realised that this would go beyond the scope and time frame given for this project. 

- As this website aims to educate users about plastic waste, I think it could be interesting to add another game to this website. Before deciding on a quiz, I had also considered making a memory game with flip cards, as this would be an interactive way for the user to learn about plastic waste whilst having fun. This could be added in a seperate page after the quiz if the project were revisited.

- Another additional feature that could be added would be to make the quiz multiplayer, by allowing one user after the other to answer the quiz with both results saved. Once both players have finished, the results could be compared side by side.

## Technologies Used

### Languages, libraries, frameworks, editors and version control

- HTML5
    * The language used to create the form and add content to the website.
- CSS3 
    * The language used to style the HTML5 elements according to the design colour scheme.
- JavaScript
    * The languge used to create the quiz, implement the Google Maps API feature, send emails with EmailJS and animate the clickable arrows throughout the project.
- [jQuery](https://jquery.com/)
    * I used the jQuery library to help write the code for my quiz and animated arrows. 
- [Bootstrap framework](https://getbootstrap.com/) 
    * I decided to use Bootstrap's grid container system as I wanted to design my project with a 'mobile first' approach.
- [Gitpod](https://www.gitpod.io/)
    * I relied on Gitpod's dev environment to write the code for my project.
- [Git Version Control](https://git-scm.com/)
    * I used Git for Version Control to track and record changes to my code and refer back when needed.
- [GitHub](https://github.com/)
    * I hosted my deployed website to GitHub, with previous versions of my code stored through the commit history.

## Additional tools used
- [Figma](https://www.figma.com/) 
    * Figma helped me design my project, by creating wireframes for desktop, tablet and mobile devices. 
- [Canva](https://www.canva.com/)
    * I used Canva to create the logo for *Our Oceans, Our Plastic* and imported the logo into my project when complete.
- [FontAwesome](https://fontawesome.com/) 
    * I relied on a free FontAwesome arrow icon to create the animated blue and yellow icons for my project.
- [Pexels](https://www.pexels.com/) 
    * This was the source of several of the images used in my project, fully referenced in the 'Media' section below.
- [TinyPNG](https://tinypng.com/) 
    * I used TinyPNG to compress my image files to try to reduce the loading time for each page. 
- [Google Fonts](https://fonts.google.com/)
    * I used two complementary fonts from Google for my project: Montserrat and Raleway. 
- [Gauger Fonticon Generator](https://gauger.io/fonticon/) 
    * This free interactive Fonticon Generator allowed me to create a fonticon with a Font Awesome icon and style it with the colours from my colour scheme.
- [W3C Markup Validation Service](https://validator.w3.org/) 
    * This was a great tool throughout the project to test my HTML and CSS code.

## Testing

### Testing User Stories

Based on the User Stories listed above:

1. As this user was fairly new to the concept of plastic waste in our oceans, they would follow the prompts and be directed to the second page, 'A Plastic Problem', as it is filled with facts and information. Once completed, they could move on to the quiz to find a fun way to test what they have learnt. They would then leave the website with the confidence that they know more now than they did before.

2. This user knows that plastic waste is a problem and now wants to stay up to date. This website provides several options to do so, most notably by directly navigating to the 'Newsletter' page and submitting the form to stay up to date. Secondly, they could also use the Google Maps feature to find the links to Wikipedia pages with more information about the five major areas of waste in our oceans, which is updated periodically by Wikipedia users. Finally, they could follow the link to the organisation [The Ocean Cleanup](https://theoceancleanup.com/), to learn more about possible solutions and what is being done.

3. As a primary school teaching looking to introduce this topic to their students, the teacher could do so with two steps: by beginning to go through the facts about plastic waste whilst explaining each point to the students and then continuing to the complete the quiz together. With the buttons changing color depending on the selected answer and the scores shown at the end, it could be a fun way to engage the students and motivate them to learn more about protecting our oceans.

4. All elements of the website are responsive on smaller screens, so the design is still visually appealing on the user's iPad Pro.

5. The creators of this platform would want a consistent and encouraging design to inspire the users to be more excited than intimidated by the subject, as learning about plastic waste can be a daunting topic to think about at first. Through the light color scheme and interactive quiz, the creators could feel confident that a positive user experience would lead to more requests to join the newsletter, thereby increasing their following.

### Validating the HTML, CSS and JavaScript code

#### HTML
My HTML code was passed through the [W3C Markup Validation Service](https://validator.w3.org/).
Doing so brought up the following errors that I followed up on and resolved in the following way:
 - index.html - The first section of my 'Home' page was missing a heading title, so I changed a paragraph `<p></p>` element to an `<h1></h1>`element to correct this.
 - plastic.html - This file passed without any errors.
 - quiz.html - The validator brought up an error that explained that I had an empty element on this page. However, this is intentionally done, as this element's content is added with JavaScript once the user submits their quiz results. I tested the code again after completing the quiz and the error disappeared.
 - resutls. html - I was shown I did not need to include `type="text/javascript"` in my script tag to my local JavaScript quiz.js file. I removed this and the code then passed the tests.
 - newsletter.html - This file passed without any errors.

#### CSS
I checked my CSS code with the [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/). 
This test did not produce any errors.

#### JavaScript


#### Sources: 

Icon pulse: https://gist.github.com/gubi/8483199

Smooth scroll: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/ 