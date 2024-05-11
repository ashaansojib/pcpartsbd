"use client";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductQuery } from "@/redux/features/products/productApi";
import Image from "next/image";
import React from "react";
import { Product } from "../../../../global-interfaces";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const router = useRouter()
  const [addCartItem] = useAddCartItemMutation();
  const {
    data: singleItem,
    isLoading,
    isFetching,
  } = useGetProductQuery(params.productId);

  if (isLoading || isFetching) {
    return <DataLoader />;
  }
  const { title, price, model, discount, image } = singleItem?.data[0];
  const addData = {
    title,
    image,
    price,
    discount,
    model,
    totalPrice: price,
    quantity: 1,
  };
  const handleAddToCart = async () => {
    await addCartItem(addData);
    toast.success("Product Added To Cart!");
  };
  const buyNow = async () => {
    await addCartItem(addData);
    toast.success("Product Added To Cart!");
    router.push("/checkout/cart")
  };
  return (
    <div className="bg-secondary">
      {singleItem?.data.map((item: Product) => (
        <div
          key={item._id}
          className="my-container grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-between py-4 px-2 md:px-0"
        >
          <div className="border p-2">
            <Image
              src={item.image}
              alt="product image"
              width={500}
              height={350}
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-primary text-3xl font-semibold">
              {item.title}
            </h2>
            <div className="pb-6 font-medium">
              <p>
                Status: <span className="text-accent">{item.status}</span>
              </p>
              <p>Brand: {item.brand}</p>
              <p>Model: {item.model}</p>
              <p>Category: {item.category}</p>
            </div>
            <div>
              <h4 className="font-semibold">Key Features</h4>
              <p>{item.description}</p>
            </div>
            <h2 className="py-2">
              <span className="text-xl font-bold">BDT:{item.price}</span>{" "}
              <span className="text-accent line-through">
                {item.discount}% Off
              </span>
            </h2>
            <div className="flex gap-2">
              <button onClick={handleAddToCart} className="add-to-card-btn">Add To Cart</button>
              <button onClick={buyNow} className="add-to-card-btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
