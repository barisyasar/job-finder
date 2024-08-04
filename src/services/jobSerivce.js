import axiosInstance from "@/config/axiosInstance";

export const getJobs = async ({
  page = 1,
  perPage = 10,
  orderByField,
  orderByDirection,
  searchField,
  searchQuery,
}) => {
  const response = await axiosInstance.get("/jobs", {
    params: {
      page,
      perPage,
      orderBy: orderByField
        ? {
            field: orderByField,
            direction: orderByDirection,
          }
        : null,
      search: searchQuery
        ? {
            field: searchField,
            query: searchQuery,
          }
        : null,
    },
  });

  return response.data;
};

export const applyJob = async ({ id }) => {
  const response = await axiosInstance.post(`/jobs/${id}/apply`);
  return response.data;
};

export const getAppliedJobs = async (id) => {
  const response = await axiosInstance.get(`/jobs/${id}`);
  return response.data;
};
