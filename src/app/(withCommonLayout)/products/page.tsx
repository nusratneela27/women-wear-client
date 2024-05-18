import Contain from "@/components/Shared/Container/Contain";
import SideBar from "@/components/SideBar/SideBar";
import ProductCard from "@/components/UI/Cards/ProductCard";
import { Products } from "@/types";

export const metadata = {
  title: "Products",
};

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  // console.log(data);

  return (
    <Contain>
      <div className="my-16 space-y-3">
        <div className="flex">
          <SideBar></SideBar>
          <div className="flex-1 ml-36">
            <h1 className="text-3xl font-bold">Our Collection Of Products</h1>
            <p className="font-bold">Showing 1-12 of 24 Item(s)</p>
            <p className="text-gray-500 mt-3 mb-7">
              Explore our newest collection of stylish and trendy outfits
              perfect for every occasion. Stay ahead in fashion with our
              exclusive designs and premium quality clothing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {products.slice(0, 12).map((product: Products) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Contain>
  );
};

export default AllProducts;
