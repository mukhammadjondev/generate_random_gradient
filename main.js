const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function runColor() {
    function randomColor() {
        let color = '#'
    
        for (i = 0; i < 6; i++) {
            const randomNumber = Math.floor(Math.random() * values.length)
            const result = values[randomNumber]   
            color += result
        } 
        return color  
    }
    randomColor()
    
    let color1 = randomColor()
    let color2 = randomColor()

    let randomDeg = Math.floor(Math.random() * 360 + 1)
    
    colorText.textContent = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
    document.body.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
}

runColor()

container.addEventListener('click', runColor)