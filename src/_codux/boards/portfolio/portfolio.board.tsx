import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    environmentProps: {
        windowWidth: 1520,
        windowHeight: 1053,
        canvasWidth: 1660,
    },
});
