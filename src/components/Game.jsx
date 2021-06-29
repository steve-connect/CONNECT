import React, { useState, useEffect, memo} from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

import GameOverMenu from './GameOverMenu'
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
        answer: 'milk'
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
        question: "‘R’ stands for___in this book.",
        answer: 'Reason'
    },
    set7: {
        question: "The 1st section is called___.",
        answer: 'Ready!'
    },
    set8: {
        question: "‘M’ stands for___in this book.",
        answer: 'Measure'
    },
    set9: {
        question: "This game is in___.",
        answer: "Class 0"
    },
    set10: {
        question: "This game is called___.",
        answer: 'CONNECT!'
    },

}
//class1
var cards1 = {
    set1: {
        question: 'I___pizza because it tastes good.',
        answer: 'like'
    },
    set2: {
        question: 'I___spiders because they are scary!',
        answer: 'hate'
    },
    set3: {
        question: "I'm___snakes because they bite.",
        answer: 'scared of'
    },
    set4: {
        question: "I'm___English because I study hard.",
        answer: 'good at'
    },
    set5: {
        question: "I'm___running because I don't train",
        answer: 'not good'
    },
    set6: {
        question: "I'm___fashion because it is cool.",
        answer: 'interested in'
    },
    set7: {
        question: 'I___my mother because she is amazing!',
        answer: 'love'
    },
    set8: {
        question: "I'm___sports because they are hard.",
        answer: 'not interested in'
    },
    set9: {
        question: "I___rain because I get wet.",
        answer: "don't like"
    },
    set10: {
        question: "I'm___falling because I am brave.",
        answer: 'not afraid of'
    },

}
//class2
var cards2 = {
    set1: {
        question: "I___reading because it is fun.",
        answer: 'like'
    },
    set2: {
        question: "I’m___TV because it is boring.",
        answer: 'not interested in'
    },
    set3: {
        question: "She’s___it because she practices.",
        answer: 'good at'
    },
    set4: {
        question: "He’s___it because he is brave.",
        answer: 'not scared of'
    },
    set5: {
        question: "I___him because he is incredible!",
        answer: 'love'
    },
    set6: {
        question: "I___curry because it’s too spicy!",
        answer: 'hate'
    },
    set7: {
        question: "He’s___me because I punch him.",
        answer: 'scared of'
    },
    set8: {
        question: "I’m___it because I don’t practice.",
        answer: 'not good at'
    },
    set9: {
        question: "I___like math because it’s hard.",
        answer: "don't"
    },
    set10: {
        question: "She’s___it because it looks cool.",
        answer: 'interested in'
    },

}

//class3
var cards3 = {
    set1: {
        question: 'Your house is___so we can get ther sooner.',
        answer: 'closer'
    },
    set2: {
        question: "It's the most___. I want to spend less money.",
        answer: 'expensive'
    },
    set3: {
        question: "That road is the___. Let's go a quicker way.",
        answer: 'longest'
    },
    set4: {
        question: "Going by train is___. A bike is too slow.",
        answer: 'faster'
    },
    set5: {
        question: "The food is yummy! It's easily the most___.",
        answer: 'delicious'
    },
    set6: {
        question: "The car is___. There is more space.",
        answer: 'bigger'
    },
    set7: {
        question: 'I cannot win. This game is the most___.',
        answer: 'difficult'
    },
    set8: {
        question: "This is the most___flower I have ever seen.",
        answer: 'beautiful'
    },
    set9: {
        question: "Slow down. I am tired. I'm___than you!",
        answer: "older"
    },
    set10: {
        question: "That time is much more___for me. Thanks!",
        answer: 'convenient'
    },

}
//class4
var cards4 = {
    set1: {
        question: "It's the___from here. It's far away.",
        answer: 'furthest'
    },
    set2: {
        question: "It's___than this. It's not pretty!",
        answer: 'uglier'
    },
    set3: {
        question: "Walking is the___way. Let's drive!",
        answer: 'slowest'
    },
    set4: {
        question: "My salad is___than that. It burns!",
        answer: 'spicier'
    },
    set5: {
        question: "It's the___location for everyone.",
        answer: 'least convenient'
    },
    set6: {
        question: "That ticket is___. Save your money!",
        answer: 'cheaper'
    },
    set7: {
        question: "I'm so busy. Let's watch a___show.",
        answer: 'shorter'
    },
    set8: {
        question: "I'm___than him. He's really old!",
        answer: 'younger'
    },
    set9: {
        question: "This phone is the___. Don't lose it!",
        answer: "smallest"
    },
    set10: {
        question: "This game is___. That one's hard.",
        answer: 'easier'
    },

}
//class5
var cards5 = {
    set1: {
        question: "I___to get a great job after university.",
        answer: 'hope'
    },
    set2: {
        question: "We___eating junk food. It's terrible.",
        answer: 'dislike'
    },
    set3: {
        question: "I___about changing my job when my boss shouts.",
        answer: 'think'
    },
    set4: {
        question: "We really___playing games together. It's fun.",
        answer: 'enjoy'
    },
    set5: {
        question: "I___to eat that cake. It looks delicious.",
        answer: 'want'
    },
    set6: {
        question: "We can't___meeting him.It would be unreal!",
        answer: 'imagine'
    },
    set7: {
        question: "I___to buy new shoes. These ones are broken.",
        answer: 'need'
    },
    set8: {
        question: "We often___eating quickly. After 1 minute!",
        answer: 'finish'
    },
    set9: {
        question: "After thinking about it, I___ to talk to her.",
        answer: "decided"
    },
    set10: {
        question: "When I___ to cry, please turn the movie off.",
        answer: 'start'
    },

}
//class6
var cards6 = {
    set1: {
        question: "I___to study harder or I'll fail.",
        answer: 'need'
    },
    set2: {
        question: "Let's___playing this. It's boring.",
        answer: 'finish'
    },
    set3: {
        question: "We've___to get married!",
        answer: 'decided'
    },
    set4: {
        question: "I___to play it now. I can't wait!",
        answer: 'want'
    },
    set5: {
        question: "My kids often___living on the moon.",
        answer: 'imagine'
    },
    set6: {
        question: "I really___talking with you. Thanks.",
        answer: 'enjoy'
    },
    set7: {
        question: "When I___about eating pie I smile.",
        answer: 'think'
    },
    set8: {
        question: "We___to see you again some day.",
        answer: 'hope'
    },
    set9: {
        question: "I___loud music. It hurts my ears.",
        answer: "dislike"
    },
    set10: {
        question: "Let's___doing it now and finish early.",
        answer: 'start'
    },

}
//class8
var cards8 = {
    set1: {
        question: "___is the best soccer player in our club?",
        answer: 'Who'
    },
    set2: {
        question: "___is she always getting so angry?",
        answer: 'Why'
    },
    set3: {
        question: "___is the best place for us to meet?",
        answer: 'Where'
    },
    set4: {
        question: "___your brother older or younger than you?",
        answer: 'Is'
    },
    set5: {
        question: "___is the movie? I only like short ones.",
        answer: 'How long'
    },
    set6: {
        question: "___toy is the best? They both look good!",
        answer: 'Which'
    },
    set7: {
        question: "___you want to make a lot of money?",
        answer: 'Do'
    },
    set8: {
        question: "___is the easiest way to get there?",
        answer: 'What'
    },
    set9: {
        question: "___money do you have? I forgot my wallet!",
        answer: "How much"
    },
    set10: {
        question: "___did you move here? Last year.",
        answer: 'When'
    },

}
//class9
var cards9 = {
    set1: {
        question: "___you want to travel abroad?",
        answer: 'Do'
    },
    set2: {
        question: "___color is best? Blue or red?",
        answer: 'Which'
    },
    set3: {
        question: "___can we meet? I miss you!",
        answer: 'When'
    },
    set4: {
        question: "___is that in your hand? A coin?",
        answer: 'What'
    },
    set5: {
        question: "___do you know about dogs?",
        answer: 'How much'
    },
    set6: {
        question: "___do you think is the faster runner?",
        answer: 'Who'
    },
    set7: {
        question: "___did you put it? I can't find it!",
        answer: 'Where'
    },
    set8: {
        question: "___your friend coming today?",
        answer: 'Is'
    },
    set9: {
        question: "___do you like it? I hate it!",
        answer: "Why"
    },
    set10: {
        question: "___do you sleep each night? A lot?",
        answer: 'How long'
    },

}
//class10
var cards10 = {
    set1: {
        question: "If we finish studying, we___.",
        answer: 'will go outside and play'
    },
    set2: {
        question: "If I work too hard, I___",
        answer: 'may quit the job.'
    },
    set3: {
        question: "If you don't wear a coat, you___.",
        answer: 'may catch a cold'
    },
    set4: {
        question: "If I can buy a ticket, I___.",
        answer: 'will go and see the show'
    },
    set5: {
        question: "If you train hard, you___.",
        answer: 'can be a champion'
    },
    set6: {
        question: "If I go to America, I___.",
        answer: 'will try to speak english'
    },
    set7: {
        question: "If we go to the party, we___.",
        answer: 'may dance for a long time'
    },
    set8: {
        question: "If you eat healthy food, you___.",
        answer: 'will feel much better'
    },
    set9: {
        question: "If I wear my glasses, I___.",
        answer: "will see much better"
    },
    set10: {
        question: "If we go there, we___.",
        answer: 'can try the new menu'
    },

}
//class11
var cards11 = {
    set1: {
        question: "If I see my friend again, I will___.",
        answer: 'hug her'
    },
    set2: {
        question: "If we cannot do it, we will___.",
        answer: 'need help'
    },
    set3: {
        question: "If we buy it today, we can___.",
        answer: 'take it home'
    },
    set4: {
        question: "If I buy a cheaper one, I will___.",
        answer: 'save money'
    },
    set5: {
        question: "If you sit too long, you may___.",
        answer: 'fall asleep'
    },
    set6: {
        question: "If you use an alarm, you can___.",
        answer: 'get up early'
    },
    set7: {
        question: "If we try that game, we may___.",
        answer: 'enjoy playing it'
    },
    set8: {
        question: "If you punch him, you will___.",
        answer: 'be in trouble'
    },
    set9: {
        question: "If I see that cake, I may sit and___.",
        answer: "eat it"
    },
    set10: {
        question: "If I save money, I can___.",
        answer: 'travel more'
    },

}

//class12
var cards12 = {
    set1: {
        question: 'I have to say sorry because I___.',
        answer: 'forgot her birthday'
    },
    set2: {
        question: 'We need to go back so we___.',
        answer: 'can find our bags'
    },
    set3: {
        question: 'You must eat more because you___.',
        answer: 'look so thin'
    },
    set4: {
        question: "I don't have to go so I___.",
        answer: 'will relax at home'
    },
    set5: {
        question: "You don't need to help me because you___.",
        answer: 'need a break'
    },
    set6: {
        question: "We mustn't change our plans so we___.",
        answer: 'can arrange the trip'
    },
    set7: {
        question: 'I should try again because I___.',
        answer: 'really want to pass'
    },
    set8: {
        question: 'You should study more so you___.',
        answer: 'can improve your English'
    },
    set9: {
        question: "We shouldn't fight because we___!",
        answer: 'love each other'
    },
    set10: {
        question: "You shouldn't stay up late so you___.",
        answer: 'can get up tomorrow'
    },

}
//class13
var cards13 = {
    set1: {
        question: "You have to practice so you___.",
        answer: 'can improve'
    },
    set2: {
        question: "I need to see John because I___.",
        answer: 'love him'
    },
    set3: {
        question: "We must go now so we___.",
        answer: "aren't late"
    },
    set4: {
        question: "You don't have to pay because___.",
        answer: "it's my turn"
    },
    set5: {
        question: "I don't need to move so I___.",
        answer: 'can stay here'
    },
    set6: {
        question: "We mustn't cheat because we___.",
        answer: "won't learn"
    },
    set7: {
        question: "You should be tough so you___.",
        answer: "don't cry"
    },
    set8: {
        question: "I should try it because___.",
        answer: "it's new"
    },
    set9: {
        question: "We shouldn't lie to Jane so we___.",
        answer: "don't hurt her"
    },
    set10: {
        question: "I shouldn't sell it because I___.",
        answer: 'want to keep it'
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
            <div className='red-div'>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <h1 style={{color:'white'}}>TIME: </h1>
                    <h1 style={{color:'white'}}>{time}</h1>
                </div>
            </div>
            <div id='cardContainer'></div>
            <div id='buttonContainer'></div>
        </div>
    )
}

export default Game
