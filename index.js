// dependencies
const googlePlayScrapper = require('google-play-scraper');
const fs = require('fs');

/**
 * It takes an appId and a reviewQuantity, and then it uses the googlePlayScrapper to get the reviews
 * for that appId, and then it writes the reviews to a file called reviews.json.
 * @param appId - The app id of the app you want to get reviews for.
 * @param reviewQuantity - The number of reviews you want to get.
 */
const getReviews = async (appId, reviewQuantity) => {
   const reviews = await googlePlayScrapper.reviews({
      appId: appId,
      num: reviewQuantity,
   });
   fs.writeFileSync('reviews.json', JSON.stringify(reviews));
};

// Calling the getReviews function
getReviews('com.smartbros360.code_radio', 300);
