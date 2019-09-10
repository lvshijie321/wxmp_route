//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onShow: function () {
    console.log(getCurrentPages())
  },
  onTapBack() {
    wx.navigateBack({
      delta: 1
    })
  },
})
