// package: 
// file: webcache.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class WebcacheDateFilter extends jspb.Message { 
    getYear(): number;
    setYear(value: number): void;

    getMonth(): number;
    setMonth(value: number): void;

    getDay(): number;
    setDay(value: number): void;

    getWeek(): number;
    setWeek(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDateFilter.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDateFilter): WebcacheDateFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDateFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDateFilter;
    static deserializeBinaryFromReader(message: WebcacheDateFilter, reader: jspb.BinaryReader): WebcacheDateFilter;
}

export namespace WebcacheDateFilter {
    export type AsObject = {
        year: number,
        month: number,
        day: number,
        week: number,
    }
}

export class WebcacheMimeTypesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheMimeTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheMimeTypesRequest): WebcacheMimeTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheMimeTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheMimeTypesRequest;
    static deserializeBinaryFromReader(message: WebcacheMimeTypesRequest, reader: jspb.BinaryReader): WebcacheMimeTypesRequest;
}

export namespace WebcacheMimeTypesRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
    }
}

export class WebcacheMimeTypes extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearMimeTypeList(): void;
    getMimeTypeList(): Array<WebcacheMimeType>;
    setMimeTypeList(value: Array<WebcacheMimeType>): void;
    addMimeType(value?: WebcacheMimeType, index?: number): WebcacheMimeType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheMimeTypes.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheMimeTypes): WebcacheMimeTypes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheMimeTypes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheMimeTypes;
    static deserializeBinaryFromReader(message: WebcacheMimeTypes, reader: jspb.BinaryReader): WebcacheMimeTypes;
}

export namespace WebcacheMimeTypes {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        mimeTypeList: Array<WebcacheMimeType.AsObject>,
    }
}

export class WebcacheMimeType extends jspb.Message { 
    getMimeType(): string;
    setMimeType(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheMimeType.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheMimeType): WebcacheMimeType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheMimeType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheMimeType;
    static deserializeBinaryFromReader(message: WebcacheMimeType, reader: jspb.BinaryReader): WebcacheMimeType;
}

export namespace WebcacheMimeType {
    export type AsObject = {
        mimeType: string,
        requests: number,
        bytes: number,
    }
}

export class WebcacheNetworkDetailRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;

    getNetwork(): string;
    setNetwork(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetworkDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetworkDetailRequest): WebcacheNetworkDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetworkDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetworkDetailRequest;
    static deserializeBinaryFromReader(message: WebcacheNetworkDetailRequest, reader: jspb.BinaryReader): WebcacheNetworkDetailRequest;
}

export namespace WebcacheNetworkDetailRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
        network: string,
    }
}

export class WebcacheNetworkDetail extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearUserList(): void;
    getUserList(): Array<WebcacheUser>;
    setUserList(value: Array<WebcacheUser>): void;
    addUser(value?: WebcacheUser, index?: number): WebcacheUser;

    clearPeriodList(): void;
    getPeriodList(): Array<WebcacheNetworkPeriod>;
    setPeriodList(value: Array<WebcacheNetworkPeriod>): void;
    addPeriod(value?: WebcacheNetworkPeriod, index?: number): WebcacheNetworkPeriod;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetworkDetail.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetworkDetail): WebcacheNetworkDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetworkDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetworkDetail;
    static deserializeBinaryFromReader(message: WebcacheNetworkDetail, reader: jspb.BinaryReader): WebcacheNetworkDetail;
}

export namespace WebcacheNetworkDetail {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        userList: Array<WebcacheUser.AsObject>,
        periodList: Array<WebcacheNetworkPeriod.AsObject>,
    }
}

export class WebcacheNetworkPeriod extends jspb.Message { 
    getPeriod(): number;
    setPeriod(value: number): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetworkPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetworkPeriod): WebcacheNetworkPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetworkPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetworkPeriod;
    static deserializeBinaryFromReader(message: WebcacheNetworkPeriod, reader: jspb.BinaryReader): WebcacheNetworkPeriod;
}

export namespace WebcacheNetworkPeriod {
    export type AsObject = {
        period: number,
        requests: number,
        bytes: number,
    }
}

export class WebcacheNetworksRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetworksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetworksRequest): WebcacheNetworksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetworksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetworksRequest;
    static deserializeBinaryFromReader(message: WebcacheNetworksRequest, reader: jspb.BinaryReader): WebcacheNetworksRequest;
}

export namespace WebcacheNetworksRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
    }
}

export class WebcacheNetworks extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearNetworkList(): void;
    getNetworkList(): Array<WebcacheNetwork>;
    setNetworkList(value: Array<WebcacheNetwork>): void;
    addNetwork(value?: WebcacheNetwork, index?: number): WebcacheNetwork;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetworks.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetworks): WebcacheNetworks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetworks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetworks;
    static deserializeBinaryFromReader(message: WebcacheNetworks, reader: jspb.BinaryReader): WebcacheNetworks;
}

export namespace WebcacheNetworks {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        networkList: Array<WebcacheNetwork.AsObject>,
    }
}

export class WebcacheNetwork extends jspb.Message { 
    getNetwork(): string;
    setNetwork(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

    getUsers(): number;
    setUsers(value: number): void;

    getLargestFileBytes(): number;
    setLargestFileBytes(value: number): void;

    getLargestFileUrl(): string;
    setLargestFileUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheNetwork.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheNetwork): WebcacheNetwork.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheNetwork, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheNetwork;
    static deserializeBinaryFromReader(message: WebcacheNetwork, reader: jspb.BinaryReader): WebcacheNetwork;
}

export namespace WebcacheNetwork {
    export type AsObject = {
        network: string,
        requests: number,
        bytes: number,
        duration: number,
        users: number,
        largestFileBytes: number,
        largestFileUrl: string,
    }
}

export class WebcacheUserDetailRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;

    getUser(): string;
    setUser(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUserDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUserDetailRequest): WebcacheUserDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUserDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUserDetailRequest;
    static deserializeBinaryFromReader(message: WebcacheUserDetailRequest, reader: jspb.BinaryReader): WebcacheUserDetailRequest;
}

export namespace WebcacheUserDetailRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
        user: string,
    }
}

export class WebcacheUserDetail extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearUrlList(): void;
    getUrlList(): Array<WebcacheUrl>;
    setUrlList(value: Array<WebcacheUrl>): void;
    addUrl(value?: WebcacheUrl, index?: number): WebcacheUrl;

    clearPeriodList(): void;
    getPeriodList(): Array<WebcacheUserDetailPeriod>;
    setPeriodList(value: Array<WebcacheUserDetailPeriod>): void;
    addPeriod(value?: WebcacheUserDetailPeriod, index?: number): WebcacheUserDetailPeriod;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUserDetail.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUserDetail): WebcacheUserDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUserDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUserDetail;
    static deserializeBinaryFromReader(message: WebcacheUserDetail, reader: jspb.BinaryReader): WebcacheUserDetail;
}

export namespace WebcacheUserDetail {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        urlList: Array<WebcacheUrl.AsObject>,
        periodList: Array<WebcacheUserDetailPeriod.AsObject>,
    }
}

export class WebcacheUserDetailPeriod extends jspb.Message { 
    getPeriod(): number;
    setPeriod(value: number): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUserDetailPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUserDetailPeriod): WebcacheUserDetailPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUserDetailPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUserDetailPeriod;
    static deserializeBinaryFromReader(message: WebcacheUserDetailPeriod, reader: jspb.BinaryReader): WebcacheUserDetailPeriod;
}

export namespace WebcacheUserDetailPeriod {
    export type AsObject = {
        period: number,
        requests: number,
        bytes: number,
    }
}

export class WebcacheUsersRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUsersRequest): WebcacheUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUsersRequest;
    static deserializeBinaryFromReader(message: WebcacheUsersRequest, reader: jspb.BinaryReader): WebcacheUsersRequest;
}

export namespace WebcacheUsersRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
    }
}

export class WebcacheUsers extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearUserList(): void;
    getUserList(): Array<WebcacheUser>;
    setUserList(value: Array<WebcacheUser>): void;
    addUser(value?: WebcacheUser, index?: number): WebcacheUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUsers.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUsers): WebcacheUsers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUsers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUsers;
    static deserializeBinaryFromReader(message: WebcacheUsers, reader: jspb.BinaryReader): WebcacheUsers;
}

export namespace WebcacheUsers {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        userList: Array<WebcacheUser.AsObject>,
    }
}

export class WebcacheUser extends jspb.Message { 
    getUser(): string;
    setUser(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

    getLargestFileBytes(): number;
    setLargestFileBytes(value: number): void;

    getLargestFileUrl(): string;
    setLargestFileUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUser.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUser): WebcacheUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUser;
    static deserializeBinaryFromReader(message: WebcacheUser, reader: jspb.BinaryReader): WebcacheUser;
}

export namespace WebcacheUser {
    export type AsObject = {
        user: string,
        requests: number,
        bytes: number,
        duration: number,
        largestFileBytes: number,
        largestFileUrl: string,
    }
}

export class WebcacheDeniedRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDeniedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDeniedRequest): WebcacheDeniedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDeniedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDeniedRequest;
    static deserializeBinaryFromReader(message: WebcacheDeniedRequest, reader: jspb.BinaryReader): WebcacheDeniedRequest;
}

export namespace WebcacheDeniedRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
    }
}

export class WebcacheDenied extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearDeniedUrlList(): void;
    getDeniedUrlList(): Array<WebcacheDeniedUrl>;
    setDeniedUrlList(value: Array<WebcacheDeniedUrl>): void;
    addDeniedUrl(value?: WebcacheDeniedUrl, index?: number): WebcacheDeniedUrl;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDenied.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDenied): WebcacheDenied.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDenied, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDenied;
    static deserializeBinaryFromReader(message: WebcacheDenied, reader: jspb.BinaryReader): WebcacheDenied;
}

export namespace WebcacheDenied {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        deniedUrlList: Array<WebcacheDeniedUrl.AsObject>,
    }
}

export class WebcacheDeniedUrl extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    clearBlacklistAclList(): void;
    getBlacklistAclList(): Array<string>;
    setBlacklistAclList(value: Array<string>): void;
    addBlacklistAcl(value: string, index?: number): string;

    clearUserList(): void;
    getUserList(): Array<WebcacheDomainUser>;
    setUserList(value: Array<WebcacheDomainUser>): void;
    addUser(value?: WebcacheDomainUser, index?: number): WebcacheDomainUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDeniedUrl.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDeniedUrl): WebcacheDeniedUrl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDeniedUrl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDeniedUrl;
    static deserializeBinaryFromReader(message: WebcacheDeniedUrl, reader: jspb.BinaryReader): WebcacheDeniedUrl;
}

export namespace WebcacheDeniedUrl {
    export type AsObject = {
        url: string,
        requests: number,
        blacklistAclList: Array<string>,
        userList: Array<WebcacheDomainUser.AsObject>,
    }
}

export class WebcacheUrlsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUrlsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUrlsRequest): WebcacheUrlsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUrlsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUrlsRequest;
    static deserializeBinaryFromReader(message: WebcacheUrlsRequest, reader: jspb.BinaryReader): WebcacheUrlsRequest;
}

export namespace WebcacheUrlsRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
    }
}

export class WebcacheUrls extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearUrlList(): void;
    getUrlList(): Array<WebcacheUrl>;
    setUrlList(value: Array<WebcacheUrl>): void;
    addUrl(value?: WebcacheUrl, index?: number): WebcacheUrl;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUrls.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUrls): WebcacheUrls.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUrls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUrls;
    static deserializeBinaryFromReader(message: WebcacheUrls, reader: jspb.BinaryReader): WebcacheUrls;
}

export namespace WebcacheUrls {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        urlList: Array<WebcacheUrl.AsObject>,
    }
}

export class WebcacheUrl extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheUrl.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheUrl): WebcacheUrl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheUrl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheUrl;
    static deserializeBinaryFromReader(message: WebcacheUrl, reader: jspb.BinaryReader): WebcacheUrl;
}

export namespace WebcacheUrl {
    export type AsObject = {
        url: string,
        requests: number,
        bytes: number,
        duration: number,
    }
}

export class WebcacheDomainsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;

    getOrderBy(): WebcacheOrderByEnum;
    setOrderBy(value: WebcacheOrderByEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDomainsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDomainsRequest): WebcacheDomainsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDomainsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDomainsRequest;
    static deserializeBinaryFromReader(message: WebcacheDomainsRequest, reader: jspb.BinaryReader): WebcacheDomainsRequest;
}

export namespace WebcacheDomainsRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
        orderBy: WebcacheOrderByEnum,
    }
}

export class WebcacheDomains extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearDomainList(): void;
    getDomainList(): Array<WebcacheDomain>;
    setDomainList(value: Array<WebcacheDomain>): void;
    addDomain(value?: WebcacheDomain, index?: number): WebcacheDomain;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDomains.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDomains): WebcacheDomains.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDomains, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDomains;
    static deserializeBinaryFromReader(message: WebcacheDomains, reader: jspb.BinaryReader): WebcacheDomains;
}

export namespace WebcacheDomains {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        domainList: Array<WebcacheDomain.AsObject>,
    }
}

export class WebcacheDomain extends jspb.Message { 
    getDomain(): string;
    setDomain(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

    clearUserList(): void;
    getUserList(): Array<WebcacheDomainUser>;
    setUserList(value: Array<WebcacheDomainUser>): void;
    addUser(value?: WebcacheDomainUser, index?: number): WebcacheDomainUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDomain.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDomain): WebcacheDomain.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDomain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDomain;
    static deserializeBinaryFromReader(message: WebcacheDomain, reader: jspb.BinaryReader): WebcacheDomain;
}

export namespace WebcacheDomain {
    export type AsObject = {
        domain: string,
        requests: number,
        bytes: number,
        duration: number,
        userList: Array<WebcacheDomainUser.AsObject>,
    }
}

export class WebcacheDomainUser extends jspb.Message { 
    getUser(): string;
    setUser(value: string): void;

    getRequests(): number;
    setRequests(value: number): void;

    getBytes(): number;
    setBytes(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDomainUser.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDomainUser): WebcacheDomainUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDomainUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDomainUser;
    static deserializeBinaryFromReader(message: WebcacheDomainUser, reader: jspb.BinaryReader): WebcacheDomainUser;
}

export namespace WebcacheDomainUser {
    export type AsObject = {
        user: string,
        requests: number,
        bytes: number,
    }
}

export class WebcacheTotalsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasDateFilter(): boolean;
    clearDateFilter(): void;
    getDateFilter(): WebcacheDateFilter | undefined;
    setDateFilter(value?: WebcacheDateFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheTotalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheTotalsRequest): WebcacheTotalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheTotalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheTotalsRequest;
    static deserializeBinaryFromReader(message: WebcacheTotalsRequest, reader: jspb.BinaryReader): WebcacheTotalsRequest;
}

export namespace WebcacheTotalsRequest {
    export type AsObject = {
        requestId: number,
        dateFilter?: WebcacheDateFilter.AsObject,
    }
}

export class WebcacheTotals extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getHits(): number;
    setHits(value: number): void;

    getMisses(): number;
    setMisses(value: number): void;

    getDenied(): number;
    setDenied(value: number): void;

    getHitsBytes(): number;
    setHitsBytes(value: number): void;

    getMissesBytes(): number;
    setMissesBytes(value: number): void;

    getDeniedBytes(): number;
    setDeniedBytes(value: number): void;

    getUsers(): number;
    setUsers(value: number): void;

    getSites(): number;
    setSites(value: number): void;

    getDomains(): number;
    setDomains(value: number): void;

    clearPeriodList(): void;
    getPeriodList(): Array<WebcacheTotalsPeriod>;
    setPeriodList(value: Array<WebcacheTotalsPeriod>): void;
    addPeriod(value?: WebcacheTotalsPeriod, index?: number): WebcacheTotalsPeriod;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheTotals.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheTotals): WebcacheTotals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheTotals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheTotals;
    static deserializeBinaryFromReader(message: WebcacheTotals, reader: jspb.BinaryReader): WebcacheTotals;
}

export namespace WebcacheTotals {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        hits: number,
        misses: number,
        denied: number,
        hitsBytes: number,
        missesBytes: number,
        deniedBytes: number,
        users: number,
        sites: number,
        domains: number,
        periodList: Array<WebcacheTotalsPeriod.AsObject>,
    }
}

export class WebcacheTotalsPeriod extends jspb.Message { 
    getPeriod(): number;
    setPeriod(value: number): void;

    getHits(): number;
    setHits(value: number): void;

    getMisses(): number;
    setMisses(value: number): void;

    getDenied(): number;
    setDenied(value: number): void;

    getHitsBytes(): number;
    setHitsBytes(value: number): void;

    getMissesBytes(): number;
    setMissesBytes(value: number): void;

    getDeniedBytes(): number;
    setDeniedBytes(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheTotalsPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheTotalsPeriod): WebcacheTotalsPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheTotalsPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheTotalsPeriod;
    static deserializeBinaryFromReader(message: WebcacheTotalsPeriod, reader: jspb.BinaryReader): WebcacheTotalsPeriod;
}

export namespace WebcacheTotalsPeriod {
    export type AsObject = {
        period: number,
        hits: number,
        misses: number,
        denied: number,
        hitsBytes: number,
        missesBytes: number,
        deniedBytes: number,
    }
}

export class WebcacheDatesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDatesRequest): WebcacheDatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDatesRequest;
    static deserializeBinaryFromReader(message: WebcacheDatesRequest, reader: jspb.BinaryReader): WebcacheDatesRequest;
}

export namespace WebcacheDatesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class WebcacheDates extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearYearList(): void;
    getYearList(): Array<WebcacheYear>;
    setYearList(value: Array<WebcacheYear>): void;
    addYear(value?: WebcacheYear, index?: number): WebcacheYear;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheDates.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheDates): WebcacheDates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheDates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheDates;
    static deserializeBinaryFromReader(message: WebcacheDates, reader: jspb.BinaryReader): WebcacheDates;
}

export namespace WebcacheDates {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        yearList: Array<WebcacheYear.AsObject>,
    }
}

export class WebcacheYear extends jspb.Message { 
    getYear(): number;
    setYear(value: number): void;

    clearMonthList(): void;
    getMonthList(): Array<WebcacheMonth>;
    setMonthList(value: Array<WebcacheMonth>): void;
    addMonth(value?: WebcacheMonth, index?: number): WebcacheMonth;

    clearWeekList(): void;
    getWeekList(): Array<number>;
    setWeekList(value: Array<number>): void;
    addWeek(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheYear.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheYear): WebcacheYear.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheYear, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheYear;
    static deserializeBinaryFromReader(message: WebcacheYear, reader: jspb.BinaryReader): WebcacheYear;
}

export namespace WebcacheYear {
    export type AsObject = {
        year: number,
        monthList: Array<WebcacheMonth.AsObject>,
        weekList: Array<number>,
    }
}

export class WebcacheMonth extends jspb.Message { 
    getMonth(): string;
    setMonth(value: string): void;

    getVal(): number;
    setVal(value: number): void;

    clearDayList(): void;
    getDayList(): Array<number>;
    setDayList(value: Array<number>): void;
    addDay(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebcacheMonth.AsObject;
    static toObject(includeInstance: boolean, msg: WebcacheMonth): WebcacheMonth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebcacheMonth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebcacheMonth;
    static deserializeBinaryFromReader(message: WebcacheMonth, reader: jspb.BinaryReader): WebcacheMonth;
}

export namespace WebcacheMonth {
    export type AsObject = {
        month: string,
        val: number,
        dayList: Array<number>,
    }
}

export enum WebcacheOrderByEnum {
    BYTES = 0,
    REQUESTS = 1,
    DURATION = 2,
    USERS = 3,
    LARGEST = 4,
}
