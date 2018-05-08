// pages/index/index.js
// 
// interval为倒计时，level为用户等级
// nowTime和tmpTime用来判断当前时间是否改变，若时间改变显示提示信息
let interval, level, nowTime, tmpTime
const time = 40 // 倒计时时间
let countTimeTmp = 0 // 倒计时计数，让倒计时进度条能够平滑减小
const levelAdd = 5 // 每levelAdd增加一个级别
const TimeMinus = 1 // 每TImeMinus时间减1s
const minTime = 5 // 倒计时最小时间
let add = 2 / time / 10 // 计算每10ms变化的角度
let addTmp = add // 倒计时圆圈，每隔一秒减少一定大小
const pi = Math.PI

let w, h
let canvasW, circlePos, circleR
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: time
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this
    wx.getSystemInfo({
      success (res) {
        w = res.windowWidth
        h = res.windowHeight

        canvasW = 2/5*w
        circlePos = 1/5*w
        circleR = 1/10*w
        const ctx = wx.createCanvasContext('timeCanvas')
        that.timeCanvas = ctx
        drawBigCircle(ctx)
        that.timeCount()
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  timeCount () {
    interval = setInterval(() => {
      countTimeTmp ++

      let timeTmp = this.data.time
      if (timeTmp == 0) {
        clearInterval(interval)
        this.setData({
          status: 'end'
        })
        return
      }
      if (this.data.pause) {
        drawLittleCircle(this.timeCanvas, pi * (addTmp + add), 0)
        this.setData({
          pause: false
        })
      }
      drawLittleCircle(this.timeCanvas, pi * (addTmp + add), pi * addTmp)
    
      addTmp += add

      if (countTimeTmp == 10) {
        this.setData({
          time: timeTmp - 1,
        })
        countTimeTmp = 0
      }
    }, 100)
  }
})

function drawBigCircle (ctx) {
  ctx.setLineCap('round')
  ctx.setLineWidth(8)
  ctx.setStrokeStyle('#ccc')
  ctx.setFillStyle('#ccc')
  ctx.arc(circlePos, circlePos, circleR, 0, pi * 2, false)
  ctx.stroke()
  ctx.draw(true)

  ctx.setLineWidth(6)
  ctx.setStrokeStyle('#f00')
  ctx.setFillStyle('#f00')
}
function drawLittleCircle (ctx, x, st) {
  ctx.arc(circlePos, circlePos, circleR, st, x, false)
  ctx.stroke()

  ctx.draw(true)
}