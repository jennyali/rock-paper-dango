const cpuChoice = () => {

    let cpuOption;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    switch (getRandomInt(3)) {
        case 0:

            cpuOption = 'Rock';
            break;
        case 1:

            cpuOption = 'Paper';
            break;
        case 2:

            cpuOption = 'Dango';
            break;
        default:
            console.log ("choice went wrong oop!");
    }

    return cpuOption;
}

export default cpuChoice;