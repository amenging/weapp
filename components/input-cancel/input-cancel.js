// components/input-cancel/input-cancek.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputCancelSrc: '../imgs/search.png',
    val: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputCancel () {
      this.setData({
        val: ''
      })
      this.triggerEvent('inputCancelValue', { val: this.data.val })
    },
    inputCancelValue (e) {
      const v = e.detail.value
      this.setData({
        val: v,
        inputCancelSrc: v.length > 0 ? '../imgs/delete.png' : '../imgs/search.png'
      })
      this.triggerEvent('inputCancelValue', { val: v})
    }
  }
})
