import request from '@/utils/request'

export const goodsApi = (data = {}) => {
  return request({
    url: '/Wxsite/Goods/api',
    method: 'post',
    data
  })
}