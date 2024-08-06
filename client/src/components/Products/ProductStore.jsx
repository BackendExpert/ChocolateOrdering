import React from 'react'
import BgImg from '../../assets/BgImg.jpg'

const ProductStore = () => {
    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
        <div className="fixed min-h-screen w-full left-0 right-0 border-b p-4 z-60 border-yellow-800 bg-cover bg-center" style={styles}>           
        </div>
        <div className="">

        </div>
    </div>
  )
}

export default ProductStore