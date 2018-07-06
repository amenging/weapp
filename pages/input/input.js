// pages/input/input.js
Page({

  data: {
    val: ''
  },

  inputCancelValue(e) {
    this.setData({
      val: e.detail.val
    })
  },

})