import { Trash2 } from "lucide-react";

import Layout from "@/components/layout";

import useCartStore from "@/utils/state";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, deleteBook } = useCartStore();

  async function onBorrow() {
    const body = {
      bookId: cart.map((item) => item.id),
      borrow_date: new Date().toISOString(),
    };

    console.log(body);
  }

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {cart.map((book) => (
          <div className="flex gap-2 items-center" key={book.id}>
            <img
              className="object-contain w-40"
              src={book.cover_image}
              alt={book.title}
            />
            <p className="flex-grow">{book.title}</p>
            <Trash2 onClick={() => deleteBook(book)} />
          </div>
        ))}
        <Button onClick={() => onBorrow()}>Borrow</Button>
      </div>
    </Layout>
  );
};

export default Cart;
