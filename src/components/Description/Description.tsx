import * as React from 'react';
import * as classes from  './Description.scss';
const logo = require('../../assets/images/react.png');
interface DescriptionProps {
}

const Description: React.FunctionComponent<any> = (props) => {

    return (
        <div className={ classes.desc }>
            <img src={ logo } alt='logo'/>
            <div className={ classes.item }>1</div>
            <div className={ classes.item }>2</div>
            <div className={ classes.item }>3</div>
            <div className={ classes.item }>4</div>
            <div className={ classes.item }>1215</div>
            <div className={ classes.item }>1215</div>
        </div>
    );
};

export default Description;