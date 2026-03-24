import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface SignupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginClick: () => void;
}

export function SignupModal({ isOpen, onOpenChange, onLoginClick }: SignupModalProps) {
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Signup successful!");
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Registracija</DialogTitle>
          <DialogDescription className="text-center">
            Kreirajte nalog na prvoj aukcijskoj stranici u Bosni i Hercegovini.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignup} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">Ime</Label>
              <Input id="firstname" placeholder="Unesite ime" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Prezime</Label>
              <Input id="lastname" placeholder="Unesite prezime" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email adresa</Label>
            <Input id="email" type="email" placeholder="Unesite email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Broj telefona</Label>
            <Input id="phone" type="tel" placeholder="+387 6X XXX XXX" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresa</Label>
            <Input id="address" placeholder="Unesite adresu" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Lozinka</Label>
            <Input id="password" type="password" placeholder="Kreirajte lozinku" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Potvrdite lozinku</Label>
            <Input id="confirm-password" type="password" placeholder="Ponovite lozinku" required />
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <input type="checkbox" id="terms" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" required />
            <Label htmlFor="terms" className="text-sm font-normal text-slate-600">
              Prihvatam uslove korištenja i politiku privatnosti
            </Label>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
            Registruj se
          </Button>
        </form>
        <div className="text-center text-sm text-slate-500 mt-2">
          Već imate nalog?{" "}
          <Button variant="link" className="p-0 text-blue-600" onClick={onLoginClick}>
            Prijavite se
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
