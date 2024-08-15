import React from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
    const { id } = useParams()
  return (
    <div>id is {id}</div>
  )
}

export default ViewProduct