---
tags:
  - tech
---
**QUIC (Quick UDP Internet Connections)** is a transport-layer network protocol developed by **Google** and later standardized by the **IETF**.
It is designed to improve the performance of internet communications by using **UDP** instead of TCP, reducing latency, and providing built-in encryption.

**QUIC serves as the foundation for [[HTTP]]/3**, making web browsing and other network communications faster and more efficient.

# Key Features
1. **Uses UDP Instead of TCP**: Unlike TCP, which requires a handshake before transmitting data, QUIC eliminates unnecessary round trips, making connections faster.
2. **Built-in Encryption (TLS 1.3 by Default)**: QUIC integrates **TLS 1.3**, ensuring **end-to-end encryption** without needing separate handshakes (like in TLS over TCP).
3. **Multiplexing Without Head-of-Line Blocking**: In TCP, if one packet is lost, all subsequent packets must wait (head-of-line blocking). **QUIC solves this** by allowing multiple streams of data to be sent independently over a single connection.
4. **Faster Connection Establishment**: QUIC reduces the handshake time by combining connection setup and encryption negotiation in one step.  If a client has connected to a server before, it can resume a previous session instantly without a full handshake.
5. **Improved Error Recovery & Congestion Control**: QUIC has better packet loss recovery and congestion control mechanisms compared to TCP. Uses Forward Error Correction (FEC) to reconstruct lost packets proactively.

# Use cases
1. **[[HTTP]]/3 (Next-Generation Web Protocol)**
    - QUIC powers **[[HTTP]]/3**, improving website load times and reducing latency.
    - Major services like **Google, Facebook, and Cloudflare** already support QUIC.
2. **Streaming & Real-Time Applications**
    - QUIC is great for **video streaming (YouTube, Netflix)** and **real-time gaming** due to low latency.
3. **Mobile Networks (Better Roaming Support)**
    - QUIC maintains connections even when switching **Wi-Fi to mobile data**, unlike TCP, which requires reconnection.

# Security & Challenges
- **✅ Strong Security:** Always encrypted, making attacks like **packet injection and data tampering** much harder.
- **🚧 Firewall & Network Issues:** Since it runs over UDP, some firewalls block or throttle QUIC traffic.
- **🔧 Adoption Challenges:** Many legacy systems and enterprise networks rely on TCP, requiring changes to support QUIC.
