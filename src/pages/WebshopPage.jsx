import Product from '../components/Product';
import products from '/products.json';

export default function WebshopPage() {
	return (
		<section>
			<div>
				<div>
					<div className={'grid grid-cols-2 auto-cols-max gap-4 w-1/2'}>
						{products.map((product) => (
							<Product {...product} key={product.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
