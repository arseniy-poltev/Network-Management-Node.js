// package: 
// file: configure.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class SystemSettingsData extends jspb.Message { 
    getHostname(): string;
    setHostname(value: string): void;

    getDate(): string;
    setDate(value: string): void;

    getTime(): string;
    setTime(value: string): void;

    getNtp(): string;
    setNtp(value: string): void;

    getTimezone(): string;
    setTimezone(value: string): void;

    getSsh(): boolean;
    setSsh(value: boolean): void;

    getDatastore(): string;
    setDatastore(value: string): void;

    getPrimary(): string;
    setPrimary(value: string): void;

    getSecondary(): string;
    setSecondary(value: string): void;

    getLogLevel(): string;
    setLogLevel(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemSettingsData.AsObject;
    static toObject(includeInstance: boolean, msg: SystemSettingsData): SystemSettingsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemSettingsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemSettingsData;
    static deserializeBinaryFromReader(message: SystemSettingsData, reader: jspb.BinaryReader): SystemSettingsData;
}

export namespace SystemSettingsData {
    export type AsObject = {
        hostname: string,
        date: string,
        time: string,
        ntp: string,
        timezone: string,
        ssh: boolean,
        datastore: string,
        primary: string,
        secondary: string,
        logLevel: string,
    }
}

export class SystemSettingsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SystemSettingsData | undefined;
    setSettings(value?: SystemSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemSettingsRequest): SystemSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemSettingsRequest;
    static deserializeBinaryFromReader(message: SystemSettingsRequest, reader: jspb.BinaryReader): SystemSettingsRequest;
}

export namespace SystemSettingsRequest {
    export type AsObject = {
        requestId: number,
        settings?: SystemSettingsData.AsObject,
    }
}

export class SystemSettings extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SystemSettingsData | undefined;
    setSettings(value?: SystemSettingsData): void;

    clearDatastoreList(): void;
    getDatastoreList(): Array<string>;
    setDatastoreList(value: Array<string>): void;
    addDatastore(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemSettings.AsObject;
    static toObject(includeInstance: boolean, msg: SystemSettings): SystemSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemSettings;
    static deserializeBinaryFromReader(message: SystemSettings, reader: jspb.BinaryReader): SystemSettings;
}

export namespace SystemSettings {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        settings?: SystemSettingsData.AsObject,
        datastoreList: Array<string>,
    }
}

export class NetworkSettingsData extends jspb.Message { 
    getIpMask(): string;
    setIpMask(value: string): void;

    getGateway(): string;
    setGateway(value: string): void;

    getDeployment(): string;
    setDeployment(value: string): void;

    getEncapsulation(): string;
    setEncapsulation(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettingsData.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettingsData): NetworkSettingsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettingsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettingsData;
    static deserializeBinaryFromReader(message: NetworkSettingsData, reader: jspb.BinaryReader): NetworkSettingsData;
}

export namespace NetworkSettingsData {
    export type AsObject = {
        ipMask: string,
        gateway: string,
        deployment: string,
        encapsulation: string,
    }
}

export class NetworkSettingsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): NetworkSettingsData | undefined;
    setSettings(value?: NetworkSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettingsRequest): NetworkSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettingsRequest;
    static deserializeBinaryFromReader(message: NetworkSettingsRequest, reader: jspb.BinaryReader): NetworkSettingsRequest;
}

export namespace NetworkSettingsRequest {
    export type AsObject = {
        requestId: number,
        settings?: NetworkSettingsData.AsObject,
    }
}

export class NetworkSettings extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): NetworkSettingsData | undefined;
    setSettings(value?: NetworkSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettings): NetworkSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettings;
    static deserializeBinaryFromReader(message: NetworkSettings, reader: jspb.BinaryReader): NetworkSettings;
}

export namespace NetworkSettings {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        settings?: NetworkSettingsData.AsObject,
    }
}

export class OptimizationSettingsData extends jspb.Message { 
    getPeerTimeout(): number;
    setPeerTimeout(value: number): void;

    getWanRate(): number;
    setWanRate(value: number): void;

    getCompression(): number;
    setCompression(value: number): void;

    getDeduplication(): number;
    setDeduplication(value: number): void;

    getLossRecovery(): number;
    setLossRecovery(value: number): void;

    getErrorCorrection(): number;
    setErrorCorrection(value: number): void;

    getAggregation(): number;
    setAggregation(value: number): void;

    getAccelerator(): boolean;
    setAccelerator(value: boolean): void;

    getWebcache(): boolean;
    setWebcache(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizationSettingsData.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizationSettingsData): OptimizationSettingsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptimizationSettingsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizationSettingsData;
    static deserializeBinaryFromReader(message: OptimizationSettingsData, reader: jspb.BinaryReader): OptimizationSettingsData;
}

export namespace OptimizationSettingsData {
    export type AsObject = {
        peerTimeout: number,
        wanRate: number,
        compression: number,
        deduplication: number,
        lossRecovery: number,
        errorCorrection: number,
        aggregation: number,
        accelerator: boolean,
        webcache: boolean,
    }
}

export class OptimizationSettingsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): OptimizationSettingsData | undefined;
    setSettings(value?: OptimizationSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizationSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizationSettingsRequest): OptimizationSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptimizationSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizationSettingsRequest;
    static deserializeBinaryFromReader(message: OptimizationSettingsRequest, reader: jspb.BinaryReader): OptimizationSettingsRequest;
}

export namespace OptimizationSettingsRequest {
    export type AsObject = {
        requestId: number,
        settings?: OptimizationSettingsData.AsObject,
    }
}

export class OptimizationSettings extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): OptimizationSettingsData | undefined;
    setSettings(value?: OptimizationSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizationSettings.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizationSettings): OptimizationSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptimizationSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizationSettings;
    static deserializeBinaryFromReader(message: OptimizationSettings, reader: jspb.BinaryReader): OptimizationSettings;
}

export namespace OptimizationSettings {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        settings?: OptimizationSettingsData.AsObject,
    }
}

export class MonitorSettingsData extends jspb.Message { 
    getSnmp(): boolean;
    setSnmp(value: boolean): void;

    getNetflowExporting(): boolean;
    setNetflowExporting(value: boolean): void;

    getNetflowIp(): string;
    setNetflowIp(value: string): void;

    getNetflowPort(): number;
    setNetflowPort(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitorSettingsData.AsObject;
    static toObject(includeInstance: boolean, msg: MonitorSettingsData): MonitorSettingsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitorSettingsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitorSettingsData;
    static deserializeBinaryFromReader(message: MonitorSettingsData, reader: jspb.BinaryReader): MonitorSettingsData;
}

export namespace MonitorSettingsData {
    export type AsObject = {
        snmp: boolean,
        netflowExporting: boolean,
        netflowIp: string,
        netflowPort: number,
    }
}

export class MonitorSettingsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): MonitorSettingsData | undefined;
    setSettings(value?: MonitorSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitorSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MonitorSettingsRequest): MonitorSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitorSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitorSettingsRequest;
    static deserializeBinaryFromReader(message: MonitorSettingsRequest, reader: jspb.BinaryReader): MonitorSettingsRequest;
}

export namespace MonitorSettingsRequest {
    export type AsObject = {
        requestId: number,
        settings?: MonitorSettingsData.AsObject,
    }
}

export class MonitorSettings extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): MonitorSettingsData | undefined;
    setSettings(value?: MonitorSettingsData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitorSettings.AsObject;
    static toObject(includeInstance: boolean, msg: MonitorSettings): MonitorSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitorSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitorSettings;
    static deserializeBinaryFromReader(message: MonitorSettings, reader: jspb.BinaryReader): MonitorSettings;
}

export namespace MonitorSettings {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        settings?: MonitorSettingsData.AsObject,
    }
}

export class TunnelRule extends jspb.Message { 
    getRuleId(): number;
    setRuleId(value: number): void;

    getDestination(): string;
    setDestination(value: string): void;

    getTunnelId(): number;
    setTunnelId(value: number): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;

    getSharedKey(): string;
    setSharedKey(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelRule.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelRule): TunnelRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelRule;
    static deserializeBinaryFromReader(message: TunnelRule, reader: jspb.BinaryReader): TunnelRule;
}

export namespace TunnelRule {
    export type AsObject = {
        ruleId: number,
        destination: string,
        tunnelId: number,
        peerIp: string,
        sharedKey: string,
        description: string,
    }
}

export class TunnelPoliciesData extends jspb.Message { 
    getRequirekey(): boolean;
    setRequirekey(value: boolean): void;

    clearRuleList(): void;
    getRuleList(): Array<TunnelRule>;
    setRuleList(value: Array<TunnelRule>): void;
    addRule(value?: TunnelRule, index?: number): TunnelRule;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesData.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesData): TunnelPoliciesData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesData;
    static deserializeBinaryFromReader(message: TunnelPoliciesData, reader: jspb.BinaryReader): TunnelPoliciesData;
}

export namespace TunnelPoliciesData {
    export type AsObject = {
        requirekey: boolean,
        ruleList: Array<TunnelRule.AsObject>,
    }
}

export class TunnelPoliciesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesRequest): TunnelPoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesRequest;
    static deserializeBinaryFromReader(message: TunnelPoliciesRequest, reader: jspb.BinaryReader): TunnelPoliciesRequest;
}

export namespace TunnelPoliciesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class TunnelPolicies extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasPolicies(): boolean;
    clearPolicies(): void;
    getPolicies(): TunnelPoliciesData | undefined;
    setPolicies(value?: TunnelPoliciesData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPolicies.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPolicies): TunnelPolicies.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPolicies, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPolicies;
    static deserializeBinaryFromReader(message: TunnelPolicies, reader: jspb.BinaryReader): TunnelPolicies;
}

export namespace TunnelPolicies {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        policies?: TunnelPoliciesData.AsObject,
    }
}

export class TunnelPoliciesDeleteRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesDeleteRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesDeleteRuleRequest): TunnelPoliciesDeleteRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesDeleteRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesDeleteRuleRequest;
    static deserializeBinaryFromReader(message: TunnelPoliciesDeleteRuleRequest, reader: jspb.BinaryReader): TunnelPoliciesDeleteRuleRequest;
}

export namespace TunnelPoliciesDeleteRuleRequest {
    export type AsObject = {
        requestId: number,
        ruleId: number,
    }
}

export class TunnelPoliciesDeleteRule extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesDeleteRule.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesDeleteRule): TunnelPoliciesDeleteRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesDeleteRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesDeleteRule;
    static deserializeBinaryFromReader(message: TunnelPoliciesDeleteRule, reader: jspb.BinaryReader): TunnelPoliciesDeleteRule;
}

export namespace TunnelPoliciesDeleteRule {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class TunnelPoliciesUpdateRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasRule(): boolean;
    clearRule(): void;
    getRule(): TunnelRule | undefined;
    setRule(value?: TunnelRule): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesUpdateRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesUpdateRuleRequest): TunnelPoliciesUpdateRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesUpdateRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesUpdateRuleRequest;
    static deserializeBinaryFromReader(message: TunnelPoliciesUpdateRuleRequest, reader: jspb.BinaryReader): TunnelPoliciesUpdateRuleRequest;
}

export namespace TunnelPoliciesUpdateRuleRequest {
    export type AsObject = {
        requestId: number,
        rule?: TunnelRule.AsObject,
    }
}

export class TunnelPoliciesUpdateRule extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesUpdateRule.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesUpdateRule): TunnelPoliciesUpdateRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesUpdateRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesUpdateRule;
    static deserializeBinaryFromReader(message: TunnelPoliciesUpdateRule, reader: jspb.BinaryReader): TunnelPoliciesUpdateRule;
}

export namespace TunnelPoliciesUpdateRule {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class TunnelPoliciesAddRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasRule(): boolean;
    clearRule(): void;
    getRule(): TunnelRule | undefined;
    setRule(value?: TunnelRule): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesAddRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesAddRuleRequest): TunnelPoliciesAddRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesAddRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesAddRuleRequest;
    static deserializeBinaryFromReader(message: TunnelPoliciesAddRuleRequest, reader: jspb.BinaryReader): TunnelPoliciesAddRuleRequest;
}

export namespace TunnelPoliciesAddRuleRequest {
    export type AsObject = {
        requestId: number,
        rule?: TunnelRule.AsObject,
    }
}

export class TunnelPoliciesAddRule extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasRule(): boolean;
    clearRule(): void;
    getRule(): TunnelRule | undefined;
    setRule(value?: TunnelRule): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TunnelPoliciesAddRule.AsObject;
    static toObject(includeInstance: boolean, msg: TunnelPoliciesAddRule): TunnelPoliciesAddRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TunnelPoliciesAddRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TunnelPoliciesAddRule;
    static deserializeBinaryFromReader(message: TunnelPoliciesAddRule, reader: jspb.BinaryReader): TunnelPoliciesAddRule;
}

export namespace TunnelPoliciesAddRule {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        rule?: TunnelRule.AsObject,
    }
}

export class TrafficPolicyMatch extends jspb.Message { 
    getSource(): string;
    setSource(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;

    getType(): string;
    setType(value: string): void;

    getKind(): string;
    setKind(value: string): void;

    clearApplicationList(): void;
    getApplicationList(): Array<number>;
    setApplicationList(value: Array<number>): void;
    addApplication(value: number, index?: number): number;

    clearDscpList(): void;
    getDscpList(): Array<string>;
    setDscpList(value: Array<string>): void;
    addDscp(value: string, index?: number): string;

    getProtocolValue(): string;
    setProtocolValue(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyMatch.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyMatch): TrafficPolicyMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyMatch;
    static deserializeBinaryFromReader(message: TrafficPolicyMatch, reader: jspb.BinaryReader): TrafficPolicyMatch;
}

export namespace TrafficPolicyMatch {
    export type AsObject = {
        source: string,
        destination: string,
        type: string,
        kind: string,
        applicationList: Array<number>,
        dscpList: Array<string>,
        protocolValue: string,
    }
}

export class TrafficPolicyAction extends jspb.Message { 
    getDeny(): boolean;
    setDeny(value: boolean): void;

    getDscp(): string;
    setDscp(value: string): void;

    getGroup(): number;
    setGroup(value: number): void;

    getQos(): string;
    setQos(value: string): void;

    getRate(): number;
    setRate(value: number): void;

    getGateway(): string;
    setGateway(value: string): void;

    getBypass(): boolean;
    setBypass(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyAction.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyAction): TrafficPolicyAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyAction;
    static deserializeBinaryFromReader(message: TrafficPolicyAction, reader: jspb.BinaryReader): TrafficPolicyAction;
}

export namespace TrafficPolicyAction {
    export type AsObject = {
        deny: boolean,
        dscp: string,
        group: number,
        qos: string,
        rate: number,
        gateway: string,
        bypass: boolean,
    }
}

export class TrafficPolicy extends jspb.Message { 
    getRuleId(): number;
    setRuleId(value: number): void;

    getReadonly(): boolean;
    setReadonly(value: boolean): void;


    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): TrafficPolicyMatch | undefined;
    setMatch(value?: TrafficPolicyMatch): void;


    hasAction(): boolean;
    clearAction(): void;
    getAction(): TrafficPolicyAction | undefined;
    setAction(value?: TrafficPolicyAction): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicy): TrafficPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicy;
    static deserializeBinaryFromReader(message: TrafficPolicy, reader: jspb.BinaryReader): TrafficPolicy;
}

export namespace TrafficPolicy {
    export type AsObject = {
        ruleId: number,
        readonly: boolean,
        match?: TrafficPolicyMatch.AsObject,
        action?: TrafficPolicyAction.AsObject,
    }
}

export class TrafficPolicyGateway extends jspb.Message { 
    getValue(): string;
    setValue(value: string): void;

    getText(): string;
    setText(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyGateway.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyGateway): TrafficPolicyGateway.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyGateway, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyGateway;
    static deserializeBinaryFromReader(message: TrafficPolicyGateway, reader: jspb.BinaryReader): TrafficPolicyGateway;
}

export namespace TrafficPolicyGateway {
    export type AsObject = {
        value: string,
        text: string,
    }
}

export class TrafficPoliciesData extends jspb.Message { 
    clearGatewayList(): void;
    getGatewayList(): Array<TrafficPolicyGateway>;
    setGatewayList(value: Array<TrafficPolicyGateway>): void;
    addGateway(value?: TrafficPolicyGateway, index?: number): TrafficPolicyGateway;

    clearPolicyList(): void;
    getPolicyList(): Array<TrafficPolicy>;
    setPolicyList(value: Array<TrafficPolicy>): void;
    addPolicy(value?: TrafficPolicy, index?: number): TrafficPolicy;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPoliciesData.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPoliciesData): TrafficPoliciesData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPoliciesData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPoliciesData;
    static deserializeBinaryFromReader(message: TrafficPoliciesData, reader: jspb.BinaryReader): TrafficPoliciesData;
}

export namespace TrafficPoliciesData {
    export type AsObject = {
        gatewayList: Array<TrafficPolicyGateway.AsObject>,
        policyList: Array<TrafficPolicy.AsObject>,
    }
}

export class TrafficPoliciesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPoliciesRequest): TrafficPoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPoliciesRequest;
    static deserializeBinaryFromReader(message: TrafficPoliciesRequest, reader: jspb.BinaryReader): TrafficPoliciesRequest;
}

export namespace TrafficPoliciesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class TrafficPolicies extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasPolicies(): boolean;
    clearPolicies(): void;
    getPolicies(): TrafficPoliciesData | undefined;
    setPolicies(value?: TrafficPoliciesData): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicies.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicies): TrafficPolicies.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicies, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicies;
    static deserializeBinaryFromReader(message: TrafficPolicies, reader: jspb.BinaryReader): TrafficPolicies;
}

export namespace TrafficPolicies {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        policies?: TrafficPoliciesData.AsObject,
    }
}

export class TrafficPolicyDeleteRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyDeleteRequest): TrafficPolicyDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyDeleteRequest;
    static deserializeBinaryFromReader(message: TrafficPolicyDeleteRequest, reader: jspb.BinaryReader): TrafficPolicyDeleteRequest;
}

export namespace TrafficPolicyDeleteRequest {
    export type AsObject = {
        requestId: number,
        ruleId: number,
    }
}

export class TrafficPolicyDelete extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyDelete.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyDelete): TrafficPolicyDelete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyDelete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyDelete;
    static deserializeBinaryFromReader(message: TrafficPolicyDelete, reader: jspb.BinaryReader): TrafficPolicyDelete;
}

export namespace TrafficPolicyDelete {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class TrafficPolicyUpdateRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): TrafficPolicy | undefined;
    setPolicy(value?: TrafficPolicy): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyUpdateRequest): TrafficPolicyUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyUpdateRequest;
    static deserializeBinaryFromReader(message: TrafficPolicyUpdateRequest, reader: jspb.BinaryReader): TrafficPolicyUpdateRequest;
}

export namespace TrafficPolicyUpdateRequest {
    export type AsObject = {
        requestId: number,
        policy?: TrafficPolicy.AsObject,
    }
}

export class TrafficPolicyUpdate extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyUpdate): TrafficPolicyUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyUpdate;
    static deserializeBinaryFromReader(message: TrafficPolicyUpdate, reader: jspb.BinaryReader): TrafficPolicyUpdate;
}

export namespace TrafficPolicyUpdate {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class TrafficPolicyAddRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): TrafficPolicy | undefined;
    setPolicy(value?: TrafficPolicy): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyAddRequest): TrafficPolicyAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyAddRequest;
    static deserializeBinaryFromReader(message: TrafficPolicyAddRequest, reader: jspb.BinaryReader): TrafficPolicyAddRequest;
}

export namespace TrafficPolicyAddRequest {
    export type AsObject = {
        requestId: number,
        policy?: TrafficPolicy.AsObject,
    }
}

export class TrafficPolicyAdd extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): TrafficPolicy | undefined;
    setPolicy(value?: TrafficPolicy): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPolicyAdd.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPolicyAdd): TrafficPolicyAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrafficPolicyAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPolicyAdd;
    static deserializeBinaryFromReader(message: TrafficPolicyAdd, reader: jspb.BinaryReader): TrafficPolicyAdd;
}

export namespace TrafficPolicyAdd {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        policy?: TrafficPolicy.AsObject,
    }
}

export class Route extends jspb.Message { 
    getRuleId(): number;
    setRuleId(value: number): void;

    getDestination(): string;
    setDestination(value: string): void;

    getGateway(): string;
    setGateway(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Route.AsObject;
    static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Route;
    static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
    export type AsObject = {
        ruleId: number,
        destination: string,
        gateway: string,
    }
}

export class RoutesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoutesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RoutesRequest): RoutesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoutesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoutesRequest;
    static deserializeBinaryFromReader(message: RoutesRequest, reader: jspb.BinaryReader): RoutesRequest;
}

export namespace RoutesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class Routes extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearRoutesList(): void;
    getRoutesList(): Array<Route>;
    setRoutesList(value: Array<Route>): void;
    addRoutes(value?: Route, index?: number): Route;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Routes.AsObject;
    static toObject(includeInstance: boolean, msg: Routes): Routes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Routes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Routes;
    static deserializeBinaryFromReader(message: Routes, reader: jspb.BinaryReader): Routes;
}

export namespace Routes {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        routesList: Array<Route.AsObject>,
    }
}

export class RouteAddRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): Route | undefined;
    setRoute(value?: Route): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteAddRequest): RouteAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteAddRequest;
    static deserializeBinaryFromReader(message: RouteAddRequest, reader: jspb.BinaryReader): RouteAddRequest;
}

export namespace RouteAddRequest {
    export type AsObject = {
        requestId: number,
        route?: Route.AsObject,
    }
}

export class RouteAdd extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteAdd.AsObject;
    static toObject(includeInstance: boolean, msg: RouteAdd): RouteAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteAdd;
    static deserializeBinaryFromReader(message: RouteAdd, reader: jspb.BinaryReader): RouteAdd;
}

export namespace RouteAdd {
    export type AsObject = {
        requestId: number,
        ruleId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class RouteUpdateRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): Route | undefined;
    setRoute(value?: Route): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteUpdateRequest): RouteUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteUpdateRequest;
    static deserializeBinaryFromReader(message: RouteUpdateRequest, reader: jspb.BinaryReader): RouteUpdateRequest;
}

export namespace RouteUpdateRequest {
    export type AsObject = {
        requestId: number,
        route?: Route.AsObject,
    }
}

export class RouteUpdate extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: RouteUpdate): RouteUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteUpdate;
    static deserializeBinaryFromReader(message: RouteUpdate, reader: jspb.BinaryReader): RouteUpdate;
}

export namespace RouteUpdate {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class RouteRemoveRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteRemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteRemoveRequest): RouteRemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteRemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteRemoveRequest;
    static deserializeBinaryFromReader(message: RouteRemoveRequest, reader: jspb.BinaryReader): RouteRemoveRequest;
}

export namespace RouteRemoveRequest {
    export type AsObject = {
        requestId: number,
        ruleId: number,
    }
}

export class RouteRemove extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteRemove.AsObject;
    static toObject(includeInstance: boolean, msg: RouteRemove): RouteRemove.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteRemove, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteRemove;
    static deserializeBinaryFromReader(message: RouteRemove, reader: jspb.BinaryReader): RouteRemove;
}

export namespace RouteRemove {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class TcpxRule extends jspb.Message { 
    getRuleId(): number;
    setRuleId(value: number): void;

    getReadonly(): boolean;
    setReadonly(value: boolean): void;

    getSource(): string;
    setSource(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    getAcceleration(): boolean;
    setAcceleration(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRule.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRule): TcpxRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRule;
    static deserializeBinaryFromReader(message: TcpxRule, reader: jspb.BinaryReader): TcpxRule;
}

export namespace TcpxRule {
    export type AsObject = {
        ruleId: number,
        readonly: boolean,
        source: string,
        destination: string,
        port: number,
        acceleration: boolean,
    }
}

export class GetTcpxRulesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTcpxRulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTcpxRulesRequest): GetTcpxRulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTcpxRulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTcpxRulesRequest;
    static deserializeBinaryFromReader(message: GetTcpxRulesRequest, reader: jspb.BinaryReader): GetTcpxRulesRequest;
}

export namespace GetTcpxRulesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class TcpxRules extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearRulesList(): void;
    getRulesList(): Array<TcpxRule>;
    setRulesList(value: Array<TcpxRule>): void;
    addRules(value?: TcpxRule, index?: number): TcpxRule;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRules.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRules): TcpxRules.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRules, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRules;
    static deserializeBinaryFromReader(message: TcpxRules, reader: jspb.BinaryReader): TcpxRules;
}

export namespace TcpxRules {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        rulesList: Array<TcpxRule.AsObject>,
    }
}

export class AddTcpxRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getSource(): string;
    setSource(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    getAcceleration(): boolean;
    setAcceleration(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTcpxRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTcpxRuleRequest): AddTcpxRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTcpxRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTcpxRuleRequest;
    static deserializeBinaryFromReader(message: AddTcpxRuleRequest, reader: jspb.BinaryReader): AddTcpxRuleRequest;
}

export namespace AddTcpxRuleRequest {
    export type AsObject = {
        requestId: number,
        source: string,
        destination: string,
        port: number,
        acceleration: boolean,
    }
}

export class TcpxRuleAdd extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRuleAdd.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRuleAdd): TcpxRuleAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRuleAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRuleAdd;
    static deserializeBinaryFromReader(message: TcpxRuleAdd, reader: jspb.BinaryReader): TcpxRuleAdd;
}

export namespace TcpxRuleAdd {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        ruleId: number,
    }
}

export class UpdateTcpxRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasRule(): boolean;
    clearRule(): void;
    getRule(): TcpxRule | undefined;
    setRule(value?: TcpxRule): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTcpxRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTcpxRuleRequest): UpdateTcpxRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTcpxRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTcpxRuleRequest;
    static deserializeBinaryFromReader(message: UpdateTcpxRuleRequest, reader: jspb.BinaryReader): UpdateTcpxRuleRequest;
}

export namespace UpdateTcpxRuleRequest {
    export type AsObject = {
        requestId: number,
        rule?: TcpxRule.AsObject,
    }
}

export class TcpxRuleUpdate extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRuleUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRuleUpdate): TcpxRuleUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRuleUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRuleUpdate;
    static deserializeBinaryFromReader(message: TcpxRuleUpdate, reader: jspb.BinaryReader): TcpxRuleUpdate;
}

export namespace TcpxRuleUpdate {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class RemoveTcpxRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveTcpxRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveTcpxRuleRequest): RemoveTcpxRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveTcpxRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveTcpxRuleRequest;
    static deserializeBinaryFromReader(message: RemoveTcpxRuleRequest, reader: jspb.BinaryReader): RemoveTcpxRuleRequest;
}

export namespace RemoveTcpxRuleRequest {
    export type AsObject = {
        requestId: number,
        ruleId: number,
    }
}

export class TcpxRuleRemove extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRuleRemove.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRuleRemove): TcpxRuleRemove.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRuleRemove, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRuleRemove;
    static deserializeBinaryFromReader(message: TcpxRuleRemove, reader: jspb.BinaryReader): TcpxRuleRemove;
}

export namespace TcpxRuleRemove {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class MoveTcpxRuleRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getRuleId(): number;
    setRuleId(value: number): void;

    getUpward(): boolean;
    setUpward(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveTcpxRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveTcpxRuleRequest): MoveTcpxRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveTcpxRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveTcpxRuleRequest;
    static deserializeBinaryFromReader(message: MoveTcpxRuleRequest, reader: jspb.BinaryReader): MoveTcpxRuleRequest;
}

export namespace MoveTcpxRuleRequest {
    export type AsObject = {
        requestId: number,
        ruleId: number,
        upward: boolean,
    }
}

export class TcpxRuleMove extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpxRuleMove.AsObject;
    static toObject(includeInstance: boolean, msg: TcpxRuleMove): TcpxRuleMove.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpxRuleMove, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpxRuleMove;
    static deserializeBinaryFromReader(message: TcpxRuleMove, reader: jspb.BinaryReader): TcpxRuleMove;
}

export namespace TcpxRuleMove {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class PathGateway extends jspb.Message { 
    getPrimary(): boolean;
    setPrimary(value: boolean): void;

    getAddress(): string;
    setAddress(value: string): void;

    getLatency(): number;
    setLatency(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathGateway.AsObject;
    static toObject(includeInstance: boolean, msg: PathGateway): PathGateway.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathGateway, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathGateway;
    static deserializeBinaryFromReader(message: PathGateway, reader: jspb.BinaryReader): PathGateway;
}

export namespace PathGateway {
    export type AsObject = {
        primary: boolean,
        address: string,
        latency: number,
    }
}

export class PathGatewaysResponse extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearPathsList(): void;
    getPathsList(): Array<PathGateway>;
    setPathsList(value: Array<PathGateway>): void;
    addPaths(value?: PathGateway, index?: number): PathGateway;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathGatewaysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PathGatewaysResponse): PathGatewaysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathGatewaysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathGatewaysResponse;
    static deserializeBinaryFromReader(message: PathGatewaysResponse, reader: jspb.BinaryReader): PathGatewaysResponse;
}

export namespace PathGatewaysResponse {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        pathsList: Array<PathGateway.AsObject>,
    }
}

export class GetPathsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPathsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPathsRequest): GetPathsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPathsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPathsRequest;
    static deserializeBinaryFromReader(message: GetPathsRequest, reader: jspb.BinaryReader): GetPathsRequest;
}

export namespace GetPathsRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class RemovePathRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getIsPrimary(): boolean;
    setIsPrimary(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePathRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePathRequest): RemovePathRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePathRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePathRequest;
    static deserializeBinaryFromReader(message: RemovePathRequest, reader: jspb.BinaryReader): RemovePathRequest;
}

export namespace RemovePathRequest {
    export type AsObject = {
        requestId: number,
        isPrimary: boolean,
    }
}

export class PathConfig extends jspb.Message { 
    getMultiWan(): boolean;
    setMultiWan(value: boolean): void;

    getFailOver(): boolean;
    setFailOver(value: boolean): void;

    getPreempt(): boolean;
    setPreempt(value: boolean): void;

    getTrackPeer(): string;
    setTrackPeer(value: string): void;

    getTimeout(): number;
    setTimeout(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PathConfig): PathConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathConfig;
    static deserializeBinaryFromReader(message: PathConfig, reader: jspb.BinaryReader): PathConfig;
}

export namespace PathConfig {
    export type AsObject = {
        multiWan: boolean,
        failOver: boolean,
        preempt: boolean,
        trackPeer: string,
        timeout: number,
    }
}

export class PathConfigResponse extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): PathConfig | undefined;
    setConfig(value?: PathConfig): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PathConfigResponse): PathConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathConfigResponse;
    static deserializeBinaryFromReader(message: PathConfigResponse, reader: jspb.BinaryReader): PathConfigResponse;
}

export namespace PathConfigResponse {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        config?: PathConfig.AsObject,
    }
}

export class SetPathConfigRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): PathConfig | undefined;
    setConfig(value?: PathConfig): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPathConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPathConfigRequest): SetPathConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPathConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPathConfigRequest;
    static deserializeBinaryFromReader(message: SetPathConfigRequest, reader: jspb.BinaryReader): SetPathConfigRequest;
}

export namespace SetPathConfigRequest {
    export type AsObject = {
        requestId: number,
        config?: PathConfig.AsObject,
    }
}

export class GetPathConfigRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPathConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPathConfigRequest): GetPathConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPathConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPathConfigRequest;
    static deserializeBinaryFromReader(message: GetPathConfigRequest, reader: jspb.BinaryReader): GetPathConfigRequest;
}

export namespace GetPathConfigRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class ServiceResetRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getKind(): string;
    setKind(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceResetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceResetRequest): ServiceResetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceResetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceResetRequest;
    static deserializeBinaryFromReader(message: ServiceResetRequest, reader: jspb.BinaryReader): ServiceResetRequest;
}

export namespace ServiceResetRequest {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        kind: string,
    }
}

export class ServiceReset extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceReset.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceReset): ServiceReset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceReset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceReset;
    static deserializeBinaryFromReader(message: ServiceReset, reader: jspb.BinaryReader): ServiceReset;
}

export namespace ServiceReset {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        message: string,
    }
}

export class SshPasswordChangeRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SshPasswordChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SshPasswordChangeRequest): SshPasswordChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SshPasswordChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SshPasswordChangeRequest;
    static deserializeBinaryFromReader(message: SshPasswordChangeRequest, reader: jspb.BinaryReader): SshPasswordChangeRequest;
}

export namespace SshPasswordChangeRequest {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        password: string,
    }
}

export class SshPasswordChange extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SshPasswordChange.AsObject;
    static toObject(includeInstance: boolean, msg: SshPasswordChange): SshPasswordChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SshPasswordChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SshPasswordChange;
    static deserializeBinaryFromReader(message: SshPasswordChange, reader: jspb.BinaryReader): SshPasswordChange;
}

export namespace SshPasswordChange {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        message: string,
    }
}

export class WebcacheConfig extends jspb.Message { 
    clearAllowedSubnetList(): void;
    getAllowedSubnetList(): Array<string>;
    setAllowedSubnetList(value: Array<string>): void;
    addAllowedSubnet(value: string, index?: number): string;

    clearSslServerList(): void;
    getSslServerList(): Array<string>;
    setSslServerList(value: Array<string>): void;
    addSslServer(value: string, index?: number): string;

    clearBlacklistUrlList(): void;
    getBlacklistUrlList(): Array<string>;
    setBlacklistUrlList(value: Array<string>): void;
    addBlacklistUrl(value: string, index?: number): string;

    clearBlacklistIpList(): void;
    getBlacklistIpList(): Array<string>;
    setBlacklistIpList(value: Array<string>): void;
    addBlacklistIp(value: string, index?: number): string;

    clearBlacklistRegexpList(): void;
    getBlacklistRegexpList(): Array<string>;
    setBlacklistRegexpList(value: Array<string>): void;
    addBlacklistRegexp(value: string, index?: number): string;

    getDiskSize(): number;
    setDiskSize(value: number): void;

    getMemorySize(): number;
    setMemorySize(value: number): void;

    getMinObject(): number;
    setMinObject(value: number): void;

    getMaxObject(): number;
    setMaxObject(value: number): void;

    getMaxObjectRam(): number;
    setMaxObjectRam(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheConfig): WebcacheConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheConfig;
    static deserializeBinaryFromReader(message: WebcacheConfig, reader: jspb.BinaryReader): WebcacheConfig;
}

export namespace WebcacheConfig {
    export type AsObject = {
        allowedSubnetList: Array<string>,
        sslServerList: Array<string>,
        blacklistUrlList: Array<string>,
        blacklistIpList: Array<string>,
        blacklistRegexpList: Array<string>,
        diskSize: number,
        memorySize: number,
        minObject: number,
        maxObject: number,
        maxObjectRam: number,
    }
}

export class GetWebcacheConfRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWebcacheConfRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWebcacheConfRequest): GetWebcacheConfRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWebcacheConfRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWebcacheConfRequest;
    static deserializeBinaryFromReader(message: GetWebcacheConfRequest, reader: jspb.BinaryReader): GetWebcacheConfRequest;
}

export namespace GetWebcacheConfRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class WebcacheConfResponse extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): WebcacheConfig | undefined;
    setConfig(value?: WebcacheConfig): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheConfResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheConfResponse): WebcacheConfResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheConfResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheConfResponse;
    static deserializeBinaryFromReader(message: WebcacheConfResponse, reader: jspb.BinaryReader): WebcacheConfResponse;
}

export namespace WebcacheConfResponse {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        config?: WebcacheConfig.AsObject,
    }
}

export class SetWebcacheConfRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): WebcacheConfig | undefined;
    setConfig(value?: WebcacheConfig): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetWebcacheConfRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetWebcacheConfRequest): SetWebcacheConfRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetWebcacheConfRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetWebcacheConfRequest;
    static deserializeBinaryFromReader(message: SetWebcacheConfRequest, reader: jspb.BinaryReader): SetWebcacheConfRequest;
}

export namespace SetWebcacheConfRequest {
    export type AsObject = {
        requestId: number,
        config?: WebcacheConfig.AsObject,
    }
}
