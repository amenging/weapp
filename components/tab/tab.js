// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
    },
    activeIdx: {
      type: String,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    change (e) {
      this.setData({
        activeIdx: e.target.dataset.index
      })
      this.triggerEvent('change', { activeIdx: this.data.activeIdx})
    }
  }
})
