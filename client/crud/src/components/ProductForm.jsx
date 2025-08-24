import React, {
    useState,
    useEffect
} from 'react';

const ProductForm = ({
    onSubmit,
    productToEdit,
    onCancel
}) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        imageURL: ''
    });


    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        } else {
            // Reset the form for new products.
            setProduct({
                name: '',
                description: '',
                price: '',
                stock: '',
                imageURL: ''
            });
        }
    }, [productToEdit]);

    // Update state on input change.
    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setProduct({ ...product,
            [name]: value
        });
    };

    // Handle form submission.
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(productToEdit ? productToEdit._id : null, product);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (productToEdit) {
          onSubmit(productToEdit._id, product);
        } else {
          onSubmit(product);
        }
      };
      

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-500">
                {productToEdit ? 'Edit Product' : 'Add New Product'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    min="0"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                    min="0"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                    type="text"
                    name="imageURL"
                    placeholder="Image URL"
                    value={product.imageURL}
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                    required
                    className="col-span-1 md:col-span-2 p-3 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
                <button
                    type="submit"
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                    {productToEdit ? 'Update Product' : 'Add Product'}
                </button>
                {productToEdit && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default ProductForm;