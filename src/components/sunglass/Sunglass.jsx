

import Watch from '../watch/Watch';
import './sunglass.css';
import add from '../../utils/Calculate';

// import {add} from '../../utils/Calculate';


const Sunglass = () => {
    const first=10;
    const second=20;
    const sum=add(first,second);
    

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;