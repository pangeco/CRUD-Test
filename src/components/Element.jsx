import React from 'react'
import Text from './elements/Text';
import Radio from './elements/Radio';
import Checkbox from './elements/Checkbox';
import Select from './elements/Select';

const Element = ({ field, register }) => {
    switch(field.type){
        case 'text': 
            return <Text field={field} register={register}/>;
        // case 'radio':
            // return <Radio field={field}/>;
        // case 'checkbox':
            // return <Checkbox field={field}/>;
        case 'select':
            return <Select field={field} register={register}/>;
        default: 
         return 0;
    }
}

export default Element;