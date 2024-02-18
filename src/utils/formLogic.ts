export const handleSubmit = (data: any, completeForm: () => void, setIsSubmitting: (isSubmitting: boolean) => void) => {

  console.log("Form Submit Data:", data);
  setTimeout(() => {
    setIsSubmitting(false);
    completeForm();
  }, 500);
}