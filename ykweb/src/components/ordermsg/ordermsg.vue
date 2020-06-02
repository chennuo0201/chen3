<template>
    <div>
       <div class="container">
           <Navhead />
           <div class="nav"></div>
           <div class="title">矿机购买订单信息</div>
           <div class="border"></div>
           <div class="hint">您的订单已成功下单。确认您的订单信息，并为您的订单付款。</div>
           <!-- 订单内容区域 -->
           <div class="content">
               <div class="order-msg">
                   <div class="order-number">订单编号</div>
                   <div class="mill"></div>
                   <div class="amount">数量</div>
                   <div class="price">单价</div>
                   <div class="carriage">运费</div>
                   <div class="remark">备注</div>
               </div>
               <div class="order-list">
                   <div class="order-info">
                      <div class="order-number">367844</div>
                      <div class="line"></div>
                      <div class="mill">
                            <div class="mill-img">
                                <img src="" alt="矿机">
                            </div>
                            <div class="mill-info">
                                <div class="mill-title">VIRTUAL MINE 矿机6593</div>
                                <div class="mill-model">Avengers Batman</div>
                            </div>
                      </div>
                      <div class="line"></div>
                      <div class="amount">10</div>
                      <div class="line"></div>
                      <div class="price">￥1300.00</div>
                      <div class="line"></div>
                      <div class="carriage">￥10</div>
                      <div class="line"></div>
                      <div class="remark">备注信息</div> 
                   </div>
               </div>
               <div class="order-list">
                   <div class="order-info">
                      <div class="order-number">367844</div>
                      <div class="line"></div>
                      <div class="mill">
                            <div class="mill-img">
                                <img src="" alt="矿机">
                            </div>
                            <div class="mill-info">
                                <div class="mill-title">VIRTUAL MINE 矿机6593</div>
                                <div class="mill-model">Avengers Batman</div>
                            </div>
                      </div>
                      <div class="line"></div>
                      <div class="amount">10</div>
                      <div class="line"></div>
                      <div class="price">￥1300.00</div>
                      <div class="line"></div>
                      <div class="carriage">￥10</div>
                      <div class="line"></div>
                      <div class="remark">备注信息</div> 
                   </div>
               </div>
               <div class="total-price">
                   <span>合计: </span>
                   <span>￥23430.5</span>
               </div>
           </div>
            <div class="hint">
                您的默认收货地址如下
            </div>
            <div class="address-box">
                <div class="title-box">
                    <div class="name">姓名</div>
                    <div class="phone">联系电话</div>
                    <div class="address">收货地址</div>
                    <div class="modification">修改</div>
                </div>
                <div class="address-msg-box">
                    <div class="name"><span>王富贵</span></div>
                    <div class="phone"><span>+86 150 1320 5456</span></div>
                    <div class="address"><span>北京市昌平区回龙观街道龙泽苑西区5号楼1单元1309a</span></div>
                </div>
            </div>
            <div class="hint">支付方式</div>
            <div class="account-msg">
                <div>银行转账</div>
                <div>线下支付唯一指定收款账户如下</div>
                <div>账户名称： xxxxx科技有限公司 </div>
                <div>银行账户： 000000000000000000000</div>
                <div>银行名称： xx银行xx支行 </div>
                <div>请在提交订单且选择银行转账支付方式后24小时内完成支付，付款后，请上传付款凭证。如若关闭本页面可登录个人中心，选择“我的订单”，点击订单后的“上传付款证明”，填写付款人姓名和付款金额等信息。并联系指定商务代表完成购买。</div>
            </div>
            <div class="total">
                您需要支付 <span>￥ 13997.76</span>
            </div>
            <div class="up-evidence">
                上传凭证
            </div>
            <bottom></bottom>
       </div>
    </div>
</template>

<script>
import bottom from '../bottom'
import Navhead from '@/components/navHead.vue'
export default {
    data() {
        return {
            flag: 1 
        }
    },
    methods: {

    },
    components: {
        bottom,
        Navhead
    }
}
</script>

<style lang="scss" scoped>
   *{
       margin: 0;
       padding: 0;
    }
    .container {
        width: 100%;
        background: rgba(244,244,244,1);
        font-family: PingFangSC-Semibold,PingFangSC;
        .nav {
            width: 100%;
            height: 60px;
        }
        .title {
            // width: 177px;
            height: 30px;
            font-size: 22px;
            font-weight: 600;
            color: rgba(68,89,224,1);
            line-height: 30px;
            margin: 52px 0 0 10%;
        }
        .border {
            width: 100%;
            height: 2px;
            background: #487AF1;
            margin-top: 9px;
        }
        .hint {
            height: 20px;
            margin: 20px 0 0 10%;
            font-size: 14px;
            font-weight: 400;
            color: rgba(74,74,74,1);
            line-height: 20px;
        }
        .content {
            width: 80%;
            margin: 10px auto;
            background: #ffffff;
            .order-msg {
                width: 100%;
                height: 50px;
                font-weight:500;
                color:rgba(74,74,74,1);
                font-size: 14px;
                display: flex;
                align-items: center;
                background: #FBFBFB;
                .order-number {
                    width: 10%;
                    height: 100%;
                    text-align: center;
                    line-height: 50px;
                }
                .mill {
                    width: 37%;
                    height: 100%;
                }
                .amount {
                    width: 10%;
                    height: 100%;
                    text-align: center;
                    line-height: 50px;
                }
                .price {
                    width: 12%;
                    height: 100%;
                    text-align: center;
                    line-height: 50px;
                }
                .carriage {
                    width: 12%;   
                    height: 100%;
                    text-align: center;
                    line-height: 50px;
                }
                .remark {
                    width: 29%;
                    height: 100%;
                    line-height: 50px;
                    text-align: center;
                }
            }
            .order-list {
                width: 100%;                
                .order-info {
                    width: 100%;
                    height: 140px;
                    display: flex;
                    align-items: center;
                    color: #4A4A4A;
                    font-size: 14px;
                    border: 2px solid #F1F1F1;
                    .line {
                        width: 2px;
                        height: 60px;
                        background: #F1F1F1;
                    }
                    .order-number {
                        width: 10%;
                        height: 100%;
                        text-align: center;
                        line-height: 140px;
                    }
                    .mill {
                        width: 37%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .mill-img {
                            width: 100px;
                            height: 100px;
                            background: #FBFBFB;
                            margin-right: 30px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .mill-info {
                            width: 200px;
                            height: 100px;
                            .mill-title {
                                height: 22px;
                                font-size: 16px;
                                font-weight: 500;
                                color: #487AF1;
                                line-height: 22px;
                            }
                            .mill-model {
                                height: 20px;
                                font-size: 14px;
                                font-weight: 400;
                                line-height: 20px;
                                color: #9b9b9b;
                                margin-top: 10px;
                            }
                        }
                    }
                    .amount {
                        width: 10%;
                        height: 100%;
                        text-align: center;
                        line-height: 140px;
                    }
                    .price {
                        width: 12%;
                        height: 100%;
                        text-align: center;
                        line-height: 140px;
                    }
                    .carriage {
                        width: 12%;   
                        height: 100%;
                        text-align: center;
                        line-height: 140px;
                    }
                    .remark {
                        width: 29%;
                        height: 100%;
                        line-height: 140px;
                        text-align: center;
                    }
                }
            }
            .total-price {
                width: 100%;
                height: 52px;
                background: url('../../assets/image/bg/login_botton.svg');
                line-height: 52px;
                text-align: right;
                padding-right: 27px;
                box-sizing: border-box;
                font-size: 20px;
                color: #ffffff;
            }
        }
        .address-box {
            width: 80%;
            height: 130px;
            background: #ffffff;
            font-weight:500;
            color:rgba(74,74,74,1);
            font-size: 14px;
            margin: 10px 10%;
            .title-box {
                width: 100%;
                height: 50px;
                display: flex;
                padding: 0 2%;
                box-sizing: border-box;
                background: #fbfbfb;
                .name,.phone {
                    width: 20%;
                    height: 100%;
                    line-height: 50px;
                }
                .address {
                    width: 44%;
                    height: 100%;
                    line-height: 50px;
                }
                .modification {
                    width: 10%;
                    height: 100%;
                    line-height: 50px;
                }
            }
            .address-msg-box {
                width: 100%;
                height: 80px;
                display: flex;
                padding: 0 1%;
                align-items: center;
                box-sizing: border-box;
                background: #ffffff;
                .name {
                    width: 20%;
                    height: 40px;
                    line-height: 40px;
                    span {
                        display: block;
                        width: 80px;
                        height: 40px;
                        padding-left: 5px;
                        box-sizing: border-box;
                        background: #f7f7f7;
                    }
                }
                .phone {
                    width: 20%;
                    height: 40px;
                    line-height: 40px;
                    span {
                        display: block;
                        width: 160px;
                        height: 40px;
                        padding-left: 5px;
                        box-sizing: border-box;
                        background: #f7f7f7;
                    }
                }
                .address {
                    width: 35%;
                    height: 40px;
                    line-height: 40px;
                    span {
                        display: block;
                        width: 370px;
                        height: 40px;
                        padding-left: 5px;
                        box-sizing: border-box;
                        background: #f7f7f7;
                    }
                }
            }
        }
        .account-msg {
            width: 80%;
            margin: 10px 10% 0;
            font-size:12px;
            font-weight:400;
            color:rgba(74,74,74,1);
            line-height:17px;
        }
        .total {
            width: 80%;
            margin: 10px 10% 0;
            font-size: 12px;
            color: rgba(74,74,74,1);
            span {
                font-size: 14px;
                color: #487AF1;
            }
        }
        .up-evidence {
            width: 140px;
            margin: 10px 10% 0;
            height: 40px;
            text-align: center;
            line-height: 40px;
            color: #ffffff;
            margin-bottom: 40px;
            font-size: 16px;
            background: url('../../assets/image/bg/login_botton.svg') no-repeat;
        }
    }

</style>