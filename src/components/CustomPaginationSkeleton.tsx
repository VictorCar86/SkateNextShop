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

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function CustomPaginationSkeleton({ currentPage, totalPages }: PaginationProps) {
  // Simplified styles
  const isDisabled = "opacity-50 pointer-events-none cursor-default";
  const isActive = "cursor-pointer";

  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap gap-1 sm:gap-2">
        <PaginationItem>
          <PaginationPrevious className={currentPage <= 1 ? isDisabled : isActive} />
        </PaginationItem>

        {/* First page */}
        <PaginationItem>
          <PaginationLink
            className={`${currentPage === 1 ? isDisabled : isActive} min-w-[2rem] sm:min-w-[2.5rem] justify-center`}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {/* Ellipsis if needed */}
        {totalPages > 3 && currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Current page (if not first or last) */}
        {currentPage !== 1 && currentPage !== totalPages && (
          <PaginationItem>
            <PaginationLink
              className={`${isDisabled} min-w-[2rem] sm:min-w-[2.5rem] justify-center`}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis if needed */}
        {totalPages > 3 && currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Last page (if not the same as first) */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink
              className={`${currentPage === totalPages ? isDisabled : isActive} min-w-[2rem] sm:min-w-[2.5rem] justify-center`}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext className={currentPage >= totalPages ? isDisabled : isActive} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
