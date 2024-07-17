import Image from "next/image";
import Graphic from "../../public/graphic.jpeg";
import uiux from "../../public/uiux.jpeg";
import packeging from "../../public/packeging.jpeg";

const products = [
  { id: 1, name: 'UI/UX DESIGN', href: '#', imageSrc: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/07/30182024/UX-UI-Design.jpg'},
  { id: 2, name: 'GRAPHIC DESIGN', href: '#', imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3FdHxx_Q01fnUuIW284tbjxYHs1RrWH5AsmqGeVvMip_USJk-' },
  { id: 3, name: 'PACKEGING DESIGN', href: '#', imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdsNkOg2wqG2SooCBdRgMH54Xo99Bs9o9M0HZNKViJf3Riy7qi' },
];

export default function Section() {
  return (
    <div className="bg-indigo-950 flex justify-center">
      <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <h3 className="mt-4 text-center text-xl text-white">{product.name}</h3>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-10 xl:aspect-w-10">
                <img
                  alt={product.name}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
