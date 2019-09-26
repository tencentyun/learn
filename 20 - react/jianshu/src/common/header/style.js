import styled from 'styled-components'
import logoUrl from '../../statics/img/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 10px;
  background-image: url(${logoUrl});
  background-size: contain;
  display: block;
  width: 100px;
  height: 56px;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  &.left{
    float: left;
    padding-left: 20px;
  }
  &.right{
    float: right;
    padding-right: 20px;
  }
  line-height: 56px;
`;

export const SearchWrapper = styled.div`
  float: left;
  height: 56px;
  position: relative;
  .iconfont{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    right: 5px;
    top: 13px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .iconfontBg{
    background-color: #969696;
  }
  
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #eee;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.focuse{
    width: 220px;
  }
  &.slider-enter {
    transition: all .2s ease-out
  }
  &.slider-enter-active {
    width: 240px;
  }
  &.slider-exit {
    transition: all .2s ease-out;
  }
  &.slider-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 15px;
  color: #ea6f5a;
  margin-right: 20px;
  padding: 0 20px;
  &.writting{
    background-color: #ea6f5a;
    color: #fff;
  }
`;