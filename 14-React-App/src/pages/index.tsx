import { useState, useEffect } from "react";

import BookCard from "@/components/book-card";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";

import { getBooks, Book } from "@/utils/apis/books";

const Index = () => {
  const { toast } = useToast();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
