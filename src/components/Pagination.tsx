import { PaginationInterface } from "@/assets/types/pagination";
import { Button } from "@/components/Buttons/Button";

export function Pagination({
  currentPage,
  totalPages,
  onChangePage,
}: Readonly<PaginationInterface>) {
  const year: number = new Date().getFullYear();

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
    <>
      <nav
        aria-label="Pagination"
        className="border-t border-gray-50/10 mt-16 pt-6"
      >
        <div className="grid grid-cols-2 w-full">
          <div className="flex justify-start">
            {currentPage > 1 && (
              <Button onClick={handlePreviousPage} variant="ghost" aria-label={`Button to page ${currentPage - 1}`} className="px-2.5 py-1">
                <span aria-hidden="true">&larr;</span> Previous
              </Button>
            )}
          </div>
          <div className="flex justify-end">
            {currentPage < totalPages && (
              <Button onClick={handleNextPage} variant="ghost" aria-label={`Button to page ${currentPage + 1}`} className="px-2.5 py-1">
                Next <span aria-hidden="true">&rarr;</span>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <footer className="w-full mt-6 py-2">
        <p className="text-xs text-gray-700 dark:text-gray-300">&copy; {year} RyzDev. All rights Reserved.</p>
      </footer>
    </>
  );
}