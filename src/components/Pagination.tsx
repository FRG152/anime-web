"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = () => {
  return (
    <Pagination className="py-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="text-red-500" />
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis className="text-red-500" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="text-red-500" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
