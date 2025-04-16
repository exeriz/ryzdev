import { PaginationInterface } from "@/assets/types/pagination";
import { Button } from "@/components/Buttons/Button";

export function Pagination({
  currentPage,
  totalPages,
  onChangePage,
}: Readonly<PaginationInterface>) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className="border-t border-gray-50/10 pt-8"
    >
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-start">
          {currentPage > 1 && (
            <Button onClick={handlePreviousPage} variant="soft" aria-label={`Button to page ${currentPage - 1}`}>
              <span aria-hidden="true">&larr;</span> Previous
            </Button>
          )}
        </div>
        <div className="flex justify-end">
          {currentPage < totalPages && (
            <Button onClick={handleNextPage} variant="soft" aria-label={`Button to page ${currentPage + 1}`}>
              Next <span aria-hidden="true">&rarr;</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}