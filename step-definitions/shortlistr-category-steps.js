module.exports = function () {



    this.When(/^I search Amazon for "([^"]*)"$/, function (searchQuery) {
        return helpers.loadPage('http://www.shortlistr.co.uk').then(function() {
    
            // use a method on the page object which also returns a promise
            return page.shortlistrCategory.preformClick(searchQuery)
            .then(function (elements) {

                // verify this element has children
                expect(elements.length).to.not.equal(0);
            });
        })
        
    });


    // this.Then(/^I should see some results$/, function () {

    //     // driver wait returns a promise to return, that
    //     return driver.wait(until.elementsLocated(by.css('div.g')), 10000).then(function(){

    //         // returns the promise of an element to the following, then,
    //         return driver.findElements(by.css('div.g'));
    //     })
    //     .then(function (elements) {

    //         // verify this element has children
    //         expect(elements.length).to.not.equal(0);
    //     });
    // });

    // this.Then(/^I should see some relevant results$/, function () {
    //     // Write code here that turns the phrase above into concrete actions
    //      // driver wait returns a promise to return, that
    //      return driver.wait(until.elementsLocated(by.css('div.g')), 10000).then(function(){

    //         // returns the promise of an element to the following, then,
    //         return driver.findElements(by.css('div.g'));
    //     })
    //     .then(function (elements) {

    //         // verify this element has children
    //         expect(elements.length).to.not.equal(0);
    //     });
    //   });



};