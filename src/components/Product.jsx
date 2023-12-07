import { IoMdHeartEmpty } from 'react-icons/io';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Product(props) {
	const { id, imageUrl, name, price, url } = props;

	return (
		<section className='relative'>
			<Link to={`/products/${id}`} className='w-fit'>
				<div key={id} className='bg-black flex flex-col justify-between'>
					<img src={imageUrl} alt={`Image of ${name}`} />
				</div>
			</Link>
			<div className='heading3 absolute bottom-0 left-0 p-4'>
				<span>{price} kr.</span>
				<h3>{name}</h3>
			</div>
			<div className='absolute top-0 right-0'>
				<IoMdHeartEmpty className='xl:text-6xl pt-3 pr-3 ' />
			</div>
			<button
				className='snipcart-add-item absolute bottom-0 right-0 '
				data-item-id={id}
				data-item-image={imageUrl}
				data-item-name={name}
				data-item-url={url}
				data-item-price={price}>
				<TbShoppingBagPlus className='xl:text-6xl stroke-1.5 pb-3 pr-3' />
			</button>
		</section>
	);
}
