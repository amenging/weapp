const HOST = 'https://vans.huanxuinfo.com/'

import { json2Form } from './utils'

function getOpenid () {
  return new Promise ((resolve, reject) => {
    wx.login({
      success (res) {
        const data = json2Form({ code: res.code })
        wx.request({
          url: HOST + 'index.php/index/index/getOpenid',
          method: 'POST',
          data,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject(err)
          }
        })
      },
      fail (err) {
        reject(err)
      }
    })   
  })

}

function postOpenid (params) {
  const data = json2Form(params)

  return new Promise ((resolve, reject) => {
    wx.request({
      url: HOST + 'index.php/index/index/postOpenid',
      method: 'POST',
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })    
  })
}

export {
  getOpenid,
  postOpenid
}
