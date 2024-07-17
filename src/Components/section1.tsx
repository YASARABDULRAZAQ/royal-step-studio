/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'VIRAL CGI VIDEOS',
      href: '#',
      detail: 'Make your videos unforgottenable with our jaw-dropping CGI.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpmUPDh_h1C-kc3q2hGAGTqvsmGVZT2QXfGDk-Ksl3rFQaGZt',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'PROMO & CREATIVE VIDEOS',
      href: '#',
      detail: 'Create videos that connect with your audience, tell your brand story, and inspire actions.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HdfFsD6aH4dr53uOsfH-yM2fU_hOVDQtl7uQUig9yxYRXsoG',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'GRAPHIC DESIGN UI/UX DESIGN',
      href: '#',
      detail: 'Crafting beautiful and intuitive experience through graphic & UI/UX design.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rUCm19qWgzesaNxLCvNxotOhpECRyUGfmayELcXTn-_Md13m',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
   
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-indigo-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-center text-xl text-white">{product.name}</h3>
                <p className="mt-1 text-center font-medium text-white">{product.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  