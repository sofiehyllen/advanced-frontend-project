import Product from '../components/Product';
import products from '/products.json';

export default function WebshopPage() {
	return (
		<section>
			<div>
				<div>
					<div className={'grid'}>
						{products.map((product, i) => (
							<Product {...product} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
