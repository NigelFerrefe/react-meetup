import { toast, Bounce } from "react-toastify";

const commonOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const showSuccessToast = (message) => {
  toast.success(message, commonOptions);
};

export const showErrorToast = (message) => {
  toast.error(message, commonOptions);
};