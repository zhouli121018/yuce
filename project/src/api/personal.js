import request from '@/utils/request'

//获取我的消息列表协议 getmymsgs.php 
export function getmymsgs (data) {
    return request({
      url: '/getmymsgs.php',
      method: 'post',
      data:{
        ...data
      }
    })
}

//22、获取我消息内容协议 msg.php?id=100
export function msg (data) {
  return request({
    url: '/msg.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//12、获取历史开奖协议 gethiskj.php
export function gethiskj (data) {
  return request({
    url: '/gethiskj.php',
    method: 'post',
    data:{
      ...data
    }
  })
}
