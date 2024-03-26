import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleProducts from '../components/SingleProducts'
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';



const Products = () => {
  const [productData] = useContext(ProductContext)
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
    <section className='section-products'>
      <div className='bg-main'>
      <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("products.0")}</h1> 
             
      </div>
      </div>
    </section>
    
    <div className='container'>
      <div className='row'>
        {productData.map(item=> (
          <SingleProducts
          id={item.id}
          title={item.title}
          img1={item.img[0]}
          img2={item.img[1]}
          img3={item.img[2]}
          img4={item.img[3]}
          price={item.price}
          category={item.category}
          rating = {item.rating}
          sku={item.sku}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Products