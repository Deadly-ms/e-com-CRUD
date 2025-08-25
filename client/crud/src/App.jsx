import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './index.css'; 


const API_URL = 'https://e-com-crud-1.onrender.com/api/products';


const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
  
      // If backend returns { products: [...] }
      const productList = Array.isArray(response.data) ? response.data : response.data.products;
  
      setProducts(productList || []); // Always set as array
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please check if the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };
  

  // Initial data fetch on component mount.
  useEffect(() => {
      fetchProducts();
  }, []);

  // Handler for creating a new product.
  const handleCreate = async (productData) => {
      try {
          await axios.post(API_URL, productData);
          console.log('Sending product:', productData);

          fetchProducts();
          setCurrentProduct(null); 
      } catch (err) {
          setError('Failed to create product.');
          console.error(err);
      }
  };

  // Handler for updating an existing product.
  const handleUpdate = async (id, productData) => {
      try {
          await axios.put(`${API_URL}/${id}`, productData);
          fetchProducts();
          setCurrentProduct(null); 
      } catch (err) {
          setError('Failed to update product.');
          console.error(err);
      }
  };

  // Handler for deleting a product.
  const handleDelete = async (id) => {
      try {
          await axios.delete(`${API_URL}/${id}`);
          fetchProducts();
      } catch (err) {
          setError('Failed to delete product.');
          console.error(err);
      }
  };

  // Handler for editing a product.
  const handleEdit = (product) => {
      setCurrentProduct(product);
  };

  return (
      <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">Product Management</h1>

          {/* Product form section */}
          <div className="mb-10">
              <ProductForm
                  onSubmit={currentProduct ? handleUpdate : handleCreate}
                  productToEdit={currentProduct} 
                  onCancel={() => setCurrentProduct(null)}
              />
          </div>

          {/* Error message display */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          {/* Product list section */}
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Product List</h2>
          {isLoading ? (
              <div className="text-center text-gray-500">Loading products...</div>
          ) : (
              <ProductList
                  products={products}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
              />
          )}
      </div>
  );
};

export default App;
