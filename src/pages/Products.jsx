import { useState, useEffect } from 'react';




export default function Products() {

    const url = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <main>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-5 g-3">
                        {products.map((products) => {
                            return(
                                <div className="col" key={products.id}>
                                    <div className="card h-100 d-flex flex-column">
                                        <img className="card-img-top" src={products.image} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{products.title}</h5>
                                            <p className="card-text">{products.category}</p>
                                            <p className="card-text">${products.price}</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </main>

        </>
    )
}