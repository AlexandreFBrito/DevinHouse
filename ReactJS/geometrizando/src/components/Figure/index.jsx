import CapsLock from '../CapsLock';
import Rectangle from '../Rectangle';
import Square from '../Square';
import Triangle from '../Triangle';
import Circle from '../Circle';

const Figure = ({ type, titulo, bg}) =>{

    return(
        <>
            <CapsLock>{titulo}</CapsLock>
           {type === 'triangle' && (<Triangle background={bg}/>)}
           {type === 'square' && (<Square background={bg}/>)}
           {type === 'circle' && (<Circle background={bg}/>)}
           {type === 'rectangle' && (<Rectangle background={bg}/>)}
        </>
    );

}

export default Figure