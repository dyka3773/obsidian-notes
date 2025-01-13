---
tags:
  - tech
  - snippet
---

#### Open a new [[Powershell]] window having admin privileges

```powershell
start-process PowerShell -verb runas
```

#### Change IP in hostsfile when on Wi-Fi

> *Needs admin privileges*

```powershell
#set up the hosts File path
$hostsfilePath = "C:\Windows\System32\drivers\etc\hosts"

#Finds the ip of the workstation using a specific interface alias
# FIXME: Add the Ethernet interface alias
$ipV4 = Get-NetIPAddress | Where-Object {$_.AddressFamily -eq "IPv4" -and $_.InterfaceAlias -eq "Wi-Fi"} | Select-Object -ExpandProperty IPAddress

if($null -eq $ipV4){
    Write-Host "IP did not found. Maybe the interface alias is wrong" -f Red
}else{
    #Gets the content of docker-compose.yml
    $hostsFileContent = Get-Content -Path $hostsfilePath

    #Reading the section hosts file where the ip match to "my-custom-domain"
    $selectedString = $hostsFileContent | Select-String -Pattern 'my-custom-domain' -CaseSensitive -SimpleMatch

    #Replace the ip address in hosts file
    (Get-Content $hostsfilePath) -replace $selectedString, "$ipV4 my-custom-domain" | Set-Content $hostsfilePath
}
```
