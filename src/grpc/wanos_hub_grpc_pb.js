// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var device_pb = require('./device_pb.js');
var dashboard_pb = require('./dashboard_pb.js');
var webcache_pb = require('./webcache_pb.js');
var network_pb = require('./network_pb.js');
var system_pb = require('./system_pb.js');
var diagnostic_pb = require('./diagnostic_pb.js');
var configure_pb = require('./configure_pb.js');
var status_pb = require('./status_pb.js');
var file_transfer_pb = require('./file_transfer_pb.js');
var patcher_pb = require('./patcher_pb.js');
var maintenance_pb = require('./maintenance_pb.js');
var license_pb = require('./license_pb.js');

function serialize_AddTcpxRuleRequest(arg) {
  if (!(arg instanceof configure_pb.AddTcpxRuleRequest)) {
    throw new Error('Expected argument of type AddTcpxRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddTcpxRuleRequest(buffer_arg) {
  return configure_pb.AddTcpxRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DashboardData(arg) {
  if (!(arg instanceof dashboard_pb.DashboardData)) {
    throw new Error('Expected argument of type DashboardData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DashboardData(buffer_arg) {
  return dashboard_pb.DashboardData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DashboardDataRequest(arg) {
  if (!(arg instanceof dashboard_pb.DashboardDataRequest)) {
    throw new Error('Expected argument of type DashboardDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DashboardDataRequest(buffer_arg) {
  return dashboard_pb.DashboardDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DashboardTopPorts(arg) {
  if (!(arg instanceof dashboard_pb.DashboardTopPorts)) {
    throw new Error('Expected argument of type DashboardTopPorts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DashboardTopPorts(buffer_arg) {
  return dashboard_pb.DashboardTopPorts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DashboardTopPortsRequest(arg) {
  if (!(arg instanceof dashboard_pb.DashboardTopPortsRequest)) {
    throw new Error('Expected argument of type DashboardTopPortsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DashboardTopPortsRequest(buffer_arg) {
  return dashboard_pb.DashboardTopPortsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeviceStats(arg) {
  if (!(arg instanceof device_pb.DeviceStats)) {
    throw new Error('Expected argument of type DeviceStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeviceStats(buffer_arg) {
  return device_pb.DeviceStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeviceStatsRequest(arg) {
  if (!(arg instanceof device_pb.DeviceStatsRequest)) {
    throw new Error('Expected argument of type DeviceStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeviceStatsRequest(buffer_arg) {
  return device_pb.DeviceStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticBenchmark(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticBenchmark)) {
    throw new Error('Expected argument of type DiagnosticBenchmark');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticBenchmark(buffer_arg) {
  return diagnostic_pb.DiagnosticBenchmark.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticBenchmarkRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticBenchmarkRequest)) {
    throw new Error('Expected argument of type DiagnosticBenchmarkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticBenchmarkRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticBenchmarkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticHealth(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticHealth)) {
    throw new Error('Expected argument of type DiagnosticHealth');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticHealth(buffer_arg) {
  return diagnostic_pb.DiagnosticHealth.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticHealthRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticHealthRequest)) {
    throw new Error('Expected argument of type DiagnosticHealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticHealthRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticHealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticLog(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticLog)) {
    throw new Error('Expected argument of type DiagnosticLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticLog(buffer_arg) {
  return diagnostic_pb.DiagnosticLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticLogRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticLogRequest)) {
    throw new Error('Expected argument of type DiagnosticLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticLogRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticNetstat(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticNetstat)) {
    throw new Error('Expected argument of type DiagnosticNetstat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticNetstat(buffer_arg) {
  return diagnostic_pb.DiagnosticNetstat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticNetstatRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticNetstatRequest)) {
    throw new Error('Expected argument of type DiagnosticNetstatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticNetstatRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticNetstatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticPing(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticPing)) {
    throw new Error('Expected argument of type DiagnosticPing');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticPing(buffer_arg) {
  return diagnostic_pb.DiagnosticPing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticPingRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticPingRequest)) {
    throw new Error('Expected argument of type DiagnosticPingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticPingRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticPingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticTraceroute(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticTraceroute)) {
    throw new Error('Expected argument of type DiagnosticTraceroute');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticTraceroute(buffer_arg) {
  return diagnostic_pb.DiagnosticTraceroute.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagnosticTracerouteRequest(arg) {
  if (!(arg instanceof diagnostic_pb.DiagnosticTracerouteRequest)) {
    throw new Error('Expected argument of type DiagnosticTracerouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DiagnosticTracerouteRequest(buffer_arg) {
  return diagnostic_pb.DiagnosticTracerouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FileTransferRequest(arg) {
  if (!(arg instanceof file_transfer_pb.FileTransferRequest)) {
    throw new Error('Expected argument of type FileTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FileTransferRequest(buffer_arg) {
  return file_transfer_pb.FileTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FileTransferResponse(arg) {
  if (!(arg instanceof file_transfer_pb.FileTransferResponse)) {
    throw new Error('Expected argument of type FileTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FileTransferResponse(buffer_arg) {
  return file_transfer_pb.FileTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetPathConfigRequest(arg) {
  if (!(arg instanceof configure_pb.GetPathConfigRequest)) {
    throw new Error('Expected argument of type GetPathConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetPathConfigRequest(buffer_arg) {
  return configure_pb.GetPathConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetPathsRequest(arg) {
  if (!(arg instanceof configure_pb.GetPathsRequest)) {
    throw new Error('Expected argument of type GetPathsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetPathsRequest(buffer_arg) {
  return configure_pb.GetPathsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTcpxRulesRequest(arg) {
  if (!(arg instanceof configure_pb.GetTcpxRulesRequest)) {
    throw new Error('Expected argument of type GetTcpxRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTcpxRulesRequest(buffer_arg) {
  return configure_pb.GetTcpxRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetWebcacheConfRequest(arg) {
  if (!(arg instanceof configure_pb.GetWebcacheConfRequest)) {
    throw new Error('Expected argument of type GetWebcacheConfRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetWebcacheConfRequest(buffer_arg) {
  return configure_pb.GetWebcacheConfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LicenseAddRequest(arg) {
  if (!(arg instanceof license_pb.LicenseAddRequest)) {
    throw new Error('Expected argument of type LicenseAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LicenseAddRequest(buffer_arg) {
  return license_pb.LicenseAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LicenseGetRequest(arg) {
  if (!(arg instanceof license_pb.LicenseGetRequest)) {
    throw new Error('Expected argument of type LicenseGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LicenseGetRequest(buffer_arg) {
  return license_pb.LicenseGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LicenseResponse(arg) {
  if (!(arg instanceof license_pb.LicenseResponse)) {
    throw new Error('Expected argument of type LicenseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LicenseResponse(buffer_arg) {
  return license_pb.LicenseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MonitorSettings(arg) {
  if (!(arg instanceof configure_pb.MonitorSettings)) {
    throw new Error('Expected argument of type MonitorSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MonitorSettings(buffer_arg) {
  return configure_pb.MonitorSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MonitorSettingsRequest(arg) {
  if (!(arg instanceof configure_pb.MonitorSettingsRequest)) {
    throw new Error('Expected argument of type MonitorSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MonitorSettingsRequest(buffer_arg) {
  return configure_pb.MonitorSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MoveTcpxRuleRequest(arg) {
  if (!(arg instanceof configure_pb.MoveTcpxRuleRequest)) {
    throw new Error('Expected argument of type MoveTcpxRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MoveTcpxRuleRequest(buffer_arg) {
  return configure_pb.MoveTcpxRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkApplications(arg) {
  if (!(arg instanceof network_pb.NetworkApplications)) {
    throw new Error('Expected argument of type NetworkApplications');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkApplications(buffer_arg) {
  return network_pb.NetworkApplications.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkApplicationsRequest(arg) {
  if (!(arg instanceof network_pb.NetworkApplicationsRequest)) {
    throw new Error('Expected argument of type NetworkApplicationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkApplicationsRequest(buffer_arg) {
  return network_pb.NetworkApplicationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkInterfaceTraffic(arg) {
  if (!(arg instanceof network_pb.NetworkInterfaceTraffic)) {
    throw new Error('Expected argument of type NetworkInterfaceTraffic');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkInterfaceTraffic(buffer_arg) {
  return network_pb.NetworkInterfaceTraffic.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkInterfaceTrafficRequest(arg) {
  if (!(arg instanceof network_pb.NetworkInterfaceTrafficRequest)) {
    throw new Error('Expected argument of type NetworkInterfaceTrafficRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkInterfaceTrafficRequest(buffer_arg) {
  return network_pb.NetworkInterfaceTrafficRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkInterfaces(arg) {
  if (!(arg instanceof network_pb.NetworkInterfaces)) {
    throw new Error('Expected argument of type NetworkInterfaces');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkInterfaces(buffer_arg) {
  return network_pb.NetworkInterfaces.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkInterfacesRequest(arg) {
  if (!(arg instanceof network_pb.NetworkInterfacesRequest)) {
    throw new Error('Expected argument of type NetworkInterfacesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkInterfacesRequest(buffer_arg) {
  return network_pb.NetworkInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationLanToWan(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationLanToWan)) {
    throw new Error('Expected argument of type NetworkOptimizationLanToWan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationLanToWan(buffer_arg) {
  return network_pb.NetworkOptimizationLanToWan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationLanToWanRequest(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationLanToWanRequest)) {
    throw new Error('Expected argument of type NetworkOptimizationLanToWanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationLanToWanRequest(buffer_arg) {
  return network_pb.NetworkOptimizationLanToWanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationPassThrough(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationPassThrough)) {
    throw new Error('Expected argument of type NetworkOptimizationPassThrough');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationPassThrough(buffer_arg) {
  return network_pb.NetworkOptimizationPassThrough.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationPassThroughRequest(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationPassThroughRequest)) {
    throw new Error('Expected argument of type NetworkOptimizationPassThroughRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationPassThroughRequest(buffer_arg) {
  return network_pb.NetworkOptimizationPassThroughRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationRatios(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationRatios)) {
    throw new Error('Expected argument of type NetworkOptimizationRatios');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationRatios(buffer_arg) {
  return network_pb.NetworkOptimizationRatios.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationRatiosRequest(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationRatiosRequest)) {
    throw new Error('Expected argument of type NetworkOptimizationRatiosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationRatiosRequest(buffer_arg) {
  return network_pb.NetworkOptimizationRatiosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationWanToLan(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationWanToLan)) {
    throw new Error('Expected argument of type NetworkOptimizationWanToLan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationWanToLan(buffer_arg) {
  return network_pb.NetworkOptimizationWanToLan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkOptimizationWanToLanRequest(arg) {
  if (!(arg instanceof network_pb.NetworkOptimizationWanToLanRequest)) {
    throw new Error('Expected argument of type NetworkOptimizationWanToLanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkOptimizationWanToLanRequest(buffer_arg) {
  return network_pb.NetworkOptimizationWanToLanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkPeerDelete(arg) {
  if (!(arg instanceof network_pb.NetworkPeerDelete)) {
    throw new Error('Expected argument of type NetworkPeerDelete');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkPeerDelete(buffer_arg) {
  return network_pb.NetworkPeerDelete.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkPeerDeleteRequest(arg) {
  if (!(arg instanceof network_pb.NetworkPeerDeleteRequest)) {
    throw new Error('Expected argument of type NetworkPeerDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkPeerDeleteRequest(buffer_arg) {
  return network_pb.NetworkPeerDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkPeers(arg) {
  if (!(arg instanceof network_pb.NetworkPeers)) {
    throw new Error('Expected argument of type NetworkPeers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkPeers(buffer_arg) {
  return network_pb.NetworkPeers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkPeersRequest(arg) {
  if (!(arg instanceof network_pb.NetworkPeersRequest)) {
    throw new Error('Expected argument of type NetworkPeersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkPeersRequest(buffer_arg) {
  return network_pb.NetworkPeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkQosReport(arg) {
  if (!(arg instanceof network_pb.NetworkQosReport)) {
    throw new Error('Expected argument of type NetworkQosReport');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkQosReport(buffer_arg) {
  return network_pb.NetworkQosReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkQosReportRequest(arg) {
  if (!(arg instanceof network_pb.NetworkQosReportRequest)) {
    throw new Error('Expected argument of type NetworkQosReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkQosReportRequest(buffer_arg) {
  return network_pb.NetworkQosReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSessionDetail(arg) {
  if (!(arg instanceof network_pb.NetworkSessionDetail)) {
    throw new Error('Expected argument of type NetworkSessionDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSessionDetail(buffer_arg) {
  return network_pb.NetworkSessionDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSessionDetailRequest(arg) {
  if (!(arg instanceof network_pb.NetworkSessionDetailRequest)) {
    throw new Error('Expected argument of type NetworkSessionDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSessionDetailRequest(buffer_arg) {
  return network_pb.NetworkSessionDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSessions(arg) {
  if (!(arg instanceof network_pb.NetworkSessions)) {
    throw new Error('Expected argument of type NetworkSessions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSessions(buffer_arg) {
  return network_pb.NetworkSessions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSessionsRequest(arg) {
  if (!(arg instanceof network_pb.NetworkSessionsRequest)) {
    throw new Error('Expected argument of type NetworkSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSessionsRequest(buffer_arg) {
  return network_pb.NetworkSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSettings(arg) {
  if (!(arg instanceof configure_pb.NetworkSettings)) {
    throw new Error('Expected argument of type NetworkSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSettings(buffer_arg) {
  return configure_pb.NetworkSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkSettingsRequest(arg) {
  if (!(arg instanceof configure_pb.NetworkSettingsRequest)) {
    throw new Error('Expected argument of type NetworkSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkSettingsRequest(buffer_arg) {
  return configure_pb.NetworkSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkTopApplications(arg) {
  if (!(arg instanceof network_pb.NetworkTopApplications)) {
    throw new Error('Expected argument of type NetworkTopApplications');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkTopApplications(buffer_arg) {
  return network_pb.NetworkTopApplications.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetworkTopApplicationsRequest(arg) {
  if (!(arg instanceof network_pb.NetworkTopApplicationsRequest)) {
    throw new Error('Expected argument of type NetworkTopApplicationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetworkTopApplicationsRequest(buffer_arg) {
  return network_pb.NetworkTopApplicationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OptimizationSettings(arg) {
  if (!(arg instanceof configure_pb.OptimizationSettings)) {
    throw new Error('Expected argument of type OptimizationSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OptimizationSettings(buffer_arg) {
  return configure_pb.OptimizationSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OptimizationSettingsRequest(arg) {
  if (!(arg instanceof configure_pb.OptimizationSettingsRequest)) {
    throw new Error('Expected argument of type OptimizationSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OptimizationSettingsRequest(buffer_arg) {
  return configure_pb.OptimizationSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PathConfigResponse(arg) {
  if (!(arg instanceof configure_pb.PathConfigResponse)) {
    throw new Error('Expected argument of type PathConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PathConfigResponse(buffer_arg) {
  return configure_pb.PathConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PathGatewaysResponse(arg) {
  if (!(arg instanceof configure_pb.PathGatewaysResponse)) {
    throw new Error('Expected argument of type PathGatewaysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PathGatewaysResponse(buffer_arg) {
  return configure_pb.PathGatewaysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PeersReport(arg) {
  if (!(arg instanceof device_pb.PeersReport)) {
    throw new Error('Expected argument of type PeersReport');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PeersReport(buffer_arg) {
  return device_pb.PeersReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PeersRequest(arg) {
  if (!(arg instanceof device_pb.PeersRequest)) {
    throw new Error('Expected argument of type PeersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PeersRequest(buffer_arg) {
  return device_pb.PeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterRequest(arg) {
  if (!(arg instanceof device_pb.RegisterRequest)) {
    throw new Error('Expected argument of type RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterRequest(buffer_arg) {
  return device_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterResponse(arg) {
  if (!(arg instanceof device_pb.RegisterResponse)) {
    throw new Error('Expected argument of type RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterResponse(buffer_arg) {
  return device_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemovePathRequest(arg) {
  if (!(arg instanceof configure_pb.RemovePathRequest)) {
    throw new Error('Expected argument of type RemovePathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemovePathRequest(buffer_arg) {
  return configure_pb.RemovePathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveTcpxRuleRequest(arg) {
  if (!(arg instanceof configure_pb.RemoveTcpxRuleRequest)) {
    throw new Error('Expected argument of type RemoveTcpxRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveTcpxRuleRequest(buffer_arg) {
  return configure_pb.RemoveTcpxRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteAdd(arg) {
  if (!(arg instanceof configure_pb.RouteAdd)) {
    throw new Error('Expected argument of type RouteAdd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteAdd(buffer_arg) {
  return configure_pb.RouteAdd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteAddRequest(arg) {
  if (!(arg instanceof configure_pb.RouteAddRequest)) {
    throw new Error('Expected argument of type RouteAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteAddRequest(buffer_arg) {
  return configure_pb.RouteAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteRemove(arg) {
  if (!(arg instanceof configure_pb.RouteRemove)) {
    throw new Error('Expected argument of type RouteRemove');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteRemove(buffer_arg) {
  return configure_pb.RouteRemove.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteRemoveRequest(arg) {
  if (!(arg instanceof configure_pb.RouteRemoveRequest)) {
    throw new Error('Expected argument of type RouteRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteRemoveRequest(buffer_arg) {
  return configure_pb.RouteRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteUpdate(arg) {
  if (!(arg instanceof configure_pb.RouteUpdate)) {
    throw new Error('Expected argument of type RouteUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteUpdate(buffer_arg) {
  return configure_pb.RouteUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RouteUpdateRequest(arg) {
  if (!(arg instanceof configure_pb.RouteUpdateRequest)) {
    throw new Error('Expected argument of type RouteUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RouteUpdateRequest(buffer_arg) {
  return configure_pb.RouteUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Routes(arg) {
  if (!(arg instanceof configure_pb.Routes)) {
    throw new Error('Expected argument of type Routes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Routes(buffer_arg) {
  return configure_pb.Routes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RoutesRequest(arg) {
  if (!(arg instanceof configure_pb.RoutesRequest)) {
    throw new Error('Expected argument of type RoutesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RoutesRequest(buffer_arg) {
  return configure_pb.RoutesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServerAgentVersionRequest(arg) {
  if (!(arg instanceof patcher_pb.ServerAgentVersionRequest)) {
    throw new Error('Expected argument of type ServerAgentVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServerAgentVersionRequest(buffer_arg) {
  return patcher_pb.ServerAgentVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServerAgentVersionResponse(arg) {
  if (!(arg instanceof patcher_pb.ServerAgentVersionResponse)) {
    throw new Error('Expected argument of type ServerAgentVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServerAgentVersionResponse(buffer_arg) {
  return patcher_pb.ServerAgentVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceReset(arg) {
  if (!(arg instanceof configure_pb.ServiceReset)) {
    throw new Error('Expected argument of type ServiceReset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceReset(buffer_arg) {
  return configure_pb.ServiceReset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceResetRequest(arg) {
  if (!(arg instanceof configure_pb.ServiceResetRequest)) {
    throw new Error('Expected argument of type ServiceResetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceResetRequest(buffer_arg) {
  return configure_pb.ServiceResetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetPathConfigRequest(arg) {
  if (!(arg instanceof configure_pb.SetPathConfigRequest)) {
    throw new Error('Expected argument of type SetPathConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetPathConfigRequest(buffer_arg) {
  return configure_pb.SetPathConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetWebcacheConfRequest(arg) {
  if (!(arg instanceof configure_pb.SetWebcacheConfRequest)) {
    throw new Error('Expected argument of type SetWebcacheConfRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetWebcacheConfRequest(buffer_arg) {
  return configure_pb.SetWebcacheConfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SshPasswordChange(arg) {
  if (!(arg instanceof configure_pb.SshPasswordChange)) {
    throw new Error('Expected argument of type SshPasswordChange');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SshPasswordChange(buffer_arg) {
  return configure_pb.SshPasswordChange.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SshPasswordChangeRequest(arg) {
  if (!(arg instanceof configure_pb.SshPasswordChangeRequest)) {
    throw new Error('Expected argument of type SshPasswordChangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SshPasswordChangeRequest(buffer_arg) {
  return configure_pb.SshPasswordChangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StartBackupRequest(arg) {
  if (!(arg instanceof maintenance_pb.StartBackupRequest)) {
    throw new Error('Expected argument of type StartBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StartBackupRequest(buffer_arg) {
  return maintenance_pb.StartBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StartBackupResponse(arg) {
  if (!(arg instanceof maintenance_pb.StartBackupResponse)) {
    throw new Error('Expected argument of type StartBackupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StartBackupResponse(buffer_arg) {
  return maintenance_pb.StartBackupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusUpdate(arg) {
  if (!(arg instanceof status_pb.StatusUpdate)) {
    throw new Error('Expected argument of type StatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatusUpdate(buffer_arg) {
  return status_pb.StatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusUpdateRequest(arg) {
  if (!(arg instanceof status_pb.StatusUpdateRequest)) {
    throw new Error('Expected argument of type StatusUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatusUpdateRequest(buffer_arg) {
  return status_pb.StatusUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemCpu(arg) {
  if (!(arg instanceof system_pb.SystemCpu)) {
    throw new Error('Expected argument of type SystemCpu');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemCpu(buffer_arg) {
  return system_pb.SystemCpu.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemCpuRequest(arg) {
  if (!(arg instanceof system_pb.SystemCpuRequest)) {
    throw new Error('Expected argument of type SystemCpuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemCpuRequest(buffer_arg) {
  return system_pb.SystemCpuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemDiskLoad(arg) {
  if (!(arg instanceof system_pb.SystemDiskLoad)) {
    throw new Error('Expected argument of type SystemDiskLoad');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemDiskLoad(buffer_arg) {
  return system_pb.SystemDiskLoad.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemDiskLoadRequest(arg) {
  if (!(arg instanceof system_pb.SystemDiskLoadRequest)) {
    throw new Error('Expected argument of type SystemDiskLoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemDiskLoadRequest(buffer_arg) {
  return system_pb.SystemDiskLoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemDiskSpace(arg) {
  if (!(arg instanceof system_pb.SystemDiskSpace)) {
    throw new Error('Expected argument of type SystemDiskSpace');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemDiskSpace(buffer_arg) {
  return system_pb.SystemDiskSpace.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemDiskSpaceRequest(arg) {
  if (!(arg instanceof system_pb.SystemDiskSpaceRequest)) {
    throw new Error('Expected argument of type SystemDiskSpaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemDiskSpaceRequest(buffer_arg) {
  return system_pb.SystemDiskSpaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemIndicators(arg) {
  if (!(arg instanceof system_pb.SystemIndicators)) {
    throw new Error('Expected argument of type SystemIndicators');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemIndicators(buffer_arg) {
  return system_pb.SystemIndicators.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemIndicatorsRequest(arg) {
  if (!(arg instanceof system_pb.SystemIndicatorsRequest)) {
    throw new Error('Expected argument of type SystemIndicatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemIndicatorsRequest(buffer_arg) {
  return system_pb.SystemIndicatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemInfo(arg) {
  if (!(arg instanceof system_pb.SystemInfo)) {
    throw new Error('Expected argument of type SystemInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemInfo(buffer_arg) {
  return system_pb.SystemInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemInfoRequest(arg) {
  if (!(arg instanceof system_pb.SystemInfoRequest)) {
    throw new Error('Expected argument of type SystemInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemInfoRequest(buffer_arg) {
  return system_pb.SystemInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemLoad(arg) {
  if (!(arg instanceof system_pb.SystemLoad)) {
    throw new Error('Expected argument of type SystemLoad');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemLoad(buffer_arg) {
  return system_pb.SystemLoad.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemLoadRequest(arg) {
  if (!(arg instanceof system_pb.SystemLoadRequest)) {
    throw new Error('Expected argument of type SystemLoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemLoadRequest(buffer_arg) {
  return system_pb.SystemLoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemMemory(arg) {
  if (!(arg instanceof system_pb.SystemMemory)) {
    throw new Error('Expected argument of type SystemMemory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemMemory(buffer_arg) {
  return system_pb.SystemMemory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemMemoryRequest(arg) {
  if (!(arg instanceof system_pb.SystemMemoryRequest)) {
    throw new Error('Expected argument of type SystemMemoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemMemoryRequest(buffer_arg) {
  return system_pb.SystemMemoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemSettings(arg) {
  if (!(arg instanceof configure_pb.SystemSettings)) {
    throw new Error('Expected argument of type SystemSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemSettings(buffer_arg) {
  return configure_pb.SystemSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SystemSettingsRequest(arg) {
  if (!(arg instanceof configure_pb.SystemSettingsRequest)) {
    throw new Error('Expected argument of type SystemSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SystemSettingsRequest(buffer_arg) {
  return configure_pb.SystemSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TcpxRuleAdd(arg) {
  if (!(arg instanceof configure_pb.TcpxRuleAdd)) {
    throw new Error('Expected argument of type TcpxRuleAdd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TcpxRuleAdd(buffer_arg) {
  return configure_pb.TcpxRuleAdd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TcpxRuleMove(arg) {
  if (!(arg instanceof configure_pb.TcpxRuleMove)) {
    throw new Error('Expected argument of type TcpxRuleMove');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TcpxRuleMove(buffer_arg) {
  return configure_pb.TcpxRuleMove.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TcpxRuleRemove(arg) {
  if (!(arg instanceof configure_pb.TcpxRuleRemove)) {
    throw new Error('Expected argument of type TcpxRuleRemove');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TcpxRuleRemove(buffer_arg) {
  return configure_pb.TcpxRuleRemove.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TcpxRuleUpdate(arg) {
  if (!(arg instanceof configure_pb.TcpxRuleUpdate)) {
    throw new Error('Expected argument of type TcpxRuleUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TcpxRuleUpdate(buffer_arg) {
  return configure_pb.TcpxRuleUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TcpxRules(arg) {
  if (!(arg instanceof configure_pb.TcpxRules)) {
    throw new Error('Expected argument of type TcpxRules');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TcpxRules(buffer_arg) {
  return configure_pb.TcpxRules.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicies(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicies)) {
    throw new Error('Expected argument of type TrafficPolicies');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicies(buffer_arg) {
  return configure_pb.TrafficPolicies.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPoliciesRequest(arg) {
  if (!(arg instanceof configure_pb.TrafficPoliciesRequest)) {
    throw new Error('Expected argument of type TrafficPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPoliciesRequest(buffer_arg) {
  return configure_pb.TrafficPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyAdd(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyAdd)) {
    throw new Error('Expected argument of type TrafficPolicyAdd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyAdd(buffer_arg) {
  return configure_pb.TrafficPolicyAdd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyAddRequest(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyAddRequest)) {
    throw new Error('Expected argument of type TrafficPolicyAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyAddRequest(buffer_arg) {
  return configure_pb.TrafficPolicyAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyDelete(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyDelete)) {
    throw new Error('Expected argument of type TrafficPolicyDelete');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyDelete(buffer_arg) {
  return configure_pb.TrafficPolicyDelete.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyDeleteRequest(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyDeleteRequest)) {
    throw new Error('Expected argument of type TrafficPolicyDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyDeleteRequest(buffer_arg) {
  return configure_pb.TrafficPolicyDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyUpdate(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyUpdate)) {
    throw new Error('Expected argument of type TrafficPolicyUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyUpdate(buffer_arg) {
  return configure_pb.TrafficPolicyUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TrafficPolicyUpdateRequest(arg) {
  if (!(arg instanceof configure_pb.TrafficPolicyUpdateRequest)) {
    throw new Error('Expected argument of type TrafficPolicyUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TrafficPolicyUpdateRequest(buffer_arg) {
  return configure_pb.TrafficPolicyUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPolicies(arg) {
  if (!(arg instanceof configure_pb.TunnelPolicies)) {
    throw new Error('Expected argument of type TunnelPolicies');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPolicies(buffer_arg) {
  return configure_pb.TunnelPolicies.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesAddRule(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesAddRule)) {
    throw new Error('Expected argument of type TunnelPoliciesAddRule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesAddRule(buffer_arg) {
  return configure_pb.TunnelPoliciesAddRule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesAddRuleRequest(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesAddRuleRequest)) {
    throw new Error('Expected argument of type TunnelPoliciesAddRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesAddRuleRequest(buffer_arg) {
  return configure_pb.TunnelPoliciesAddRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesDeleteRule(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesDeleteRule)) {
    throw new Error('Expected argument of type TunnelPoliciesDeleteRule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesDeleteRule(buffer_arg) {
  return configure_pb.TunnelPoliciesDeleteRule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesDeleteRuleRequest(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesDeleteRuleRequest)) {
    throw new Error('Expected argument of type TunnelPoliciesDeleteRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesDeleteRuleRequest(buffer_arg) {
  return configure_pb.TunnelPoliciesDeleteRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesRequest(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesRequest)) {
    throw new Error('Expected argument of type TunnelPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesRequest(buffer_arg) {
  return configure_pb.TunnelPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesUpdateRule(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesUpdateRule)) {
    throw new Error('Expected argument of type TunnelPoliciesUpdateRule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesUpdateRule(buffer_arg) {
  return configure_pb.TunnelPoliciesUpdateRule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TunnelPoliciesUpdateRuleRequest(arg) {
  if (!(arg instanceof configure_pb.TunnelPoliciesUpdateRuleRequest)) {
    throw new Error('Expected argument of type TunnelPoliciesUpdateRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TunnelPoliciesUpdateRuleRequest(buffer_arg) {
  return configure_pb.TunnelPoliciesUpdateRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateTcpxRuleRequest(arg) {
  if (!(arg instanceof configure_pb.UpdateTcpxRuleRequest)) {
    throw new Error('Expected argument of type UpdateTcpxRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateTcpxRuleRequest(buffer_arg) {
  return configure_pb.UpdateTcpxRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UploadBackupRequest(arg) {
  if (!(arg instanceof maintenance_pb.UploadBackupRequest)) {
    throw new Error('Expected argument of type UploadBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UploadBackupRequest(buffer_arg) {
  return maintenance_pb.UploadBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UploadBackupResponse(arg) {
  if (!(arg instanceof maintenance_pb.UploadBackupResponse)) {
    throw new Error('Expected argument of type UploadBackupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UploadBackupResponse(buffer_arg) {
  return maintenance_pb.UploadBackupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheConfResponse(arg) {
  if (!(arg instanceof configure_pb.WebcacheConfResponse)) {
    throw new Error('Expected argument of type WebcacheConfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheConfResponse(buffer_arg) {
  return configure_pb.WebcacheConfResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDates(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDates)) {
    throw new Error('Expected argument of type WebcacheDates');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDates(buffer_arg) {
  return webcache_pb.WebcacheDates.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDatesRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDatesRequest)) {
    throw new Error('Expected argument of type WebcacheDatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDatesRequest(buffer_arg) {
  return webcache_pb.WebcacheDatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDenied(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDenied)) {
    throw new Error('Expected argument of type WebcacheDenied');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDenied(buffer_arg) {
  return webcache_pb.WebcacheDenied.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDeniedRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDeniedRequest)) {
    throw new Error('Expected argument of type WebcacheDeniedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDeniedRequest(buffer_arg) {
  return webcache_pb.WebcacheDeniedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDomains(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDomains)) {
    throw new Error('Expected argument of type WebcacheDomains');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDomains(buffer_arg) {
  return webcache_pb.WebcacheDomains.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheDomainsRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheDomainsRequest)) {
    throw new Error('Expected argument of type WebcacheDomainsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheDomainsRequest(buffer_arg) {
  return webcache_pb.WebcacheDomainsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheMimeTypes(arg) {
  if (!(arg instanceof webcache_pb.WebcacheMimeTypes)) {
    throw new Error('Expected argument of type WebcacheMimeTypes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheMimeTypes(buffer_arg) {
  return webcache_pb.WebcacheMimeTypes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheMimeTypesRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheMimeTypesRequest)) {
    throw new Error('Expected argument of type WebcacheMimeTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheMimeTypesRequest(buffer_arg) {
  return webcache_pb.WebcacheMimeTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheNetworkDetail(arg) {
  if (!(arg instanceof webcache_pb.WebcacheNetworkDetail)) {
    throw new Error('Expected argument of type WebcacheNetworkDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheNetworkDetail(buffer_arg) {
  return webcache_pb.WebcacheNetworkDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheNetworkDetailRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheNetworkDetailRequest)) {
    throw new Error('Expected argument of type WebcacheNetworkDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheNetworkDetailRequest(buffer_arg) {
  return webcache_pb.WebcacheNetworkDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheNetworks(arg) {
  if (!(arg instanceof webcache_pb.WebcacheNetworks)) {
    throw new Error('Expected argument of type WebcacheNetworks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheNetworks(buffer_arg) {
  return webcache_pb.WebcacheNetworks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheNetworksRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheNetworksRequest)) {
    throw new Error('Expected argument of type WebcacheNetworksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheNetworksRequest(buffer_arg) {
  return webcache_pb.WebcacheNetworksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheTotals(arg) {
  if (!(arg instanceof webcache_pb.WebcacheTotals)) {
    throw new Error('Expected argument of type WebcacheTotals');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheTotals(buffer_arg) {
  return webcache_pb.WebcacheTotals.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheTotalsRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheTotalsRequest)) {
    throw new Error('Expected argument of type WebcacheTotalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheTotalsRequest(buffer_arg) {
  return webcache_pb.WebcacheTotalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUrls(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUrls)) {
    throw new Error('Expected argument of type WebcacheUrls');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUrls(buffer_arg) {
  return webcache_pb.WebcacheUrls.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUrlsRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUrlsRequest)) {
    throw new Error('Expected argument of type WebcacheUrlsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUrlsRequest(buffer_arg) {
  return webcache_pb.WebcacheUrlsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUserDetail(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUserDetail)) {
    throw new Error('Expected argument of type WebcacheUserDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUserDetail(buffer_arg) {
  return webcache_pb.WebcacheUserDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUserDetailRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUserDetailRequest)) {
    throw new Error('Expected argument of type WebcacheUserDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUserDetailRequest(buffer_arg) {
  return webcache_pb.WebcacheUserDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUsers(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUsers)) {
    throw new Error('Expected argument of type WebcacheUsers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUsers(buffer_arg) {
  return webcache_pb.WebcacheUsers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WebcacheUsersRequest(arg) {
  if (!(arg instanceof webcache_pb.WebcacheUsersRequest)) {
    throw new Error('Expected argument of type WebcacheUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WebcacheUsersRequest(buffer_arg) {
  return webcache_pb.WebcacheUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WHubService = exports.WHubService = {
  register: {
    path: '/whub.WHub/Register',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.RegisterRequest,
    responseType: device_pb.RegisterResponse,
    requestSerialize: serialize_RegisterRequest,
    requestDeserialize: deserialize_RegisterRequest,
    responseSerialize: serialize_RegisterResponse,
    responseDeserialize: deserialize_RegisterResponse,
  },
  deviceStatsReport: {
    path: '/whub.WHub/DeviceStatsReport',
    requestStream: true,
    responseStream: true,
    requestType: device_pb.DeviceStats,
    responseType: device_pb.DeviceStatsRequest,
    requestSerialize: serialize_DeviceStats,
    requestDeserialize: deserialize_DeviceStats,
    responseSerialize: serialize_DeviceStatsRequest,
    responseDeserialize: deserialize_DeviceStatsRequest,
  },
  updatePeers: {
    path: '/whub.WHub/UpdatePeers',
    requestStream: true,
    responseStream: true,
    requestType: device_pb.PeersReport,
    responseType: device_pb.PeersRequest,
    requestSerialize: serialize_PeersReport,
    requestDeserialize: deserialize_PeersReport,
    responseSerialize: serialize_PeersRequest,
    responseDeserialize: deserialize_PeersRequest,
  },
  // Dashboard
  getDashboardData: {
    path: '/whub.WHub/GetDashboardData',
    requestStream: true,
    responseStream: true,
    requestType: dashboard_pb.DashboardData,
    responseType: dashboard_pb.DashboardDataRequest,
    requestSerialize: serialize_DashboardData,
    requestDeserialize: deserialize_DashboardData,
    responseSerialize: serialize_DashboardDataRequest,
    responseDeserialize: deserialize_DashboardDataRequest,
  },
  getDashboardTopPorts: {
    path: '/whub.WHub/GetDashboardTopPorts',
    requestStream: true,
    responseStream: true,
    requestType: dashboard_pb.DashboardTopPorts,
    responseType: dashboard_pb.DashboardTopPortsRequest,
    requestSerialize: serialize_DashboardTopPorts,
    requestDeserialize: deserialize_DashboardTopPorts,
    responseSerialize: serialize_DashboardTopPortsRequest,
    responseDeserialize: deserialize_DashboardTopPortsRequest,
  },
  // Webcache
  getWebcacheDates: {
    path: '/whub.WHub/GetWebcacheDates',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheDates,
    responseType: webcache_pb.WebcacheDatesRequest,
    requestSerialize: serialize_WebcacheDates,
    requestDeserialize: deserialize_WebcacheDates,
    responseSerialize: serialize_WebcacheDatesRequest,
    responseDeserialize: deserialize_WebcacheDatesRequest,
  },
  getWebcacheTotals: {
    path: '/whub.WHub/GetWebcacheTotals',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheTotals,
    responseType: webcache_pb.WebcacheTotalsRequest,
    requestSerialize: serialize_WebcacheTotals,
    requestDeserialize: deserialize_WebcacheTotals,
    responseSerialize: serialize_WebcacheTotalsRequest,
    responseDeserialize: deserialize_WebcacheTotalsRequest,
  },
  getWebcacheDomains: {
    path: '/whub.WHub/GetWebcacheDomains',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheDomains,
    responseType: webcache_pb.WebcacheDomainsRequest,
    requestSerialize: serialize_WebcacheDomains,
    requestDeserialize: deserialize_WebcacheDomains,
    responseSerialize: serialize_WebcacheDomainsRequest,
    responseDeserialize: deserialize_WebcacheDomainsRequest,
  },
  getWebcacheUrls: {
    path: '/whub.WHub/GetWebcacheUrls',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheUrls,
    responseType: webcache_pb.WebcacheUrlsRequest,
    requestSerialize: serialize_WebcacheUrls,
    requestDeserialize: deserialize_WebcacheUrls,
    responseSerialize: serialize_WebcacheUrlsRequest,
    responseDeserialize: deserialize_WebcacheUrlsRequest,
  },
  getWebcacheDenied: {
    path: '/whub.WHub/GetWebcacheDenied',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheDenied,
    responseType: webcache_pb.WebcacheDeniedRequest,
    requestSerialize: serialize_WebcacheDenied,
    requestDeserialize: deserialize_WebcacheDenied,
    responseSerialize: serialize_WebcacheDeniedRequest,
    responseDeserialize: deserialize_WebcacheDeniedRequest,
  },
  getWebcacheUsers: {
    path: '/whub.WHub/GetWebcacheUsers',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheUsers,
    responseType: webcache_pb.WebcacheUsersRequest,
    requestSerialize: serialize_WebcacheUsers,
    requestDeserialize: deserialize_WebcacheUsers,
    responseSerialize: serialize_WebcacheUsersRequest,
    responseDeserialize: deserialize_WebcacheUsersRequest,
  },
  getWebcacheUserDetail: {
    path: '/whub.WHub/GetWebcacheUserDetail',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheUserDetail,
    responseType: webcache_pb.WebcacheUserDetailRequest,
    requestSerialize: serialize_WebcacheUserDetail,
    requestDeserialize: deserialize_WebcacheUserDetail,
    responseSerialize: serialize_WebcacheUserDetailRequest,
    responseDeserialize: deserialize_WebcacheUserDetailRequest,
  },
  getWebcacheNetworks: {
    path: '/whub.WHub/GetWebcacheNetworks',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheNetworks,
    responseType: webcache_pb.WebcacheNetworksRequest,
    requestSerialize: serialize_WebcacheNetworks,
    requestDeserialize: deserialize_WebcacheNetworks,
    responseSerialize: serialize_WebcacheNetworksRequest,
    responseDeserialize: deserialize_WebcacheNetworksRequest,
  },
  getWebcacheNetworkDetail: {
    path: '/whub.WHub/GetWebcacheNetworkDetail',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheNetworkDetail,
    responseType: webcache_pb.WebcacheNetworkDetailRequest,
    requestSerialize: serialize_WebcacheNetworkDetail,
    requestDeserialize: deserialize_WebcacheNetworkDetail,
    responseSerialize: serialize_WebcacheNetworkDetailRequest,
    responseDeserialize: deserialize_WebcacheNetworkDetailRequest,
  },
  getWebcacheMimeTypes: {
    path: '/whub.WHub/GetWebcacheMimeTypes',
    requestStream: true,
    responseStream: true,
    requestType: webcache_pb.WebcacheMimeTypes,
    responseType: webcache_pb.WebcacheMimeTypesRequest,
    requestSerialize: serialize_WebcacheMimeTypes,
    requestDeserialize: deserialize_WebcacheMimeTypes,
    responseSerialize: serialize_WebcacheMimeTypesRequest,
    responseDeserialize: deserialize_WebcacheMimeTypesRequest,
  },
  // Network
  getNetworkApplications: {
    path: '/whub.WHub/GetNetworkApplications',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkApplications,
    responseType: network_pb.NetworkApplicationsRequest,
    requestSerialize: serialize_NetworkApplications,
    requestDeserialize: deserialize_NetworkApplications,
    responseSerialize: serialize_NetworkApplicationsRequest,
    responseDeserialize: deserialize_NetworkApplicationsRequest,
  },
  getNetworkSessions: {
    path: '/whub.WHub/GetNetworkSessions',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkSessions,
    responseType: network_pb.NetworkSessionsRequest,
    requestSerialize: serialize_NetworkSessions,
    requestDeserialize: deserialize_NetworkSessions,
    responseSerialize: serialize_NetworkSessionsRequest,
    responseDeserialize: deserialize_NetworkSessionsRequest,
  },
  getNetworkSessionDetail: {
    path: '/whub.WHub/GetNetworkSessionDetail',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkSessionDetail,
    responseType: network_pb.NetworkSessionDetailRequest,
    requestSerialize: serialize_NetworkSessionDetail,
    requestDeserialize: deserialize_NetworkSessionDetail,
    responseSerialize: serialize_NetworkSessionDetailRequest,
    responseDeserialize: deserialize_NetworkSessionDetailRequest,
  },
  getNetworkTopApplications: {
    path: '/whub.WHub/GetNetworkTopApplications',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkTopApplications,
    responseType: network_pb.NetworkTopApplicationsRequest,
    requestSerialize: serialize_NetworkTopApplications,
    requestDeserialize: deserialize_NetworkTopApplications,
    responseSerialize: serialize_NetworkTopApplicationsRequest,
    responseDeserialize: deserialize_NetworkTopApplicationsRequest,
  },
  getNetworkPeers: {
    path: '/whub.WHub/GetNetworkPeers',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkPeers,
    responseType: network_pb.NetworkPeersRequest,
    requestSerialize: serialize_NetworkPeers,
    requestDeserialize: deserialize_NetworkPeers,
    responseSerialize: serialize_NetworkPeersRequest,
    responseDeserialize: deserialize_NetworkPeersRequest,
  },
  deleteNetworkPeer: {
    path: '/whub.WHub/DeleteNetworkPeer',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkPeerDelete,
    responseType: network_pb.NetworkPeerDeleteRequest,
    requestSerialize: serialize_NetworkPeerDelete,
    requestDeserialize: deserialize_NetworkPeerDelete,
    responseSerialize: serialize_NetworkPeerDeleteRequest,
    responseDeserialize: deserialize_NetworkPeerDeleteRequest,
  },
  getNetworkInterfaceTraffic: {
    path: '/whub.WHub/GetNetworkInterfaceTraffic',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkInterfaceTraffic,
    responseType: network_pb.NetworkInterfaceTrafficRequest,
    requestSerialize: serialize_NetworkInterfaceTraffic,
    requestDeserialize: deserialize_NetworkInterfaceTraffic,
    responseSerialize: serialize_NetworkInterfaceTrafficRequest,
    responseDeserialize: deserialize_NetworkInterfaceTrafficRequest,
  },
  getNetworkOptimizationLanToWan: {
    path: '/whub.WHub/GetNetworkOptimizationLanToWan',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkOptimizationLanToWan,
    responseType: network_pb.NetworkOptimizationLanToWanRequest,
    requestSerialize: serialize_NetworkOptimizationLanToWan,
    requestDeserialize: deserialize_NetworkOptimizationLanToWan,
    responseSerialize: serialize_NetworkOptimizationLanToWanRequest,
    responseDeserialize: deserialize_NetworkOptimizationLanToWanRequest,
  },
  getNetworkOptimizationWanToLan: {
    path: '/whub.WHub/GetNetworkOptimizationWanToLan',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkOptimizationWanToLan,
    responseType: network_pb.NetworkOptimizationWanToLanRequest,
    requestSerialize: serialize_NetworkOptimizationWanToLan,
    requestDeserialize: deserialize_NetworkOptimizationWanToLan,
    responseSerialize: serialize_NetworkOptimizationWanToLanRequest,
    responseDeserialize: deserialize_NetworkOptimizationWanToLanRequest,
  },
  getNetworkOptimizationPassThrough: {
    path: '/whub.WHub/GetNetworkOptimizationPassThrough',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkOptimizationPassThrough,
    responseType: network_pb.NetworkOptimizationPassThroughRequest,
    requestSerialize: serialize_NetworkOptimizationPassThrough,
    requestDeserialize: deserialize_NetworkOptimizationPassThrough,
    responseSerialize: serialize_NetworkOptimizationPassThroughRequest,
    responseDeserialize: deserialize_NetworkOptimizationPassThroughRequest,
  },
  getNetworkOptimizationRatios: {
    path: '/whub.WHub/GetNetworkOptimizationRatios',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkOptimizationRatios,
    responseType: network_pb.NetworkOptimizationRatiosRequest,
    requestSerialize: serialize_NetworkOptimizationRatios,
    requestDeserialize: deserialize_NetworkOptimizationRatios,
    responseSerialize: serialize_NetworkOptimizationRatiosRequest,
    responseDeserialize: deserialize_NetworkOptimizationRatiosRequest,
  },
  getNetworkQosReport: {
    path: '/whub.WHub/GetNetworkQosReport',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkQosReport,
    responseType: network_pb.NetworkQosReportRequest,
    requestSerialize: serialize_NetworkQosReport,
    requestDeserialize: deserialize_NetworkQosReport,
    responseSerialize: serialize_NetworkQosReportRequest,
    responseDeserialize: deserialize_NetworkQosReportRequest,
  },
  getNetworkInterfaces: {
    path: '/whub.WHub/GetNetworkInterfaces',
    requestStream: true,
    responseStream: true,
    requestType: network_pb.NetworkInterfaces,
    responseType: network_pb.NetworkInterfacesRequest,
    requestSerialize: serialize_NetworkInterfaces,
    requestDeserialize: deserialize_NetworkInterfaces,
    responseSerialize: serialize_NetworkInterfacesRequest,
    responseDeserialize: deserialize_NetworkInterfacesRequest,
  },
  // System
  getSystemMemory: {
    path: '/whub.WHub/GetSystemMemory',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemMemory,
    responseType: system_pb.SystemMemoryRequest,
    requestSerialize: serialize_SystemMemory,
    requestDeserialize: deserialize_SystemMemory,
    responseSerialize: serialize_SystemMemoryRequest,
    responseDeserialize: deserialize_SystemMemoryRequest,
  },
  getSystemLoad: {
    path: '/whub.WHub/GetSystemLoad',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemLoad,
    responseType: system_pb.SystemLoadRequest,
    requestSerialize: serialize_SystemLoad,
    requestDeserialize: deserialize_SystemLoad,
    responseSerialize: serialize_SystemLoadRequest,
    responseDeserialize: deserialize_SystemLoadRequest,
  },
  getSystemCpu: {
    path: '/whub.WHub/GetSystemCpu',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemCpu,
    responseType: system_pb.SystemCpuRequest,
    requestSerialize: serialize_SystemCpu,
    requestDeserialize: deserialize_SystemCpu,
    responseSerialize: serialize_SystemCpuRequest,
    responseDeserialize: deserialize_SystemCpuRequest,
  },
  getSystemDiskLoad: {
    path: '/whub.WHub/GetSystemDiskLoad',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemDiskLoad,
    responseType: system_pb.SystemDiskLoadRequest,
    requestSerialize: serialize_SystemDiskLoad,
    requestDeserialize: deserialize_SystemDiskLoad,
    responseSerialize: serialize_SystemDiskLoadRequest,
    responseDeserialize: deserialize_SystemDiskLoadRequest,
  },
  getSystemDiskSpace: {
    path: '/whub.WHub/GetSystemDiskSpace',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemDiskSpace,
    responseType: system_pb.SystemDiskSpaceRequest,
    requestSerialize: serialize_SystemDiskSpace,
    requestDeserialize: deserialize_SystemDiskSpace,
    responseSerialize: serialize_SystemDiskSpaceRequest,
    responseDeserialize: deserialize_SystemDiskSpaceRequest,
  },
  getSystemInfo: {
    path: '/whub.WHub/GetSystemInfo',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemInfo,
    responseType: system_pb.SystemInfoRequest,
    requestSerialize: serialize_SystemInfo,
    requestDeserialize: deserialize_SystemInfo,
    responseSerialize: serialize_SystemInfoRequest,
    responseDeserialize: deserialize_SystemInfoRequest,
  },
  getSystemIndicators: {
    path: '/whub.WHub/GetSystemIndicators',
    requestStream: true,
    responseStream: true,
    requestType: system_pb.SystemIndicators,
    responseType: system_pb.SystemIndicatorsRequest,
    requestSerialize: serialize_SystemIndicators,
    requestDeserialize: deserialize_SystemIndicators,
    responseSerialize: serialize_SystemIndicatorsRequest,
    responseDeserialize: deserialize_SystemIndicatorsRequest,
  },
  // Diagnostic
  getDiagnosticLog: {
    path: '/whub.WHub/GetDiagnosticLog',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticLog,
    responseType: diagnostic_pb.DiagnosticLogRequest,
    requestSerialize: serialize_DiagnosticLog,
    requestDeserialize: deserialize_DiagnosticLog,
    responseSerialize: serialize_DiagnosticLogRequest,
    responseDeserialize: deserialize_DiagnosticLogRequest,
  },
  getDiagnosticHealth: {
    path: '/whub.WHub/GetDiagnosticHealth',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticHealth,
    responseType: diagnostic_pb.DiagnosticHealthRequest,
    requestSerialize: serialize_DiagnosticHealth,
    requestDeserialize: deserialize_DiagnosticHealth,
    responseSerialize: serialize_DiagnosticHealthRequest,
    responseDeserialize: deserialize_DiagnosticHealthRequest,
  },
  getDiagnosticBenchmark: {
    path: '/whub.WHub/GetDiagnosticBenchmark',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticBenchmark,
    responseType: diagnostic_pb.DiagnosticBenchmarkRequest,
    requestSerialize: serialize_DiagnosticBenchmark,
    requestDeserialize: deserialize_DiagnosticBenchmark,
    responseSerialize: serialize_DiagnosticBenchmarkRequest,
    responseDeserialize: deserialize_DiagnosticBenchmarkRequest,
  },
  scheduleDiagnosticBenchmark: {
    path: '/whub.WHub/ScheduleDiagnosticBenchmark',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticBenchmark,
    responseType: diagnostic_pb.DiagnosticBenchmarkRequest,
    requestSerialize: serialize_DiagnosticBenchmark,
    requestDeserialize: deserialize_DiagnosticBenchmark,
    responseSerialize: serialize_DiagnosticBenchmarkRequest,
    responseDeserialize: deserialize_DiagnosticBenchmarkRequest,
  },
  getDiagnosticNetstat: {
    path: '/whub.WHub/GetDiagnosticNetstat',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticNetstat,
    responseType: diagnostic_pb.DiagnosticNetstatRequest,
    requestSerialize: serialize_DiagnosticNetstat,
    requestDeserialize: deserialize_DiagnosticNetstat,
    responseSerialize: serialize_DiagnosticNetstatRequest,
    responseDeserialize: deserialize_DiagnosticNetstatRequest,
  },
  getDiagnosticPing: {
    path: '/whub.WHub/GetDiagnosticPing',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticPing,
    responseType: diagnostic_pb.DiagnosticPingRequest,
    requestSerialize: serialize_DiagnosticPing,
    requestDeserialize: deserialize_DiagnosticPing,
    responseSerialize: serialize_DiagnosticPingRequest,
    responseDeserialize: deserialize_DiagnosticPingRequest,
  },
  getDiagnosticTraceroute: {
    path: '/whub.WHub/GetDiagnosticTraceroute',
    requestStream: true,
    responseStream: true,
    requestType: diagnostic_pb.DiagnosticTraceroute,
    responseType: diagnostic_pb.DiagnosticTracerouteRequest,
    requestSerialize: serialize_DiagnosticTraceroute,
    requestDeserialize: deserialize_DiagnosticTraceroute,
    responseSerialize: serialize_DiagnosticTracerouteRequest,
    responseDeserialize: deserialize_DiagnosticTracerouteRequest,
  },
  // Configure
  getSystemSettings: {
    path: '/whub.WHub/GetSystemSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.SystemSettings,
    responseType: configure_pb.SystemSettingsRequest,
    requestSerialize: serialize_SystemSettings,
    requestDeserialize: deserialize_SystemSettings,
    responseSerialize: serialize_SystemSettingsRequest,
    responseDeserialize: deserialize_SystemSettingsRequest,
  },
  updateSystemSettings: {
    path: '/whub.WHub/UpdateSystemSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.SystemSettings,
    responseType: configure_pb.SystemSettingsRequest,
    requestSerialize: serialize_SystemSettings,
    requestDeserialize: deserialize_SystemSettings,
    responseSerialize: serialize_SystemSettingsRequest,
    responseDeserialize: deserialize_SystemSettingsRequest,
  },
  getNetworkSettings: {
    path: '/whub.WHub/GetNetworkSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.NetworkSettings,
    responseType: configure_pb.NetworkSettingsRequest,
    requestSerialize: serialize_NetworkSettings,
    requestDeserialize: deserialize_NetworkSettings,
    responseSerialize: serialize_NetworkSettingsRequest,
    responseDeserialize: deserialize_NetworkSettingsRequest,
  },
  updateNetworkSettings: {
    path: '/whub.WHub/UpdateNetworkSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.NetworkSettings,
    responseType: configure_pb.NetworkSettingsRequest,
    requestSerialize: serialize_NetworkSettings,
    requestDeserialize: deserialize_NetworkSettings,
    responseSerialize: serialize_NetworkSettingsRequest,
    responseDeserialize: deserialize_NetworkSettingsRequest,
  },
  getOptimizationSettings: {
    path: '/whub.WHub/GetOptimizationSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.OptimizationSettings,
    responseType: configure_pb.OptimizationSettingsRequest,
    requestSerialize: serialize_OptimizationSettings,
    requestDeserialize: deserialize_OptimizationSettings,
    responseSerialize: serialize_OptimizationSettingsRequest,
    responseDeserialize: deserialize_OptimizationSettingsRequest,
  },
  updateOptimizationSettings: {
    path: '/whub.WHub/UpdateOptimizationSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.OptimizationSettings,
    responseType: configure_pb.OptimizationSettingsRequest,
    requestSerialize: serialize_OptimizationSettings,
    requestDeserialize: deserialize_OptimizationSettings,
    responseSerialize: serialize_OptimizationSettingsRequest,
    responseDeserialize: deserialize_OptimizationSettingsRequest,
  },
  getMonitorSettings: {
    path: '/whub.WHub/GetMonitorSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.MonitorSettings,
    responseType: configure_pb.MonitorSettingsRequest,
    requestSerialize: serialize_MonitorSettings,
    requestDeserialize: deserialize_MonitorSettings,
    responseSerialize: serialize_MonitorSettingsRequest,
    responseDeserialize: deserialize_MonitorSettingsRequest,
  },
  updateMonitorSettings: {
    path: '/whub.WHub/UpdateMonitorSettings',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.MonitorSettings,
    responseType: configure_pb.MonitorSettingsRequest,
    requestSerialize: serialize_MonitorSettings,
    requestDeserialize: deserialize_MonitorSettings,
    responseSerialize: serialize_MonitorSettingsRequest,
    responseDeserialize: deserialize_MonitorSettingsRequest,
  },
  getTunnelPolicies: {
    path: '/whub.WHub/GetTunnelPolicies',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TunnelPolicies,
    responseType: configure_pb.TunnelPoliciesRequest,
    requestSerialize: serialize_TunnelPolicies,
    requestDeserialize: deserialize_TunnelPolicies,
    responseSerialize: serialize_TunnelPoliciesRequest,
    responseDeserialize: deserialize_TunnelPoliciesRequest,
  },
  deleteTunnelPoliciesRule: {
    path: '/whub.WHub/DeleteTunnelPoliciesRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TunnelPoliciesDeleteRule,
    responseType: configure_pb.TunnelPoliciesDeleteRuleRequest,
    requestSerialize: serialize_TunnelPoliciesDeleteRule,
    requestDeserialize: deserialize_TunnelPoliciesDeleteRule,
    responseSerialize: serialize_TunnelPoliciesDeleteRuleRequest,
    responseDeserialize: deserialize_TunnelPoliciesDeleteRuleRequest,
  },
  updateTunnelPoliciesRule: {
    path: '/whub.WHub/UpdateTunnelPoliciesRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TunnelPoliciesUpdateRule,
    responseType: configure_pb.TunnelPoliciesUpdateRuleRequest,
    requestSerialize: serialize_TunnelPoliciesUpdateRule,
    requestDeserialize: deserialize_TunnelPoliciesUpdateRule,
    responseSerialize: serialize_TunnelPoliciesUpdateRuleRequest,
    responseDeserialize: deserialize_TunnelPoliciesUpdateRuleRequest,
  },
  addTunnelPoliciesRule: {
    path: '/whub.WHub/AddTunnelPoliciesRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TunnelPoliciesAddRule,
    responseType: configure_pb.TunnelPoliciesAddRuleRequest,
    requestSerialize: serialize_TunnelPoliciesAddRule,
    requestDeserialize: deserialize_TunnelPoliciesAddRule,
    responseSerialize: serialize_TunnelPoliciesAddRuleRequest,
    responseDeserialize: deserialize_TunnelPoliciesAddRuleRequest,
  },
  getTrafficPolicies: {
    path: '/whub.WHub/GetTrafficPolicies',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TrafficPolicies,
    responseType: configure_pb.TrafficPoliciesRequest,
    requestSerialize: serialize_TrafficPolicies,
    requestDeserialize: deserialize_TrafficPolicies,
    responseSerialize: serialize_TrafficPoliciesRequest,
    responseDeserialize: deserialize_TrafficPoliciesRequest,
  },
  deleteTrafficPolicy: {
    path: '/whub.WHub/DeleteTrafficPolicy',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TrafficPolicyDelete,
    responseType: configure_pb.TrafficPolicyDeleteRequest,
    requestSerialize: serialize_TrafficPolicyDelete,
    requestDeserialize: deserialize_TrafficPolicyDelete,
    responseSerialize: serialize_TrafficPolicyDeleteRequest,
    responseDeserialize: deserialize_TrafficPolicyDeleteRequest,
  },
  updateTrafficPolicy: {
    path: '/whub.WHub/UpdateTrafficPolicy',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TrafficPolicyUpdate,
    responseType: configure_pb.TrafficPolicyUpdateRequest,
    requestSerialize: serialize_TrafficPolicyUpdate,
    requestDeserialize: deserialize_TrafficPolicyUpdate,
    responseSerialize: serialize_TrafficPolicyUpdateRequest,
    responseDeserialize: deserialize_TrafficPolicyUpdateRequest,
  },
  addTrafficPolicy: {
    path: '/whub.WHub/AddTrafficPolicy',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TrafficPolicyAdd,
    responseType: configure_pb.TrafficPolicyAddRequest,
    requestSerialize: serialize_TrafficPolicyAdd,
    requestDeserialize: deserialize_TrafficPolicyAdd,
    responseSerialize: serialize_TrafficPolicyAddRequest,
    responseDeserialize: deserialize_TrafficPolicyAddRequest,
  },
  getRoutes: {
    path: '/whub.WHub/GetRoutes',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.Routes,
    responseType: configure_pb.RoutesRequest,
    requestSerialize: serialize_Routes,
    requestDeserialize: deserialize_Routes,
    responseSerialize: serialize_RoutesRequest,
    responseDeserialize: deserialize_RoutesRequest,
  },
  addRoute: {
    path: '/whub.WHub/AddRoute',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.RouteAdd,
    responseType: configure_pb.RouteAddRequest,
    requestSerialize: serialize_RouteAdd,
    requestDeserialize: deserialize_RouteAdd,
    responseSerialize: serialize_RouteAddRequest,
    responseDeserialize: deserialize_RouteAddRequest,
  },
  updateRoute: {
    path: '/whub.WHub/UpdateRoute',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.RouteUpdate,
    responseType: configure_pb.RouteUpdateRequest,
    requestSerialize: serialize_RouteUpdate,
    requestDeserialize: deserialize_RouteUpdate,
    responseSerialize: serialize_RouteUpdateRequest,
    responseDeserialize: deserialize_RouteUpdateRequest,
  },
  removeRoute: {
    path: '/whub.WHub/RemoveRoute',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.RouteRemove,
    responseType: configure_pb.RouteRemoveRequest,
    requestSerialize: serialize_RouteRemove,
    requestDeserialize: deserialize_RouteRemove,
    responseSerialize: serialize_RouteRemoveRequest,
    responseDeserialize: deserialize_RouteRemoveRequest,
  },
  getTcpxRules: {
    path: '/whub.WHub/GetTcpxRules',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TcpxRules,
    responseType: configure_pb.GetTcpxRulesRequest,
    requestSerialize: serialize_TcpxRules,
    requestDeserialize: deserialize_TcpxRules,
    responseSerialize: serialize_GetTcpxRulesRequest,
    responseDeserialize: deserialize_GetTcpxRulesRequest,
  },
  addTcpxRule: {
    path: '/whub.WHub/AddTcpxRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TcpxRuleAdd,
    responseType: configure_pb.AddTcpxRuleRequest,
    requestSerialize: serialize_TcpxRuleAdd,
    requestDeserialize: deserialize_TcpxRuleAdd,
    responseSerialize: serialize_AddTcpxRuleRequest,
    responseDeserialize: deserialize_AddTcpxRuleRequest,
  },
  updateTcpxRule: {
    path: '/whub.WHub/UpdateTcpxRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TcpxRuleUpdate,
    responseType: configure_pb.UpdateTcpxRuleRequest,
    requestSerialize: serialize_TcpxRuleUpdate,
    requestDeserialize: deserialize_TcpxRuleUpdate,
    responseSerialize: serialize_UpdateTcpxRuleRequest,
    responseDeserialize: deserialize_UpdateTcpxRuleRequest,
  },
  removeTcpxRule: {
    path: '/whub.WHub/RemoveTcpxRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TcpxRuleRemove,
    responseType: configure_pb.RemoveTcpxRuleRequest,
    requestSerialize: serialize_TcpxRuleRemove,
    requestDeserialize: deserialize_TcpxRuleRemove,
    responseSerialize: serialize_RemoveTcpxRuleRequest,
    responseDeserialize: deserialize_RemoveTcpxRuleRequest,
  },
  moveTcpxRule: {
    path: '/whub.WHub/MoveTcpxRule',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.TcpxRuleMove,
    responseType: configure_pb.MoveTcpxRuleRequest,
    requestSerialize: serialize_TcpxRuleMove,
    requestDeserialize: deserialize_TcpxRuleMove,
    responseSerialize: serialize_MoveTcpxRuleRequest,
    responseDeserialize: deserialize_MoveTcpxRuleRequest,
  },
  resetService: {
    path: '/whub.WHub/ResetService',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.ServiceReset,
    responseType: configure_pb.ServiceResetRequest,
    requestSerialize: serialize_ServiceReset,
    requestDeserialize: deserialize_ServiceReset,
    responseSerialize: serialize_ServiceResetRequest,
    responseDeserialize: deserialize_ServiceResetRequest,
  },
  changeSshPassword: {
    path: '/whub.WHub/ChangeSshPassword',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.SshPasswordChange,
    responseType: configure_pb.SshPasswordChangeRequest,
    requestSerialize: serialize_SshPasswordChange,
    requestDeserialize: deserialize_SshPasswordChange,
    responseSerialize: serialize_SshPasswordChangeRequest,
    responseDeserialize: deserialize_SshPasswordChangeRequest,
  },
  getPathConfig: {
    path: '/whub.WHub/GetPathConfig',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.PathConfigResponse,
    responseType: configure_pb.GetPathConfigRequest,
    requestSerialize: serialize_PathConfigResponse,
    requestDeserialize: deserialize_PathConfigResponse,
    responseSerialize: serialize_GetPathConfigRequest,
    responseDeserialize: deserialize_GetPathConfigRequest,
  },
  setPathConfig: {
    path: '/whub.WHub/SetPathConfig',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.PathConfigResponse,
    responseType: configure_pb.SetPathConfigRequest,
    requestSerialize: serialize_PathConfigResponse,
    requestDeserialize: deserialize_PathConfigResponse,
    responseSerialize: serialize_SetPathConfigRequest,
    responseDeserialize: deserialize_SetPathConfigRequest,
  },
  getPathGateways: {
    path: '/whub.WHub/GetPathGateways',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.PathGatewaysResponse,
    responseType: configure_pb.GetPathsRequest,
    requestSerialize: serialize_PathGatewaysResponse,
    requestDeserialize: deserialize_PathGatewaysResponse,
    responseSerialize: serialize_GetPathsRequest,
    responseDeserialize: deserialize_GetPathsRequest,
  },
  removePathGateway: {
    path: '/whub.WHub/RemovePathGateway',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.PathGatewaysResponse,
    responseType: configure_pb.RemovePathRequest,
    requestSerialize: serialize_PathGatewaysResponse,
    requestDeserialize: deserialize_PathGatewaysResponse,
    responseSerialize: serialize_RemovePathRequest,
    responseDeserialize: deserialize_RemovePathRequest,
  },
  getWebcacheConfig: {
    path: '/whub.WHub/GetWebcacheConfig',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.WebcacheConfResponse,
    responseType: configure_pb.GetWebcacheConfRequest,
    requestSerialize: serialize_WebcacheConfResponse,
    requestDeserialize: deserialize_WebcacheConfResponse,
    responseSerialize: serialize_GetWebcacheConfRequest,
    responseDeserialize: deserialize_GetWebcacheConfRequest,
  },
  setWebcacheConfig: {
    path: '/whub.WHub/SetWebcacheConfig',
    requestStream: true,
    responseStream: true,
    requestType: configure_pb.WebcacheConfResponse,
    responseType: configure_pb.SetWebcacheConfRequest,
    requestSerialize: serialize_WebcacheConfResponse,
    requestDeserialize: deserialize_WebcacheConfResponse,
    responseSerialize: serialize_SetWebcacheConfRequest,
    responseDeserialize: deserialize_SetWebcacheConfRequest,
  },
  // Status
  getStatusUpdate: {
    path: '/whub.WHub/GetStatusUpdate',
    requestStream: true,
    responseStream: true,
    requestType: status_pb.StatusUpdate,
    responseType: status_pb.StatusUpdateRequest,
    requestSerialize: serialize_StatusUpdate,
    requestDeserialize: deserialize_StatusUpdate,
    responseSerialize: serialize_StatusUpdateRequest,
    responseDeserialize: deserialize_StatusUpdateRequest,
  },
  // File transfer
  // Download file from server to client
  downloadFile: {
    path: '/whub.WHub/DownloadFile',
    requestStream: false,
    responseStream: true,
    requestType: file_transfer_pb.FileTransferRequest,
    responseType: file_transfer_pb.FileTransferResponse,
    requestSerialize: serialize_FileTransferRequest,
    requestDeserialize: deserialize_FileTransferRequest,
    responseSerialize: serialize_FileTransferResponse,
    responseDeserialize: deserialize_FileTransferResponse,
  },
  // Patcher
  getServerAgentVersion: {
    path: '/whub.WHub/GetServerAgentVersion',
    requestStream: false,
    responseStream: false,
    requestType: patcher_pb.ServerAgentVersionRequest,
    responseType: patcher_pb.ServerAgentVersionResponse,
    requestSerialize: serialize_ServerAgentVersionRequest,
    requestDeserialize: deserialize_ServerAgentVersionRequest,
    responseSerialize: serialize_ServerAgentVersionResponse,
    responseDeserialize: deserialize_ServerAgentVersionResponse,
  },
  // Maintenance
  startBackup: {
    path: '/whub.WHub/StartBackup',
    requestStream: true,
    responseStream: true,
    requestType: maintenance_pb.StartBackupResponse,
    responseType: maintenance_pb.StartBackupRequest,
    requestSerialize: serialize_StartBackupResponse,
    requestDeserialize: deserialize_StartBackupResponse,
    responseSerialize: serialize_StartBackupRequest,
    responseDeserialize: deserialize_StartBackupRequest,
  },
  uploadBackup: {
    path: '/whub.WHub/UploadBackup',
    requestStream: true,
    responseStream: false,
    requestType: maintenance_pb.UploadBackupRequest,
    responseType: maintenance_pb.UploadBackupResponse,
    requestSerialize: serialize_UploadBackupRequest,
    requestDeserialize: deserialize_UploadBackupRequest,
    responseSerialize: serialize_UploadBackupResponse,
    responseDeserialize: deserialize_UploadBackupResponse,
  },
  // License
  getLicense: {
    path: '/whub.WHub/GetLicense',
    requestStream: true,
    responseStream: true,
    requestType: license_pb.LicenseResponse,
    responseType: license_pb.LicenseGetRequest,
    requestSerialize: serialize_LicenseResponse,
    requestDeserialize: deserialize_LicenseResponse,
    responseSerialize: serialize_LicenseGetRequest,
    responseDeserialize: deserialize_LicenseGetRequest,
  },
  addLicense: {
    path: '/whub.WHub/AddLicense',
    requestStream: true,
    responseStream: true,
    requestType: license_pb.LicenseResponse,
    responseType: license_pb.LicenseAddRequest,
    requestSerialize: serialize_LicenseResponse,
    requestDeserialize: deserialize_LicenseResponse,
    responseSerialize: serialize_LicenseAddRequest,
    responseDeserialize: deserialize_LicenseAddRequest,
  },
};

exports.WHubClient = grpc.makeGenericClientConstructor(WHubService);
