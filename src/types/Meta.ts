import { Launch } from "./Launch";

export type Meta = {
  docs: Launch[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  prevPage: number | null;
  page: number;
  pagingCounter: number;
  totalDocs: number;
  totalPages: number;
};
