/* app.js
 *
 * This is our RSS feed reader application. It uses the Google
 * Feed Reader API to grab RSS feeds as JSON object we can make
 * use of. It also uses the Handlebars templating library and
 * jQuery.
 */
// The names and URLs to all of the feeds we'd like available.
var allFeeds = [{
    name: 'CSS Tricks',
    url: 'http://feeds.feedburner.com/CssTricks'
}, {
    name: 'CSS Tricks',
    url: 'http://feeds.feedburner.com/CssTricks'
}, {
    name: 'HTML5 Rocks',
    url: 'http://feeds.feedburner.com/html5rocks'
}, {
    name: 'Linear Digressions',
    url: 'http://feeds.feedburner.com/udacity-linear-digressions'
}];
/* This function starts up our application. The Google Feed
 * Reader API is loaded asynchonously and will then call this
 * function when the API is loaded.
 */
function init() {
    // Load the first feed we've defined (index of 0).
    loadFeed(0);
}
//added
let urlStatus,
    emptyCount = 0,
    definedCount = 0,
    undefinedCount = 0;
let feedNameSet, nameCount = 0,
    emptyNameCount = 0;
for (feed of allFeeds) {
    //check for url properties
    switch (feed.hasOwnProperty('url')) {
        case true:
            definedCount += 1;
            if (feed.url == '') {
                emptyCount += 1;
                // console.log(`undefine ${undefinedCount} ${definedCount} ${emptyCount} ${urlStatus}`)
            }
            // console.log(`define ${definedCount} ${allFeeds.length}`)
            if (emptyCount > 0) {
                urlStatus = "url is not defined";
            } else {
                urlStatus = "url is defined";
            }
            break;
        case false:
            // urlIsDefined =false;
            undefinedCount += 1;
            // urlIsNotEmpty =true;
            console.log(`undefine ${undefinedCount} ${allFeeds.length}`)
            break;
    }
    //check for name properties
    switch (feed.hasOwnProperty('name')) {
        case true:
            nameCount += 1;
            if (nameCount == allFeeds.length) {
                feedNameSet = "name is defined";
            }
            // console.log(`define name ${nameCount} ${emptyCount} ${feedNameSet}`)
            if (feed.name == '') {
                emptyNameCount += 1;
                // console.log(`undefine name ${emptyNameCount} ${nameCount} ${emptyCount} ${feedNameSet}`)
            }
            // console.log(`define ${definedCount} ${allFeeds.length}`)
            if (emptyNameCount > 0) {
                nameStatus = "name is not defined";
            } else {
                nameStatus = "name is defined";
            }
            break;
        case false:
            feedNameSet;
            break;
    }
}
// function menuDefaultAction(){if ($('.menu-hidden').css("transform",'translate3d(-12em, 0, 0)'))
// {
//    //donothing ;
// }
// else{
//     $('.menu-hidden').css("transform",'translate3d(-12em, 0, 0)');
// }
// } 
// for(feed of allFeeds){
// }
/* This function performs everything necessary to load a
 * feed using the Google Feed Reader API. It will then
 * perform all of the DOM operations required to display
 * feed entries on the page. Feeds are referenced by their
 * index position within the allFeeds array.
 * This function all supports a callback as the second parameter
 * which will be called after everything has run successfully.
 */
function loadFeed(id, cb) {
    var feedUrl = allFeeds[id].url,
        feedName = allFeeds[id].name;
    $.ajax({
        type: "POST",
        url: 'https://rsstojson.udacity.com/parseFeed',
        data: JSON.stringify({
            url: feedUrl
        }),
        contentType: "application/json",
        success: function(result, status) {
            var container = $('.feed'),
                title = $('.header-title'),
                entries = result.feed.entries,
                entriesLen = entries.length,
                entryTemplate = Handlebars.compile($('.tpl-entry').html());
            title.html(feedName); // Set the header text
            container.empty(); // Empty out all previous entries
            /* Loop through the entries we just loaded via the Google
             * Feed Reader API. We'll then parse that entry against the
             * entryTemplate (created above using Handlebars) and append
             * the resulting HTML to the list of entries on the page.
             */
            entries.forEach(function(entry) {
                container.append(entryTemplate(entry));
            });
            if (cb) {
                cb();
            }
        },
        error: function(result, status, err) {
            //run only the callback without attempting to parse result due to error
            if (cb) {
                cb();
            }
        },
        dataType: "json"
    });
}
/* Google API: Loads the Feed Reader API and defines what function
 * to call when the Feed Reader API is done loading.
 */
google.setOnLoadCallback(init);
/* All of this functionality is heavily reliant upon the DOM, so we
 * place our code in the $() function to ensure it doesn't execute
 * until the DOM is ready.
 */
$(function() {
    var container = $('.feed'),
        feedList = $('.feed-list'),
        feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html()),
        feedId = 0,
        menuIcon = $('.menu-icon-link');
    /* Loop through all of our feeds, assigning an id property to
     * each of the feeds based upon its index within the array.
     * Then parse that feed against the feedItemTemplate (created
     * above using Handlebars) and append it to the list of all
     * available feeds within the menu.
     */
    allFeeds.forEach(function(feed) {
        feed.id = feedId;
        feedList.append(feedItemTemplate(feed));
        feedId++;
    });
    /* When a link in our feedList is clicked on, we want to hide
     * the menu, load the feed, and prevent the default action
     * (following the link) from occurring.
     */
    feedList.on('click', 'a', function() {
        var item = $(this);
        $('body').addClass('menu-hidden');
        loadFeed(item.data('id'));
        return false;
    });
    /* When the menu icon is clicked on, we need to toggle a class
     * on the body to perform the hiding/showing of our menu.
     */
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
}());