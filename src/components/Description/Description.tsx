import * as React from 'react';
import * as classes from  './Description.scss';
const logo = require('../../assets/images/react.png');
interface DescriptionProps {
}

export const Description: React.FunctionComponent<DescriptionProps> = (props) => {

    return (
        <div className={ classes.desc }>
            <img src={ logo } alt='logo'/>
            <div className={ classes.item }>1</div>
            <div className={ classes.item }>2</div>
            <div className={ classes.item }>3</div>
            <div className={ classes.item }>4</div>
            <div className={ classes.item }>5</div>
        </div>
    );
};