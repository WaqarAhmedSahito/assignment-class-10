import React from 'react';

const ProductCardLayout: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl text-center mb-8">Responsive Product Cards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product Card 1 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-1.png" alt="Product 1" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 1</h3>
                    <p className="text-gray-600">PKR 5000</p>
                </div>
                {/* Product Card 2 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-2.png" alt="Product 2" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 2</h3>
                    <p className="text-gray-600">PKR 4000</p>
                </div>
                {/* Product Card 3 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-3.png" alt="Product 3" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 3</h3>
                    <p className="text-gray-600">PKR 3200</p>
                </div>
                {/* Product Card 4 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-4.png" alt="Product 4" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 4</h3>
                    <p className="text-gray-600">PKR 3700</p>
                </div>
                {/* Product Card 5 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-5.png" alt="Product 5" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 5</h3>
                    <p className="text-gray-600">PKR 4600</p>
                </div>
                {/* Product Card 6 */}
                <div className="bg-white border border-gray-300 rounded-lg shadow transform transition-transform hover:scale-105 text-center">
                    <img src="/product-6.png" alt="Product 6" className="rounded-t-lg w-full" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 6</h3>
                    <p className="text-gray-600">PKR 5999</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCardLayout;
