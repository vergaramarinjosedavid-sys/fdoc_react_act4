import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electrónica' },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'Electrónica' },
  { id: 3, name: 'Zapatillas', price: 89.99, category: 'Moda' },
  { id: 4, name: 'Libro', price: 19.99, category: 'Libros' },
  { id: 5, name: 'Cafetera', price: 49.99, category: 'Hogar' },
];

function ProductList() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Productos</h1>
      <>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">Categoría: {product.category}</p>
            </div>
            <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default ProductList;
