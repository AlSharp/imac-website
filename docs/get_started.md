---
id: get_started
title: Get Started
sidebar_label: Get Started
---

To start **IMAC** application, open web browser (Google Chrome is recommended for **IMAC**) and type `imac:5000` in the browser address bar.

## User Interface

IMAC application contains four areas:

1. Main Menu
2. Block palette
3. Visual Programming Workspace
4. Terminal

![Visual Block Programming Environment](assets/vbpi.png "Visual Block Programming Environment")

## Block Palette

Block palette contains the following command block categories:

- Motion Blocks
- Time / Event Blocks
- I/O Blocks
- Control Flow Blocks
- Math Blocks
- Variable Blocks
- Mics. Blocks
- User Blocks

### Motion Blocks

#### Mode

Allows to set type of the motor and the mode in which motor works.

![get_started_mode_1_index](assets/blocks/mode_1.png "Mode block")
![get_started_mode_2_index](assets/blocks/mode_2.png "Mode block")

Motor type:
+ Stepper
+ Servo

Operating mode:
+ Position

Sets the motor ***type*** to *`Stepper`* and operating ***mode*** to *`Position`* for axis `0` on the port `USB0`.

#### Profile

Allows to set the motion characteristics.

![get_started_profile_1_index](assets/blocks/profile_1.png "Profile block")
![get_started_profile_2_index](assets/blocks/profile_2.png "Profile block")
![get_started_profile_3_index](assets/blocks/profile_3.png "Profile block")

Profile:
+ trapezoidal
+ s-curve

Velocity [*counts/sec*]

Acceleration [*counts/sec^2*]

Deacceleration [*counts/sec^2*]

Jerk [*counts/sec^3*]

Sets the motion ***profile***, ***velocity***, ***acceleration***, ***deaceleration*** and ***jerk*** for axis `0` on the port `USB0`.

#### Move

Allows to set the type of motion, absolute position or distance, direction of the motion. By default the checkbox `Wait until done` is checked and that means that next block in the sequence will not be executed until the motion is completed.

![get_started_move_1_index](assets/blocks/move_1.png "Move block")
![get_started_move_2_index](assets/blocks/move_2.png "Move block")
![get_started_move_3_index](assets/blocks/move_3.png "Move block")

Type:
+ Absolute

  Absolute motion...

+ Relative

  Relative motion...

Position [*counts*]

Distance [*counts*]

Direction: [*Positive / Negative*]

Sets motion ***type*** to *`Absolute`* or *`Relative`*

#### Homing

Allows to set...

![get_started_homing_1_index](assets/blocks/homing_1.png "Homing block")
![get_started_homing_2_index](assets/blocks/homing_2.png "Homing block")
![get_started_homing_3_index](assets/blocks/homing_3.png "homing block")

Sets...

### Time / Event Blocks

Time / Event Blocks Here

### I/O Blocks

I/O Blocks Here

### Control Flow Blocks

Control Flow Blocks Here

### Math Blocks

Math Blocks Here

### Variable Blocks

Variable Blocks Here

### Mics. Blocks

Mics. Blocks Here

### User Blocks

User Blocks Here

## Working with IMAC files

There are two options available to save IMAC program:

1.	Save program to IMAC’s file system.

Go to _Main Menu_ => _File_ and click _Save to IMAC_. Save file dialog will open.

![Save to IMAC](assets/save_to_imac.png "Save to IMAC")

Organize your files by creating folders. Click _Create folder_ icon and additional form will appear.

![Save to IMAC](assets/create_folder.png "Save to IMAC")

Enter the name of file and click Save.

2.	Save program to your PC file system or some local network shared resource.

Go to _Main Menu_ => _File_ and click _Save to PC_. This is standard Windows File Explorer dialog box.

![Save to IMAC](assets/save_to_pc.png "Save to IMAC")

To open saved IMAC programs go to IMAC _Main Menu_ => _File_ and choose _Open from PC_ or _Open from IMAC_. The same dialog boxes will be opened, just select desired file and click Open. The blocks saved in the opened file will be displayed on the visual programming workspace. Modify the blocks, add new ones or just run them.

## Updating IMAC Software

IMAC applications are under the active development. Improvements and new features are being added. Users ask to add new blocks with custom functionality. When the new IMAC software version is available, user can update the application. There are two way to update application:

1. Over the Internet

The link of updated version will be provided. Go to _Main Menu_ => _Update_ and click _Online_. The dialog box will be displayed.

![IMAC Update Online](assets/update_online.png "IMAC Update Online")

Insert provided URL into the text field and click Update. The progress of installation can be observed in the terminal. When the installation is completed application will be reloaded. Type `version` into the terminal and press Enter to verify that application is updated successfully.

2.	From the zipped file on the user hard drive. User will be provided with link to new version for downloading. Downloaded zip file can be saved on local PC. Go to _Main Menu_ => _Update_ and click Offline. The dialog box will be displayed.

![IMAC Update Offline](assets/update_offline.png "IMAC Update Offline")

Click _Choose File_. The standard Windows File Explorer window will be displayed. Navigate to the saved zip file and open it. Click Update. The progress of installation can be observed in the terminal. When the installation is completed application will be reloaded. Type `version` into the terminal and press Enter to verify that application is updated successfully.

## Sending ASCII commands through the terminal

User has a full control over the **IDRIVES** through the Terminal. Refer to the _ASCII Programmer’s Guide_ for available commands and syntax. The syntax of IMAC ASCII message is:

[_usb port_]:[_axis letter_][_command code_][_command parameters_]

Examples:

usb0: 1 g r0x70

Get the value of register `0x70` at axis `1` of **IDRIVE** connected to USB port 0.

usb0: 0 s r0xc8 0

Set the trajectory generator to absolute move, trapezoidal profile

usb0: t 2

Execute homing.
