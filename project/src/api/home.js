/* 
  首页模块
*/
import request from '@/utils/request'
import md5 from 'js-md5'

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
    url: '/getproperty.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//首页及专家排名协议 getexprank.php
export function getexprank (data) {
  return request({
    url: '/getexprank.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//获取大奖预测组合列表
export function getpredzuhe (data) {
  return request({
    url: '/getpredzuhe.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//获取公告列表
export function getnotices (data) {
  return request({
    url: '/getnotices.php',
    method: 'post',
    data:{
      ...data
    }
  })
}