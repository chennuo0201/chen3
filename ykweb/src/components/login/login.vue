<template>
    <div>
        <div class="contain">
            <Navhead :islogin="islogin"/>
            <div class="bg">
                <img class="bgimg" src="../../assets/image/bg/login_bg.png" alt="">
                <div class="login">
                    <div class="title">登录云矿</div>
                    <div class="content">
                        <div class="input-box">
                            <div class="icon">
                                <img src="../../assets/image/icon/user_icon.svg" alt="用户名">
                            </div>
                            <div class="input">
                                <input type="text" placeholder="请输入手机号码" v-model="phoneNumber">
                            </div>
                        </div>
                        <div class="input-box">
                            <div class="icon">
                                <img src="../../assets/image/icon/pwd_icon.svg" alt="密码">
                            </div>
                            <div class="input">
                                <input type="password" placeholder="请输入密码" v-model="password">
                            </div>
                        </div>
                        <div class="tip" v-if="isright">用户名或密码输入错误</div>
                        <div class="tip" v-else></div>
                        <div class="button" @click="login">登录</div>
                        <div class="hint">
                            <div class="register-box">
                                <div class="forget" @click="toPage('resetpwd')">忘记密码?</div>
                                <div class="register" @click="toPage('register')">注册</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                Copyright ©2014-2020 Lyncmed.com All Rights Reserved.
            </div>
        </div>
    </div>
</template>

<script>
import Navhead from '@/components/navHead.vue'
import Http from '@/http.js'
export default {
    name:"login",
    components: {
        Navhead
    },
    data() {
        return {
            phoneNumber: "",
            password: "",
            isright: false,
            islogin: 0
        }
    },
    methods: {
        toPage(page) {
            this.$router.push(page)
        },
        // 用户登录
        login() {
            this.isright = false
            let timestamp = Date.parse(new Date())
            let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
            let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'phone': this.phoneNumber,'password': this.md5(this.password)})
            Http.request(data,'api/v1/ykuser/login').then(res => {
                    if(res.data.data.success == true) {
                        sessionStorage.setItem('user',JSON.stringify(res.data.data.data))
                        this.islogin = 1
                        this.$router.push({ path: "/" })
                    } else {
                        this.isright = true
                    }
                }).catch(err => {
                
            })
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .contain {
        width: 100%;
        height: 100%;
        .nav {
            width: 100%;
            height: 60px;
        }
        .bg {
            width: 100%;
            height: 100%;
            min-width: 960px;
            position: relative;
            font-family: PingFangSC-Medium,PingFangSC;
            .bgimg {
                width: 100%;
                height: 100%;
            }
            .login {
                width: 383px;
                height: 300px;
                position: absolute;
                top: 25%;
                left: 60%;
                background: #ffffff;
                .title {
                    height: 22px;
                    margin: 20px;
                    font-size: 16px;
                    color: #487AF1;
                    font-weight: 500;
                    line-height: 22px;
                }
                .content {
                    height: 220px;
                    width: 300px;
                    margin: 0 20px 0 63px;
                    .input-box {
                        width: 300px;
                        height: 40px;
                        border: 1px solid rgba(226,226,226,1);
                        display: flex;
                        border-radius: 2px;
                        align-items: center;
                        margin-bottom: 10px;
                        .icon {
                            width: 40px;
                            height: 40px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .input {
                            width: 280px;
                            height: 40px;
                            padding-right: 10px;
                            input {
                                display: block;
                                width: 100%;
                                height: 99%;
                                border: none;
                                outline: none;
                                font-size: 14px;
                                text-align: right;
                                color: rgba(155,155,155,1);
                            }
                            ::-webkit-input-placeholder {
                                font-size: 14px;
                                color: rgba(155,155,155,1);
                            }
                        }
                    }
                    .tip {
                        text-align: center;
                        height: 20px;
                        color: red;
                        font-size: 12px;
                    }
                    .button {
                        width: 300px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        font-size: 14px;
                        color: #ffffff;
                        background: url('../../assets/image/bg/login_botton.svg') no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        cursor: pointer;
                    }
                    .hint {
                        width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        flex-direction: row-reverse;
                        .register-box {
                            width: 99px;
                            height: 17px;
                            display: flex;
                            justify-content: space-between;
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(155,155,155,1);
                            line-height: 17px;
                            .forget {
                                cursor: pointer;
                            }
                            .register {
                                color: rgba(72,122,241,1);
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
        .copyright {
            position: absolute;
            width: 100%;
            height: 23px;
            margin-top: 200px;
            font-size: 14px;
            font-family: Helvetica;
            color: rgba(167,167,167,1);
            line-height: 17px;
            text-align: center;
        }
    }
</style>