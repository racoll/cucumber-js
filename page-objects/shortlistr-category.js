const shortlistrCategory = {

    url: 'http://www.google.co.uk',

    elements: {
        categoryLink: by.css('.Home__categoryListItem__1Za > a')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    preformClick: function (searchQuery) {

        var selector = page.shortlistrCategory.elements.categoryLink;

        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector);
    }
};

module.exports = shortlistrCategory