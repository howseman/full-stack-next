import { useEffect, useState } from "react"

export default function StorePage(props) {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error)
  }, [])

  return (
    <>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
  )
}
