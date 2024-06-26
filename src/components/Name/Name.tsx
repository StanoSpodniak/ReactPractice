import React from 'react'

interface Props {
    name: string;
}

const Name = ({ name }: Props) => {
  return (
    <div>{name}</div>
  )
}

export default Name