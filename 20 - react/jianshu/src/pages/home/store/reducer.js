// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 2,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 3,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 4,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 5,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 6,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 7,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  },{
    id: 8,
    title: '社会热点',
    imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg'
  }],
  listInfo: [{
    id: 1,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 5,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 6,
    title: '简书一年，我找到了一份好工作',
    desc: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我.',
    imgUrl: '//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default:
      return state
  }
  
}