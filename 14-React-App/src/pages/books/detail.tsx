import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { Book, getDetailBook } from "@/utils/apis/books";
import useCartStore from "@/utils/state";

const DetailBook = () => {
  const { cart, addBook } = useCartStore();
  const { toast } = useToast();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook(params.id_book as string);
      setBook(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  function onClickBorrow() {
    toast({
      description: "Book has been added to cart.",
    });
    addBook(book!);
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full h-full py-6 px-3 gap-5 items-center">
        <img
          className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
          src={book?.cover_image}
          alt={book?.title}
        />
        <div className="flex flex-col gap-3 w-full">
          <div>
            <p className="font-bold text-2xl tracking-wide">{book?.title}</p>
            <p>by {book?.author}</p>
            <p>{book?.category}</p>
          </div>
          <Separator />
          <p>{book?.description}</p>
          <Button
            onClick={() => onClickBorrow()}
            disabled={isInCart}
            aria-disabled={isInCart}
          >
            {isInCart ? "In Cart" : "Borrow"}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailBook;
