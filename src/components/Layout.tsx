import { Outlet, Link } from "react-router-dom";
import { Search, Heart, Bell, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

export function Layout() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl tracking-tighter text-slate-900">
              Aukcija<span className="text-blue-600">.ba</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <Input 
              type="text" 
              placeholder="Traži proizvode..." 
              className="w-full pl-4 pr-10 rounded-full bg-slate-100 border-transparent focus-visible:ring-blue-500"
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full rounded-r-full hover:bg-transparent text-slate-500">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-slate-600">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex text-slate-600">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="hidden md:flex items-center gap-2 border-l pl-4 ml-2">
              <Button variant="ghost" onClick={() => setIsLoginOpen(true)}>Prijava</Button>
              <Button onClick={() => setIsSignupOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">Registracija</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="md:hidden text-slate-600">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search - Visible only on small screens */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Traži proizvode..." 
              className="w-full pl-4 pr-10 rounded-full bg-slate-100 border-transparent"
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full rounded-r-full hover:bg-transparent text-slate-500">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="border-t hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex items-center gap-8 h-12 text-sm font-medium text-slate-600 overflow-x-auto">
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Aukcije</Link></li>
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Posljednji proizvodi</Link></li>
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Nakit</Link></li>
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Uređaji</Link></li>
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Elektronika</Link></li>
              <li><Link to="/" className="hover:text-blue-600 whitespace-nowrap">Aksesoar</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-2xl tracking-tighter text-white mb-4">
                Aukcija<span className="text-blue-500">.ba</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Prva aukcijska stranica u Bosni i Hercegovini. Pronađite najbolje ponude i licitirajte za svoje omiljene proizvode.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Korisni linkovi</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">O nama</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Kontakt</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Karijera</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Pravila</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Uslovi korištenja</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Politika privatnosti</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Pravila aukcija</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Kontakt</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Email: info@aukcija.ba</li>
                <li>Lokacija: Zeleni put 108, Ilidža</li>
                <li>71000 Sarajevo, BiH</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© 2026 Aukcija.ba. Sva prava zadržana.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/" className="hover:text-white">Terms</Link>
              <Link to="/" className="hover:text-white">Privacy</Link>
              <Link to="/" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} onSignupClick={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} />
      <SignupModal isOpen={isSignupOpen} onOpenChange={setIsSignupOpen} onLoginClick={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} />
    </div>
  );
}
