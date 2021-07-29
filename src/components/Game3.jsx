import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

import GameOverMenu from './GameOverMenu'
import { useParams } from 'react-router-dom'
//class0
var cards0 = {
    set1: {
        question: "A___is a good pet.",
        answer: 'dog'
    },
    set2: {
        question: "I saw a bird___today.",
        answer: 'fly'
    },
    set3: {
        question: "I want to drink___.",
        answer: 'water'
    },
    set4: {
        question: "Let's take a___.",
        answer: 'break'
    },
    set5: {
        question: "I live in a___.",
        answer: 'house'
    },
    set6: {
        question: "I always___to work.",
        answer: 'walk'
    },
    set7: {
        question: "I like to eat___.",
        answer: 'sandwiches'
    },
    set8: {
        question: "We saw a___at the zoo.",
        answer: 'lion'
    },
    set9: {
        question: "He likes to study at___.",
        answer: "school"
    },
    set10: {
        question: "She can fly a___.",
        answer: 'plane'
    },

}
//class0b
var cards0b = {
    set1: {
        question: "‘A’ stands for___in this book.",
        answer: 'Action'
    },
    set2: {
        question: "The 2nd section is called___.",
        answer: 'SMART CHECK!'
    },
    set3: {
        question: "‘T’ stands for___in this book.",
        answer: 'Time'
    },
    set4: {
        question: "The 3rd section is called___.",
        answer: 'Challenge!'
    },
    set5: {
        question: "‘S’ stands for___in this book.",
        answer: 'Skill'
    },
    set6: {
        question: "3‘R’ stands for___in this book.",
        answer: 'Result'
    },
    set7: {
        question: "3The 1st section is called___.",
        answer: 'Ready!'
    },
    set8: {
        question: "3‘M’ stands for___in this book.",
        answer: 'Measure'
    },
    set9: {
        question: "3This game is in___.",
        answer: "Class 0"
    },
    set10: {
        question: "3This game is called___.",
        answer: 'CHAMPION CONNECT!'
    },

}
//class1
var cards1 = {
    set1: {
        question: '3I___pizza because it tastes good.',
        answer: '3like'
    },
    set2: {
        question: '3I___spiders because they are scary!',
        answer: '3hate'
    },
    set3: {
        question: "3I'm___snakes because they bite.",
        answer: '3scared of'
    },
    set4: {
        question: "3I'm___English because I study hard.",
        answer: '3good at'
    },
    set5: {
        question: "3I'm___running because I don't train",
        answer: '3not good'
    },
    set6: {
        question: "3I'm___fashion because it is cool.",
        answer: '3interested in'
    },
    set7: {
        question: '3I___my mother because she is amazing!',
        answer: '3love'
    },
    set8: {
        question: "3I'm___sports because they are hard.",
        answer: '3not interested in'
    },
    set9: {
        question: "3I___rain because I get wet.",
        answer: "3don't like"
    },
    set10: {
        question: "3I'm___falling because I am brave.",
        answer: '3not afraid of'
    },

}
//class2
var cards2 = {
    set1: {
        question: "3I___reading because it is fun.",
        answer: '3like'
    },
    set2: {
        question: "3I’m___TV because it is boring.",
        answer: '3not interested in'
    },
    set3: {
        question: "3She’s___it because she practices.",
        answer: '3good at'
    },
    set4: {
        question: "3He’s___it because he is brave.",
        answer: '3not scared of'
    },
    set5: {
        question: "3I___him because he is incredible!",
        answer: '3love'
    },
    set6: {
        question: "3I___curry because it’s too spicy!",
        answer: '3hate'
    },
    set7: {
        question: "3He’s___me because I punch him.",
        answer: '3scared of'
    },
    set8: {
        question: "3I’m___it because I don’t practice.",
        answer: '3not good at'
    },
    set9: {
        question: "3I___like math because it’s hard.",
        answer: "3don't"
    },
    set10: {
        question: "3She’s___it because it looks cool.",
        answer: '3interested in'
    },

}

//class3
var cards3 = {
    set1: {
        question: '3Your house is___so we can get ther sooner.',
        answer: '3closer'
    },
    set2: {
        question: "3It's the most___. I want to spend less money.",
        answer: '3expensive'
    },
    set3: {
        question: "3That road is the___. Let's go a quicker way.",
        answer: '3longest'
    },
    set4: {
        question: "3Going by train is___. A bike is too slow.",
        answer: '3faster'
    },
    set5: {
        question: "3The food is yummy! It's easily the most___.",
        answer: '3delicious'
    },
    set6: {
        question: "3The car is___. There is more space.",
        answer: '3bigger'
    },
    set7: {
        question: '3I cannot win. This game is the most___.',
        answer: '3difficult'
    },
    set8: {
        question: "3This is the most___flower I have ever seen.",
        answer: '3beautiful'
    },
    set9: {
        question: "3Slow down. I am tired. I'm___than you!",
        answer: "3older"
    },
    set10: {
        question: "3That time is much more___for me. Thanks!",
        answer: '3convenient'
    },

}
//class4
var cards4 = {
    set1: {
        question: "3It's the___from here. It's far away.",
        answer: '3furthest'
    },
    set2: {
        question: "3It's___than this. It's not pretty!",
        answer: '3uglier'
    },
    set3: {
        question: "3Walking is the___way. Let's drive!",
        answer: '3slowest'
    },
    set4: {
        question: "3My salad is___than that. It burns!",
        answer: '3spicier'
    },
    set5: {
        question: "3It's the___location for everyone.",
        answer: '3least convenient'
    },
    set6: {
        question: "3That ticket is___. Save your money!",
        answer: '3cheaper'
    },
    set7: {
        question: "3I'm so busy. Let's watch a___show.",
        answer: '3shorter'
    },
    set8: {
        question: "3I'm___than him. He's really old!",
        answer: '3younger'
    },
    set9: {
        question: "3This phone is the___. Don't lose it!",
        answer: "3smallest"
    },
    set10: {
        question: "3This game is___. That one's hard.",
        answer: '3easier'
    },

}
//class5
var cards5 = {
    set1: {
        question: "3I___to get a great job after university.",
        answer: '3hope'
    },
    set2: {
        question: "3We___eating junk food. It's terrible.",
        answer: '3dislike'
    },
    set3: {
        question: "3I___about changing my job when my boss shouts.",
        answer: '3think'
    },
    set4: {
        question: "3We really___playing games together. It's fun.",
        answer: '3enjoy'
    },
    set5: {
        question: "3I___to eat that cake. It looks delicious.",
        answer: '3want'
    },
    set6: {
        question: "3We can't___meeting him.It would be unreal!",
        answer: '3imagine'
    },
    set7: {
        question: "3I___to buy new shoes. These ones are broken.",
        answer: '3need'
    },
    set8: {
        question: "3We often___eating quickly. After 1 minute!",
        answer: '3finish'
    },
    set9: {
        question: "3After thinking about it, I___ to talk to her.",
        answer: "3decided"
    },
    set10: {
        question: "3When I___ to cry, please turn the movie off.",
        answer: '3start'
    },

}
//class6
var cards6 = {
    set1: {
        question: "3I___to study harder or I'll fail.",
        answer: '3need'
    },
    set2: {
        question: "3Let's___playing this. It's boring.",
        answer: '3finish'
    },
    set3: {
        question: "3We've___to get married!",
        answer: '3decided'
    },
    set4: {
        question: "3I___to play it now. I can't wait!",
        answer: '3want'
    },
    set5: {
        question: "3My kids often___living on the moon.",
        answer: '3imagine'
    },
    set6: {
        question: "3I really___talking with you. Thanks.",
        answer: '3enjoy'
    },
    set7: {
        question: "3When I___about eating pie I smile.",
        answer: '3think'
    },
    set8: {
        question: "3We___to see you again some day.",
        answer: '3hope'
    },
    set9: {
        question: "3I___loud music. It hurts my ears.",
        answer: "3dislike"
    },
    set10: {
        question: "3Let's___doing it now and finish early.",
        answer: '3start'
    },

}
//class8
var cards8 = {
    set1: {
        question: "3___is the best soccer player in our club?",
        answer: '3Who'
    },
    set2: {
        question: "3___is she always getting so angry?",
        answer: '3Why'
    },
    set3: {
        question: "3___is the best place for us to meet?",
        answer: '3Where'
    },
    set4: {
        question: "3___your brother older or younger than you?",
        answer: '3Is'
    },
    set5: {
        question: "3___is the movie? I only like short ones.",
        answer: '3How long'
    },
    set6: {
        question: "3___toy is the best? They both look good!",
        answer: '3Which'
    },
    set7: {
        question: "3___you want to make a lot of money?",
        answer: '3Do'
    },
    set8: {
        question: "3___is the easiest way to get there?",
        answer: '3What'
    },
    set9: {
        question: "3___money do you have? I forgot my wallet!",
        answer: "3How much"
    },
    set10: {
        question: "3___did you move here? Last year.",
        answer: '3When'
    },

}
//class9
var cards9 = {
    set1: {
        question: "3___you want to travel abroad?",
        answer: '3Do'
    },
    set2: {
        question: "3___color is best? Blue or red?",
        answer: '3Which'
    },
    set3: {
        question: "3___can we meet? I miss you!",
        answer: '3When'
    },
    set4: {
        question: "3___is that in your hand? A coin?",
        answer: '3What'
    },
    set5: {
        question: "3___do you know about dogs?",
        answer: '3How much'
    },
    set6: {
        question: "3___do you think is the faster runner?",
        answer: '3Who'
    },
    set7: {
        question: "3___did you put it? I can't find it!",
        answer: '3Where'
    },
    set8: {
        question: "3___your friend coming today?",
        answer: '3Is'
    },
    set9: {
        question: "3___do you like it? I hate it!",
        answer: "3Why"
    },
    set10: {
        question: "3___do you sleep each night? A lot?",
        answer: '3How long'
    },

}
//class10
var cards10 = {
    set1: {
        question: "3If we finish studying, we___.",
        answer: '3will go outside and play'
    },
    set2: {
        question: "3If I work too hard, I___",
        answer: '3may quit the job.'
    },
    set3: {
        question: "3If you don't wear a coat, you___.",
        answer: '3may catch a cold'
    },
    set4: {
        question: "3If I can buy a ticket, I___.",
        answer: '3will go and see the show'
    },
    set5: {
        question: "3If you train hard, you___.",
        answer: '3can be a champion'
    },
    set6: {
        question: "3If I go to America, I___.",
        answer: '3will try to speak english'
    },
    set7: {
        question: "3If we go to the party, we___.",
        answer: '3may dance for a long time'
    },
    set8: {
        question: "3If you eat healthy food, you___.",
        answer: '3will feel much better'
    },
    set9: {
        question: "3If I wear my glasses, I___.",
        answer: "3will see much better"
    },
    set10: {
        question: "3If we go there, we___.",
        answer: '3can try the new menu'
    },

}
//class11
var cards11 = {
    set1: {
        question: "3If I see my friend again, I will___.",
        answer: '3hug her'
    },
    set2: {
        question: "3If we cannot do it, we will___.",
        answer: '3need help'
    },
    set3: {
        question: "3If we buy it today, we can___.",
        answer: '3take it home'
    },
    set4: {
        question: "3If I buy a cheaper one, I will___.",
        answer: '3save money'
    },
    set5: {
        question: "3If you sit too long, you may___.",
        answer: '3fall asleep'
    },
    set6: {
        question: "3If you use an alarm, you can___.",
        answer: '3get up early'
    },
    set7: {
        question: "3If we try that game, we may___.",
        answer: '3enjoy playing it'
    },
    set8: {
        question: "3If you punch him, you will___.",
        answer: '3be in trouble'
    },
    set9: {
        question: "3If I see that cake, I may sit and___.",
        answer: "3eat it"
    },
    set10: {
        question: "3If I save money, I can___.",
        answer: '3travel more'
    },

}

//class12
var cards12 = {
    set1: {
        question: '3I have to say sorry because I___.',
        answer: '3forgot her birthday'
    },
    set2: {
        question: '3We need to go back so we___.',
        answer: '3can find our bags'
    },
    set3: {
        question: '3You must eat more because you___.',
        answer: '3look so thin'
    },
    set4: {
        question: "3I don't have to go so I___.",
        answer: '3will relax at home'
    },
    set5: {
        question: "3You don't need to help me because you___.",
        answer: '3need a break'
    },
    set6: {
        question: "3We mustn't change our plans so we___.",
        answer: '3can arrange the trip'
    },
    set7: {
        question: '3I should try again because I___.',
        answer: '3really want to pass'
    },
    set8: {
        question: '3You should study more so you___.',
        answer: '3can improve your English'
    },
    set9: {
        question: "3We shouldn't fight because we___!",
        answer: '3love each other'
    },
    set10: {
        question: "3You shouldn't stay up late so you___.",
        answer: '3can get up tomorrow'
    },

}
//class13
var cards13 = {
    set1: {
        question: "3You have to practice so you___.",
        answer: '3can improve'
    },
    set2: {
        question: "3I need to see John because I___.",
        answer: '3love him'
    },
    set3: {
        question: "3We must go now so we___.",
        answer: "3aren't late"
    },
    set4: {
        question: "3You don't have to pay because___.",
        answer: "3it's my turn"
    },
    set5: {
        question: "3I don't need to move so I___.",
        answer: '3can stay here'
    },
    set6: {
        question: "3We mustn't cheat because we___.",
        answer: "3won't learn"
    },
    set7: {
        question: "3You should be tough so you___.",
        answer: "3don't cry"
    },
    set8: {
        question: "3I should try it because___.",
        answer: "3it's new"
    },
    set9: {
        question: "3We shouldn't lie to Jane so we___.",
        answer: "3don't hurt her"
    },
    set10: {
        question: "3I shouldn't sell it because I___.",
        answer: '3want to keep it'
    },

}

function Game({match}) {
    const [selected, Select] = useState([])
    var [time, updateTime] = useState(0)
    var [gameOver, updateStatus] = useState(false)
    var [myClass, setMyClass] = useState('')
    var timeAddedOnFail = 5
    const selectedSets = []
    const splitCards = []
    const question = []
    const answers = []
    var cards = [cards1, cards12]
    var textbook = 'textbook3'
    var colors = ['red', 'gold', 'green']
    var number = textbook.replace('textbook', '')

    useEffect(() => {
        setMyClass(myClass = match.params.class)
        console.log(match.params.class)
        selectSets()
        setInterval(()=>{ 
            UpdateTimeFunction()    
        }, 100);
        return () => {
            //cleanup
        }
    }, [])

    const UpdateTimeFunction = () => {
        if(gameOver === false){
        updateTime(time = Math.round((time += 0.1) * 10) / 10)
        }
    }

    const selectSets = () => {
        const randomNum = [1,2,3,4,5,6,7,8,9,10].sort( () => .5 - Math.random() )
        for(var i = 0; i < 6; i++){
            selectedSets.push(`set${randomNum[i]}`)
            console.log(randomNum[i])
        }
        console.log(selectedSets)
        console.log(myClass)
        if(myClass == 'class0'){
            generateCards(cards0)
        }
        if(myClass == 'class0b'){
            generateCards(cards0b)
        }
        if(myClass == 'class1'){
            generateCards(cards1)
        }
        if(myClass == 'class2'){
            generateCards(cards2)
        }
        if(myClass == 'class3'){
            generateCards(cards3)
        }
        if(myClass == 'class4'){
            generateCards(cards4)
        }
        if(myClass == 'class5'){
            generateCards(cards5)
        }
        if(myClass == 'class6'){
            generateCards(cards6)
        }
        if(myClass == 'class8'){
            generateCards(cards8)
        }
        if(myClass == 'class9'){
            generateCards(cards9)
        }
        if(myClass == 'class10'){
            generateCards(cards10)
        }
        if(myClass == 'class11'){
            generateCards(cards11)
        }
        if(myClass == 'class12'){
            generateCards(cards12)
        }
        if(myClass == 'class13'){
            generateCards(cards13)
        }

    }
//dynamic
    const generateCards = (myCards)=>{
        selectedSets.map((set) =>{
            console.log(myCards[set].question, myCards[set].answer)
            splitCards.push(myCards[set].question)
            splitCards.push(myCards[set].answer)
            question.push(myCards[set].question)
            answers.push(myCards[set].answer)

        })
        console.log(splitCards)
        renderCards()

    }
    var memory = []
    var elements = 12
    const CardClick = event => {
        console.log(event.target)
        memory.push({
            ans: event.target.dataset.ans,
            quest: event.target.dataset.quest,
            index: event.target.dataset.index
        })
        document.getElementById(event.target.id).style = 'box-shadow: 0px 0px 5px royalblue;'

        if(memory.length === 2){
            console.log(memory)
            if(memory[0].quest === memory[1].quest){
                if(memory[0].index === memory[1].index){
                    memory = []
                    for(var i = 0; i < document.getElementsByClassName('card').length; i++){
                        document.getElementById(document.getElementsByClassName('card')[i].id).style = 'box-shadow: 0px 0px 0px royalblue;'
                    }
                    updateStatus(time += timeAddedOnFail)
                    return
                }
                document.getElementById(memory[0].quest).remove()
                document.getElementById(memory[0].ans).remove()
                elements -= 2
                memory = []
            }
            else{
                memory = []
                for(var i = 0; i < document.getElementsByClassName('card').length; i++){
                    document.getElementById(document.getElementsByClassName('card')[i].id).style = 'box-shadow: 0px 0px 0px royalblue;'
                }
                updateStatus(time += timeAddedOnFail)
            }

            if(elements === 0){
                updateStatus(gameOver = true)
                document.getElementById('cardContainer').remove()
                ReactDOM.render(
                    <GameOverMenu/>,
                    document.getElementById('buttonContainer')
                )
            }
        }

    }


    const renderCards = () =>{
        const randomNum2 = [0,1,2,3,4,5,6,7,8,9,10,11].sort( () => .5 - Math.random() )
        var ans = ''
        var quest = ''
        for(var i = 0; i < splitCards.length; i++){
            let newCard = document.createElement('div')
            newCard.id = 'cardDiv'
            document.getElementById('cardContainer').appendChild(newCard)
            if(answers.includes(splitCards[randomNum2[i]])){
                ans = answers[answers.indexOf(splitCards[randomNum2[i]])]
                quest = question[answers.indexOf(splitCards[randomNum2[i]])]
                console.log(ans, quest)
            }

            if(question.includes(splitCards[randomNum2[i]])){
                quest = question[question.indexOf(splitCards[randomNum2[i]])]
                ans = answers[question.indexOf(splitCards[randomNum2[i]])]
                console.log(ans, quest)
            }
            ReactDOM.render(
                <>
                    <div className='card' data-ans={ans} data-quest={quest} data-index={i} id={splitCards[randomNum2[i]]} onClick={CardClick}>{splitCards[randomNum2[i]]}</div>
                </>,
                newCard
            )
        }
    }

    return (
        <div>
            <div style={{backgroundColor: colors[number - 1]}}>
                <h1 style={{color:'white'}} id='time'>{time}</h1>
            </div>
            <div id='cardContainer'></div>
            <div id='buttonContainer'></div>
        </div>
    )
}

export default Game
