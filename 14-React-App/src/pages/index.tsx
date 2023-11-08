import { useState, useEffect } from "react";

import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

import { getBooks, Book } from "@/utils/apis/books";

const Index = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
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
