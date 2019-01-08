import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        list : [],
        onRemove : () => console.warn('onRemove not defined')
    }

    render(){
        const { data, onRemove } = this.props;
        
        
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} />)
        );
        /**
         * const list = data.map(
         *  (info, index) => (<PhoneInfo key={index} info={info}/>)
         * );
         */


        return (
            <div>
                {list}
            </div>
        )
    }
}