import * as S from './style'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'secondary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    ;<S.ButtonContainer
      variant={variant}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.ButtonContainer>
  }

  return (
    <S.ButtonLink
      to={to as string}
      type="button"
      title={title}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </S.ButtonLink>
  )
}

export default Button
