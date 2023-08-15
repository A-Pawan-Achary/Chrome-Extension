fetch('http://icanhazdadjoke.com/slack')
.then(res => res.json())
.then(jokeData =>{
    const jokeText=jokeData.attachments[0].text;
    const jokeElement=document.getElementById('jokeElement')

    jokeElement.innerHTML=jokeText;
})
