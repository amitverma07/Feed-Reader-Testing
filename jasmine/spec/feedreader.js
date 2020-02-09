$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed*/
        it('URL is defined and not empty', function () {
            allFeeds.forEach(function (feed) {
                feedLink = feed.url;
                expect(feedLink).toBeDefined();
                expect(feedLink.length).not.toBe(0);
            });
        });

        it('name and not empty', function () {
            allFeeds.forEach(function (feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });

    });

    describe('menu', function () {
        it('hidden menu', function () {
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });

        it('menu visible on click', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
        });

        it('hidden by clicking again ', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });
    });

    describe('Initial Entries', function () {
        // run before test
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('initial element is there', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function () {
        var testfeed;

        // when a new feed is loaded by the loadFeed function that the content actually changes

        beforeEach(function (done) {
            loadFeed(0, function () {
                testfeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        // Check the newsfeed  html to be not same as previous.
        it('has been loaded', function () {
            expect($('.feed').html()).not.toEqual(testfeed);
        });
    });
}());
