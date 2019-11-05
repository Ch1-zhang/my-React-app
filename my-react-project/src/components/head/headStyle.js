import styled from "styled-components";
import logo from '../../static/logo_muji_b.png';
export const HeadWrap = styled.div`
  height: 60px;
  background: #ccc;
`;

export const Logo = styled.a`
  height: 60px;
  width: 100px;
  float: left;
  display: block;
  margin-top: 20px;
  margin-left: 50px;
  background: url(${logo}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  height: 60px;
  width: 300px;
  float: left;
  margin-left: 130px;
`;

export const NavItem = styled.a.attrs({href:props => props.href})`
  font-size: 26px;
  color: deepskyblue;
  line-height: 60px;
  margin-left: 50px;
  cursor: pointer;
`;

export const SearchWrap = styled.div`
  height: 60px;
  float: right;
  position: relative;
  span{
    position:absolute;
    right: 140px;
    top: 24px;
    cursor: pointer;
  }
`;

export const Search = styled.input.attrs({placeholder:'请输入内容',id:'box'})`
  width: 180px;
  height: 40px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 10px;
  margin-right: 105px;
  padding-left: 20px;
  transition: 0.5s;
  &.flag{
  width: 220px;
  transition:0.5s;
  }
`;
export const SearchInfo = styled.div`
  width: 300px;
  height: 60px;
  float: left;
  margin-left: 350px;
  span{
  color: #2aabd2;
  font-size: 16px;
  margin-left: 30px;
  line-height: 60px;
  }
`;