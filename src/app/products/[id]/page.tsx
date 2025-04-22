// This is a server component
import ProductClient from "./productserver";

export default async function ProductPages({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}