import React,{useState, useEffect} from 'react';
import ProductList from './ProductList';


const DashboardPage = () => {
const [products, setProducts] = useState([]);
const [searchItem, setSearchItem] = useState('');
const [searchType, setSearchType] = useState('title');

// Fetch products data from the API

useEffect(() => {
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => setProducts(data.products))
.catch(error => console.error('Error fetching products:', error));
}, []);

const handleFilter = (event) => {
setSearchItem(event.target.value);
};

const handleSearchTypeChange = (event) => {
setSearchType(event.target.value);
};

const handleAdd = (newProduct) => {
setProducts([...products, newProduct]);
};

const handleUpdate = (updatedProduct) => {
setProducts(products.map(product =>
product.id === updatedProduct.id ? updatedProduct : product
));
};

const handleDelete = (productId) => {
setProducts(products.filter(product => product.id !== productId));
};

const filteredProducts = products.filter(product => {
const searchLower = searchItem.toLowerCase();
if (searchType === 'title') {
return product.title.toLowerCase().includes(searchLower);
} else if (searchType === 'id') {
return product.id.toString().includes(searchLower);
} else if (searchType === 'category') {
return product.category.toLowerCase().includes(searchLower);
} else if (searchType === 'price') {
return product.price.toString().includes(searchLower);
}

return false;
});

return (
<div className='container'>
    <h1>Product Dashboard</h1>
    <div className="input-and-select">
    <select value={searchType} onChange={handleSearchTypeChange}>
    <option value="title">Search by Title</option>
    <option value="id">Search by ID</option>
    <option value="category">Search by Category</option>
    <option value="price">Search by Title</option>
    
    </select>
    <input
    type="text"
    placeholder={`Search products by ${searchType}...`}
    value={searchItem}
    onChange={handleFilter}
    />

</div>

<ProductList
products={filteredProducts}
handleAdd={handleAdd}
handleUpdate={handleUpdate}
handleDelete={handleDelete}
/>
</div>
);

};

export default DashboardPage;