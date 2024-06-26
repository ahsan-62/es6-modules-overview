

import Watch from '../watch/Watch';
import './Sunglass.css'
import add from '../../utils/Calculate';

// import {add} from '../../utils/Calculate';


const Sunglass = () => {
    const first=10;
    const second=20;
    const sum=add(first,second);
    

    return (
        <div>
            <h1>Sunglass</h1>
            <h3>Sum: {sum}</h3>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;