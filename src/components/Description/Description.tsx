import * as React from 'react';
import * as classes from  './Description.css';

interface DescriptionProps {
}

export const Description: React.FunctionComponent<DescriptionProps> = (props) => {
    return (
        <div className={ classes.desc }>
            <div className='item'>1</div>
            <div className='item'>2</div>
            <div className='item'>3</div>
            <div className='item'>4</div>
            <div className='item'>5</div>
        </div>
    );
};