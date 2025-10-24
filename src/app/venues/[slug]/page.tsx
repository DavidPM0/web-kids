import PropertyImageGallery from "@/components/gallery/property-image-gallery";
import Image from "next/image";

export default function VenueDetailPage() {
  return (
    <div className="text-[#1C3658] min-h-screen">
      <section className="bg-[#1C3658] py-28 text-center relative overflow-hidden">
        <div className="absolute bg-[url('/bnr-izquierdo.png')] bg-no-repeat bg-contain z-0 top-0 left-0 w-150 h-100" />
        <div className="absolute top-4 left-80 w-24 h-24 bg-[url('/bee-izquierda.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 left-40 w-40 h-40 bg-[url('/bnr-no.png')] bg-no-repeat bg-contain z-1" />
        <div className="relative z-10">
          <h1 className="text-[#FBF2E0] text-4xl font-bold">Party Genie</h1>
          <p className="text-[#FBF2E0] mt-2 text-lg">Home &gt; Party Genie</p>
        </div>
        <div className="absolute top-4 right-80 w-24 h-24 bg-[url('/bee-derecha.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 right-40 w-40 h-40 bg-[url('/bnr-na.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute bg-[url('/bnr-derecha.png')] bg-no-repeat bg-contain z-0 top-0 right-0 w-150 h-100" />
      </section>
      <div className="px-40 pt-20">
        <PropertyImageGallery />
      </div>
      <div className="py-44 px-40 mx-auto flex flex-col lg:flex-row gap-12">
        {/* Columna izquierda - Galería */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <Image
                key={i}
                src="/img/venue.jpg"
                alt={`Venue thumb ${i}`}
                width={80}
                height={80}
                className="border border-[#000000] transition-transform hover:scale-[1.02] cursor-pointer"
              />
            ))}
          </div>

          {/* Imagen principal */}
          <div className="sw-[400px] h-[400px]">
            <Image
              src="/img/venue.jpg"
              alt="Main Venue"
              width={400}
              height={400}
              className="border border-[#000000] shadow-[3px_3px_0_#000000] transition-transform hover:scale-[1.02] cursor-pointer"
            />
          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold">
            Altitude Trampoline Park – Katy
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 text-yellow-400">★★★★★</div>
            <div className="line-through ">$60.00</div>
            <div className="text-2xl font-bold">$40.00</div>
          </div>

          <p className="">
            Perfect place for kids to explore energetic activities in a safe and
            fun environment. Altitude Trampoline Park – Katy brings fun to life.
          </p>

          {/* Countdown */}
          <div className="font-bold">
            Hurry up! Deal ends in:{" "}
            <span className="bg-white text-black px-2 py-1 rounded">
              300d : 18h : 35m : 50s
            </span>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 text-black px-2 py-1 rounded"
            />
            <button className="bg-[#0E2A47] text-white px-6 py-2 rounded hover:bg-[#1C3E6E]">
              Add To Cart
            </button>
          </div>

          {/* Métodos de pago (placeholder) */}
          <div className="mt-6">
            <Image
              src="/img/payment-methods.png"
              alt="Payments"
              width={200}
              height={30}
            />
          </div>

          {/* Tabs */}
          <div className="mt-10 flex gap-4">
            <button className="bg-[#0E2A47] text-white px-4 py-2 rounded-full">
              Description
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full">
              Additional Info
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full">
              Reviews (3)
            </button>
          </div>
        </div>
      </div>
      <section className="pb-44 px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Funny Key Operated Bee Toy",
              old: 80,
              new: 50,
              img: "/proct.jpg",
            },
            { name: "Mix Kids Cube Toys", old: 60, new: 50, img: "/proct.jpg" },
            {
              name: "Revolving New Hot 007 JCB",
              old: 80,
              new: 50,
              img: "/proct.jpg",
            },
            {
              name: "Power Ranger Talwar Toy",
              old: 80,
              new: 50,
              img: "/proct.jpg",
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="text-center border border-[#000000] shadow-[3px_3px_0_#000000] transition-transform hover:scale-[1.02] cursor-pointer pb-4"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={600}
                height={600}
                className="w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1C3658]">
                {product.name}
              </h3>
              <p className="text-lg text-[#1C3658]">Location: Katy</p>
              <p className="text-gray-600 line-through">${product.old}.00</p>
              <p className="text-2xl text-[#1C3658] font-bold">
                ${product.new}.00
              </p>
            </div>
          ))}
        </div>
        {/* Botón final */}
        <div className="text-center mt-14">
          <button>Shop All Products</button>
        </div>
      </section>
    </div>
  );
}
