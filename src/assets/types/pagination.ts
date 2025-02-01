export interface PaginationInterface {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}
