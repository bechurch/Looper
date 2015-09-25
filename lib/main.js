import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'
import DisplayGifs from './display-gifs'

window.loadSub = function () {
	const inputBox = document.querySelector('#subreddit-input');
	new RedditApi(inputBox.value)
	.load()
    .then(ExtractGifs)
    .then(DisplayGifs);
}

export default {}
