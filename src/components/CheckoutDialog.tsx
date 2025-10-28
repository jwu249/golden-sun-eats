import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: CheckoutDialogProps) => {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const downloadOrder = () => {
    const orderDate = new Date().toLocaleString();
    let orderText = `Golden Sun Chinese Restaurant - Order\n`;
    orderText += `Date: ${orderDate}\n\n`;
    orderText += `Customer Information:\n`;
    orderText += `Name: ${formData.name}\n`;
    orderText += `Email: ${formData.email}\n`;
    orderText += `Phone: ${formData.phone}\n`;
    orderText += `Address: ${formData.address}\n`;
    if (formData.notes) {
      orderText += `Notes: ${formData.notes}\n`;
    }
    orderText += `\n${"=".repeat(50)}\n\n`;
    orderText += `Order Items:\n`;
    orderText += `${"=".repeat(50)}\n\n`;
    
    items.forEach((item) => {
      orderText += `${item.name}\n`;
      orderText += `  Category: ${item.category}\n`;
      orderText += `  Price: $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
      if (item.details) {
        orderText += `  Details: ${item.details}\n`;
      }
      orderText += `\n`;
    });
    
    orderText += `${"=".repeat(50)}\n`;
    orderText += `Total: $${total.toFixed(2)}\n`;
    orderText += `${"=".repeat(50)}\n`;

    const blob = new Blob([orderText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `golden-sun-order-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    downloadOrder();
    
    toast({
      title: "Order placed!",
      description: "Your order has been saved. We'll contact you shortly!",
    });
    
    clearCart();
    setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-cinzel text-2xl">Checkout</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2 font-cinzel">Order Summary</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {items.map((item) => (
                <div key={item.name} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t font-cinzel">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button type="submit" className="w-full font-cinzel" size="lg">
            Place Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
