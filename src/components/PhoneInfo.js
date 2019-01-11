import React, { Component } from 'react';

export default class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            name: '이름',
            phone: '010-0000-0000',
            id:0
        }
    }

    state = {
        // 수정시 editing --> true
        // editing == true, text --> input
        editing: false,
        // input 값 필드 정의
        name: '',
        phone:'',
    }
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    // editing 반전
    // true -> false, false -> true
    handleToggleEdit = () => {
        const { editing } =  this.state;
        this.setState({ editing: !editing});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔때 처리 로직
        // 수정 버튼 -> input 값으로
        // 수정 적용 -? input 값 부모에게 전송
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            // editing 값 false -> true 전환
            // info 값 -- state
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing ){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링안함
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
                return false;
            }
            // 나머지는 리랜더링
            return true;
    }
    render() {
        console.log("render PhoneInfo " + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            editing
        } = this.state;

        if (editing) { // 수정모드
            return (
              <div style={style}>
                <div>
                  <input
                    value={this.state.name}
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <input
                    value={this.state.phone}
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                  />
                </div>
                <button onClick={this.handleToggleEdit}>적용</button>
                <button onClick={this.handleRemove}>삭제</button>
              </div>
            );
          }
      
      
          // 일반모드
          const {
            name, phone
          } = this.props.info;
          
          return (
            <div style={style}>
              <div><b>{name}</b></div>
              <div>{phone}</div>
              <button onClick={this.handleToggleEdit}>수정</button>
              <button onClick={this.handleRemove}>삭제</button>
            </div>
          );
    }
}