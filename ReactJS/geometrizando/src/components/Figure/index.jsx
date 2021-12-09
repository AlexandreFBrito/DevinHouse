import CapsLock from '../CapsLock';
import Rectangle from '../Rectangle';
import Square from '../Square';
import Triangle from '../Triangle';
import Circle from '../Circle';
import propTypes from 'prop-types';

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

Figure.propTypes={
    type: propTypes.string.isRequired,
    bg: propTypes.string.isRequired
}

export default Figure