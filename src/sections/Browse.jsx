import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { Filters } from "../constants/data";
import { IoFilter } from "react-icons/io5";
import { Books } from "../constants/data";
import BookModal from "../components/BookModal";

function Browse() {
  const [isHidden, setIsHidden] = useState(false);
  const [buttonFilter, setButtonFilter] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleFilters = () => {
    setIsHidden(!isHidden);
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    const handleFilterbutton = () => {
      if (window.innerWidth < 640) {
        setIsHidden(true);
        setButtonFilter(true);
      } else {
        setButtonFilter(false);
      }
    };

    handleFilterbutton();
    window.addEventListener("resize", handleFilterbutton);

    return () => {
      window.removeEventListener("resize", handleFilterbutton);
    };
  }, []);

  return (
    <section className=" flex gap-5 px-5 ">
      
      
  

      {/* modal */}
      <BookModal selectedBook={selectedBook} closeModal={closeModal} />
    </section>
  );
}

export default Browse;
