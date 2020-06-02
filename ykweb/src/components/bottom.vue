<template>
    <div class="bottom">
        <div class="zhanwei"></div>
        <div class="content">
            <div class="content-txt">
                <div class="about-us">
                    <div class="title">关于我们</div>
                    <div>关于云矿</div>
                    <div>加入云矿</div>
                    <div>团队介绍</div>
                </div>
                <div class="user-know">
                    <div class="title">用户须知</div>
                    <div>用户协议</div>
                    <div>法律须知</div>
                </div>
                <div class="contact-us">
                    <div class="title">联系我们</div>
                    <div>A7-503, Putian Industrial Park, No. 700 Yishan Road, Xuhui District, Shanghai call：400+ 611 555</div>
                </div>
            </div>
            <div class="download">
                <div class="ios">
                    <div class="ios-dimensioncode">
                        <img src="../assets/image/download/ios.png" alt="ios下载">
                    </div>
                    <div class="txt">IOS</div>
                </div>
                <div class="android">
                    <div class="android-dimensioncode">
                        <img src="../assets/image/download/Android.png" alt="android下载">
                    </div>
                    <div class="txt">Android</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottom',
    props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
    .bottom {
        width: 100%;
        min-width: 850px;
        height: 300px;
        margin-top: 20px;
        background: url('../assets/image/bg/bottom_logo.svg') center no-repeat;
        background-size: 100%;
        display: flex;
        .zhanwei{
            width: 26%;
            height: 100%;
        }
        .content {
            width: 74%;
            height: 100%;
            display: flex;
            align-items: center;        
            justify-content: space-between;
            // flex-direction: row-reverse;
            .content-txt {
                width: 60%;
                height: 116px;
                display: flex;
                justify-content: space-between;
                color: #ffffff;
                font-size: 12px;
                font-family:PingFangSC-Regular,PingFangSC;
                .about-us {
                    width: 33%;
                    .title {
                        font-size: 16px;
                        height: 22px;
                        margin-bottom: 15px;
                        font-weight:400;
                        line-height: 22px;
                        cursor: pointer;
                    }
                    div {
                        height: 20px;
                        font-size: 12px;
                        line-height: 20px;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }
                }
                .user-know {
                    width: 33.3%;
                    .title {
                        font-size: 16px;
                        height: 22px;
                        margin-bottom: 15px;
                        font-weight:400;
                        line-height: 22px;
                        cursor: pointer;
                    }
                    div {
                        height: 20px;
                        font-size: 12px;
                        line-height: 20px;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }
                }
                .contact-us {
                    width: 33.3%;
                    .title {
                        font-size: 16px;
                        height: 22px;
                        margin-bottom: 15px;
                        font-weight:400;
                        line-height: 22px;
                    }
                    div {
                        width: 160px;
                        height: 80px;
                        font-size: 12px;
                        line-height: 17px;
                        word-wrap: wrap;
                    }
                }
            }
            .download {
                width: 35%;
                height: 150px;
                display: flex;
                color: #ffffff;
                font-size: 14px;
                line-height: 20px;
                text-align: center;
                .ios {
                    .ios-dimensioncode {
                        width: 120px;
                        height: 120px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .txt {
                        width: 100%;
                        height: 20px; 
                    }
                }
                .android {
                    margin-left: 20px;
                    .android-dimensioncode {
                        width: 120px;
                        height: 120px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .txt {
                        width: 100%;
                        height: 20px;
                    }
                }
            }
        }
    }

</style>