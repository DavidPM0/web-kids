import { SearchVenueService } from "@/components/search/Search";
import { Button, buttonVariants } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1C3658] flex flex-col md:flex-row items-center justify-between px-40 py-24">
        <div className="md:w-1/2 space-y-4">
          <Image
            src="/hero-arriba.png"
            alt="bashwish"
            width={300}
            height={100}
            className="object-cover mb-12"
          />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Plan The Perfect Kids' Party In Minutes
          </h1>
          <p className="text-lg text-gray-200">
            Discover, Compare, And Book Top-Rated Birthday Venues In Houston —
            All In One Place. Whether It's Unicorns, Dinosaurs, Or Bounce
            Castles, BashWish Makes It Easy.
          </p>
          <Button variant="golden" size="golden">
            Browse Venue
          </Button>
          <Image
            src="/hero-abajo.png"
            alt="bashwish"
            width={500}
            height={100}
            className="object-cover mt-4"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src="/hero-img.png"
            alt="Kids Party"
            width={800}
            height={800}
            className="object-cover"
          />
        </div>
      </section>

      {/* Categorías - Texto en movimiento */}
      <section className="bg-[#1C3658] py-8 overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee text-white text-3xl font-semibold px-6">
          <span className="text-yellow-400 mr-1">⭐</span>
          Currently available in Houston. More cities coming soon!
          <span className="text-yellow-400 mr-1">⭐</span>
          Currently available in Houston. More cities coming soon!
          <span className="text-yellow-400 mr-1">⭐</span>
          Currently available in Houston. More cities coming soon!
          <span className="text-yellow-400 mr-1">⭐</span>
          Currently available in Houston. More cities coming soon!
          <span className="text-yellow-400 mr-1">⭐</span>
          Currently available in Houston. More cities coming soon!
        </div>
      </section>

      <SearchVenueService />

      {/* Formulario */}
      {/* <section className="pt-44 px-6 md:px-20 lg:px-40">
        <div className="mx-auto">
          <Image
            src="/pro-izquierda.png"
            alt="Kids Party"
            width={130}
            height={130}
            className="object-cover mx-auto mb-6"
          />
          <h2 className="text-4xl font-bold text-[#1C3658] mb-6 text-center">
            How old is your kid?
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                When are you planning to celebrate?
              </label>
              <input
                type="text"
                placeholder="Choose Date"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
            </div>

         
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                How many kids are going to be invited *
              </label>
              <input
                type="number"
                placeholder="Enter number of kids"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
            </div>

           
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                Any preferences on party?
              </label>
              <input
                type="text"
                placeholder="Active"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
            </div>

           
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
            </div>

          
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
            </div>

           
            <div>
              <label className="block text-lg text-[#1C3658] mb-1">
                Location
              </label>
              <select
                defaultValue="" 
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              >
                <option value="" disabled>
                  Select an area
                </option>
                <option value="downtown">Downtown</option>
                <option value="midtown">Midtown</option>
                <option value="galleria_uptown">Galleria / Uptown</option>
                <option value="montrose">Montrose</option>
                <option value="the_heights">The Heights</option>
                <option value="river_oaks">River Oaks</option>
                <option value="west_university">West University</option>
                <option value="memorial">Memorial</option>
                <option value="katy">Katy</option>
                <option value="sugar_land">Sugar Land</option>
                <option value="the_woodlands">The Woodlands</option>
                <option value="clear_lake">Clear Lake</option>
                <option value="spring_branch">Spring Branch</option>
              </select>
            </div>

            
            <div className="md:col-span-3">
              <label className="block text-lg text-[#1C3658] mb-1">
                Additional Message
              </label>
              <textarea
                placeholder="Enter your additional message"
                rows={2}
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658] resize-none"
              />
            </div>

            
            <div className="md:col-span-3 flex justify-center mt-4">
              <Button variant="golden" size="golden">
                Explore Venues
              </Button>
            </div>
          </form>
        </div>
      </section> */}

      {/* Productos */}
      <section className="py-44 px-40">
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
          <Button variant="golden" size="golden">
            Show All Products
          </Button>
        </div>
      </section>

      {/* === NUEVAS SECCIONES === */}

      {/* Testimonios */}
      <section className="text-center pt-0 pb-44 px-40">
        <Image
          src="/pro-medio.png"
          alt="Kids Party"
          width={100}
          height={100}
          className="object-cover mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold text-[#1C3658] mb-6">
          Our Testimonial
        </h2>
        <p className="text-lg text-[#1C3658] max-w-xl mx-auto mb-14">
          Phasellus Sem Lorem, Blandit Vitae Lucus Ac, Sodales Bibendum Sapien.
          In Sodales Vestibulum Quam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Jessika Lisa",
              role: "Fashion Designer",
              color: "bg-[#1C3658]",
            },
            {
              name: "Kimberly",
              role: "Fashion Designer",
              color: "bg-[#F8BD36]",
            },
            {
              name: "Amanda Carol",
              role: "Fashion Designer",
              color: "bg-[#1C3658]",
            },
            {
              name: "Kimberly",
              role: "Fashion Designer",
              color: "bg-[#F8BD36]",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} text-[#FBF2E0] p-14 border border-[#000000] shadow-[3px_3px_0_#000000]`}
            >
              <div className="text-xl text-[#FBF2E0] mb-3">★★★★★</div>
              <p className="text-lg mb-4">
                "Excellent service and great collection. My kid loves every
                product we bought here!"
              </p>
              <img
                src="/av-girl.png"
                alt="Kids Group"
                width={80}
                height={80}
                className="mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg text-gray-200">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Venues */}
      <section className="pt-0 pb-44 px-40 text-center">
        <Image
          src="/galeria.png"
          alt="Kids Party"
          width={180}
          height={180}
          className="object-cover mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold text-[#1C3658] mb-6">Best Venues</h2>
        <p className="text-lg text-[#1C3658] mb-14 max-w-xl mx-auto">
          Etiam placerat, nisi ut porta fermentum, vestibulum ut sodales quam,
          ut iaculis augue.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-6 gap-4 px-6">
          <Image
            src="/venue6.jpg"
            alt="Venue"
            width={1200}
            height={600}
            className="col-span-2 row-span-2 object-cover w-full h-full border border-[#000000]"
          />
          <Image
            src="/venue4.jpg"
            alt="Venue"
            width={600}
            height={600}
            className="col-span-1 row-span-3 object-cover w-full h-full border border-[#000000]"
          />

          {/* Imagen 2: ocupa dos filas (vertical) */}
          <Image
            src="/venue3.jpg"
            alt="Venue"
            width={1000}
            height={1800}
            className="col-span-1 row-span-6 object-cover w-full h-full border border-[#000000] shadow-[3px_3px_0_#000000]"
          />

          <Image
            src="/venue7.jpg"
            alt="Venue"
            width={1200}
            height={600}
            className="col-span-2 row-span-2 object-cover w-full h-full border border-[#000000]"
          />

          {/* Imagen 3 */}
          <Image
            src="/venue5.jpg"
            alt="Venue"
            width={600}
            height={600}
            className="col-span-1 row-span-3 object-cover w-full h-full border border-[#000000]"
          />

          {/* Imagen 4 */}
          <Image
            src="/venue1.jpg"
            alt="Venue"
            width={600}
            height={600}
            className="col-span-1 row-span-2 object-cover w-full h-full border border-[#000000]"
          />

          {/* Imagen 4 */}
          <Image
            src="/venue2.jpg"
            alt="Venue"
            width={600}
            height={600}
            className="col-span-1 row-span-2 object-cover w-full h-full border border-[#000000]"
          />
        </div>
      </section>

      {/* Sección intermedia con fondo estrellado */}
      <section className="relative pt-44 pb-44">
        {/* Fondo azul con estrellitas */}
        <div
          className="absolute inset-0 bg-[#1C3658] bg-[url('/dots.png')] bg-cover z-0"
          style={{ height: "calc(100% - 350px)" }}
        />

        {/* Tarjeta amarilla encima */}
        <div className="relative z-10 bg-[#F8BD36] mx-6 md:mx-40 border border-black shadow-[3px_3px_0_#000000] p-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-5xl font-bold text-[#1C3658]">
              Trendy Garments For Your Kids At The Best Range.
            </h2>
            <div className="text-[#1C3658] text-2xl">
              <p className="font-bold">STORE TIMING</p>
              <p>Monday - Friday (8.00am To 8.00pm)</p>
              <p>Saturday - Sunday (10.00am To 5.00pm)</p>
            </div>
            <Button variant="golden" size="golden">
              Shop All Products
            </Button>
          </div>

          <div className="md:w-1/2 md:mt-0 flex justify-end">
            <img src="/ft-ns.jpg" alt="Kids Group" width={600} height={600} />
          </div>
        </div>
      </section>
    </div>
  );
}
