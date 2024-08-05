import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { axiosAPI } from "../middleware/axiosHelper";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [initialFormData, setInitialFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await axiosAPI.get(`/products/${id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Product Data", response.data);
        setInitialFormData(response.data?.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductInfo();
  }, []);

  const handleProductUpdate = async (formData) => {
    console.log("formData", formData);
    const controller = new AbortController();

    try {
      const response = await axiosAPI.post(
        "/products/" + id,
        {
          name: formData?.name,
          description: formData?.description,
          price: formData?.price,
          stock: formData?.stock,
          color: formData?.color,
        },
        {
          signal: controller.signal,
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      navigate("/products");
    } catch (error) {
      console.log("Error" + error);
    } finally {
      controller.abort("Aborted Creation");
    }
  };

  return (
    <ProductForm
      initialFormData={initialFormData}
      onSubmit={handleProductUpdate}
      formText="Update Product"
    />
  );
};

export default UpdateProduct;
