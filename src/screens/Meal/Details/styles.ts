import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  
  margin-top: -28px;
  border-radius: 20px;
  padding:40px 24px;
  gap: 24px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`

type Props = {
  size?: 'XL' | 'SM'
}

export const Title = styled.Text<Props>`
  ${({theme, size}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${ size === 'SM' ? theme.FONT_SIZE.SM : theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const Description = styled.Text`
  margin-top: 8px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const ContentWrapper = styled.View``

export const ButtonWrapper = styled.View`
  margin-top: auto;
  gap: 8px;
`

// ---- Modal ----

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  background: rgba(0, 0, 0, 0.25);
`

export const ModalContent = styled.View`
  width: 100%;
  background: ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 8px;

  padding: 40px 24px 24px;
`

export const ModalTitle = styled.Text`
  text-align: center;
  padding: 0 24px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const ModalGridWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
  margin-top: 32px;
`

export const ModalGridElement = styled.View`
  flex: 1;
`