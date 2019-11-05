import React from 'react';
import {HeadWrap,Logo,Nav,NavItem,SearchWrap,Search,SearchInfo} from "./headStyle";
import {connect} from 'react-redux';

function showInfo(flag){
    if(flag){
        return(
            <SearchInfo>
                <span>精品锅具</span>
                <span>厨房用品</span>
                <span>酒杯茶杯</span>
            </SearchInfo>
        )
    }else {
        return null;
    }
}

function Head(props) {
    const {flag,inputFocus,inputBlur} = props;//优化
    return (
        <div>
            <HeadWrap>
                <Logo/>
                <Nav>
                    <NavItem href={'/home'}>首页</NavItem>
                    <NavItem href={'/list'}>详情页</NavItem>
                </Nav>
                {showInfo(props.flag)}
                <SearchWrap>
                    <Search className={flag?'flag':''}
                            onFocus={inputFocus}
                            onBlur={inputBlur}/>
                    <span className='glyphicon glyphicon-search'></span>
                </SearchWrap>
            </HeadWrap>
        </div>
    );
}
/*const mapState = (state)=>{ //检测state是否传过来
    console.log(state);
    return {
        flag:state.head.flag
    }
};*/
const mapState = (state)=>({
    flag:state.head.flag
});
const mapDispatch = (dispatch)=>({
    inputFocus(){
        const action = {
            type:'input_focus',
        };
        dispatch(action);
        // dispatch(headActionCreates.handleFocus());
    },
    inputBlur(){
        const action = {
            type:'input_blur',
        };
        dispatch(action);
        // dispatch(headActionCreates.handleBlur());
    }
});
export default connect(mapState,mapDispatch)(Head);