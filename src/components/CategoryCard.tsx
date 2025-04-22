import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  image: string;
  slug: string;
};

export default function CategoryCard({  name, image, slug }: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`} className="block">
      <div className="relative h-40 rounded-lg overflow-hidden group">
        <Image
          src={image || '/categories/default-category.jpg'}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white font-medium text-lg p-4 w-full text-center">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
