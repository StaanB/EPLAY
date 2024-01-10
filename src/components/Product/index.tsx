import { Link } from 'react-router-dom'

import Tag from '../Tag'

import * as S from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <Link
      title={`Clique aqui para ver mais informações do jogo ${title}`}
      to={`/product/${id}`}
    >
      <S.Card>
        <img src={image} alt={title} />
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
        <S.Title>{title}</S.Title>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <S.Description>{getDescription(description)}</S.Description>
      </S.Card>
    </Link>
  )
}

export default Product
