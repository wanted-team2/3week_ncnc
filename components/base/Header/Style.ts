import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font15 } from 'styles/font';

export const HeaderWrapper = styled.header`
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  max-width: ${({ theme }) => `${theme.size.maxWidth}px`};
  width: 100%;
  margin: 0 auto;
  height: ${({ theme }) => `${theme.size.baseHeight}px`};
  background: ${({ theme }) => theme.colors.white};
`;

export const HeaderInner = styled.div`
  ${flexbox({ jc: 'between' })};
  max-width: 1440px;
  height: 100%;
  padding: 7px 19px;
  margin: 0 auto;
  user-select: none;
`;

export const Title = styled.h1`
  ${font15(600)}
`;

export const Hidden = styled.div`
  width: 30px;
  visibility: hidden;
`;

export const HamburgerContainer = styled.div`
  cursor: pointer;
`;

export const MyPageWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.mypage};
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  &.hidden {
    width: 0;
    height: 100%;
  }
  &:not(.hidden) ul {
    transform: none;
  }
`;
export const Image = styled.div``;

export const HeaderMenu = styled.ul<{ windowWidth: number }>`
  z-index: 1000;
  ${flexbox({})};
  img {
    display: none;
  }
  ${flexbox({ fd: 'column', jc: 'start', ai: 'start' })};
  position: absolute;
  transition: 0.45s;
  transform: ${({ windowWidth }) => `translateX(-${windowWidth}px)`};
  /* width: ${({ windowWidth }) => `${windowWidth}px`}; */
  width: 100%;
  max-width: 672px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const MenuWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => `${theme.size.baseHeight}px`};
  z-index: ${({ theme }) => theme.zIndex.menu};
  background: ${({ theme }) => theme.colors.white};
`;

export const IcoArrowWrapper = styled.span`
  .ico-arrow {
    transform: rotate(90deg);
  }
`;

export const ContentWrapper = styled.div`
  ${flexbox({ jc: 'between' })};
  padding: 16px ${({ theme }) => `${theme.gap.baseInner}px`};
  margin: ${({ theme }) => `${theme.gap.baseGap}px`} 0;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
`;

export const ContentText = styled.span`
  ${font15(500)}
`;

export const BlankBox = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;
