import jsonp from 'jsonp'

class RedditApi {
    constructor(subreddit) {
        console.log(subreddit)
        this.redditURL = 'http://www.reddit.com/r/' + subreddit + '/top.json?sort=top&t=month'
    }
    load() {
        return new Promise((resolve, reject) => {
            jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
                err ? reject (err) : resolve(data.data.children)
            })
        })

    }
}

export default RedditApi
