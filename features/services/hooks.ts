import { useQuery } from "react-query";
import { fetchServices } from "./api";
import { SERVICES } from "@/constants/tags";

export const useServices = () => {
  return useQuery(SERVICES, fetchServices, {
    keepPreviousData: true,
  });
};