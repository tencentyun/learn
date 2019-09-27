import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px 15px;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  .img{
    width: 625px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: left;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-top: 10px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  margin-right: 18px;
  margin-bottom: 18px;
  height: 32px;
  font-size: 14px;
  background-color: #f7f7f7;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  .topic-img{
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 5px;
  }
  .span-text{
    line-height: 32px;
    float: left;
    margin-right: 5px;
  }
`;


export const ListWrapper = styled.div`
  
`;

export const ListItem = styled.div`
  overflow: hidden;
  width: 625px;
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0;
  .pic{
    width: 125px;
    border-radius: 4px;
    float: left;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  box-sizing: border-box;
  padding-right: 20px;
  h3{
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
  }
  p{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;