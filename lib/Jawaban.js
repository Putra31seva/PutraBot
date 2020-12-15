const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const nekonime = () => {
    return new Promise((resolve, reject) => {
        
        var url = `https://pixabay.com/api/?key=12806550-9e09bfbec97d932a32b5bf0eb&q=flowers-324175_1280`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = Jawaban