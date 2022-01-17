import { useRouter } from "next/router";
import React from "react";
import data from "../../utiles/data.js";

export default function productScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return <div>{product.name}</div>;
}
