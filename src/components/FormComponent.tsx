import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { useFormLogic } from "../hooks/useFormLogic";

registerCoreBlocks();

const FormComponent = () => {
  
  const {formObj, handleSubmit} = useFormLogic();

  return(
    <Form
    formId={1}
    applyLogic={true}
    formObj={formObj}
    onSubmit={handleSubmit}
    />
  )
}

export default FormComponent;