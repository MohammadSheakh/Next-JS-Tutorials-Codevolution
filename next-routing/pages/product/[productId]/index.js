import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter() // hook returns a router object 
  const productId = router.query.productId // url thtke id pick korte hobe 
  return <h1>Details about product {productId}</h1>
}

export default ProductDetail




// [productId].js er jaygay [productId] nam e ekta 
// folder create korlam .. and er moddhe index.js 
// file create kore .. tar moddhe [productId].js
// er code ta paste kore dilam 







