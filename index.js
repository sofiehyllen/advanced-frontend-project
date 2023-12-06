import products from '../products.json'; 

<div className={styles.grid}>
{products.map((product) => {
   return (
      <div key={product.id} className={styles.card}>
         <h3>{product.title}</h3>
         <p>{product.description}</p>
         <p>${product.price}</p>
         <p>
            <button>Add to Cart</button>
         </p>
      </div>
   );
})}
</div>;
