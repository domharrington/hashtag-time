var hashtagTime = require('../')

describe('hashtag-time', function () {
  it('should correctly parse time', function () {
    var hashtags =
      [ { hashtag: '#4hrs', result: { hours: 4, duration: 14400 } }
      , { hashtag: '#4h', result: { hours: 4, duration: 14400 } }
      , { hashtag: '#10h', result: { hours: 10, duration: 36000 } }
      , { hashtag: '#4hours', result: { hours: 4, duration: 14400 } }
      , { hashtag: '#4h2m', result: { hours: 4, minutes: 2, duration: 14520 } }
      , { hashtag: '#40mins', result: { minutes: 40, duration: 2400 } }
      , { hashtag: '#40min', result: { minutes: 40, duration: 2400 } }
      , { hashtag: '#40m', result: { minutes: 40, duration: 2400 } }
      , { hashtag: '#1hr15mins', result: { hours: 1, minutes: 15, duration: 4500 } }
      , { hashtag: '#1hr15min', result: { hours: 1, minutes: 15, duration: 4500 } }
      , { hashtag: '#1hour15min', result: { hours: 1, minutes: 15, duration: 4500 } }
      , { hashtag: '#1hrs15min', result: { hours: 1, minutes: 15, duration: 4500 } }
      ]

    hashtags.forEach(function (i) {
      hashtagTime(i.hashtag).should.eql(i.result)
    })
  })

  it('should return an Error if no matches found', function () {
    var text = '#ßlkjkasjdas'
    hashtagTime(text).message.should.equal('No matches found: ' + text)
  })
})