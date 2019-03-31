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
//提交反馈
export function submitfeedback(data) {
  return request({
    url: '/submitfeedback.php',
    method: 'post',
    data
  })
} 
//模拟投注

export function submittouzu(data) {
  return request({
    url: '/submittouzu.php',
    method: 'post',
    data
  })
} 
//获取用户中心数据
export function getaccount(data) {
  return request({
    url: '/getaccount.php',
    method: 'post',
    data
  })
} 