import request from '@/utils/request'

//获取验证码
export function getvcode(data) {
  return request({
    url: '/getvcode.php',
    method: 'post',
    data:{
      ...data
    }
  })
} 

//1、用户注册协议 regist.php?f=1027&c=oppo
export function regist(data) {
  return request({
    url: '/regist.php',
    method: 'post',
    data:{
      ...data
    }
  })
} 

//2、手机号登录密码协议 loginbypass.php
export function loginbypass(data) {
  return request({
    url: '/loginbypass.php',
    method: 'post',
    data:{
      ...data
    }
  })
} 
