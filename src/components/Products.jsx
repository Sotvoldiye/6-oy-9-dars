import Product from "./Product";

function Products({ phone, isPending }) {
  console.log(phone)
  return (
    <div className="container">
      {isPending && <h2>Lodaing ...</h2>}
      { phone.data.map((p)=>{
        return  <Product p={p} key={p.id}/>
      })}
        
          
    
    </div>
  );
}

export default Products;
