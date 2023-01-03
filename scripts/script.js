
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function fadeOut( elem, ms )
{
    if( ! elem )
        return;

    if( ms )
    {
        var opacity = 1;
        var timer = setInterval( function() {
            opacity -= 50 / ms;
            if( opacity <= 0 )
            {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50 );
    }
    else
    {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}

const introAnimation   = async () => {
    let sentence = document.getElementsByClassName('show-sentence')[0]

    const sentences = ["This is rock paper scissors", "Do you want play the game?"]

    for(let i=0; i < sentences.length; i++) {
        for(let j = 0; j < sentences[i].length; j++) {
            await sleep(150)
            sentence.innerHTML += sentences[i][j].toString()


        }
        if (i !== sentences.length - 1) {
            //function that makes the sentence dissapear
            await sleep(450)
            sentence.innerHTML = ""
        }
    }

}
introAnimation()