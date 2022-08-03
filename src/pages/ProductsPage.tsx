import {useProducts} from "../hooks/products";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const { loading, error, products, addProduct } = useProducts();
    // const [modal, setModal] = useState(false);
    const {modal, open, close} = useContext(ModalContext)
    const createHandler = (product: IProduct) => {
        // setModal(false);
        close()
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {modal && <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            { /*<Product product={products[0]}/>*/ }
            { /*<Product product={products[1]}/>*/ }

            <button
                className="fixed bottom-5 right-5 full rounded-full bg-red-400 text-white text-2xl px-3 py-1"
                onClick={open}
            >+</button>
        </div>
    );
}