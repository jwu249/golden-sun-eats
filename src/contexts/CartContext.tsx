import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

export interface CartItem {
  name: string;
  price: number;
  details?: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        toast({
          title: "Added to cart",
          description: `${item.name} quantity increased`,
        });
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast({
        title: "Added to cart",
        description: `${item.name} added to your cart`,
      });
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setItems((prev) => prev.filter((i) => i.name !== itemName));
    toast({
      title: "Removed from cart",
      description: "Item removed from your cart",
    });
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.name === itemName ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
