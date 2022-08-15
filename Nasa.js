const theApiKey = `84xg3tVMB6iywkhvkOQdMFM9DNoqUHBStdMzrPPE`
let url = `https://api.nasa.gov/planetary/apod?api_key=${theApiKey}`

const xhr = new XMLHttpRequest()

xhr.open("GET", url)

xhr.send()

xhr.onload = () => {
    jsonData = JSON.parse(xhr.response)
    document.getElementById('date').innerHTML = jsonData.date
    document.getElementById('copyright').innerHTML = jsonData.copyright
    document.getElementById('explanation').innerHTML = jsonData.explanation
    

    addImage = () => {
        var img = new Image()
        img.src = jsonData.url
        img_home.appendChild(img)
    }
    addImage()
}