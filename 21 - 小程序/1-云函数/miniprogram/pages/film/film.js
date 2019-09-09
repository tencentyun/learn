// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  },

  movieListFun: function () {
    wx.showLoading({
      title: '加载中',
    })
    
    wx.cloud.callFunction({
      name: 'moveList',
      data: {
        start: this.data.movieList.length,
        count: 10
      }
    }).then(res => {
      this.setData({
        movieList: this.data.movieList.concat
          (JSON.parse(res.result).subjects)
      })
      wx.hideLoading()
      console.log(JSON.parse(res.result))
    }).catch(err => {
      wx.hideLoading()
      console.error(err)
    })

    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
    //   method: 'GET',
    //   data: JSON.stringify({
    //     apikey: '0df993c66c0c636e29ecbb5344252a4a',
    //     start: 0,
    //     count: 10
    //   }),
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.movieListFun()
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
    this.movieListFun()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})