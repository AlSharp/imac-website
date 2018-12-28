---
id: net_config
title: Network configuration
sidebar_label: Network configuration
---

**IMAC** is preconfigured to get IP address automatically from DHCP server. If your network is configured to provide IP addresses automatically you are good. Setting the static IP addresses is the only case when user needs to configure IMAC network settings. To accomplish this task you follow instructions below:

1.	Connect keyboard, mouse and HDMI monitor to IMAC. Power it up and wait OS loading is completed.

![Standalone(No PC Required)](assets/arch_1.jpg "Standalone(No PC Required)")

2.	Right click on the icon as shown and left click Wireless & Wired Network Settings.

![Wireless & Wired Network Settings](assets/net_config_2.png "Wireless & Wired Network Settings")

3.	Select the interface. Select `eth0` for wired or `wlan0` for wireless. Assign IP address from the range your network is working. For example, type `10.1.10.64/24` to assign `10.1.10.64` IP address to **IMAC**. Assign the IP address of your router – `10.1.10.1`. Assign the address of DNS server. `8.8.8.8` – is the IP address of Google DNS server. You can choose different if you want. Click Apply. In case you are configuring wireless connection the additional step is required.

![Wired Network Settings](assets/net_config_3_eth0.png "Wired Network Settings")

![Wireless Network Settings](assets/net_config_3_wlan0.png "Wireless Network Settings")

4.	If you are configuring wireless connection you need to open the terminal.

![Open Terminal](assets/net_config_4.png "Open Terminal")

In the terminal type `sudo raspi-config`. The textual menu will be opened.

![Raspi config](assets/net_config_5.png "Raspi config")

Select Network Options. You will be asked for Country, Wifi network’s name and password. When you complete press Finish.

5.	Reboot **IMAC** and unplug keyboard, mouse and HDMI monitor. **IMAC** is ready for use in the network. Open Google Chrome (recommended browser) and go to `http://imac:5000`.