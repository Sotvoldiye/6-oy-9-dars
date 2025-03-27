import Product from "./Product";

function Products({ phone, isPending }) {
  console.log(phone)
  return (
    <div className="container ml-auto justify-center w-6xl">
      {isPending && <h2>Lodaing ...</h2>}
    <div className=" grid grid-cols-3">
    { phone.data.map((p)=>{
        return  <Product p={p} key={p.id}/>
      })}
    </div>
        
          
    
    </div>
  );
}

export default Products;
