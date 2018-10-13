
$(function() {
   
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            //all feeds must be defined
            expect(allFeeds).toBeDefined();
            // all feeds must be more than zero
            expect(allFeeds.length).not.toBe(0);
        });


         it('contains url that are not empty', function(){
            for(feeds of allFeeds){
                // feed urls must be defined and must contain something.
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);   
            }
         });


         it('contains name that are not empty', function(){
            for(feeds of allFeeds){
                // feed name must be defined and must contain something
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);   
            }
         });
    });



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
            expect(theBody.classList).not.toContain("menu-hidden");
            $('.menu-icon-link').trigger('click');
            expect(theBody.classList).toContain("menu-hidden");
            
        });
    });


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




