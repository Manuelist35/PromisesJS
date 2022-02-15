const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback ({
            name: 'User left',
            message: ':('
        })
} else if (userWatchingCatMeme) {
    errorCallback({
        name: 'User watching cat meme',
        message: 'WebDevsimplified < Cat'
    })
} else {
    callback('thumbs up and Subscribe')
  }
}

watchTutorialCallback((message) => {
    console.log('succes:'  + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})