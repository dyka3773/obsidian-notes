---
tags:
  - tech
---

| Feature                  |             [[QUIC]]              |            [[TCP]]            |
| :----------------------- | :-------------------------------: | :---------------------------: |
| Transport Protocol       |                UDP                |              TCP              |
| Encryption               |         Built-in TLS 1.3          |    Separate TLS handshake     |
| Multiplexing             |    Streams sent independently     |    Blocked by lost packets    |
| Connection Establishment |   Faster with 0-RTT resumption    | Requires multiple round trips |
| Packet Loss Handling     | FEC and better congestion control | Retransmission causes delays  |
