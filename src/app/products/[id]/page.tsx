// This is a server component
import ProductClient from "./productserver"; 

export default function ProductPages({ params }: { params: { id: string } }) {
  return <ProductClient id={params.id} />;
}