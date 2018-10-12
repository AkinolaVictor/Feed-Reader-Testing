/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            //all feeds must be defined
            expect(allFeeds).toBeDefined();
            // all feeds must be more than zero
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('contains url that are not empty', function(){
            for(feeds of allFeeds){
                // feed urls must be defined and must contain something.
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);   
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('contains name that are not empty', function(){
            for(feeds of allFeeds){
                // feed name must be defined and must contain something
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(null);   
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
 

    describe('The menu', function(){
        // selecting the body
        const b = document.querySelector('body');
        
        it('initially hides the menu contents', function(){
            // munu should be hidden at first
            expect(b.className).toBe("menu-hidden");
        });

        it('menu changes visibility on the click icon', function(){
          
            // on click of menu icon, menu should change
            $('.menu-icon-link').trigger('click');
            expect(b.className).toBe("");
            $('.menu-icon-link').trigger('click');
            expect(b.className).toBe("menu-hidden");
            
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function(){

                beforeEach(function (done) {
                    //empty the feed at first then load it
                    $(".feed").empty();
                    loadFeed(0, done);
                });

                it('should have at least one entry element', function() {
                 //feed should have at least 1 entry
                    expect($(".feed").find(".entry").length).not.toBe(0);
                

                 });

    });

        /* TODO: Write a new test suite named "New Feed Selection" 


    //We load our two different feeds.*/

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
    describe('New Feed Selection', function(){

                 describe('New Feed Selection', function() {
                    let firstFeed;

                        beforeEach(function (done) {
                        // load the first feed
                        loadFeed(0, function () {
                        firstFeed = $('.feed').html();

                        // Load the second feed
                        loadFeed(1, function () {
                        done();
                    });
                });

            });

             it('should change the contents of new feeds', function (done) {
                let nextFeed = $('.feed').html();
                // testing both feeds for difference
                expect(nextFeed).not.toBe(firstFeed);
                done();
            });           

           
    });
});                 


}());




