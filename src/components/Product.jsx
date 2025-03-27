import { useGlobalContext } from "../hooks/useGlobalContex";
import AddButton from "./AddButton";
import Button from "./Button";

function Product({ p }) {
  const { dispatch, cart} = useGlobalContext();
  const { id, title, price, image, amount, stock } = p;
  const alreadyAdded = cart.find((p) => p.id == id);
  console.log(cart);

  return (
    <>
      {/* <h1>{p.title}</h1> */}
      <div className="phones max-w-[1260px]">
        <div className=" mt-2 ml-2 mr-2">
          <ul className="list bg-base-200 rounded-box shadow-md w-full">
            <div className="">
              <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                {title}
              </li>

              <li className="list-row">
                <div>
                  <img
                    className="size-20 rounded-box"
                    src={image}
                    alt={title}
                  />
                </div>
                <div>
                  <div>${price}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    Remaining stock {stock}
                  </div>
                  <div>
                  </div>
                </div>
                {!alreadyAdded && (
                 <AddButton p={p} dispatch={dispatch} alreadyAdded={alreadyAdded}/>
                )}
                {alreadyAdded && (
                  <Button p={p} dispatch={dispatch} alreadyAdded={alreadyAdded}/>
                )}
              
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Product;
