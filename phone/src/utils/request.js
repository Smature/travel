import axios from 'axios'
import qs from 'qs'
import {Toast} from 'vant'

const baseUrl = "/api";

// 设置响应拦截
axios.interceptors.response.use(res=>{
    console.group('本次响应路径为:'+res.config.url)
    if(res.data.code !== 200){
      Toast.fail(res.data.msg);
      return;
    }
    console.log(res);
    return res;
  })

  export const getBanner = ()=>{
    return axios({
      method:'get',
      url:baseUrl+'/api/getbanner',
    })
  }
  
  export const getIndexGoods = ()=>{
    return axios({
      method:'get',
      url:baseUrl+'/api/getindexgoods'
    })
  }