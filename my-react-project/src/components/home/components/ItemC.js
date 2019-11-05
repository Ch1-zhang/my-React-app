import React,{Component} from 'react';
import { ItemCWrap,Cson } from "../homeStyle";
import {connect} from 'react-redux';

class ItemC extends Component{
    render() {
        return (
            <div>
                <ItemCWrap>
                    {
                        this.props.listC.map((item,index)=>{
                            return(
                                <Cson key={index}>
                                    <img src={item.src} alt=""/>
                                    <p>{item.txt}</p>
                                </Cson>
                            )
                        })
                    }
                </ItemCWrap>
            </div>
        );
    }
}
const mapState = (state)=>({
    listC:state.home.listC
});
export default connect(mapState,null)(ItemC);