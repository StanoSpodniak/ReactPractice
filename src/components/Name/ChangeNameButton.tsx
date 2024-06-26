import React from 'react'

interface Props {
    changeName: () => void;
}

const ChangeNameButton = ( {changeName }: Props) => {
  return (
    <button onClick={changeName}>Change Name</button>
  )
}

export default ChangeNameButton