import Vue from 'vue'

class Http {
    //  主方法  
    static common({
            url = '', //  请求地址
            method = '', //  请求方式 
            data = {}, //  post请求参数 
            headers = {}
        }) {
            return Vue.axios({
                url,
                method,
                data,
                headers
            })
        }
        //  如果想进一步细化一下请求的各个方法，可以自己定义，传的参数是一个对象，里面是需要的参数
    static request(data,url) {
        return this.common({
            url: url,
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: data
        })
    }
}
export default Http