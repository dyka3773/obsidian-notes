---
tags:
  - tech
---
**Android** is an **open-source operating system** developed by **Google**, primarily used in **mobile devices** such as smartphones, tablets, smart TVs, and wearables.
It is based on the **Linux kernel** and supports both native and managed application development.
# Key Components of Android Architecture
## 1. [[Linux]] Kernel
- Provides core system services such as process management, memory management, and security.
- Hardware abstraction and device driver management.
## 2. Hardware Abstraction Layer (HAL)
- Interfaces between the device hardware and the Android runtime.
- Standardizes access to device capabilities.
## 3. Android Runtime (ART)
- Executes Android apps, replacing the older **Dalvik VM**.
- Uses **Ahead-Of-Time (AOT)** compilation for better performance.
## 4. Libraries
- Includes [[C]]/[[C++]] libraries for core functionality (e.g., [[SQLite]], [[SSL]], [[WebKit]]).
- Exposed to developers through the [[Android framework]].
## 5. Application Framework
- [[Java]]/[[Kotlin]] [[API|APIs]] used to build Android applications.
- Components: Activity Manager, Content Providers, Notification Manager, etc.
## 6. Applications
- User-installed or system apps (e.g., dialer, browser, messaging).
- Built with components like **Activities, Services, Broadcast Receivers, and Content Providers**.
# Android App Components
| Component              | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| **Activity**           | UI component representing a single screen (e.g., login page).              |
| **Service**            | Background component performing long-running tasks (e.g., music playback). |
| **Broadcast Receiver** | Responds to broadcast messages (e.g., battery low notification).           |
| **Content Provider**   | Shares data between applications (e.g., contacts, files).                  |
# Android Development Tools
| Tool                           | Purpose                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------- |
| **[[Android Studio]]**         | Official [[IDEs and Editors\|IDE]], supports [[Java]], [[Kotlin]], and [[C++]]. |
| **ADB (Android Debug Bridge)** | [[CLI]] for device communication.                                                   |
| **[[Gradle]]**                 | Build automation tool used to compile and package apps.                         |
| **AVD Manager**                | Creates Android virtual devices for testing.                                    |
| **Android SDK**                | Libraries and tools to build Android apps.                                      |
# Android Programming Languages
- **[[Java]]**: Original language of Android development.
- **[[Kotlin]]**: Modern, concise alternative to [[Java]], now officially preferred.
- **[[C]]/[[C++**]]: Used with the **NDK** for performance-critical tasks.
# App Distribution and Publishing
- Apps are typically distributed via **Google Play Store** or other marketplaces (e.g., Amazon Appstore).
- Apps are packaged as `.apk` files (Android Package).
- Requires digital signing and adherence to Google's publishing guidelines.
# Android App Lifecycle (Simplified)
## Activity Lifecycle
```text
onCreate() → onStart() → onResume() → [App Running] → onPause() → onStop() → onDestroy()
```
# Service Lifecycle
```text
onCreate() → onStartCommand() → [Running] → onDestroy()
```
> Managing lifecycle events properly is critical for performance, stability, and battery usage.
