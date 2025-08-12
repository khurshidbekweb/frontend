import { Heart } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { productType } from '@/types';


const ProductCard = (product: productType) => {

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
                <Button className="flex-1 mr-2">Add to Cart</Button>
                <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
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