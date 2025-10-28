import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckoutDialog } from "./CheckoutDialog";

export const CartSheet = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-cinzel">Your Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-8 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.name} className="flex gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold font-noto">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeFromCart(item.name)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between text-lg font-bold font-cinzel">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full font-cinzel" size="lg" onClick={() => setShowCheckout(true)}>
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <CheckoutDialog open={showCheckout} onOpenChange={setShowCheckout} />
    </>
  );
};
