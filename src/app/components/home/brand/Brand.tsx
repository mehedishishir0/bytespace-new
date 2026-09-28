import Image from "next/image";

const Brand = () => {
  const brands = [
    { id: 1, name: "Logotipsum", src: "/images/brand/logoipsum.png" },
    { id: 2, name: "Logotipsum", src: "/images/brand/logoipsum1.png" },
    { id: 3, name: "Logotipsum", src: "/images/brand/logoipsum2.png" },
    { id: 4, name: "Logotipsum", src: "/images/brand/logoipsum3.png" },
    { id: 5, name: "Logotipsum", src: "/images/brand/logoipsum4.png" },
  ];

  return (
    <section className="w-full py-10 bg-[#F5F5F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-25">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center  opacity-80 transition-opacity hover:opacity-100"
            >
              <div className="relative h-20 w-44">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;