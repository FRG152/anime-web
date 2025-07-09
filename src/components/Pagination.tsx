"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PaginationComponent = () => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const [num, setNum] = useState(0);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleParams = (page: string) => {
    const params = new URLSearchParams();

    if (page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params}`, { scroll: false });
  };

  const handleSelecttPage = (page: string) => {
    setCurrentPage(Number(page));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 12062; i++) {
      setTotalPages((prev) => [...prev, i]);
    }
  }, []);

  useEffect(() => {
    handleParams(currentPage.toString());
    console.log(currentPage, totalPages.slice(0, 5).length);

    if (currentPage >= totalPages.slice(0, 5).length) setNum(num + 1);
  }, [currentPage]);

  return (
    <Pagination className="py-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePrevPage()}
            className="text-red-500"
          />
        </PaginationItem>
        {totalPages.slice(0 + num, 5 + num).map((page) => (
          <PaginationItem
            key={page}
            onClick={(e) =>
              handleSelecttPage((e.target as HTMLElement).innerText)
            }
          >
            {currentPage === page ? (
              <PaginationLink className="text-red-500" href="#" isActive>
                {page}
              </PaginationLink>
            ) : (
              <PaginationLink className="text-red-500" href="#">
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis className="text-red-500" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handleNextPage()}
            className="text-red-500"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
