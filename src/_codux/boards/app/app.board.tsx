import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 2062,
        canvasWidth: 1310,
        windowHeight: 1116,
        canvasHeight: 1021,
    },
});
