import { useState, useEffect } from 'react';
import { OrderList } from '../../lib/orderlist/OrderList';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DragDropDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`images/product/${item.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };
    
    return (
        <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    return (
        <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}