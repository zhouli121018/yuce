import request from '@/utils/request'

export function getvcode(data) {
  return request({
    url: '/getvcode.php',
    method: 'post',
    data:{
      token: new Date().getTime(),
      ...data
    }
  })
} 