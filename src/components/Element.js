import React from 'react'
import Text from './elements/Text';
import Radio from './elements/Radio';
import Checkbox from './elements/Checkbox';
import Select from './elements/Select';

const Element = ({ field, index }) => {
    switch(field.type){
        case 'text': 
            return <Text index={index} field={field}/>;
        case 'radio':
            return <Radio index={index} field={field}/>;
        case 'checkbox':
            return <Checkbox index={index} field={field}/>;
        case 'select':
            return <Select index={index} field={field}/>;
        default: 
         return 0;
    }
}

export default Element