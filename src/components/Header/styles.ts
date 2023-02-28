import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_700};
  overflow: hidden;
`

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`