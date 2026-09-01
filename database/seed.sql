INSERT INTO devices (
    name,
    device_type,
    ip_address,
    mac_address,
    protocol,
    firmware_version,
    status,
    location
)
VALUES
(
    'router-01',
    'Router',
    '192.168.1.1',
    'AA:BB:CC:DD:EE:01',
    'SNMP',
    'v1.0.0',
    'online',
    'Lab'
),
(
    'sensor-01',
    'Temperature Sensor',
    '192.168.1.21',
    'AA:BB:CC:DD:EE:02',
    'MQTT',
    'v2.1.0',
    'offline',
    'Lab'
),
(
    'edge-node-01',
    'Edge Gateway',
    '192.168.1.20',
    'AA:BB:CC:DD:EE:03',
    'MQTT',
    'v1.2.0',
    'online',
    'Server Room'
);

INSERT INTO maintenance_records (
    device_id,
    description,
    status
)
VALUES
(
    1,
    'Firmware update',
    'completed'
),
(
    1,
    'Network connectivity check',
    'completed'
),
(
    2,
    'Sensor calibration',
    'pending'
);