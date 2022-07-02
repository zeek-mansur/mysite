# My Personal online CV & Portfolio 

This is my personal website created for educational purpose, consisting of my resume and portfolio. It lists my skills and projects, and also contains links for my GitHub, Twitter, LinkedIn and Instagram profiles.

There is also a contact form for recruiters, other coders or customers to get in touch with me if they want to hire me or collaborate.

## UX

My website is for recruiters, other coders and potential customers, who are looking to hire a web developer or collaborate.  

I've chosen to keep my website in the way that I have, as I felt it will be easy for users to navigate without getting lost. The dark colour scheme and fonts that I've chosen usually transmit a sense of mystery and elegance. The colour scheme also reflect less light which also makes it easier for users to read.
 
### User Stories

- As a recruiter, I want to navigate through a prospect page as easy as possible in order to save time.
- As a recruiter, I would like to have a link to download the prospect CV so that I can make contact when needed. 
- As a recruiter, I want to be able to get back to the home page quickly and easily, so I don't get lost navigating. 
- As a customer, I would like an online form to get in touch with the individual that I need to hire. 
- As a customer/recruiter I would like to see links to the individual's different social media profiles, so I can learn more about the person.
- As a recruiter, I would like to see the portfolio well arranged on the webpage so  i can view the work of the prospect.

 
### Wireframes

Wireframes were drawn using Balsamiq. Two wireframes can be seen for some pages in order to consider how to make my website responsive. The links to the files are below:

- [index.html (xs and sm)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%207.png)
- [index.html (md and lg)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%201.png)
- [about.html (md and lg)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%202.png)
- [experience.html (md and lg)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%203.png)
- [education.html (md and lg)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%204.png)
- [portfolio.html (sm and md)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%209.png)
- [portfolio.html (lg and xl)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%205.png)
- [contact.html (md and sm)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%208.png)
- [contact.html (lg and xl)](https://github.com/zeek-mansur/web-page-repo/blob/master/static/wireframes/New%20Wireframe%206.png)

There is a little difference between some pages on my wireframes and my final website. This was due to visual preferences and feedback received from other users.

## Features

#### index.html

- **Navigation bar** - This is menu contains the navigation links to all pages on my website. This allows user to click the links to navigate through relevant webpage.
- **Download button** - This allows users to download my CV when button is clicked.
- **Hamburger button** - The hamburger button appears when the screen size is redcued. Clicking the hamburger button triggers a dropdown overlay menu containing the navigation links to all pages on my website. The user can click the links to navigate to the relevant webpage.


#### portfolio.html

- **Portfolio links** - These are links to my existing projects and potential projects in the future. This allows users to navigate to the projects pages by clicking the links.


#### contact.html

- **Form with submit button** - Allows users to contact me by completing the form and submitting their details. Informations entered by users will be recieved by me. The was enabled with the help of formspree.
- **Social media links** - Each link opens a new page with my relevant social media page (GitHub, Twitter, LinkedIn and Instagram). These links make it easy for users to access my social media profiles from one place. The social media profiles load in a new tab, which allows users to then return to the site.

## Technologies Used


- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **CSS3** to add custom styles to the elements and content of my website.
- [**Balsamiq**](https://balsamiq.com/)
    - I used **Balsamiq** to create wireframes for my website before building the actual site.
- [**Bootstrap v5.0**](https://getbootstrap.com/)
    - The project uses **Bootstrap v5.0** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is the standard jQuery that is built with Bootstrap components.
- [**JavaScript**](https://www.javascript.com/)
    - The project uses **JavaScript** from Bootstrap which is required to add functionality to some of Bootstrap's components.
- [**Font Awesome**](https://fontawesome.com/)
    - The project uses **Font Awesome** for the social media links and the hamburger button on my website.
- [**VS Code**](https://code.visualstudio.com/)
    - I've used **VS Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.

### Responsive Testing

I used Google Chrome's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

### Problems faced

- **Burger icon** - The burger icon wasn't expanding when clicked. The reason for this was the bootstrap cdn link which was not correct. I had to search on youtube for a tutorial in order to correct it to enable it work fine.
- **Home page image** - The home page image was not fitting to screen and being responsive as I wanted. I had to get help via stack overflow to solve the problem.
- **Grids** - I initial had issues with my grids as the site breaks whenever I tried to change the sizes of the screen. I had to do some research and use the correct bootstrap classes for each grid I needed.
- **Nav bar** - My nav bar was not sitting well on top of my home page image. 
- **Drop down menu** - My dropdown menu on the navigation bar was not working. Thanks to my mentor Sunny who helped me figured out that my cdn link for bootstrap was not correct and placed rightly. I had to change the bootstrap cdn link in order to get it working. 

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my VS code workspace.
2. Initialised Git using the `git init` command.
3. Added all files to the staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "This is my first commit"` command.
5. Created a new repository in GitHub called 'mysite'.
6. Copied the below code from GitHub into the terminal window in my VS work workspace:

    ```git remote add origin https://github.com/zeek-mansur/mysite.git```

    ```git push origin master```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'master branch' option under the 'GitHub Pages' section.
10. Ran several regular commits throughout my project.

### Repository Link

Click the link below to run my project in the live environment:

[**Zulkiful Site**](https://zeek-mansur.github.io/mysite/)


