import React,{Component} from 'react';
import {ItemAWrap,Ason} from '../homeStyle';
import {connect} from 'react-redux';

class ItemA extends Component{
    render() {
        return (
            <div>
                <ItemAWrap>
                    {
                        this.props.listA.map((item,index)=>{
                            return(
                                <Ason key={index}>
                                    <img src={item.src} alt=""/>
                                    <span>{item.txt}</span>
                                </Ason>
                            )
                        })
                    }
                </ItemAWrap>
            </div>
        );
    }
}
const mapState = (state)=>({
    listA:state.home.listA
});
export default connect(mapState,null)(ItemA);