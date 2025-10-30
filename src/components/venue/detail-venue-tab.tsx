import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Cake, Check, Pizza, Star, Ticket, Users } from "lucide-react";
import Image from "next/image";

export default function DetailVenueTab() {
  return (
    <>
      <div className="flex justify-between mb-4 sticky top-0 bg-[#FBF2E0] py-2 z-50">
        <nav className="flex items-center">
          <Button
            variant="ghost"
            asChild
            className="rounded-none border-b-2 border-transparent hover:border-[#1C3658] hover:bg-transparent text-base text-[#1C3658]"
          >
            <a href="#informacion">Información General</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-none border-b-2 border-transparent hover:border-[#1C3658] hover:bg-transparent text-base text-[#1C3658]"
          >
            <a href="#paquetes">Paquetes y Precios</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-none border-b-2 border-transparent hover:border-[#1C3658] hover:bg-transparent text-base text-[#1C3658]"
          >
            <a href="#opiniones">Opiniones</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-none border-b-2 border-transparent hover:border-[#1C3658] hover:bg-transparent text-base text-[#1C3658]"
          >
            <a href="#politicas">Políticas</a>
          </Button>
        </nav>
        <Button variant="golden" size="golden" className="z-10">
          <Link
            href="https://www.youtube.com/watch?v=vHTITVXyNSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprobar Disponibilidad
          </Link>
        </Button>
      </div>
      <div id="informacion" className="scroll-m-20 grid grid-cols-3">
        <Card className="col-span-2 bg-transparent border-0 shadow-none ">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Venue Chuck E Cheese
            </CardTitle>
            <div className="flex items-center gap-1 pt-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
              <span className="font-semibold ml-1">4.2</span>
              <a
                href="#opiniones"
                className="text-sm text-muted-foreground hover:underline ml-2"
              >
                (Ver 142 opiniones)
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Descripción del lugar (el "About the space..."). Lorem ipsum dolor
              sit amet...
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Lo más destacado</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Aforo</span>
                    <p className="text-sm text-muted-foreground">
                      Hasta 50 niños
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Edad Recomendada</span>
                    <p className="text-sm text-muted-foreground">5-10 años</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Membresía</span>
                    <p className="text-sm text-muted-foreground">
                      No requerida
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-[#F8BD36] text-[#1C3658]">Trampolines</Badge>
              <Badge className="bg-[#F8BD36] text-[#1C3658]">Interior</Badge>
              <Badge className="bg-[#F8BD36] text-[#1C3658]">Arcade</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-0 shadow-none">
          <CardHeader>
            <CardTitle>Explora el area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[250px] mb-6 grayscale">
              <iframe
                src="https://www.google.com/maps?q=New+York&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-none rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator />
      <div id="paquetes" className="scroll-m-20">
        <Card className="bg-transparent border-0 shadow-none ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Paquetes y Precios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* --- TARJETA PAQUETE 1: BÁSICO --- */}
              <Card className="flex flex-col">
                {" "}
                {/* flex flex-col es para que el botón se vaya al fondo */}
                <CardHeader>
                  <CardTitle className="text-xl">
                    Paquete Fiesta Básica
                  </CardTitle>
                  <p className="text-2xl font-bold pt-2">$250</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  {" "}
                  {/* flex-grow es para que ocupe el espacio */}
                  <p className="text-sm text-muted-foreground mb-4">
                    La opción perfecta para una celebración divertida y sin
                    complicaciones.
                  </p>
                  <Separator />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>
                        <span className="font-semibold">2 horas</span> de juego
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>
                        Hasta <span className="font-semibold">15 niños</span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Pizza className="w-5 h-5 text-primary" />
                      <span>2 Pizzas grandes</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  {/* Este botón podría abrir un Sheet/Dialog 
              para la captura de email/código de descuento.
            */}
                  <Button className="w-full">Seleccionar Paquete</Button>
                </div>
              </Card>

              {/* --- TARJETA PAQUETE 2: PREMIUM --- */}
              <Card className="flex flex-col border-2 border-primary">
                {" "}
                {/* Ejemplo de paquete destacado */}
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">
                      Paquete Súper Estrella
                    </CardTitle>
                    <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">
                      MÁS POPULAR
                    </span>
                  </div>
                  <p className="text-2xl font-bold pt-2">$400</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Toda la diversión del básico, ¡con extras increíbles!
                  </p>
                  <Separator />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>
                        <span className="font-semibold">3 horas</span> de juego
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>
                        Hasta <span className="font-semibold">25 niños</span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Pizza className="w-5 h-5 text-primary" />
                      <span>Pizzas ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Decoración temática</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Seleccionar Paquete</Button>
                </div>
              </Card>

              {/* ...puedes agregar una tercera tarjeta de paquete aquí */}
            </div>
          </CardContent>
        </Card>
      </div>
      <div id="opiniones" className="scroll-m-20">
        <Card className="bg-transparent border-0 shadow-none ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Opiniones de Google
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aquí iría el listado de reseñas...</p>
          </CardContent>
        </Card>
      </div>
      <div id="politicas" className="scroll-m-20">
        <Card className="bg-transparent border-0 shadow-none ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Políticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* --- Bloque de Política 1 --- */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Políticas de Cancelación
                </h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Cancelación gratuita hasta 7 días antes del evento.</li>
                  <li>
                    Penalidad del 50% si se cancela con menos de 7 días de
                    antelación.
                  </li>
                  <li>
                    No hay reembolso por cancelaciones 24 horas antes del
                    evento.
                  </li>
                </ul>
              </div>

              {/* --- Bloque de Política 2 (ej. Mascotas) --- */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Mascotas</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    No se permiten mascotas, excepto animales de servicio.
                  </li>
                  <li>
                    Se debe notificar la presencia de un animal de servicio con
                    antelación.
                  </li>
                </ul>
              </div>

              {/* --- Bloque de Política 3 (ej. Decoración) --- */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Decoración y Artículos Externos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Se permite traer decoración propia (globos, banners) siempre
                  que no dañe las paredes (no usar clavos ni cinta adhesiva
                  fuerte). El ingreso de comida o bebida externa puede tener un
                  costo adicional.
                </p>
              </div>

              {/* --- Bloque de Política 4 (Métodos de pago) --- */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Métodos de pago aceptados
                </h3>
                <div className="flex items-center gap-5">
                  {/* Aquí irían los logos, usando next/image */}
                  <Image
                    src="/icons/facebook.svg"
                    alt="Visa"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/icons/instagram.svg"
                    alt="Mastercard"
                    width={70}
                    height={70}
                  />
                  <Image
                    src="/icons/twitter.svg"
                    alt="American Express"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
