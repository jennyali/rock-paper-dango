
const outcome = (choiceData, user, cpu, setWinningImage, setWinningText, setEndOfRound, setTheResult) => {

    const outcomeString = `${user} ${cpu}`

    const lostRound = {
        image: choiceData.lostImage,
        result: "YOU LOST!!",
        text: choiceData.lostText
    }

    const wonRound = {
        image: choiceData.winImage,
        result: "YOU WON!!",
        text: choiceData.winText
    }

    const drawRound = {
        image: choiceData.drawImage,
        result: "IT'S A DRAW!!",
        text: choiceData.drawText
    }

    const resultData = ( theResult ) => {
        setWinningImage(theResult.image);
        setTheResult(theResult.result);
        setWinningText(theResult.text);
        setEndOfRound(true);
    }

    // User 1st // CPU 2nd //

    switch (outcomeString) {
        case "Rock Rock":

        resultData(drawRound);
            break;
        case "Rock Paper":

        resultData(lostRound);
            break;
        case "Rock Dango":

        resultData(wonRound);
            break;
        case "Paper Paper":

        resultData(drawRound);
            break;
        case "Paper Rock":

        resultData(wonRound);
            break;
        case "Paper Dango":

        resultData(lostRound);
            break;

        case "Dango Dango":

        resultData(drawRound);
            break;
        case "Dango Rock":

        resultData(lostRound);
            break;    
        case "Dango Paper":

        resultData(wonRound);
            break;                                    
        default:
            console.log ("forgot an outcome lol");
    }
}

export default outcome;