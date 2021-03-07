import React, { Component } from 'react'

export default class SetState extends Component {

    state = {sum:0}

    add = ()=>{
        //const {sum} = this.state;
        // // 异步render
        // this.setState({sum: sum + 1}, ()=>{
        //     // 更新了sum是+1之后的值
        //     console.log(this.state.sum);
        // });
        // // 更新完了sum还是没+1的值
        // console.log(this.state.sum);
        
        // 函数式setState
        this.setState((state, props)=>{
            console.log(state);
            console.log(props);
            return {sum:state.sum+1}
        })
        console.log(this.state.sum);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.sum}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
