# FeedReaderTestingApp
Feed Reader Testing App project 4 of Udacity



# Project Overview

This project is a web-based application that reads RSS feeds. It is the fourth project on my Front End Course. This App included [Jasmine](http://jasmine.github.io/) and an incomplete test suite that I am required to complete. This I have worked on, to complete all the test suites and ensure the functionality of the App according to the test suites.

# Steps to run this test

	## for the test suite named `"RSS Feeds"` 
1. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
2. Return the `allFeeds` variable to a passing state.
3. Edit any of the URL of the `allFeeds` object to be undefined or as empty or completly remove the URL to make the test fail.
4. Restore the edit to return the app to a passing state.
5. Repeat step 3 and 4 but this time for the name property of the `allFeeds` object.
	
	## for the test suite named `"The menu"`
6. In the **./index.html** edit the body element by setting the class to empty to make the provided test fail.
7. Return the class value editted to restore to the App passing state.
8. in the **./js/app.js** comment out this code snippet below to make the provided test fail.
`menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });`
9. Uncomment the code to return to the passing state.
	
	## for the test suite named `"Initial Entries"`
10. in the **./js/app.js** file comment out this code snippet below to make the provided test fail.
`var container = $('.feed'),
                 title = $('.header-title'),
                 entries = result.feed.entries,
                 entriesLen = entries.length,
                 entryTemplate = Handlebars.compile($('.tpl-entry').html());
             title.html(feedName);`
11.Then uncomment the code to return to the passing state.

	## for the test suite named `"New Feed Selection"`
12. in the **./js/app.js** file copy the first feed and use it to overwrite the second feed to make the provided test fail.

thus the allfeeds first 2 elements will be as shown below:
`var allFeeds = [{
      name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
}, {
    name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
}, ....,
....
}];`

13.Then undo the change in step 12 to return to the passing state.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How I completed this project?

I review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
