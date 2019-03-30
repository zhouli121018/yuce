/* 
  首页模块
*/
import request from '@/utils/request'

export function deviceList (data) {
  return request({
    url: '/Wxsite/Site/api',
    method: 'post',
    data:{
      api_name: 'siteList',
      ...data
    }
  })
}

//彩票属性协议
export function getproperty (data) {
  return request({
    url: '/api/h/getproperty.php',
    method: 'post',
    data:{
      token:new Date().getTime(),
      key:'lldu98382',
      ...data
    }
  })
}