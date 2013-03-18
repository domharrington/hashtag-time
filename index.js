module.exports = hashtagTime

function hashtagTime(hashtag) {
  var output = {}
  hashtag = hashtag.substring(1)

  var hourRegex = /(\d+)(hours|hrs|h)/
    , matches = hourRegex.exec(hashtag)

  // Hour match
  if (matches && matches[1] && matches[2]) {
    output.hours = +matches[1]
    output.duration = 0
    output.duration += matches[1] * 60 * 60
    hashtag = hashtag.replace(matches[0], '')
  }

  if (!hashtag) return output

  var minRegex = /(\d+)(mins|min|m)/

  matches = minRegex.exec(hashtag)

  // Minute match
  if (matches && matches[1] && matches[2]) {
    output.minutes = +matches[1]
    if (!output.duration) output.duration = 0
    output.duration += matches[1] * 60
  }

  return Object.keys(output).length > 0
         ? output
         : new Error('No matches found: #' + hashtag)
}