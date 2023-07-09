export default async function consultarProductos() {
  await fetch('https://dummyjson.com/products/1')
    .then(res => res.json()).catch(err => { console.log(err) })
    .then(json => console.log(json)).catch(err => { console.log(err) })
}