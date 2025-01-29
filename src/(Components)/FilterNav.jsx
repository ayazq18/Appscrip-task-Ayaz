import { GetAllProducts } from '@/(Api)/ProductsApi';
import styles from '../(Styles)/filterNav.module.css'

const FilterNav = async() => {
    const data = await GetAllProducts();

    return (
        <div className={styles.main}>

            <div className={styles.mobileFilterControl}>
                <h6>FILTER</h6>
            </div>

            <div className={styles.filterControl} title='Coming soon'>
                <h5>{data?.data?.length}</h5>
                <h6 >{"<"} &nbsp; HIDE FILTERS</h6>
            </div>

            <select className={styles.customSelect}>
                <option>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE : HIGH TO LOW</option>
                <option>PRICE : LOW TO HIGH</option>


            </select>
        </div>
    )
}

export default FilterNav
