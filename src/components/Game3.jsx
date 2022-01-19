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
        question: 'How about ___? It’s cheap and quite fun!',
        answer: 'traveling by train'
    },
    set2: {
        question: 'Why don’t we ___? It’s got lots of fun places.',
        answer: 'go to that city'
    },
    set3: {
        question: "Do you think ___? It’s fun and good exercise.",
        answer: 'dancing would be good'
    },
    set4: {
        question: "I suggest ___ because we get tired quickly.",
        answer: 'taking a lot of breaks'
    },
    set5: {
        question: "Maybe ___ because we can see beautful art.",
        answer: 'we could go to a museum'
    },
    set6: {
        question: "It could be ___ because the boss is nice.",
        answer: 'fun to work there'
    },
    set7: {
        question: 'We could possibly ___ because they live alone.',
        answer: 'help some older people'
    },
    set8: {
        question: "Let’s ___ because we can share books easily.",
        answer: 'start a reading club'
    },
    set9: {
        question: "We’ve got to ___ because we are getting fat!",
        answer: "order healthy food"
    },
    set10: {
        question: "It’s the best choice ___ because it’s fun.",
        answer: 'for students to try'
    },

}
//class2
var cards2 = {
    set1: {
        question: "___ study some English today.",
        answer: 'Maybe we should'
    },
    set2: {
        question: "___ got to try something fun together.",
        answer: 'I think we have'
    },
    set3: {
        question: "___ we try to start the party early.",
        answer: 'I suggest that'
    },
    set4: {
        question: "___ for helping people play games.",
        answer: 'It’s possibly good'
    },
    set5: {
        question: "___ helpful for some students.",
        answer: 'That could be'
    },
    set6: {
        question: "___ some and see which is best?",
        answer: 'Why don’t we eat'
    },
    set7: {
        question: "___ to a hotel with a nice beach!",
        answer: 'Let’s go'
    },
    set8: {
        question: "___ outdoors would be fun for us?",
        answer: 'Do you think'
    },
    set9: {
        question: "___ buying a nice present for him?",
        answer: "How about"
    },
    set10: {
        question: "___ is dressing up in funny clothes!",
        answer: 'The best choice'
    },

}

//class3
var cards3 = {
    set1: {
        question: '___ you think that will be a cheaper idea?',
        answer: ' Why do'
    },
    set2: {
        question: "___ break it and can’t fix it by themselves?",
        answer: ' What if they'
    },
    set3: {
        question: "___ sure that everyone takes part in it?",
        answer: ' How will we make'
    },
    set4: {
        question: "___ best one after we try a few first?",
        answer: 'Could we choose the'
    },
    set5: {
        question: "___ to check that the location is okay?",
        answer: 'Should we go there'
    },
    set6: {
        question: "___ customer understand how to use it?",
        answer: 'How can a'
    },
    set7: {
        question: '___ asking some more people to help us?',
        answer: 'Would we save time by'
    },
    set8: {
        question: "___ it ourselves save us some time?",
        answer: 'Will cooking'
    },
    set9: {
        question: "___ it could rain and people won’t come?",
        answer: "Is it possible that"
    },
    set10: {
        question: "___ of presents should we all bring?",
        answer: 'What kind'
    },

}
//class4
var cards4 = {
    set1: {
        question: "___ idea for us to do it on a weekend?",
        answer: 'Why is it a better'
    },
    set2: {
        question: "___ better at communicating in English?",
        answer: 'Would we get'
    },
    set3: {
        question: "___ learn how to use it on their own?",
        answer: 'How can people'
    },
    set4: {
        question: "___ we be able to arrive at on time?",
        answer: 'What place would'
    },
    set5: {
        question: "___ help each other practice it?",
        answer: 'Could we try to'
    },
    set6: {
        question: "___ lot of time to get it ready?",
        answer: 'Will it take a'
    },
    set7: {
        question: "___ can’t be done by the deadline?",
        answer: 'What if it'
    },
    set8: {
        question: "___ it first and see if it tastes good?",
        answer: 'Should we eat'
    },
    set9: {
        question: "___ us to get some extra ideas?",
        answer: "Is it possible for"
    },
    set10: {
        question: "___ when it’s finished and safe?",
        answer: 'How will we know'
    },

}
//class5
var cards5 = {
    set1: {
        question: "Working different hours ___ make more money!",
        answer: ' won’t mean that you'
    },
    set2: {
        question: "Using translators ___ the museum tour more.",
        answer: ' will help people understand'
    },
    set3: {
        question: "Meeting in the city ___ who live far away.",
        answer: ' will be hard for those'
    },
    set4: {
        question: "Adding nice art ___ and pay to look around.",
        answer: ' will mean that more enter'
    },
    set5: {
        question: "Adding more computers ___ more effectively.",
        answer: ' won’t help students study'
    },
    set6: {
        question: "Walking every day ___ keeps you in shape.",
        answer: ' is important because it'
    },
    set7: {
        question: "Learning Spanish ___ of us already study it.",
        answer: ' will be easy because some'
    },
    set8: {
        question: "This town ___ as it already has a good one.",
        answer: ' doesn’t need a new station'
    },
    set9: {
        question: "Ordering a cake ___ will bring other snacks.",
        answer: " isn’t important because we"
    },
    set10: {
        question: "The customers ___ as they usually drive here.",
        answer: ' need lots of parking spaces'
    },

}
//class6
var cards6 = {
    set1: {
        question: "Hotels are ___ they are usually safe.",
        answer: 'important because'
    },
    set2: {
        question: "Gates ___ because kids like to climb.",
        answer: 'will help parents'
    },
    set3: {
        question: "Dieting won’t ___ become healthier.",
        answer: 'always help you'
    },
    set4: {
        question: "We don’t ___ something so expensive.",
        answer: 'need to build'
    },
    set5: {
        question: "Buying new tools ___ for productivity.",
        answer: 'isn’t important'
    },
    set6: {
        question: "More friends ___ be a better party.",
        answer: 'won’t mean it will'
    },
    set7: {
        question: "A restaurant ___ us to split the check!",
        answer: 'will be easy for'
    },
    set8: {
        question: "Direct flights ___ we have more time.",
        answer: 'will mean that'
    },
    set9: {
        question: "Morning classes ___ sleepy students!",
        answer: "will be hard for"
    },
    set10: {
        question: "We really do ___ nice to go and relax.",
        answer: 'need somewhere'
    },

}
//class8
var cards8 = {
    set1: {
        question: "I agree because it would probably be ___.",
        answer: 'difficult for us to learn that skill'
    },
    set2: {
        question: "That’s right because we may want to ___.",
        answer: 'have more time to relax alone'
    },
    set3: {
        question: "I disagree because we don’t know if ___.",
        answer: 'we will need to pay extra costs'
    },
    set4: {
        question: "I totally disagree because it won’t ___.",
        answer: 'help some people improve much'
    },
    set5: {
        question: "That’s right and we also need to be ___.",
        answer: 'sure that everyone can enjoy it'
    },
    set6: {
        question: "That’s right so let’s make sure not to ___.",
        answer: 'spend too much time doing that'
    },
    set7: {
        question: "Maybe, but it will be very hard to get ___.",
        answer: 'it all together and ready on time'
    },
    set8: {
        question: "Some people think it’s boring, but it ___.",
        answer: 'can be fun if you try it together'
    },
    set9: {
        question: "I agree that it’s expensive, but we ___.",
        answer: "can skip steps and save money"
    },
    set10: {
        question: "It’s true that it is dangerous, but we’ll ___.",
        answer: 'be fine if we obey all the rules'
    },

}
//class9
var cards9 = {
    set1: {
        question: "___ can be too hard for some students.",
        answer: 'I agree because it'
    },
    set2: {
        question: "___ there’s little time, but let’s try!",
        answer: 'I agree that'
    },
    set3: {
        question: "___ won’t improve her own English.",
        answer: 'I disagree that she'
    },
    set4: {
        question: "___ that idea as it isn’t needed now.",
        answer: 'I disagree with'
    },
    set5: {
        question: "___ think of some cheaper ideas.",
        answer: 'That’s right so let’s'
    },
    set6: {
        question: "___ it’s scary, but they’re wrong!",
        answer: 'Some people think'
    },
    set7: {
        question: "___ another problem is the drinks.",
        answer: 'That’s right and'
    },
    set8: {
        question: "___ hard, but we really need it!",
        answer: 'It’s true that it’s'
    },
    set9: {
        question: "___ probably easier to buy one.",
        answer: "Maybe, but it’s"
    },
    set10: {
        question: "___ said we needed a new one.",
        answer: 'That’s right as he'
    },

}
//class10
var cards10 = {
    set1: {
        question: "New doors ___ we can’t even open these ones!",
        answer: 'are needed more because'
    },
    set2: {
        question: "Walks would be ___ running hurts my knees.",
        answer: 'better for exercising because'
    },
    set3: {
        question: "Studying hard ___ we need to pass our tests!",
        answer: 'is more important because'
    },
    set4: {
        question: "Renting a car ___ won’t have to carry things.",
        answer: 'would be easier because we'
    },
    set5: {
        question: "Those desks would ___ can be folded easily.",
        answer: 'save more space because they'
    },
    set6: {
        question: "English ___. It’s very useful when you travel!",
        answer: 'may be more important'
    },
    set7: {
        question: "Computers ___ they can save all our notes.",
        answer: 'would help more with study as'
    },
    set8: {
        question: "Vegetables ___ guests won’t be eating meat.",
        answer: 'may be needed more as the'
    },
    set9: {
        question: "Better ingredients ___. These ones taste bad!",
        answer: "would improve the taste more"
    },
    set10: {
        question: "Outdoor jobs ___ the weather can be terrible!",
        answer: 'would be harder because'
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
