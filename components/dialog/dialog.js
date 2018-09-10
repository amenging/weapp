// sources/component/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
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
    tap (e) {
      const index = e.target.dataset.index
      this.triggerEvent('dialogTap', {index: index})
    }
  }
})
