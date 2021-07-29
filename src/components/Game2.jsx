import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

import GameOverMenu from './GameOverMenu'
import { useParams } from 'react-router-dom'
//class0
var cards0 = {
    set1: {
        question: "A___is a good pet. SC2",
        answer: 'dogSC2'
    },
    set2: {
        question: "I saw a bird___today. SC2",
        answer: 'flySC2'
    },
    set3: {
        question: "I want to drink___. SC2",
        answer: 'waterSC2'
    },
    set4: {
        question: "Let's take a___. SC2",
        answer: 'breakSC2'
    },
    set5: {
        question: "I live in a___. SC2",
        answer: 'houseSC2'
    },
    set6: {
        question: "I always___to work. SC2",
        answer: 'walkSC2'
    },
    set7: {
        question: "I like to eat___. SC2",
        answer: 'sandwichesSC2'
    },
    set8: {
        question: "We saw a___at the zoo. SC2",
        answer: 'lionSC2'
    },
    set9: {
        question: "He likes to study at___. SC2",
        answer: "schoolSC2"
    },
    set10: {
        question: "She can fly a___. SC2",
        answer: 'planeSC2'
    },

}
//class0b
var cards0b = {
    set1: {
        question: "‘A’ stands for___in this book. SC2",
        answer: 'Action SC2'
    },
    set2: {
        question: "The 2nd section is called___. SC2",
        answer: 'SMART CHECK! SC2'
    },
    set3: {
        question: "‘T’ stands for___in this book. SC2",
        answer: 'Time SC2'
    },
    set4: {
        question: "The 3rd section is called___. SC2",
        answer: 'Challenge!SC2'
    },
    set5: {
        question: "‘S’ stands for___in this book. SC2",
        answer: 'SkillSC2'
    },
    set6: {
        question: "‘R’ stands for___in this book.SC2",
        answer: 'ResultSC2'
    },
    set7: {
        question: "The 1st section is called___.SC2",
        answer: 'Ready!SC2'
    },
    set8: {
        question: "‘M’ stands for___in this book. SC2",
        answer: 'MeasureSC2'
    },
    set9: {
        question: "This game is in___. SC2",
        answer: "Class 0SC2"
    },
    set10: {
        question: "This game is called___. SC2",
        answer: 'CONNECT!SC2'
    },

}
//class1
var cards1 = {
    set1: {
        question: 'I think judo is tough because___.',
        answer: 'you can get injured easily'
    },
    set2: {
        question: 'I definitely think___.',
        answer: 'students need more English'
    },
    set3: {
        question: "I don’t think money helps as___.",
        answer: 'it can’t buy you love'
    },
    set4: {
        question: "I really don’t think___!",
        answer: 'we should go. It’s too far'
    },
    set5: {
        question: "She might be___.",
        answer: 'a really smart person'
    },
    set6: {
        question: "It could be scary because___!",
        answer: 'it goes too high and fast'
    },
    set7: {
        question: 'I’m not sure if it’s cheap because___.',
        answer: 'it looks expensive'
    },
    set8: {
        question: "I don’t know if___.",
        answer: 'it tastes good. It looks old'
    },
    set9: {
        question: "It may not be funny, but___!",
        answer: "let’s watch it and find out"
    },
    set10: {
        question: "It probably isn’t difficult for___.",
        answer: 'us to pass that easy test'
    },

}
//class2
var cards2 = {
    set1: {
        question: "I___New York is great. It’s so fun!",
        answer: 'think'
    },
    set2: {
        question: "Cooking___fun so let’s try it!",
        answer: 'could be'
    },
    set3: {
        question: "Driving___be safe in the rain.",
        answer: 'may not'
    },
    set4: {
        question: "We___if it will rain. Let’s stay inside.",
        answer: 'don’t know'
    },
    set5: {
        question: "I___think chess is fun. It’s boring!",
        answer: 'don’t'
    },
    set6: {
        question: "I___not think cats are nice pets.",
        answer: 'really do'
    },
    set7: {
        question: "We___think it is hard and hate it!",
        answer: 'definitely'
    },
    set8: {
        question: "Yoga___be painful for me. I’m old!",
        answer: 'might'
    },
    set9: {
        question: "I___sure which shirt is the best.",
        answer: 'am not'
    },
    set10: {
        question: "It will___rain. Look at the clouds.",
        answer: 'probably'
    },

}

//class3
var cards3 = {
    set1: {
        question: 'I like to travel___meet new people.',
        answer: 'because I can'
    },
    set2: {
        question: "A book is great___less exciting than TV.",
        answer: 'but it’s'
    },
    set3: {
        question: "I want to eat cake___delicious than pie.",
        answer: 'because it’s more'
    },
    set4: {
        question: "I like to use stairs___overweight.",
        answer: 'because I’m'
    },
    set5: {
        question: "I need a car___convenient way to travel.",
        answer: 'because it’s the most'
    },
    set6: {
        question: "I prefer summer___to play outside.",
        answer: 'because it’s nice'
    },
    set7: {
        question: 'I love dogs___always play with me.',
        answer: 'because they’ll'
    },
    set8: {
        question: "Fast food is really cheap___is unhealthy.",
        answer: 'although it'
    },
    set9: {
        question: "I need a bike___quicker than a car.",
        answer: "because it’s sometimes"
    },
    set10: {
        question: "A phone is good___help me study faster.",
        answer: 'because it might'
    },

}
//class4
var cards4 = {
    set1: {
        question: "English helps me___useful for travel.",
        answer: 'because it’s'
    },
    set2: {
        question: "Let’s go there___play baseball together.",
        answer: 'because we can'
    },
    set3: {
        question: "A cat is better___intelligent than a dog.",
        answer: 'because it’s more'
    },
    set4: {
        question: "Sleep feels nice___study to pass tests!",
        answer: 'but you need to'
    },
    set5: {
        question: "I don’t think parties are fun___very shy.",
        answer: 'because I’m'
    },
    set6: {
        question: "Travel is educational___expensive.",
        answer: 'although it’s'
    },
    set7: {
        question: "Computers are stupid___freeze.",
        answer: 'as they sometimes'
    },
    set8: {
        question: "Seat belts are important___crash.",
        answer: 'because you might'
    },
    set9: {
        question: "I prefer a taxi___quickest way.",
        answer: "because it’s the"
    },
    set10: {
        question: "I need a job___graduate soon.",
        answer: 'because I’ll'
    },

}
//class5
var cards5 = {
    set1: {
        question: "___make our scores better so let's use it!",
        answer: 'It’s clear that it will'
    },
    set2: {
        question: "Dress well today.___look smart at work!",
        answer: 'You need to'
    },
    set3: {
        question: "___to be nice so I should help people more.",
        answer: 'It’s very important'
    },
    set4: {
        question: "___sit and relax so we love watching TV.",
        answer: 'We especially like to'
    },
    set5: {
        question: "Can we take a break?___eyes for a while.",
        answer: 'We must rest our'
    },
    set6: {
        question: "___money so fast food is a good choice.",
        answer: 'Students want to save'
    },
    set7: {
        question: "___friends are loud. It’s best to study alone.",
        answer: 'The truth is that'
    },
    set8: {
        question: "Let’s go again tomorrow!___amazing there!",
        answer: 'It’s absolutely'
    },
    set9: {
        question: "___helps me speak more so I like that class.",
        answer: "It specifically"
    },
    set10: {
        question: "___on time for the meeting so let’s go by car.",
        answer: 'We should be'
    },

}
//class6
var cards6 = {
    set1: {
        question: "Tablets are better as___for us to use.",
        answer: 'they’re very easy'
    },
    set2: {
        question: "Dogs are great and___help old people.",
        answer: 'they especially'
    },
    set3: {
        question: "I hate class___prefer to sleep in late.",
        answer: 'because the truth is I'
    },
    set4: {
        question: "Students should cook___eat junk food.",
        answer: 'as they shouldn’t'
    },
    set5: {
        question: "Let’s take a taxi because___be late.",
        answer: 'we don’t want to'
    },
    set6: {
        question: "Suits are good___help at interviews.",
        answer: 'and they specifically'
    },
    set7: {
        question: "Use cash___carry a credit card around!",
        answer: 'as you mustn’t'
    },
    set8: {
        question: "Eat more fruit___it’s good for you.",
        answer: 'as it’s clear that'
    },
    set9: {
        question: "Let’s go to that park because___great!",
        answer: "it’s absolutely"
    },
    set10: {
        question: "Homework is stupid as___more work.",
        answer: 'students don’t need'
    },

}
//class8
var cards8 = {
    set1: {
        question: "So you think that we have to___?",
        answer: 'live in the countryside'
    },
    set2: {
        question: "So in your opinion, we need___?",
        answer: 'homework everyday'
    },
    set3: {
        question: "Can I ask what you hate___?",
        answer: 'about traveling abroad'
    },
    set4: {
        question: "What do you like about that___?",
        answer: 'kind of restaurant'
    },
    set5: {
        question: "Why do you think we___?",
        answer: 'shouldn’t watch TV'
    },
    set6: {
        question: "What kind of practice is___?",
        answer: 'best for improving'
    },
    set7: {
        question: "Is that because your goal is___?",
        answer: 'getting a good job'
    },
    set8: {
        question: "If you could buy one, what___?",
        answer: 'car would you get'
    },
    set9: {
        question: "What would you like to___?",
        answer: 'do instead of traveling'
    },
    set10: {
        question: "What should we do to spend___?",
        answer: 'less money on food'
    },

}
//class9
var cards9 = {
    set1: {
        question: "So you think that___?",
        answer: 'friends are important'
    },
    set2: {
        question: "So in your opinion, we___?",
        answer: 'should work less'
    },
    set3: {
        question: "Can I ask what it___?",
        answer: 'is you like about it'
    },
    set4: {
        question: "What do you___?",
        answer: 'think we should do'
    },
    set5: {
        question: "Why do you___?",
        answer: 'think it’s right'
    },
    set6: {
        question: "What kind of___?",
        answer: 'help do they need'
    },
    set7: {
        question: "Is that because___?",
        answer: 'you think it’s fast'
    },
    set8: {
        question: "If___, when would you go?",
        answer: 'you could visit'
    },
    set9: {
        question: "What would___?",
        answer: "you like to eat more of"
    },
    set10: {
        question: "What should___?",
        answer: 'bosses help with'
    },

}
//class10
var cards10 = {
    set1: {
        question: "I agree because___their tests.",
        answer: 'students should try to pass'
    },
    set2: {
        question: "I think so too because___places.",
        answer: 'travel can help us see new'
    },
    set3: {
        question: "I totally agree because___our notes.",
        answer: 'computers help us organize'
    },
    set4: {
        question: "You’re right because___about space.",
        answer: 'small homes make us think'
    },
    set5: {
        question: "I’m not sure because___their money.",
        answer: 'some people want to save'
    },
    set6: {
        question: "I don’t know because___you are.",
        answer: 'it depends on how rich'
    },
    set7: {
        question: "Maybe not because___time to learn.",
        answer: 'it might take us a lot of'
    },
    set8: {
        question: "I disagree because___to be safe.",
        answer: 'parents want their children'
    },
    set9: {
        question: "I don’t think so because___health.",
        answer: "sports are good for our"
    },
    set10: {
        question: "I can’t agree because___happier.",
        answer: 'my online friends make me'
    },

}
//class11
var cards11 = {
    set1: {
        question: "I agree because___be more fun.",
        answer: 'trains can often'
    },
    set2: {
        question: "I think so too because___quieter.",
        answer: 'libraries are much'
    },
    set3: {
        question: "I totally agree because___time.",
        answer: 'tests take less'
    },
    set4: {
        question: "You’re right because___dirty.",
        answer: 'cities are too'
    },
    set5: {
        question: "I’m not sure because___for you.",
        answer: 'snacks are bad'
    },
    set6: {
        question: "I don’t know because___drop.",
        answer: 'phones are easy to'
    },
    set7: {
        question: "Maybe not because___get torn.",
        answer: 'any coat can'
    },
    set8: {
        question: "I disagree because___earn money.",
        answer: 'students want to'
    },
    set9: {
        question: "I don’t think so because___friends.",
        answer: "I can’t meet"
    },
    set10: {
        question: "I can’t agree because___safe.",
        answer: 'I won’t feel'
    },

}

//class12
var cards12 = {
    set1: {
        question: 'Yeah, but___learn about new things.',
        answer: 'visiting new places helps us'
    },
    set2: {
        question: 'That’s not true because___buy.',
        answer: 'junk food is really easy to'
    },
    set3: {
        question: 'You don’t know if___dangerous or not.',
        answer: 'new places we visit are'
    },
    set4: {
        question: "That doesn’t mean that___money.",
        answer: 'we should always spend our'
    },
    set5: {
        question: "That doesn’t matter because___exam.",
        answer: 'they still need to pass the'
    },
    set6: {
        question: "That’s not important because___problem.",
        answer: 'phones can easily solve that'
    },
    set7: {
        question: 'That won’t work because___costs.',
        answer: 'we will still pay high living'
    },
    set8: {
        question: 'That won’t help because___copying.',
        answer: 'students will just cheat by'
    },
    set9: {
        question: "That won’t make___it can help them.",
        answer: 'people think more about how'
    },
    set10: {
        question: "That won’t change___children.",
        answer: 'the way parents talk to their'
    },

}
//class13
var cards13 = {
    set1: {
        question: "Yeah, but___healthcare in cities.",
        answer: 'people get good'
    },
    set2: {
        question: "That’s not true because___brain.",
        answer: 'study help’s our'
    },
    set3: {
        question: "You don’t know if we___help later.",
        answer: "will need his"
    },
    set4: {
        question: "That doesn’t mean that___richer.",
        answer: "you’ll become"
    },
    set5: {
        question: "That doesn’t matter because we___.",
        answer: 'have it already'
    },
    set6: {
        question: "That’s not important because___it.",
        answer: 'we won’t miss'
    },
    set7: {
        question: "That won’t work because___far.",
        answer: "it’s too"
    },
    set8: {
        question: "That won’t help because___won’t go.",
        answer: "they still"
    },
    set9: {
        question: "That won’t make___things we do.",
        answer: "us change the"
    },
    set10: {
        question: "That won’t change___is done.",
        answer: 'the way it'
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
    var textbook = 'textbook2'
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
