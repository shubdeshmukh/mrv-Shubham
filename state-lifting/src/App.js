
import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

const App = () => {
  // Initial product list
  const initialProducts = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }
  ];

  // State to manage the list of products and the search term
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to update the search term
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Product Filter</h1>
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
