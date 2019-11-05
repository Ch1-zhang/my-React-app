import React,{Component} from 'react';
import {ItemDWrap, Dson} from "../homeStyle";
import {connect} from 'react-redux';

class ItemD extends Component{
    render() {
        return (
            <div>
                <ItemDWrap>
                    <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=''/>
                    <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=''/>
                    {
                        this.props.listD.map((item,index)=>{
                            return(
                                <Dson key={index}>
                                    <li>{item.title}</li>
                                </Dson>
                            )
                        })
                    }
                </ItemDWrap>
            </div>
        );
    }
}
const mapState = (state)=>({
    listD:state.home.listD
});
export default connect(mapState,null)(ItemD);