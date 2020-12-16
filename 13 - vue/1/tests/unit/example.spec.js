import { shallowMount } from '@vue/test-utils'
import FirstComponent from '@/components/FirstComponent.vue'

describe('FirstComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // shallowMount和 mount 一样，创建一个包含被挂载和渲染的 Vue 组件的 Wrapper，不同的是被存根的子组件
    const wrapper = shallowMount(FirstComponent, {  
      propsData: { msg }
    })
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(msg)
  })
})
