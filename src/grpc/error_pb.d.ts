// package: 
// file: error.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class ErrorField extends jspb.Message { 
    getField(): string;
    setField(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    getCode(): number;
    setCode(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorField.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorField): ErrorField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorField;
    static deserializeBinaryFromReader(message: ErrorField, reader: jspb.BinaryReader): ErrorField;
}

export namespace ErrorField {
    export type AsObject = {
        field: string,
        message: string,
        code: number,
    }
}

export class Error extends jspb.Message { 
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearFieldList(): void;
    getFieldList(): Array<ErrorField>;
    setFieldList(value: Array<ErrorField>): void;
    addField(value?: ErrorField, index?: number): ErrorField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        code: number,
        message: string,
        fieldList: Array<ErrorField.AsObject>,
    }
}
