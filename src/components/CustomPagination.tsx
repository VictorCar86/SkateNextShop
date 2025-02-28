"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

export function CustomPagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!paginationRef.current) return;

    // Set initial value based on pagination width
    setIsMobile(paginationRef.current.offsetWidth < 700);

    // Create ResizeObserver to watch pagination width
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsMobile(entry.contentRect.width < 700);
      }
    });

    // Start observing the pagination element
    resizeObserver.observe(paginationRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/shop?${params.toString()}`);
  };

  const isDisabled = "opacity-50 pointer-events-none cursor-default";
  const isActive = "cursor-pointer";

  const getVisiblePages = () => {
    const delta = isMobile ? 1 : 2; // Show more numbers on larger screens
    const range = [];
    const rangeWithDots = [];
    let l;

    // For mobile, only show first, current, and last if we have many pages
    if (isMobile && totalPages > 5) {
      if (currentPage <= 2) {
        range.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        range.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, currentPage, totalPages);
      }
    } else {
      range.push(1);
      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < totalPages && i > 1) {
          range.push(i);
        }
      }
      range.push(totalPages);
    }

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    // Add dots between gaps
    for (const i of uniqueRange) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <Pagination ref={paginationRef}>
      <PaginationContent className="flex flex-wrap gap-1 sm:gap-2">
        <PaginationItem>
          <PaginationPrevious
            className={currentPage <= 1 ? isDisabled : isActive}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {getVisiblePages().map((pageNum, index) => (
          <PaginationItem key={index}>
            {pageNum === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={`${currentPage === pageNum ? isDisabled : isActive} min-w-[2rem] sm:min-w-[2.5rem] justify-center`}
                onClick={() => handlePageChange(pageNum as number)}
              >
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={currentPage >= totalPages ? isDisabled : isActive}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
