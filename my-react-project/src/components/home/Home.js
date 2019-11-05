import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homeStyle';
import ItemA from "./components/ItemA";
import ItemB from "./components/ItemB";
import ItemC from "./components/ItemC";
import ItemD from "./components/ItemD";
import {connect} from 'react-redux';
import axios from 'axios';
import {Carousel} from "antd";

class Home extends Component{
    render() {
        return (
            <div>
                <HomeWrap>
                    <HomeLeft>
                        <Carousel autoplay>
                        <div>
                            <img src="//asset.ibanquan.com/s/30611/727/index_global3_pic_2?v=1568268246_1572510848" alt=""/>
                        </div>
                        <div>
                            <img src="//asset.ibanquan.com/s/30611/727/index_global3_pic_3?v=1568268246_1572510848" alt=""/>
                        </div>
                        <div>
                            <img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/>
                        </div>
                        <div>
                            <img src="//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/>
                        </div>
                    </Carousel>
                        <ItemA/>
                        <ItemB/>
                    </HomeLeft>
                    <HomeRight>
                        <ItemC/>
                        <ItemD/>
                    </HomeRight>
                </HomeWrap>
            </div>
        );
    }
    componentDidMount(){
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res.data);
                const data = res.data.data;
                const action = {
                    type:'init_home_data',
                    data
                };
                this.props.changeHomeData(action);
            })
    }
}
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
});

export default connect(null,mapDispatch)(Home);