import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CategoryProps {
  title: string;
  image: string;
}
interface SingleCategroyProps {
  category: CategoryProps;
}
const Category: React.FC<SingleCategroyProps> = ({ category }) => {
  const { title, image } = category;
  return (
    <div className="category-container">
      <Link href={`/category/${title}`}>
        <Image src={image} alt="category" width={160} height={40} />
        <h2 className="text-xl font-medium uppercase">{title}</h2>
      </Link>
    </div>
  );
};

export default Category;
