import React, {useState} from 'react';
import './App.css';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {IProduct} from "./models";

function App() {
    const { loading, error, products, addProduct } = useProducts();
    const [modal, setModal] = useState(false);
    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            { /*<Product product={products[0]}/>*/ }
            { /*<Product product={products[1]}/>*/ }

            <button
                className="fixed bottom-5 right-5 full rounded-full bg-red-400 text-white text-2xl px-3 py-1"
                onClick={() => setModal(true)}
            >+</button>
        </div>
    );
}

export default App;
