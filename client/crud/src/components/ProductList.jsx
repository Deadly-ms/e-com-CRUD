// import React from 'react';

// const ProductList = ({ products, onEdit, onDelete }) => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.length === 0 ? (
//                 <div className="col-span-full text-center text-gray-500">No products found.</div>
//             ) : (
//                 products.map((product) => (
//                     <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
//                         {/* Image section with fallback */}
//                         <img
//                             src={product.imageURL || 'https://placehold.co/600x400/E5E7EB/1F2937?text=No+Image'}
//                             alt={product.name}
//                             className="w-full h-48 object-cover object-center"
//                             onError={(e) => {
//                                 e.target.onerror = null; // Prevents infinite loop
//                                 e.target.src = 'https://placehold.co/600x400/E5E7EB/1F2937?text=Image+Load+Error';
//                             }}
//                         />
//                         {/* Product details section */}
//                         <div className="p-4 flex flex-col justify-between flex-grow">
//                             <div>
//                                 <h3 className="text-xl font-bold truncate">{product.name}</h3>
//                                 <p className="text-gray-600 mt-2 text-sm line-clamp-3">{product.description}</p>
//                             </div>
//                             <div className="mt-4 flex items-center justify-between">
//                                 <span className="text-lg font-semibold text-blue-600">${product.price.toFixed(2)}</span>
//                                 <span className="text-sm text-gray-500">Stock: {product.stock}</span>
//                             </div>
//                         </div>
//                         {/* Action buttons section */}
//                         <div className="p-4 border-t flex justify-end space-x-2">
//                             <button
//                                 onClick={() => onEdit(product)}
//                                 className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 onClick={() => onDelete(product._id)}
//                                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default ProductList;





import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 text-lg font-medium">
                    🚀 No products found. Add one to get started!
                </div>
            ) : (
                products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
                    >
                        {/* Image section with fallback */}
                        <div className="relative">
                            <img
                                src={product.imageURL || 'https://placehold.co/600x400/E5E7EB/1F2937?text=No+Image'}
                                alt={product.name}
                                className="w-full h-56 object-cover object-center transition-transform duration-300 hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/600x400/E5E7EB/1F2937?text=Image+Load+Error';
                                }}
                            />
                            {/* Badge */}
                            <span className="absolute top-3 right-3 bg-gray-600 text-white text-xs px-2 py-1 rounded-lg shadow-md">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>

                        {/* Product details section */}
                        <div className="p-5 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 truncate">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                                    {product.description}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                            </div>
                        </div>

                        {/* Action buttons section */}
                        <div className="p-4 border-t flex justify-between space-x-3 bg-gray-50">
                            <button
                                onClick={() => onEdit(product)}
                                className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors font-medium shadow-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(product._id)}
                                className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors font-medium shadow-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
