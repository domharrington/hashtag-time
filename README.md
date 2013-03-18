[![build status](https://secure.travis-ci.org/domharrington/hashtag-time.png)](http://travis-ci.org/domharrington/hashtag-time)
# hashtag-time
Parse a time-hashtag into number of seconds: e.g. #4hrs30mins = 16200

To see more examples check the tests

## usage

    var hashtagTime = require('hashtag-time')
    var time = hashtagTime('#4hrs30mins')

    console.log(time)
    // {
    //   hours: 4,
    //   minutes: 30,
    //   duration: 16200
    // }
