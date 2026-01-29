import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: (data, id) => {
      toast.success(`Booking #${id} successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: () => toast.error("There was error while deleting "),
  });

  return { deleteBooking, isDeletingBooking };
}
