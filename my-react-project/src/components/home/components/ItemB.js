import React,{Component} from 'react';
import {ItemBWrap, Bson} from "../homeStyle";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class ItemB extends Component{
    render() {
        return (
            <div>
                <ItemBWrap>
                    {
                        this.props.listB.map((item,index)=>{
                            // console.log(typeof index);//number
                            return(
                                <Bson key={index}>
                                    <img src={item.src} alt=""/>
                                    <div>
                                        <Link to={`/single/${item.id}`}>{item.txt}</Link>
                                        {/*<a href={'/single'+'/'+(index+1)}>{item.txt}</a>*/}
                                        <p>{item.tips}</p>
                                    </div>
                                </Bson>
                            )
                        })
                    }
                </ItemBWrap>
            </div>
        );
    }
}
const mapState = (state)=>({
    listB:state.home.listB
});
export default connect(mapState,null)(ItemB);