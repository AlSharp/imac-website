---
id: net_config
title: Network configuration
sidebar_label: Network configuration
---

**IMAC** is preconfigured to get IP address automatically from DHCP server. If your network is configured to provide IP addresses automatically you are good. IMAC can be used in isolated networks where IMAC and user computer are connected directly over [Ethernet Crossover cable](https://en.wikipedia.org/wiki/Ethernet_crossover_cable) or using the router. To accomplish this task you follow instructions below:

## Network configuration with static IP

### User PC network configuration

1. On user computer with Windows operating system go to Control Panel -> Network and Internet -> Network Connections

![Windows: network connections](assets/net_config_win_1.png "Windows: network connections")

2. Right click on Ethernet connection and select Properties.

![Windows: Ethernet Properties](assets/net_config_win_2.png "Windows: Ethernet Properties")

3. Scroll down, select TCP/IPv4 and click Properties

  Configure TCP/IP properties 

  A. For connection over crossover cable

![Windows: TCP/IPv4 Properties](assets/net_config_win_3.png "Windows: TCP/IPv4 Properties")

  B. For connection using router

![Windows: TCP/IPv4 Properties](assets/net_config_win_4.png "Windows: TCP/IPv4 Properties")

4. Apply changes and close dialog windows. Now you have to set up IMAC network configuration.

### IMAC network configuration

1.	Connect keyboard, mouse and HDMI monitor to IMAC. Power it up and wait OS loading is completed.

![IMAC plus monitor, keyboard and mouse](assets/net_config_1.jpg "IMAC plus monitor, keyboard and mouse")

2.	Right click on the icon as shown and left click Wireless & Wired Network Settings.

![Wireless & Wired Network Settings](assets/net_config_2.png "Wireless & Wired Network Settings")

3.	Select the interface. Select `eth0` for wired or `wlan0` for wireless. Assign IP address from the range your network is working. Type `192.168.0.3/24` to assign `192.168.0.3` IP address to **IMAC**. Assign the IP address of your router – `192.168.0.1`. Assign the address of DNS server - `192.168.0.1`. Click Apply. In case you are configuring wireless connection the additional step is required.

![Wired Network Settings](assets/net_config_3_eth0.png "Wired Network Settings")

![Wireless Network Settings](assets/net_config_3_wlan0.png "Wireless Network Settings")

4.	If you are configuring wireless connection you need to open the terminal.

![Open Terminal](assets/net_config_4.png "Open Terminal")

In the terminal type `sudo raspi-config`. The textual menu will be opened.

![Raspi config](assets/net_config_5.png "Raspi config")

Select Network Options. You will be asked for Country, Wifi network’s name and password. When you complete press Finish.

5.	Reboot **IMAC** and unplug keyboard, mouse and HDMI monitor. **IMAC** is ready for use in the network. Open Google Chrome (recommended browser) and go to `http://imac:5000`.