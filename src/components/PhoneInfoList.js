import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render(){
        const { data } = this.props;
        
        
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info}/>)
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