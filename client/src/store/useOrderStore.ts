import { CheckoutSessionRequest, OrderState } from "@/types/orderType";
import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

const API_END_POINT = `${import.meta.env.VITE_API_BACKEND_URL || "http://localhost:8000"}/api/v1/order`;
axios.defaults.withCredentials = true;

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      loading: false,
      orders: [],
      createCheckoutSession: async (checkoutSession: CheckoutSessionRequest) => {
        try {
          set({ loading: true });
          const response = await axios.post(
            `${API_END_POINT}/checkout/create-checkout-session`,
            checkoutSession,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.session?.url) {
            window.location.href = response.data.session.url;
          } else {
            throw new Error("No session URL returned");
          }
          set({ loading: false });
        } catch (error: any) {
          set({ loading: false });
          toast.error(
            error.response?.data?.message || "Failed to initiate checkout. Please try again."
          );
          throw error; // Re-throw for caller to handle
        }
      },
      getOrderDetails: async () => {
        try {
          set({ loading: true });
          const response = await axios.get(`${API_END_POINT}/`);
          set({ loading: false, orders: response.data.orders });
        } catch (error: any) {
          set({ loading: false });
          toast.error(
            error.response?.data?.message || "Failed to fetch orders."
          );
        }
      },
    }),
    {
      name: "order-name",
      storage: createJSONStorage(() => localStorage),
    }
  )
);