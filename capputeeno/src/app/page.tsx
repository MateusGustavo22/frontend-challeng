import FilterBar from "@/components/FilterBar";
import LoadMore from "@/components/LoadMore";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="main_container">
      <FilterBar />
      <LoadMore />
      <ProductList />
      <LoadMore />
    </div>
  );
}
