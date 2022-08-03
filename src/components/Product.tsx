import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border rounded', btnBgClassName]

    return (
        <div className="border rounded py-2 px-4 flex flex-col items-center mb-2">
            <img className="w-1/6 h-1/6" src={product.image} alt={product.title}/>
            <p className="font-bold">{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>

            {details && <div className="border rounded p-2 mt-2">
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: "bold"}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    );
}