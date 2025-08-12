import { Heart } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const ProductCard = () => {
    return (
        <Card className="w-[300px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative px-0">
            <CardHeader>
                <CardTitle className="text-xl">AirPods Pro</CardTitle>
                <CardDescription className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-700">$249.99</span>
                    <span className="text-sm text-gray-500">100 units available</span>
                </CardDescription>
            </CardHeader>


            <div className="ml-5 space-x-2">
                <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    In Stock
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">
                    Electronics
                </Badge>
            </div>

            <CardFooter className="flex justify-between items-center">
                <Button className="flex-1 mr-2">Add to Cart</Button>
                <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                </Button>
            </CardFooter>


            <div className="px-6 pb-4 text-xs text-gray-400 text-right">
                Added: August 12, 2025
            </div>

        </Card>
    );
};

export default ProductCard;