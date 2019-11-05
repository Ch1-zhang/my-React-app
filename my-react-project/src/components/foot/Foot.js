import React,{Component} from 'react';
import {FootWrap,ItemA,ItemB,ItemC} from "./footstyle";
import logo from '../../static/logo.jpg';

class Foot extends Component{
    state={
        list:[
            {txtA:'关于我们',txtB:'支付方式',txtC:'相关服务'},
            {txtA:'关于我们',txtB:'支付方式',txtC:'相关服务'},
            {txtA:'关于我们',txtB:'支付方式',txtC:'相关服务'},
            {txtA:'关于我们',txtB:'支付方式',txtC:'相关服务'},
            {txtA:'关于我们',txtB:'支付方式',txtC:'相关服务'},
        ]
    };
    render() {
        return (
            <div>
                <FootWrap>
                    <ItemA>
                        <img src={logo} alt=""/>
                        <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
                    </ItemA>

                    <ItemB>
                        <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=''/>
                        <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=''/>
                    </ItemB>

                    <ItemC>
                        <dl>
                            {
                                this.state.list.map((item,index)=>{
                                    return(
                                        <dt key={index}>
                                            <dd>{item.txtA}</dd>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                        <dl>
                            {
                                this.state.list.map((item,index)=>{
                                    return(
                                        <dt key={index}>
                                            <dd>{item.txtB}</dd>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                        <dl>
                            {
                                this.state.list.map((item,index)=>{
                                    return(
                                        <dt key={index}>
                                            <dd>{item.txtC}</dd>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                    </ItemC>
                </FootWrap>
            </div>
        );
    }
}

export default Foot;