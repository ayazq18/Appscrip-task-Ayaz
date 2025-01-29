import styles from "../(Styles)/home.module.css";
import Products from "./Products";
import Footer from "./Footer";
import SideBar from "./SideBar";
import FilterNav from "./FilterNav";

function HomePage() {
  return (
    <div className={styles.main}>
      <FilterNav />

      <div className={styles.filterProducts}>
        <SideBar />

        <Products />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
