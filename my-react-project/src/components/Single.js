import React,{Component} from 'react';
import {Tit} from './singleStyle';
import axios from 'axios';
class Single extends Component{
    state = {
        message:'',
        id:this.props.match.params.id,
    };
    render() {
        return (
            <div>
                <Tit>
                    <img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/>
                    <h2>{this.state.message.title}</h2>
                    <p>{this.state.message.body}</p>
                </Tit>
            </div>
        );
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts/'+this.state.id)
            .then((res)=>{
                this.setState({
                    message:res.data
                })
            }).catch(()=>{
            console.log('失败')
        })
    }
}

export default Single;