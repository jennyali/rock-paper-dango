import rockimg from './images/rock.png';
import rockwin from './images/rockwin.png';
import paperimg from './images/paper.png';
import paperwin from './images/paperwin.png';
import dangoimg from './images/dango.png';
import dangowin from './images/dangowin.png';
import titleimg from './images/Title.png';
import bgImg from './images/rpdbackground.png';
import paperDraw from './images/PaperDraw.png';
import rockDraw from './images/RockDraw.png';
import mochi from './images/DangoDraw.png';

const Data = {
    title: titleimg,
    background: bgImg,
    rock: {
        id: 'rock1',
        name: 'Rock',
        image: rockimg,
        winImage: rockwin,
        winText: "Rock Smashes Dango!",
        drawText: "Rock on!",
        lostImage: paperwin,
        lostText: "Paper Covers Rock!",
        drawImage: rockDraw
    },
    paper: {
        id: 'paper2',
        name: 'Paper',
        image: paperimg,
        winImage: paperwin,
        winText: "Paper Covers Rock!",
        drawText: "Origami assemble!",
        lostText: "Dango Stickys Paper!",
        lostImage: dangowin,
        drawImage: paperDraw
    },
    dango: {
        id: 'dango3',
        name: 'Dango',
        image: dangoimg,
        winImage: dangowin,
        winText: "Dango Stickys Paper!",
        drawText: "Mochi's together strong!",
        lostText: "Rock Smashes Dango!",
        lostImage: rockwin,
        drawImage: mochi

    }
}

export default Data;