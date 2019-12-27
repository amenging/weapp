function saveToAlbum (url) {
  wx.getSetting({
    success(res) {
      console.log(res.authSetting['scope.writePhotosAlbum'])

      if (res.authSetting['scope.writePhotosAlbum'] === false) {
        showTipsModal()
      } else {
        wx.saveImageToPhotosAlbum({
          filePath: url,
          success (res) {
            wx.showToast({
              title: '已保存到本地相册',
              icon: 'none'
            })
          },
          fail(err) {
            if (err.errCode === 202) {
              showTipsModal()
            } else {
              wx.showToast({
                title: '保存失败',
                icon: 'none'
              })
            }
          }
        })
      }
    }
  })
}

function showTipsModal () {
  wx.showModal({
    title: '温馨提示',
    content: '小程序需要您的授权哦',
    confirmText: '去授权',
    showCancel: true,
    success (res) {
      if (res.confirm) wx.openSetting({})
    }
  })
}

/** json转formdata
 * 小程序无formData对象，使用encodeURIComponent的方式代替
 */
function json2Form (json) {
  let str = {}

  for (let p in json) {
    str[p] = encodeURIComponent(json[p])
  }

  return str
}


export {
  saveToAlbum,
  json2Form
}
