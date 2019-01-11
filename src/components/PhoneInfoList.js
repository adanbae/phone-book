import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data : [],
        onRemove : () => console.warn('onRemove not defined'),
        onUpdate : () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render(){

        console.log('render PhoneInfoList')
        const { data, onRemove, onUpdate } = this.props;
        
        
        const list = data.map(
            info => (
                <PhoneInfo 
                    key={info.id}
                    info={info} 
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
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
        );
    }
}