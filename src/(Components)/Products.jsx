import { GetAllProducts } from '@/(Api)/ProductsApi';
import styles from '../(Styles)/products.module.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Products = async () => {
    const data = await GetAllProducts();

    return (
        <div className={styles.mainCollapse}>
            <div className={styles.gridContainer}>
                {data?.data?.map(({ id, price, title, image, description, category, rating }) => (
                    <div key={id} className={styles.card} data-product-id={id}>
                        <div className={styles.cardImg}>
                            <Image
                                src={image}
                                alt="product"
                                width={200}
                                height={200}
                            />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4>{title}</h4>

                            <div className={styles.desc}>
                                <h6>{description}</h6>
                                <Icon icon="ph:heart-light" width="24" height="24" className={styles.heartIcon} />
                            </div>

                            <div className={styles.pricing}>
                                <h6>₹{price}</h6>
                                <span>{rating?.rate}/5</span>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <span>{category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
