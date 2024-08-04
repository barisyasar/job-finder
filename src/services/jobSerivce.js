import axiosInstance from "@/config/axiosInstance";

export const getJobs = async ({
  page = 1,
  perPage = 10,
  orderByField = "id",
  orderByDirection = "asc",
  searchField = "name",
  searchQuery = "",
}) => {
  const response = await axiosInstance.get("/jobs", {
    query: {
      page,
      perPage,
      orderBy: {
        [orderByField]: orderByDirection,
      },
      search: {
        [searchField]: searchQuery,
      },
    },
  });

  return response.data;
};
