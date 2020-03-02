
$(function() {

  //first test suite:
    describe('RSS Feeds', function() {

         //this spec checks to see that  allFeeds exists
         //and it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         //this spec checks to see that URL in allFeeds exists
         //and it is not empty
         it('URL not null', function() {
         allFeeds.forEach(function(feed){
           expect(feed.url).toBeDefined();
           expect(feed.url).not.toBe(0);
         });
       });

       //this spec checks to see that Name in allFeeds exists
       //and it is not empty
         it('Name defined & not null', function() {
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe(0);
           });
         });

});


  //second test suite:
 // verifies that the menu object exists (i.e. the menu is hiddem)
 describe('The menu', function() {
      const body = document.querySelector('body');
         it('menu is hidden', function(){
          //expect(body.hasClass("menu-hidden")).toEqual(true);
          expect(body.classList.contains('menu-hidden')).toBe(true);
         })

      //this spec checks to see that when the menu is clicked
      //it is no longer hidden and when clicked again
      //it is hidden

        it('menu is visible', function(){
         const menu = document.querySelector('.menu-icon-link');

         menu.click();
         expect(body.classList.contains('menu-hidden')).toBe(false);

         menu.click();
         expect(body.classList.contains('menu-hidden')).toBe(true);
        })

 });


//third test suite:
describe('Initial Entries', function(){

  //this spec check the feed to ensure it has a child element exits
  // use the beforeEach done function to run prior to testing the condition
  beforeEach(function (done) {
      loadFeed(0,done);
      });

    it('grab initial entry', function(done){
       feedchildren = document.querySelector('.feed').children;
       expect(feedchildren.length).toBeGreaterThan(0);
      done();

    });
});

//fourth test suite:
describe('change Entries', function(){

//This spec check that when the loadfeed function run a new feed is load
// it to uses the beforeeach and done function to run prior to the test.
// and loads the title text for each to be compared in the test.
  beforeEach(function (done) {
       loadFeed(0, function() {
          x = document.querySelector(".header-title").textContent;

       loadFeed(1, function() {
           y = document.querySelector(".header-title").textContent;
         done();
     });
   });
});

     it('next feed change', function(){
       expect(x).not.toBe(y);

     });
});


}());
