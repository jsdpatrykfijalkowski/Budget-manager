import * as Yup from "yup";
import { regexps } from "../../utils/constans";

export const ReceiptValidationSchema = Yup.object().shape({
    shopName: Yup.string()
        .min(5, "Too Short!")
        .matches(regexps.NOT_ONLY_SPEC_CHAR_AND_NUMS, `nie  spec char i cyfry`)
        .required("Required"),
    date: Yup.string().required("Required"),
});
