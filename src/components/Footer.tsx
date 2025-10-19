import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-sm relative">
      {/* 🌥️ Imagen decorativa superior */}
      <div className="w-full bg-[#FBF2E0]">
        <Image
          src="/ft-nube.png"
          alt="Decorative Clouds"
          width={1920}
          height={234}
          className="w-full h-auto"
        />
      </div>

      {/* 🟦 Contenido principal del footer */}
      <div className="bg-[#1C3658] mt-[-1px] text-[#FBF2E0]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo + contacto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Titoo Logo" width={150} height={150} />
            </div>
            <p>1245, North Western Street<br />Europia, Lumbio</p>
            <p>Call Us: +31 (0) 123 456 789</p>
            <p>chocolatier@admin.com</p>
          </div>

          {/* Useful Links */}
          <div>
            <Image src="/ft-izquierda.png" alt="Titoo Logo" width={100} height={100} />
            <Image src="/ft-izquierda-2.png" className='mt-4' alt="Titoo Logo" width={100} height={100} />
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Delivery + Social */}
          <div>
            <Image src="/ft-derecha.png" alt="Titoo Logo" width={100} height={100} />
            <Image src="/ft-derecha-2.png" className='mt-4' alt="Titoo Logo" width={100} height={100} />
          </div>

          {/* Need Help */}
          <div>
            <h3 className="font-semibold mb-3">Need Help</h3>
            <p className="mb-2">+123 - 589 - 45895<br />+123 - 589 - 45264</p>
            <p className="mb-2">Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 9am - 3pm<br />Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* 👤 Imagen decorativa sobrepuesta, alineada a la izquierda y por encima de la barra amarilla */}

      {/* 🟨 Barra inferior con mismo ancho que el bloque principal */}
      <div className="bg-[#F8BC36] text-[#1C3658] py-2 relative z-10">
        <div className="absolute -top-[45px] left-0 z-20">
        <Image
          src="/ft-izquierdo.png"
          alt="Personaje decorativo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
        <div className="max-w-7xl mx-auto py-3 px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 titoo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
