// pages/index.js

import { saveToAlbum } from '../../utils.js'
import { getOpenid, postOpenid } from "../../api.js"

const { setMenuButtonBoundingClientRect } = requirePlugin("stickerAR")
setMenuButtonBoundingClientRect(wx.getMenuButtonBoundingClientRect())

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    share: false,
    shareImg: '',
    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 通过分享进入
    if (options.share) {
      this.setData({
        share: true,
        imgUrl: options.simg
      })

      postOpenid({
        openid_share: options.openid
      }).then(res => {
        if (res.data.code != 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }).catch(e => {
        wx.showToast({
          title: e,
          icon: 'none'
        })
      })
    } else {
      // 插件页面带参数跳转
      this.setData({
        imgUrl: 'https://' + decodeURIComponent(options.gif),
        shareImg: 'https://' + decodeURIComponent(options.img)
      })

      getOpenid().then(res => {
        this.data.openid = res.data.data.openid
        
        if (res.data.code != 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }).catch(e => {
        wx.showToast({
          title: e,
          icon: 'none'
        })
      })
    }
  },

  // 保存图片
  saveImg () {
    wx.showLoading({
      title: '加载中...',
    })

 
    wx.downloadFile({
      url: this.data.imgUrl,
      success: function (res) {
        wx.hideLoading()

        saveToAlbum(res.tempFilePath)
      },
      fail (res) {
        console.log(res)

        wx.hideLoading()

        wx.showToast({
          title: '保存失败',
          icon: 'none'
        })
      }
    })
  },

  // 重新拍摄
  backToCamera () {
    wx.navigateBack({})
  },

  // 返回首页
  backToHome () {
    wx.reLaunch({
      url: '/subpages/mouseActivityModule/pages/index/index',
    })
  },

  onShareAppMessage () {
    const _this = this

    return {
      title: 'xxx标题',
      path: `/subpages/ARModule/pages/index/index?simg=${_this.data.imgUrl}&share=true&openid=${_this.data.openid}`
    }
  }
})