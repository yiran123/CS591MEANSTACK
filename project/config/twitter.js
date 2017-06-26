/*
 Configuration information for Twitter API authorization. DO NOT push this to github
 Note: rename this file to twitter.js to match the require AND move to /config folder
 */

const Twitter = {
    CONSUMER_KEY: 'kywOFLSd9ErWgtfw6oQVxpaZ2',
    CONSUMER_SECRET: 'blIKdr9w0edWWLGHRmgDGb60I9YTFKq3Do4WCvUJE7G61T28Tv',
    OWNER_ID: '805252666834165761',
    CALLBACK_URL: 'http://localhost:3000/auth/callback',
    REQ_TOKEN_URL: 'https://api.twitter.com/oauth/request_token',
    AUTHORIZE_URL: 'https://api.twitter.com/oauth/authorize',
    ACCESS_TOKEN_URL: 'https://api.twitter.com/oauth/access_token'
}

module.exports = Twitter