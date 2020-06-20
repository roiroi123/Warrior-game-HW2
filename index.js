const warriorsMainDiv = document.getElementById("warriorsMainDiv")
const types = ["Archer","SwordMan","AxeMan"]
const warriorsImages = {
    SwordMan:"https://i.pinimg.com/originals/87/9f/c6/879fc6b7a750ef057c0cc257ba155f81.jpg",
    Archer:"data:image/jpeg;base64,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",
    AxeMan:"https://i.pinimg.com/736x/e4/0b/6f/e40b6f839decaa8847ed2d80078ef799--fantasy-warrior-fantasy-art.jpg"
}

function generateWarrior(){
    const level = Math.floor(Math.random()*10)
    const power = Math.floor(Math.random()*100)
    const type =types[Math.floor(Math.random()* types.length)]
    const warriorImage = warriorsImages[type]
    const damage = (level*power)
    return {
        level,power,type,warriorImage,damage
    }
}

function createWarriors(NumberOfWarriors){
    const warriorsArray = []
    for (let index = 0; index < NumberOfWarriors ; index++) {
        warriorsArray.push(generateWarrior())
    }
    return warriorsArray
}

const result = createWarriors(10)



function draw(array){
    for (let index = 0; index < array.length; index++) {
        drawCard(array[index])        
    }
}

function drawCard(warriorDetails){
    const {level, type, warriorImage, power, damage} = warriorDetails
   
    let card = document.createElement('div')
    card.classList.add("card")
    card.style= 'width: 18rem; display:inline-block;margin: 5px'
    
    let image = document.createElement("img")
    image.src = warriorImage
    image.classList.add("card-img-top")
    card.appendChild(image)

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.appendChild(cardBody)

    let cardtitle = document.createElement('h5')
    cardtitle.classList.add('card-title')
    cardtitle.innerText = type
    cardBody.appendChild(cardtitle)
    
    let warriorLevel = document.createElement("p")
    warriorLevel.classList.add('card-text')
    warriorLevel.innerText = "level:" + level
    cardBody.appendChild(warriorLevel)
   
    let warriorPower = document.createElement("p")
    warriorPower.classList.add('card-text')
    warriorPower.innerText = "Power:" + power
    cardBody.appendChild(warriorPower)

    let warriorDamage = document.createElement("p")
    warriorDamage.classList.add('card-text')
    warriorDamage.innerText = "Damage:" + damage
    cardBody.appendChild(warriorDamage)

    warriorsMainDiv.appendChild(card)
    
}

draw(result)