// package: 
// file: system.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";
import * as report_pb from "./report_pb";

export class SystemIndicatorsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemIndicatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemIndicatorsRequest): SystemIndicatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemIndicatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemIndicatorsRequest;
    static deserializeBinaryFromReader(message: SystemIndicatorsRequest, reader: jspb.BinaryReader): SystemIndicatorsRequest;
}

export namespace SystemIndicatorsRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class SystemIndicatorsData extends jspb.Message { 
    getLoad(): number;
    setLoad(value: number): void;

    getCpu(): number;
    setCpu(value: number): void;

    getMemory(): number;
    setMemory(value: number): void;

    getDisk(): number;
    setDisk(value: number): void;

    getDatastore(): number;
    setDatastore(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemIndicatorsData.AsObject;
    static toObject(includeInstance: boolean, msg: SystemIndicatorsData): SystemIndicatorsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemIndicatorsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemIndicatorsData;
    static deserializeBinaryFromReader(message: SystemIndicatorsData, reader: jspb.BinaryReader): SystemIndicatorsData;
}

export namespace SystemIndicatorsData {
    export type AsObject = {
        load: number,
        cpu: number,
        memory: number,
        disk: number,
        datastore: number,
    }
}

export class SystemIndicators extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasIndicators(): boolean;
    clearIndicators(): void;
    getIndicators(): SystemIndicatorsData | undefined;
    setIndicators(value?: SystemIndicatorsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemIndicators.AsObject;
    static toObject(includeInstance: boolean, msg: SystemIndicators): SystemIndicators.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemIndicators, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemIndicators;
    static deserializeBinaryFromReader(message: SystemIndicators, reader: jspb.BinaryReader): SystemIndicators;
}

export namespace SystemIndicators {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        indicators?: SystemIndicatorsData.AsObject,
    }
}

export class SystemInfoRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfoRequest): SystemInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfoRequest;
    static deserializeBinaryFromReader(message: SystemInfoRequest, reader: jspb.BinaryReader): SystemInfoRequest;
}

export namespace SystemInfoRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class SystemInfoData extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): void;

    getThreads(): number;
    setThreads(value: number): void;

    getDatastore(): string;
    setDatastore(value: string): void;

    getMemoryBytes(): number;
    setMemoryBytes(value: number): void;

    getSavedBytes(): number;
    setSavedBytes(value: number): void;

    getSwapBytes(): number;
    setSwapBytes(value: number): void;

    getUptime(): number;
    setUptime(value: number): void;

    getPlatform(): string;
    setPlatform(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfoData.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfoData): SystemInfoData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfoData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfoData;
    static deserializeBinaryFromReader(message: SystemInfoData, reader: jspb.BinaryReader): SystemInfoData;
}

export namespace SystemInfoData {
    export type AsObject = {
        version: string,
        threads: number,
        datastore: string,
        memoryBytes: number,
        savedBytes: number,
        swapBytes: number,
        uptime: number,
        platform: string,
    }
}

export class SystemInfo extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): SystemInfoData | undefined;
    setInfo(value?: SystemInfoData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfo): SystemInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfo;
    static deserializeBinaryFromReader(message: SystemInfo, reader: jspb.BinaryReader): SystemInfo;
}

export namespace SystemInfo {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        info?: SystemInfoData.AsObject,
    }
}

export class SystemMemoryRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemMemoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemMemoryRequest): SystemMemoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemMemoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemMemoryRequest;
    static deserializeBinaryFromReader(message: SystemMemoryRequest, reader: jspb.BinaryReader): SystemMemoryRequest;
}

export namespace SystemMemoryRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class SystemMemory extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemMemory.AsObject;
    static toObject(includeInstance: boolean, msg: SystemMemory): SystemMemory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemMemory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemMemory;
    static deserializeBinaryFromReader(message: SystemMemory, reader: jspb.BinaryReader): SystemMemory;
}

export namespace SystemMemory {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class SystemLoadRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemLoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemLoadRequest): SystemLoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemLoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemLoadRequest;
    static deserializeBinaryFromReader(message: SystemLoadRequest, reader: jspb.BinaryReader): SystemLoadRequest;
}

export namespace SystemLoadRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class SystemLoad extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemLoad.AsObject;
    static toObject(includeInstance: boolean, msg: SystemLoad): SystemLoad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemLoad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemLoad;
    static deserializeBinaryFromReader(message: SystemLoad, reader: jspb.BinaryReader): SystemLoad;
}

export namespace SystemLoad {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class SystemCpuRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemCpuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemCpuRequest): SystemCpuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemCpuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemCpuRequest;
    static deserializeBinaryFromReader(message: SystemCpuRequest, reader: jspb.BinaryReader): SystemCpuRequest;
}

export namespace SystemCpuRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class SystemCpu extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemCpu.AsObject;
    static toObject(includeInstance: boolean, msg: SystemCpu): SystemCpu.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemCpu, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemCpu;
    static deserializeBinaryFromReader(message: SystemCpu, reader: jspb.BinaryReader): SystemCpu;
}

export namespace SystemCpu {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class SystemDiskLoadRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemDiskLoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemDiskLoadRequest): SystemDiskLoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemDiskLoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemDiskLoadRequest;
    static deserializeBinaryFromReader(message: SystemDiskLoadRequest, reader: jspb.BinaryReader): SystemDiskLoadRequest;
}

export namespace SystemDiskLoadRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class SystemDiskLoad extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemDiskLoad.AsObject;
    static toObject(includeInstance: boolean, msg: SystemDiskLoad): SystemDiskLoad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemDiskLoad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemDiskLoad;
    static deserializeBinaryFromReader(message: SystemDiskLoad, reader: jspb.BinaryReader): SystemDiskLoad;
}

export namespace SystemDiskLoad {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class SystemDiskSpaceRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemDiskSpaceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemDiskSpaceRequest): SystemDiskSpaceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemDiskSpaceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemDiskSpaceRequest;
    static deserializeBinaryFromReader(message: SystemDiskSpaceRequest, reader: jspb.BinaryReader): SystemDiskSpaceRequest;
}

export namespace SystemDiskSpaceRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class SystemDiskSpace extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemDiskSpace.AsObject;
    static toObject(includeInstance: boolean, msg: SystemDiskSpace): SystemDiskSpace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemDiskSpace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemDiskSpace;
    static deserializeBinaryFromReader(message: SystemDiskSpace, reader: jspb.BinaryReader): SystemDiskSpace;
}

export namespace SystemDiskSpace {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}
