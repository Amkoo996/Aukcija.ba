import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSignupClick: () => void;
}

export function LoginModal({ isOpen, onOpenChange, onSignupClick }: LoginModalProps) {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    alert("Login successful!");
    onOpenChange(false);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Password reset email sent!");
    setIsForgotPassword(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) setIsForgotPassword(false);
    }}>
      <DialogContent className="sm:max-w-md">
        {!isForgotPassword ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Dobro došli nazad</DialogTitle>
              <DialogDescription className="text-center">
                Prijavite se da biste vidjeli proizvode i licitirali.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="username">Korisničko ime ili Email</Label>
                <Input id="username" placeholder="Unesite korisničko ime" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Lozinka</Label>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm text-blue-600" 
                    type="button"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Zaboravljena lozinka?
                  </Button>
                </div>
                <Input id="password" type="password" placeholder="Unesite lozinku" required />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Prijavi se
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    Ili nastavite sa
                  </span>
                </div>
              </div>

              <Button type="button" variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Prijava putem Google računa
              </Button>
            </form>
            <div className="text-center text-sm text-slate-500 mt-4">
              Nemate nalog?{" "}
              <Button variant="link" className="p-0 text-blue-600" onClick={onSignupClick}>
                Registrujte se
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Zaboravljena lozinka</DialogTitle>
              <DialogDescription className="text-center">
                Unesite svoju email adresu i poslat ćemo vam upute za ponovno postavljanje lozinke.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleForgotPassword} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email adresa</Label>
                <Input id="reset-email" type="email" placeholder="Unesite email" required />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Pošalji upute
              </Button>
              <div className="text-center mt-4">
                <Button variant="link" className="text-sm text-slate-500" onClick={() => setIsForgotPassword(false)}>
                  Nazad na prijavu
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
