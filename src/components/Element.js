import React from 'react'
import Text from './elements/Text';
import Radio from './elements/Radio';
import Checkbox from './elements/Checkbox';
import Select from './elements/Select';

const Element = (field) => {
    switch(field.type){
        case 'text': 
            return <Text {...field}/>;
        case 'radio':
            return <Radio {...field}/>;
        case 'checkbox':
            return <Checkbox {...field}/>;
        case 'select':
            return <Select {...field}/>;
        default: 
         return 0;
    }
}

export default Element