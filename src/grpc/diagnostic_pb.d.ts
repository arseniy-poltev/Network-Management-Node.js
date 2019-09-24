// package: 
// file: diagnostic.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class DiagnosticLogRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getLevel(): DiagnosticLogLevelEnum;
    setLevel(value: DiagnosticLogLevelEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticLogRequest): DiagnosticLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticLogRequest;
    static deserializeBinaryFromReader(message: DiagnosticLogRequest, reader: jspb.BinaryReader): DiagnosticLogRequest;
}

export namespace DiagnosticLogRequest {
    export type AsObject = {
        requestId: number,
        level: DiagnosticLogLevelEnum,
    }
}

export class DiagnosticLog extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearLogList(): void;
    getLogList(): Array<string>;
    setLogList(value: Array<string>): void;
    addLog(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticLog.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticLog): DiagnosticLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticLog;
    static deserializeBinaryFromReader(message: DiagnosticLog, reader: jspb.BinaryReader): DiagnosticLog;
}

export namespace DiagnosticLog {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        logList: Array<string>,
    }
}

export class DiagnosticHealthItem extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getStatus(): string;
    setStatus(value: string): void;

    getColor(): string;
    setColor(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticHealthItem.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticHealthItem): DiagnosticHealthItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticHealthItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticHealthItem;
    static deserializeBinaryFromReader(message: DiagnosticHealthItem, reader: jspb.BinaryReader): DiagnosticHealthItem;
}

export namespace DiagnosticHealthItem {
    export type AsObject = {
        name: string,
        status: string,
        color: string,
    }
}

export class DiagnosticHealthRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticHealthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticHealthRequest): DiagnosticHealthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticHealthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticHealthRequest;
    static deserializeBinaryFromReader(message: DiagnosticHealthRequest, reader: jspb.BinaryReader): DiagnosticHealthRequest;
}

export namespace DiagnosticHealthRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class DiagnosticHealth extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearItemList(): void;
    getItemList(): Array<DiagnosticHealthItem>;
    setItemList(value: Array<DiagnosticHealthItem>): void;
    addItem(value?: DiagnosticHealthItem, index?: number): DiagnosticHealthItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticHealth.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticHealth): DiagnosticHealth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticHealth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticHealth;
    static deserializeBinaryFromReader(message: DiagnosticHealth, reader: jspb.BinaryReader): DiagnosticHealth;
}

export namespace DiagnosticHealth {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        itemList: Array<DiagnosticHealthItem.AsObject>,
    }
}

export class DiagnosticBenchmarkRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticBenchmarkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticBenchmarkRequest): DiagnosticBenchmarkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticBenchmarkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticBenchmarkRequest;
    static deserializeBinaryFromReader(message: DiagnosticBenchmarkRequest, reader: jspb.BinaryReader): DiagnosticBenchmarkRequest;
}

export namespace DiagnosticBenchmarkRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class DiagnosticBenchmarkReport extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): void;

    getReportTime(): string;
    setReportTime(value: string): void;

    clearLineList(): void;
    getLineList(): Array<string>;
    setLineList(value: Array<string>): void;
    addLine(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticBenchmarkReport.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticBenchmarkReport): DiagnosticBenchmarkReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticBenchmarkReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticBenchmarkReport;
    static deserializeBinaryFromReader(message: DiagnosticBenchmarkReport, reader: jspb.BinaryReader): DiagnosticBenchmarkReport;
}

export namespace DiagnosticBenchmarkReport {
    export type AsObject = {
        status: string,
        reportTime: string,
        lineList: Array<string>,
    }
}

export class DiagnosticBenchmark extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): DiagnosticBenchmarkReport | undefined;
    setReport(value?: DiagnosticBenchmarkReport): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticBenchmark.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticBenchmark): DiagnosticBenchmark.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticBenchmark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticBenchmark;
    static deserializeBinaryFromReader(message: DiagnosticBenchmark, reader: jspb.BinaryReader): DiagnosticBenchmark;
}

export namespace DiagnosticBenchmark {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: DiagnosticBenchmarkReport.AsObject,
    }
}

export class DiagnosticNetstatItem extends jspb.Message { 
    getAddress1(): string;
    setAddress1(value: string): void;

    getAddress2(): string;
    setAddress2(value: string): void;

    getStatus(): string;
    setStatus(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticNetstatItem.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticNetstatItem): DiagnosticNetstatItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticNetstatItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticNetstatItem;
    static deserializeBinaryFromReader(message: DiagnosticNetstatItem, reader: jspb.BinaryReader): DiagnosticNetstatItem;
}

export namespace DiagnosticNetstatItem {
    export type AsObject = {
        address1: string,
        address2: string,
        status: string,
    }
}

export class DiagnosticNetstatReport extends jspb.Message { 
    getTotalItems(): number;
    setTotalItems(value: number): void;

    clearSessionList(): void;
    getSessionList(): Array<DiagnosticNetstatItem>;
    setSessionList(value: Array<DiagnosticNetstatItem>): void;
    addSession(value?: DiagnosticNetstatItem, index?: number): DiagnosticNetstatItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticNetstatReport.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticNetstatReport): DiagnosticNetstatReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticNetstatReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticNetstatReport;
    static deserializeBinaryFromReader(message: DiagnosticNetstatReport, reader: jspb.BinaryReader): DiagnosticNetstatReport;
}

export namespace DiagnosticNetstatReport {
    export type AsObject = {
        totalItems: number,
        sessionList: Array<DiagnosticNetstatItem.AsObject>,
    }
}

export class DiagnosticNetstatRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticNetstatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticNetstatRequest): DiagnosticNetstatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticNetstatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticNetstatRequest;
    static deserializeBinaryFromReader(message: DiagnosticNetstatRequest, reader: jspb.BinaryReader): DiagnosticNetstatRequest;
}

export namespace DiagnosticNetstatRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class DiagnosticNetstat extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): DiagnosticNetstatReport | undefined;
    setReport(value?: DiagnosticNetstatReport): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticNetstat.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticNetstat): DiagnosticNetstat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticNetstat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticNetstat;
    static deserializeBinaryFromReader(message: DiagnosticNetstat, reader: jspb.BinaryReader): DiagnosticNetstat;
}

export namespace DiagnosticNetstat {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: DiagnosticNetstatReport.AsObject,
    }
}

export class DiagnosticPingOptions extends jspb.Message { 
    getHostIp(): string;
    setHostIp(value: string): void;

    getIpv6(): boolean;
    setIpv6(value: boolean): void;

    getCount(): number;
    setCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticPingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticPingOptions): DiagnosticPingOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticPingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticPingOptions;
    static deserializeBinaryFromReader(message: DiagnosticPingOptions, reader: jspb.BinaryReader): DiagnosticPingOptions;
}

export namespace DiagnosticPingOptions {
    export type AsObject = {
        hostIp: string,
        ipv6: boolean,
        count: number,
    }
}

export class DiagnosticPingRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasPingOptions(): boolean;
    clearPingOptions(): void;
    getPingOptions(): DiagnosticPingOptions | undefined;
    setPingOptions(value?: DiagnosticPingOptions): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticPingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticPingRequest): DiagnosticPingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticPingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticPingRequest;
    static deserializeBinaryFromReader(message: DiagnosticPingRequest, reader: jspb.BinaryReader): DiagnosticPingRequest;
}

export namespace DiagnosticPingRequest {
    export type AsObject = {
        requestId: number,
        pingOptions?: DiagnosticPingOptions.AsObject,
    }
}

export class DiagnosticPing extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearLineList(): void;
    getLineList(): Array<string>;
    setLineList(value: Array<string>): void;
    addLine(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticPing.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticPing): DiagnosticPing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticPing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticPing;
    static deserializeBinaryFromReader(message: DiagnosticPing, reader: jspb.BinaryReader): DiagnosticPing;
}

export namespace DiagnosticPing {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        lineList: Array<string>,
    }
}

export class DiagnosticTracerouteOptions extends jspb.Message { 
    getHostIp(): string;
    setHostIp(value: string): void;

    getHops(): number;
    setHops(value: number): void;

    getIpv6(): boolean;
    setIpv6(value: boolean): void;

    getIcmp(): boolean;
    setIcmp(value: boolean): void;

    getLookup(): boolean;
    setLookup(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticTracerouteOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticTracerouteOptions): DiagnosticTracerouteOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticTracerouteOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticTracerouteOptions;
    static deserializeBinaryFromReader(message: DiagnosticTracerouteOptions, reader: jspb.BinaryReader): DiagnosticTracerouteOptions;
}

export namespace DiagnosticTracerouteOptions {
    export type AsObject = {
        hostIp: string,
        hops: number,
        ipv6: boolean,
        icmp: boolean,
        lookup: boolean,
    }
}

export class DiagnosticTracerouteRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasTracerouteOptions(): boolean;
    clearTracerouteOptions(): void;
    getTracerouteOptions(): DiagnosticTracerouteOptions | undefined;
    setTracerouteOptions(value?: DiagnosticTracerouteOptions): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticTracerouteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticTracerouteRequest): DiagnosticTracerouteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticTracerouteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticTracerouteRequest;
    static deserializeBinaryFromReader(message: DiagnosticTracerouteRequest, reader: jspb.BinaryReader): DiagnosticTracerouteRequest;
}

export namespace DiagnosticTracerouteRequest {
    export type AsObject = {
        requestId: number,
        tracerouteOptions?: DiagnosticTracerouteOptions.AsObject,
    }
}

export class DiagnosticTraceroute extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearLineList(): void;
    getLineList(): Array<string>;
    setLineList(value: Array<string>): void;
    addLine(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiagnosticTraceroute.AsObject;
    static toObject(includeInstance: boolean, msg: DiagnosticTraceroute): DiagnosticTraceroute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiagnosticTraceroute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiagnosticTraceroute;
    static deserializeBinaryFromReader(message: DiagnosticTraceroute, reader: jspb.BinaryReader): DiagnosticTraceroute;
}

export namespace DiagnosticTraceroute {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        lineList: Array<string>,
    }
}

export enum DiagnosticLogLevelEnum {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
}
