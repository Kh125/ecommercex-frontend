import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import useAxiosPrivate from "../middleware/usePrivateAxios";
import { createToastMessage } from "../utils/ToastMessage";

const CreateProduct = () => {
  const navigate = useNavigate();
  const axiosPrivateAPI = useAxiosPrivate();

  const handleProductCreate = async (formData) => {
    // console.log("formData", formData);
    const controller = new AbortController();

    try {
      const response = await axiosPrivateAPI.post(
        "/products",
        {
          name: formData?.name,
          description: formData?.description,
          price: formData?.price,
          stock: formData?.stock,
          color: formData?.color,
        },
        {
          signal: controller.signal,
        }
      );

      // console.log(response.data);
      navigate("/products");
      createToastMessage("Product is successfully created!");
    } catch (error) {
      console.log("Error" + error);
    } finally {
      controller.abort("Aborted Creation");
    }
  };

  return (
    <ProductForm
      onSubmit={handleProductCreate}
      formText="Create New Product"
      buttonText="Create"
    />
  );
};

export default CreateProduct;
