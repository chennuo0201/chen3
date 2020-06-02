<template>
    <div>
       <div class="container-car">
           <Navhead />
           <div class="nav"></div>
           <div class="title">我的购物车 （12）</div>
           <div class="border"></div>
           <!-- 内容区域 -->
           <div class="content">
               <!-- 商品列表 start -->
               <div class="left">
                   <div class="category">
                       <div class="feeder" :class="{'select' : flag == 1}" @click="feederTab">矿机</div>
                       <div class="calculate-force" :class="{'select' : flag == 2}" @click="calculateTab">
                           云算力
                       </div>
                   </div>
                   <!-- 矿机 -->
                   <div class="product-list" v-if="flag == 1">
                       <div class="product-box"  v-for="(item,index) in millGoods" :key="index">
                            <div class="product">
                                <div class="product-left">
                                    <div class="select-box" @click="isSelected(index)">
                                        <img v-if="item.selected" src="../../assets/image/icon/selected.svg" alt="">
                                    </div>
                                    <div class="product-img"></div>
                                    <div class="product-info">
                                        <div class="product-title">{{ item.title }}</div>
                                        <div class="product-power">{{ item.type }}</div>
                                    </div>
                                </div> 
                                <div class="product-right">
                                    <div class="number">
                                        <input type="text" :placeholder="item.num" v-model="item.num" @input="input(index)">
                                        <span>份</span>
                                    </div>
                                    <div class="price">
                                        <span>￥</span>
                                        <span>{{ (item.price*item.num).toFixed(2) }}</span>
                                    </div>
                                    <div class="delete-icon">
                                        <img src="../../assets/image/icon/delete.svg" alt="">
                                    </div>
                                    <div class="txt">删除</div>
                                </div>
                            </div>
                            <div class="product-remark-box">
                                <div class="product-remark-title">备注信息:</div>
                                <div class="product-remark-content">
                                    <input type="text" placeholder="请输入备注信息">
                                </div>
                            </div>
                       </div>
                   </div>
                   <!-- 云算力 -->
                    <div class="product-list" v-if="flag == 2">
                       <div class="product-box" v-for="(item,index) in cloudGoods" :key="index">
                            <div class="product">
                                <div class="product-left">
                                    <div class="select-box" @click="isSelected(index)">
                                        <img v-if="item.selected" src="../../assets/image/icon/selected.svg" alt="">
                                    </div>
                                    <div class="product-img"></div>
                                    <div class="product-info">
                                        <div class="product-title">{{ item.title }}</div>
                                        <div class="product-power">{{ item.type }}</div>
                                    </div>
                                </div> 
                                <div class="product-right">
                                    <div class="number">
                                        <input type="text" :placeholder="item.num" v-model="item.num" @input="input">
                                        <span>份</span>
                                    </div>
                                    <div class="price">
                                        <span>￥</span>
                                        <span>{{ (item.price*item.num).toFixed(2) }}</span>
                                    </div>
                                    <div class="delete-icon">
                                        <img src="../../assets/image/icon/delete.svg" alt="">
                                    </div>
                                    <div class="txt">删除</div>
                                </div>
                            </div>
                            <div class="product-remark-box">
                                <div class="product-remark-title">备注信息:</div>
                                <div class="product-remark-content">
                                    <input type="text" placeholder="请输入备注信息">
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
               <!-- 商品列表 end -->

               <!-- 商品清单 start-->
               <div class="right">
                    <div class="shopping-car">
                        <div class="title">
                            购物车内容
                        </div>
                        <div class="subtotal">
                            项目小计:
                        </div>
                        <div class="commodity-box">
                            <div class="total-commodity">商品</div>
                            <div class="commodity-list">
                                <div class="commodity-info" v-for="(item,index) in selectedGoods" :key="index">
                                    <div class="commodity-title">{{ item.title }}</div>
                                    <div class="num">*{{ item.num }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-box">
                            <div>运费:</div>
                            <div>￥10.00</div>
                        </div>
                    </div>
                    <div class="total-price-box">
                        <div class="txt">总金额</div>
                        <div class="total-price">￥{{ totalprice }}</div>
                        <div class="settle-account">结算订单</div>
                    </div>
                </div>
               <!-- 商品清单 end-->
           </div>
           <bottom></bottom>
       </div>
    </div>
</template>

<script>
import bottom from '../bottom'
import Navhead from '../navHead'

export default {
    data() {
        return {
            flag: 1,
            selected: false,
            key: "",
            millGoods: [
                {
                    title: "蚂蚁矿机S9 SE 16T",
                    num: 1,
                    selected: true,
                    price: 17555.55,
                    type: "Avengers Batman xxxx xxxx xxxxx",
                    id: 1,
                },
                {
                    title: "蚂蚁矿机S9 SE 17T",
                    num: 1,
                    selected: true,
                    price: 13130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx",
                    id: 2
                },
                {
                    title: "蚂蚁矿机S9 SE 18T",
                    num: 1,
                    selected: false,
                    price: 20130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx",
                    id: 3
                }
            ],
            cloudGoods: [
                {
                    title: "VIRTUAL云矿大师1号",
                    num: 1,
                    selected: true,
                    price: 19130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx" 
                },
                {
                    title: "VIRTUAL云矿大师2号",
                    num: 1,
                    selected: true,
                    price: 13130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx" 
                },
                {
                    title: "VIRTUAL云矿大师3号",
                    num: 1,
                    selected: true,
                    price: 14130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx" 
                },
                {
                    title: "VIRTUAL云矿大师4号",
                    num: 1,
                    selected: true,
                    price: 30130.55,
                    type: "Avengers Batman xxxx xxxx xxxxx" 
                }
            ],
            selectedGoods: [],
            totalprice: 0
        }
    },
    mounted: function() {
        this.selecte()
    },
    methods: {
    // 商品选项卡切换
       feederTab() {
           this.flag = 1
       },
       calculateTab() {
           this.flag = 2
       },
    //  商品是否选中  
       isSelected(index) {
           if(this.flag == 1) {
               this.millGoods[index].selected = !this.millGoods[index].selected
               this.allSelected()
           } else {
               this.cloudGoods[index].selected = !this.cloudGoods[index].selected
               this.allSelected()
           }
       },
    //  将所有被选中的商品放入新数组
       allSelected() {
           let mill = []
           let cloud = []
            for(let i in this.millGoods) {
                if(this.millGoods[i].selected === true) {
                    mill.push(this.millGoods[i])
                } 
            }
            for(let i in this.cloudGoods) {
                if(this.cloudGoods[i].selected === true) {
                    cloud.push(this.cloudGoods[i])
                } 
            }
            this.selectedGoods = mill.concat(cloud)
            this.totalPrice()
       },
       selecte() {
           let temp = this.millGoods.concat(this.cloudGoods)
            for(let i in temp) {
                if(temp[i].selected === true) {
                    this.selectedGoods.push(temp[i])
                } 
            }
            this.totalPrice() 
       },
       totalPrice() {
           let selectedPrice = 0
           this.selectedGoods.forEach(item => {
               selectedPrice += item.num * item.price
           })
           this.totalprice = selectedPrice.toFixed(2)
       },
       input() {
          this.allSelected() 
       }
    },
    computed: {

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
    .container-car {
        width: 100%;
        min-width: 950px;
        // height: 935px;
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
        .content {
            width: 80%;
            display: flex;
            justify-content: space-between;
            margin: 10px 10% 50px 10%;
            .left {
                width: 75%;
                .category {
                    width: 42%;
                    height: 40px;
                    display: flex;
                    color: rgba(74,74,74,1);
                    text-align: center;
                    font-size: 16px;
                    font-weight: 400;
                    .feeder {
                        width: 50%;
                        height: 100%;
                        background: rgba(251,251,251,1);
                        line-height: 40px;
                    }
                    .calculate-force {
                        width: 50%;
                        height: 100%;
                        background: rgba(251,251,251,1);
                        line-height: 40px;
                    }
                    .select {
                        background: #487AF1;
                        color: #ffffff;
                    }
                }
                .product-list {
                    width: 100%;
                    // height: 400px;
                    overflow: hidden;
                    // overflow-y: scroll;
                    .product-box {
                        width: 100%;
                        height: 191px;
                        margin-bottom: 10px; 
                        .product {
                            width: 100%;
                            height: 140px;
                            display: flex;
                            justify-content: space-between;
                            background: rgba(239,246,254,1);
                            .product-left {
                                width: 53%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                .select-box {
                                    margin-left: 5%;
                                    width: 15px;
                                    height: 15px;
                                    border: 1px solid rgba(151,151,151,1);
                                    box-sizing: border-box;
                                    img {
                                        width: 100%;
                                        height: 100%;
                                        display: block;
                                    }
                                }
                                .product-img {
                                    width: 25%;
                                    height: 100px;
                                    background: rgba(251,251,251,1);
                                }
                                .product-info {
                                    width: 55%;
                                    .product-title {
                                        font-size: 20px;
                                        font-weight: 600;
                                        color: #487AF1;
                                        height: 28px;
                                        line-height: 28px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                    .product-power {
                                        font-size: 14px;
                                        font-weight: 400;
                                        color: #9b9b9b;
                                        line-height: 20px;
                                    }
                                }
                            }
                            .product-right {
                                width: 45%;
                                height: 100%;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding-right: 50px;
                                box-sizing: border-box;
                                .number {
                                    width: 38%;
                                    height: 20px;
                                    input {
                                        width: 65%;
                                        height: 100%;
                                        outline: none;
                                        border: none;
                                        padding: 0 5%;
                                        text-align: right;
                                        color: rgba(74,74,74,1);
                                    }
                                    span {
                                        width: 25%;
                                        height: 20px;
                                        font-size: 14px;
                                        margin-left: 5%;
                                        font-weight: 400;
                                        color: rgba(74,74,74,1);
                                        line-height: 20px;
                                    }
                                }
                                .price {
                                    height: 20px;
                                    font-size: 14px;
                                    margin-left: 5%;
                                    font-weight: 400;
                                    color: #487AF1;
                                    line-height: 20px;
                                    span {
                                        height: 20px;
                                    }
                                }
                                .delete-icon {
                                    width: 20px;
                                    height: 20px;
                                    margin-left: 5%;
                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                                .txt {
                                    width: 20%;
                                    height: 20px;
                                    color: rgba(74,74,74,1);                                    
                                    font-size: 14px;
                                    font-weight: 400;
                                }
                            }
                        }
                        .product-remark-box {
                            width: 100%;
                            height: 50px;
                            display: flex;
                            align-items: center;
                            background: #487AF1;
                            padding-left: 20px;
                            box-sizing: border-box;
                            // background: url('../../assets/image/bg/login_botton.svg') no-repeat;
                            .product-remark-title {
                                height: 20px;
                                font-size: 14px;
                                font-weight: 500;
                                color: #ffffff;
                                margin-right: 20px;
                            }
                            .product-remark-content {
                                width: 400px;
                                height: 31px;
                                background: #ffffff;
                                input {
                                    width: 100%;
                                    height: 100%;
                                    outline: none;
                                    border: none;
                                    padding: 0 20px;
                                    color: #9b9b9b;
                                }
                                input::-webkit-input-placeholder {
                                    color: #9b9b9b;
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                            }
                        }
                    }
                }
            }
            .right {
                width: 24%;
                // height: 340px;
                background: rgba(244,244,244,1);
                .shopping-car {
                    width: 100%;
                    background: #ffffff;
                    padding: 20px;
                    box-sizing: border-box;
                    .title {
                        height: 20px;
                        font-size: 16px;
                        color: #487AF1;
                        line-height: 20px;
                        margin: 0 0 20px 0;
                    }
                    .subtotal {
                        height: 20px;
                        font-size: 14px;
                        color: rgba(74,74,74,1);
                        margin-bottom: 20px;
                    }
                    .commodity-box {
                        width: 100%;
                        display: flex;
                        // align-items: center;
                        justify-content: space-between;
                        font-size: 14px;
                        color: rgba(74,74,74,1);
                        margin-bottom: 20px;
                        .total-commodity {
                            height: 20px;
                            line-height: 13px;                            
                            margin-right: 5px;
                            font-size: 12px;
                        }
                        .commodity-list {
                            width: 80%;
                            .commodity-info {
                                width: 100%;
                                height: 20px;
                                margin-bottom: 5px;
                                display: flex;
                                align-items: center;
                                font-size: 12px;
                                justify-content: space-between;
                                .commodity-title {
                                    width: 80%;
                                    line-height: 13px;
                                    height: 100%;
                                }
                                .num {
                                    width: 15%;
                                    height: 20px;
                                    line-height: 13px;
                                }
                            }
                        }
                    }
                    .carriage-box {
                        width: 100%;
                        height: 20px;
                        align-items: center;
                        font-size: 12px;
                        display: flex;
                        justify-content: space-between;
                        color: rgba(74,74,74,1);
                    }
                }
                .total-price-box {
                    width: 100%;
                    height: 110px;
                    background: #FBFBFB;
                    padding: 20px;
                    box-sizing: border-box;
                    font-size: 12px;
                    text-align: center;
                    color: rgba(74,74,74,1);
                    .txt {
                        height: 20px;
                        line-height: 20px;
                    }
                    .total-price {
                        height: 20px;
                        line-height: 20px;
                    }
                    .settle-account {
                        width: 80%;
                        margin: 0 auto;
                        height: 30px;
                        font-size: 14px;
                        background: #487AF1;
                        line-height: 30px;
                        color: #ffffff;
                    }
                }
            }
        }
    }

</style>