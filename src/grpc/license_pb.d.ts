// package: 
// file: license.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class License extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): void;

    getStatus(): string;
    setStatus(value: string): void;

    getActive(): string;
    setActive(value: string): void;

    getExpire(): string;
    setExpire(value: string): void;

    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): License.AsObject;
    static toObject(includeInstance: boolean, msg: License): License.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: License, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): License;
    static deserializeBinaryFromReader(message: License, reader: jspb.BinaryReader): License;
}

export namespace License {
    export type AsObject = {
        version: string,
        status: string,
        active: string,
        expire: string,
        token: string,
    }
}

export class LicenseResponse extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasLicense(): boolean;
    clearLicense(): void;
    getLicense(): License | undefined;
    setLicense(value?: License): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseResponse): LicenseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseResponse;
    static deserializeBinaryFromReader(message: LicenseResponse, reader: jspb.BinaryReader): LicenseResponse;
}

export namespace LicenseResponse {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        license?: License.AsObject,
    }
}

export class LicenseGetRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseGetRequest): LicenseGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseGetRequest;
    static deserializeBinaryFromReader(message: LicenseGetRequest, reader: jspb.BinaryReader): LicenseGetRequest;
}

export namespace LicenseGetRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class LicenseAddRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getToken(): string;
    setToken(value: string): void;

    getLicense(): string;
    setLicense(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseAddRequest): LicenseAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseAddRequest;
    static deserializeBinaryFromReader(message: LicenseAddRequest, reader: jspb.BinaryReader): LicenseAddRequest;
}

export namespace LicenseAddRequest {
    export type AsObject = {
        requestId: number,
        token: string,
        license: string,
    }
}
