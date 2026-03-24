import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Gavel } from "lucide-react";

// Mock data based on the provided HTML
const products = [
  {
    id: 1,
    title: "Punjač za Iphone",
    description: "Adapter - punjac jacine 20W za brzo punjenje ( 0%-50% za ~30min).",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Februar 15, 2026",
    startTime: "10:00 AM",
    startingBid: 10.00,
    timeLeft: "02:15:30",
    category: "Elektronika"
  },
  {
    id: 2,
    title: "Punjač za Android",
    description: "Standardni strujni punjač sa funkcijom brzog punjenja od 15 W. Povezivanje: USB-C.",
    image: "https://images.unsplash.com/photo-1615526659134-4fa2d9760777?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Februar 15, 2026",
    startTime: "10:00 AM",
    startingBid: 5.00,
    timeLeft: "05:45:12",
    category: "Elektronika"
  },
  {
    id: 3,
    title: "Playstation 4",
    description: "PS4 konzola, koji pruža izuzetnu snagu za igranje, neverovatnu zabavu i živopisnu HDR tehnologiju.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Februar 15, 2026",
    startTime: "10:00 AM",
    startingBid: 70.00,
    timeLeft: "12:30:00",
    category: "Uređaji"
  },
  {
    id: 4,
    title: "Pametni Sat Pro",
    description: "Najnoviji pametni sat sa praćenjem otkucaja srca, GPS-om i vodootpornim dizajnom.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Mart 01, 2026",
    startTime: "12:00 PM",
    startingBid: 120.00,
    timeLeft: "24:00:00",
    category: "Uređaji"
  },
  {
    id: 5,
    title: "Zlatna Ogrlica",
    description: "Prelijepa 14k zlatna ogrlica sa dijamantskim privjeskom. Savršen poklon.",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Mart 05, 2026",
    startTime: "09:00 AM",
    startingBid: 250.00,
    timeLeft: "48:00:00",
    category: "Nakit"
  },
  {
    id: 6,
    title: "Kožni Novčanik",
    description: "Ručno rađeni kožni novčanik od prave italijanske kože sa RFID zaštitom.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400&h=400",
    startDate: "Mart 10, 2026",
    startTime: "15:00 PM",
    startingBid: 35.00,
    timeLeft: "72:00:00",
    category: "Aksesoar"
  }
];

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1555529733-0e67056058e1?auto=format&fit=crop&q=80&w=2000&h=600" 
          alt="Hero" 
          className="w-full h-[400px] object-cover opacity-50"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <Badge className="w-fit mb-4 bg-blue-600 hover:bg-blue-700">Novo na Aukcija.ba</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Pronađite nevjerovatne ponude na aukcijama
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Pridružite se prvoj i najvećoj aukcijskoj platformi u Bosni i Hercegovini. Licitirajte za elektroniku, nakit, uređaje i još mnogo toga.
          </p>
          <Button size="lg" className="w-fit bg-blue-600 hover:bg-blue-700 text-white">
            Pregledaj sve aukcije
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Aktivne Aukcije</h2>
        <Button variant="outline">Prikaži sve</Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-slate-200">
            <div className="relative h-64 overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
                {product.category}
              </Badge>
            </div>
            
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{product.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mt-1 h-10">
                {product.description}
              </p>
            </CardHeader>
            
            <CardContent className="pb-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2 rounded-md">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Počinje: <span className="font-semibold">{product.startDate}</span> u {product.startTime}</span>
                </div>
                
                <div className="flex items-end justify-between mt-2">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Početna cijena</p>
                    <p className="text-2xl font-bold text-slate-900">{product.startingBid.toFixed(2)} KM</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Preostalo vrijeme</p>
                    <p className="text-lg font-mono font-bold text-red-600">{product.timeLeft}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white group">
                <Gavel className="mr-2 h-4 w-4 group-hover:-rotate-12 transition-transform" />
                Registruj se da bidaš
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
