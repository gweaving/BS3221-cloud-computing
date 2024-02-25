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
export declare type DogCreateFormInputValues = {
    name?: string;
    breed?: string;
    walkLength?: string;
};
export declare type DogCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    breed?: ValidationFunction<string>;
    walkLength?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogCreateFormOverridesProps = {
    DogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    walkLength?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogCreateFormProps = React.PropsWithChildren<{
    overrides?: DogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DogCreateFormInputValues) => DogCreateFormInputValues;
    onSuccess?: (fields: DogCreateFormInputValues) => void;
    onError?: (fields: DogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DogCreateFormInputValues) => DogCreateFormInputValues;
    onValidate?: DogCreateFormValidationValues;
} & React.CSSProperties>;
export default function DogCreateForm(props: DogCreateFormProps): React.ReactElement;
