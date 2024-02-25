/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogUpdateFormInputValues = {
    name?: string;
    breed?: string;
    walkLength?: string;
};
export declare type DogUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    breed?: ValidationFunction<string>;
    walkLength?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogUpdateFormOverridesProps = {
    DogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    walkLength?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogUpdateFormProps = React.PropsWithChildren<{
    overrides?: DogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dog?: any;
    onSubmit?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onSuccess?: (fields: DogUpdateFormInputValues) => void;
    onError?: (fields: DogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onValidate?: DogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DogUpdateForm(props: DogUpdateFormProps): React.ReactElement;
