
<template>
  <div>
    <div class="container">
      <div class="tabcard">

        <!-- <div class="tab-sel" :class="{ 'select':sel == 1 }" @click="addrGood">收货地址</div> -->

        <div class="tab-sel" :class="{ 'select':sel == 2 }" @click="addrCoin">收币地址</div>
        <div class="tab-sel" :class="{ 'select':sel == 3 }" @click="addrAccount">收款账户</div>
      </div>
      <div class="addr-coin" v-if="sel == 2">
        <div class="addrcoin-box">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/addrcoin.svg" alt />
            </div>
            <div class="txt">收币地址:</div>
          </div>
          <div class="right">
            <input type="text" v-model="addrcoins" :placeholder="btcaddr"/>
          </div>
        </div>
        <div class="tip" v-if="btc == 1">{{ tip }}</div>
        <div class="tip" v-else></div>
        <el-button type="text" class="save" @click="confilm('BTC')">保存修改</el-button>
      </div>
      <div class="account-addr" v-if="sel == 3">
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">持卡人姓名:</div>
          </div>
          <div class="right">
            <div class="bankmessage">
              <input type="text" v-model="hascardname" :placeholder="hascardName"/>
            </div>
          </div>
        </div>
        <div class="tip" v-if="temp == 1">{{ hint }}</div>
        <div class="tip" v-else></div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">收款银行卡号:</div>
          </div>
          <div class="right">
            <div class="bankmessage">
              <input type="text" v-model="bankaccount" :placeholder="bankAccount"/>
            </div>
          </div>
        </div>
        <div class="tip" v-if="temp == 2">{{ hint }}</div>
        <div class="tip" v-else></div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">银行名称:</div>
          </div>
          <div class="right">
            <div class="bankmessage">
              <el-col :span="12">
              <span class="demonstration"></span>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  {{ bank }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" v-for="(item,index) in bankLists" :key="index" @click.native="getBank(item)">{{ item }}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
              <!-- <input type="text" v-model="bankname" :placeholder="bankName"/> -->
            </div>
          </div>
        </div>
        <div class="tip" v-if="temp == 3">{{ hint }}</div>
        <div class="tip" v-else></div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">开户行地址:</div>
          </div>
          <div class="right">
            <div class="bankmessage">
              <input type="text" v-model="accountaddr" :placeholder="accountAddr"/>
            </div>
          </div>
        </div>
        <div class="tip" v-if="temp == 4">{{ hint }}</div>
        <div class="tip" v-else></div>
        <el-button type="text" class="save" @click="confilm('bank')">保存修改</el-button>
      </div>
      <div class="account-addr" v-if="sel == 1">
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">收货人姓名:</div>
          </div>
          <div class="right">
            <div class="hascard-name">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">所在城市:</div>
          </div>
          <div class="right">
            <div class="city">
              <input type="text" />
            </div>
            <div class="city">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">详细地址:</div>
          </div>
          <div class="right">
            <div class="bankname addr-info">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="user-msg-info email-code">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">邮政编码:</div>
          </div>
          <div class="right">
            <div class="bankaddr">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">联系电话:</div>
          </div>
          <div class="right">
            <div class="bankaddr">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Http from "@/http.js"
export default {
name: "addressalter",
  data() {
    return {
      sel: 2,
      addrcoins: "",
      btcaddr: "",
      userId: "",
      hascardname: "",
      hascardName: "",
      bankaccount: "",
      bankAccount: "",
      bankname: "",
      bankName: "",
      accountAddr: "",
      accountaddr: "",
      hint: "",
      tip: "",
      temp: 0,
      btc: 0,
      bankLists: [
        "农业银行",
        "建设银行",
        "招商银行",
        "中国银行",
        "工商银行",
        "交通银行",
        "浦发银行",
        "邮储银行",
        "平安银行",
        "民生银行",
        "光大银行",
        "华夏银行",
        "中信银行",
        "广发银行",
        "兴业银行",
        "北京银行",
        "渤海银行",
        "江苏银行",
        "恒丰银行",
        "城市商业银行",
        "农村商业银行",
        "农村信用合作社",
        "农村合作银行",
        "村镇银行",
        "民营银行",
      ],
      bank: "请选择"
    }
  },
  methods: {
    getBank(bank) {
      this.bank = bank
      this.bankname = bank
    },
    addrGood() {
      this.sel = 1;
    },
    addrCoin() {
      this.sel = 2;
    },
    addrAccount() {
      this.sel = 3;
    },
    // 获取用户id
    getuserId() {
      this.userId = JSON.parse(sessionStorage.getItem('user')).userId
      if(JSON.parse(sessionStorage.getItem('user')).coin && JSON.parse(sessionStorage.getItem('user')).coin.length > 0) {
        this.btcaddr = JSON.parse(sessionStorage.getItem('user')).coin
      }
    },
    // 绑定收币地址
    bindAddrcoins() {
      this.btc = 0
      if(this.addrcoins.length <= 0) {
        this.btc = 1
        this.tip = "请填写收币地址"
        return false
      }
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,"coin": 'BTC',"coinAccount": this.addrcoins})
      Http.request(data,'api/v1/ykuser/coin').then(() => {
          let data = JSON.parse(sessionStorage.getItem('user'))
          data.coin = this.addrcoins
          sessionStorage.setItem('user',JSON.stringify(data))
          this.btcaddr = this.addrcoins
          this.btc = 0
          this.$message({
            type: 'success',
            message: '修改成功!'
          })         
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '修改失败!'
          })   
        })
    },
    // 绑定收款账户
    bindAccount() {
      if(this.hascardname.length <= 0) {
        this.temp = 1
        this.hint = "请填写持卡人姓名"
        return false
      }
      if (!(/^\d{16,19}$/.test(this.bankaccount))) {
          this.temp = 2
          this.hint = "请填写正确的收款银行卡号"
					return false
			} else if (this.bankaccount && (/^\d{16,19}$/.test(this.bankaccount))) {
          this.temp = 0
      }
      if(this.bankname.length <= 0) {
        this.temp = 3
        this.hint = "请填写银行名称"
        return false
      }
      if(this.accountaddr.length <= 0) {
        this.temp = 4
        this.hint = "请填写开户行地址"
        return false
      }
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,"bank": this.bankname,"userName": this.hascardname,'bankAddr': this.accountaddr,'bankAccount': this.bankaccount})
      Http.request(data,'api/v1/ykuser/bank').then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })         
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '修改失败!'
          })         
        })
    },
    // 获取账户信息
    getuserInfo() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'yk_user_id': this.userId})
      Http.request(data,'api/v1/ykuser/bankinfo').then(res => {
          this.bank = res.data.data.data.bank
          this.bankAccount = res.data.data.data.bank_account.replace(/(.{4})/g, "$1 ")
          this.hascardName = res.data.data.data.bank_user_name
          this.accountAddr = res.data.data.data.bank_addr
        }).catch(() => {
      })
    },
    // 弹出层
    confilm(from) {
      this.$confirm('该操作将修改账户信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(from == 'BTC') {
          this.bindAddrcoins()
        }   
        if(from == 'bank') {
          this.bindAccount()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })         
      })
    }
  },
  mounted() {
    this.getuserId()
    this.getuserInfo()
  },
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  height: 200px;
  width: 200px;
  overflow: scroll;
}
.container {
  width: 100%;
  min-width: 920px;
  .tabcard {
    width: 400px;
    height: 50px;
    background: #fbfbfb;
    display: flex;
    color: #333333;
    font-size: 14px;
    .tab-sel {
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    .select {
      color: #ffffff;
      background: url("../../assets/image/bgimg/buy_now160x30.svg") no-repeat;
      background-size: cover;
    }
  }
  .addr-coin {
    width: 90%;
    height: 260px;
    background: #ffffff;
    .addrcoin-box {
      width: 79%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 5% 0 16%;
      .left {
        width: 25%;
        height: 40px;
        display: flex;
        align-items: center;
        .icon {
          width: 36%;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .txt {
          width: 74%;
          height: 40px;
          color: #487af1;
          font-size: 14px;
          line-height: 40px;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        input {
          width: 100%;
          height: 100%;
          background: #f3f3f3;
          outline: none;
          border: none;
          text-align: right;
          padding-right: 20px;
          box-sizing: border-box;
          border-radius: 4px;
          color: #9b9b9b;
        }
      }
    }
    .tip {
      width: 200px;
      height: 20px;
      font-size: 12px;
      color: red;
      padding-left: 49%;
    }
    .save {
      width: 180px;
      height: 40px;
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      line-height: 13px;
      background: url("../../assets/image/bgimg/buy_now160x30.svg") no-repeat;
      background-size: cover;
      margin: 82px 39% 0;
      cursor: pointer;
    }
  }
  .account-addr {
    width: 90%;
    height: 593px;
    background: #ffffff;
    padding: 40px 78px 0 120px;
    box-sizing: border-box;
    .user-msg-info {
      width: 100%;
      // height: 40px;
      display: flex;
      align-items: center;
      .left {
        width: 30%;
        height: 40px;
        display: flex;
        align-items: center;
        .icon {
          width: 40px;
          height: 40px;
        }
        .hint {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #487af1;
        }
      }
      .right {
        margin-left: 35px;
        width: 68%;
        // height: 40px;
        display: flex;
        align-items: center;
        .bankmessage {
          width: 400px;
          height: 40px;
          margin-right: 10px;
          background-color: #f3f3f3;
          .el-col-12 {
            width: auto;
            padding-right: 20px;
            line-height: 40px;
            cursor: pointer;
            float: right;
            .el-dropdown {
              color: #999999;
            }
            .el-dropdown-link {
              color: #9b9b9b;
            }  
          }
          input {
            width: 100%;
            height: 100%;
            text-align: right;
            background: #f3f3f3;
            padding-right: 20px;
            border: none;
            outline: none;
            border-radius: 4px;
            box-sizing: border-box;
            color: #9b9b9b;
          }
        }
        // .bankcard {
        //   width: 400px;
        //   height: 40px;
        //   margin-right: 10px;
        //   input {
        //     width: 100%;
        //     height: 100%;
        //     text-align: right;
        //     background: #f3f3f3;
        //     padding-right: 20px;
        //     border: none;
        //     outline: none;
        //     border-radius: 4px;
        //   }
        // }
        // .city {
        //   width: 140px;
        //   height: 40px;
        //   margin-right: 10px;
        //   input {
        //     width: 100%;
        //     height: 100%;
        //     text-align: right;
        //     background: #f3f3f3;
        //     padding-right: 20px;
        //     box-sizing: border-box;
        //     border: none;
        //     outline: none;
        //     border-radius: 4px;
        //   }
        // }
        // .bankname {
        //   width: 200px;
        //   height: 40px;
        //   margin-right: 10px;
        //   input {
        //     width: 100%;
        //     height: 100%;
        //     text-align: right;
        //     background: #f3f3f3;
        //     padding-right: 20px;
        //     border: none;
        //     outline: none;
        //     border-radius: 4px;
        //   }
        // }
        // .addr-info {
        //   width: 400px;
        //   height: 92px;
        //   margin-right: 10px;
        //   input {
        //     width: 100%;
        //     height: 100%;
        //     text-align: right;
        //     background: #f3f3f3;
        //     padding-right: 20px;
        //     border: none;
        //     outline: none;
        //     border-radius: 4px;
        //   }
        // }
        // .bankaddr {
        //   width: 400px;
        //   height: 40px;
        //   margin-right: 10px;
        //   input {
        //     width: 100%;
        //     height: 100%;
        //     text-align: right;
        //     background: #f3f3f3;
        //     padding-right: 20px;
        //     border: none;
        //     outline: none;
        //     border-radius: 4px;
        //   }
        // }
      }
    }
    .tip {
      width: 200px;
      height: 20px;
      font-size: 12px;
      color: red;
      padding-left: 36%;
    }
  }
}
</style>