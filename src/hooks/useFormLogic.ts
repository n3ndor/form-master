import { useEffect, useState } from "react";
import { fetchFormBlocks } from "../utils/formApi";
import { handleSubmit as handleFormSubmit } from "../utils/formLogic";

export const useFormLogic = () => {

  const [formObj, setFormObj] = useState<any>({ blocks: [] });

  useEffect(() => {

    (async () => {
      try {
        const response = await fetchFormBlocks();
        setFormObj(response.data);
      } catch (error) {
        console.error("Error fetching form blocks:", error);
      }
    })();

  }, []);

  const handleSubmit = (data: any, { completeForm, setIsSubmitting }: { completeForm: () => void, setIsSubmitting: (isSubmitting: boolean) => void }) => {
    
    handleFormSubmit(data, completeForm, setIsSubmitting);
  };

  return { formObj, handleSubmit };
};