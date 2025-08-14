import { Heart } from 'lucide-react';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { productType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { toggleFavorite } from '@/redux/fovatite';
import { addToBasket } from '@/redux/basketSlice';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const ProductCard = (product: productType) => {
    const dispatch = useDispatch<AppDispatch>();
    const basket = useSelector((state: RootState) => state.basket.items);
    const favorites = useSelector((state: RootState) => state.favorites.items);

    const isFavorite = (id: number) => favorites.some(item => item.id === id);

    return (
        <Card className="w-[300px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative px-0 mx-auto">
            <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-700">${product.price}</span>
                    <span className="text-sm text-gray-500">{product.stock} units available</span>
                </CardDescription>
            </CardHeader>


            <div className="ml-5 space-x-2">
                {product.isActive ? <Badge variant="default" className="bg-green-600 text-white hover:bg-green-700">
                    Active
                </Badge> : <Badge variant="default" className="bg-red-500 text-white hover:bg-red-600">
                    InActive
                </Badge>}

                <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">
                    {product.category}
                </Badge>
                {product.stock > 0 && <Badge variant="default" className="bg-purple-600 hover:bg-purple-700">
                    In Stock
                </Badge>}
            </div>

            <CardFooter className="flex justify-between items-center">
                <Button onClick={() => dispatch(addToBasket(product))} className="flex-1 mr-2">Add to Cart <span className='text-amber-600'>{basket.find(item => item.id === product.id)?.quantity}</span></Button>
                <Button onClick={() => dispatch(toggleFavorite(product))} variant="outline" size="icon">

                    {isFavorite(product.id) ? <Heart className="h-4 w-4 text-red-600 fill-current" /> : <Heart className="h-4 w-4" />}
                </Button>
            </CardFooter>

            <div className="px-6 pb-4 text-xs text-gray-400 text-right">
                {formatAddedDate(product.createdAt)}
            </div>

        </Card>
    );
};

export default ProductCard;

function formatAddedDate(isoString: string): string {
    const date = new Date(isoString);
    return `Added: ${new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date)}`;
}