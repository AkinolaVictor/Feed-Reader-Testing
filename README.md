# Feed-Reader-Testing

## Feed Reader Testing

## Table of Contents
* Project Description
* Instruction
* Building Tools
* Strategy used for Development
* Project Properties 
* Author
* Contributing

## Project Description
* Using jasmine.js(A javaScript framework for testing) to do a Test Drive Development(TDD) on a pre-existing Feed Reader Web Application.
 
 ## Instruction
 * The starter code was given by udacity. 
 
 ## Building Tools
 * sublime text editor.
 * chromium browser. 
 * javaScript. 
 * gitHub. 
 * Jasmine Framework.
 
 ## Strategy used for Development
 * I gave a close study to the starter code given by udacity. 
 * I reviewed the application's functionality by opening the index.html file in the starter code on my browser.
 * I went the app.js file and got a clear understanding of it. 
 * I opened the feeder.js file and reviewed the jasmine documentation in it. 
 * I edited the allFeeds variable going in the app.js file to see what it looks like when a test fails.
 * I corrected the error I made so the test can be passed once again. 
 * I iterated through each feed in allFeeds object to ensure that each has a URL defined within it, and that this URL is not empty.
 * I iterated through allFeeds again, to ensure that each feed has a name defined within it, and that this name is not empty too. 
 * I then wrote a new test suit, giving it the name "The Menu", to ensure that the contents in the menu are hidden by default.
 * I wrote a test to ensure that the menu's visibility changes whenever the menu icon is clicked and when it is clicked again. 
 * I wrote a test suit,  giving it the name "Initial Entries", which ensures that when the loadFeed function is called and is done working, there is a minimum of one ".entry" element inside the ".feed" container.
 * lastly, I wrote a test suite and named it "New Feed Selection" to ensure that when a new feed is loaded, by the loadFeed function, it changes content really. 
 
 ## Project Properties
 
 * No test depend(s) on the result(s) of other(s).
 * Error handling was implemented for undefined variables and out-of-bound array access. 
 * Callbacks are used to make sure that the feeds are actually loaded before being tested. 
 * all tests pass. 
 
 ## Author
 * The testing of this feed reader Application was developed by Akinola Victor with the starter code given by Udacity.
 
 ## contributing
 * if there are any improvement you would like to give to this work, you are free to do so. this is the link for that https://github.com/AkinolaVictor/Feed-Reader-Testing 
 
## Acknowledgement
* i appreciate God for the privelege i've got to get this done, i also appreciate Google, Andela, and udacity, for the scholarship i was given that birth this.
