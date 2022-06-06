import axios from "axios"
import vue from "../main"

function getTokenByLocal() {
    let token = sessionStorage.getItem("token")
    return token
}

const service = axios.create({
    baseURL: "tenapi",
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
    config => {
        if (getTokenByLocal()) {
            config.headers["token"] = getTokenByLocal()
        } else {
            // 跳转登录页
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        let res = response.data
        // console.log(res)
        if (res.code === "200") {
            // 请求成功
        }
        if (res.code === "-201") {
            // 未登录
        }

        return Promise.resolve(res)
    },
    error => {
        vue.$message({
            message: "请求接口出错了～",
            type: 'error'
        })
        return Promise.reject(error)
    }
)

export default service;