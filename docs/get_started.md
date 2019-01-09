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

<figure>
  <img src="assets/blocks/mode_1.png" alt="Mode tile"/>
  <img src="assets/blocks/mode_2.png" alt="Mode block"/>
</figure>

*Motor type*:
+ Stepper
+ Servo

*Operating mode*:
+ Position

Sets the motor ***type*** to *`Stepper`* and operating ***mode*** to *`Position`* for axis `0` on the port `USB0`.

#### Profile

Allows to set the motion characteristics.

<figure>
  <img src="assets/blocks/profile_1.png" alt="Profile tile"/>
  <img src="assets/blocks/profile_2.png" alt="Profile block"/>
  <img src="assets/blocks/profile_3.png" alt="Profile block"/>
</figure>

*Profile*:
+ trapezoidal
+ s-curve

*Velocity*: positive integer [*counts/sec*]

*Acceleration*: positive integer [*counts/sec^2*]

*Deacceleration*: positive integer [*counts/sec^2*]

*Jerk*: positive integer [*counts/sec^3*]

Sets the motion ***profile***, ***velocity***, ***acceleration***, ***deaceleration*** and ***jerk*** for axis `0` on the port `USB0`.

#### Move

Allows to set the type of motion, absolute position or relative distance, direction of the motion. By default the checkbox `Wait until done` is checked and that means that next block in the sequence will not be executed until the motion is completed.

<figure>
  <img src="assets/blocks/move_1.png" alt="Move tile"/>
  <img src="assets/blocks/move_2.png" alt="Move block"/>
  <img src="assets/blocks/move_3.png" alt="Move block"/>
</figure>

*Type*:
+ Absolute

  Uses when you need to move the axis relative to current homing position.

+ Relative

  Uses when you need to move the axis relative to current position.

*Position*: positive or negative integer [*counts*]

*Distance*: positive or negative integer [*counts*]

*Direction*: [*Positive / Negative*]

Multiplies the value of ***position*** or ***distance*** by `1` if Positive, and `-1` if Negative.

*Wait until done*: [*True / False*]

Sets motion ***type*** to *`Absolute`* or *`Relative`*, ***position*** to absolute position in counts, ***direction*** to positive or negative, ***distance*** to relative position in counts, ***wait until done*** to *`True`* or *`False`* for axis `0` on the port `USB0`.

#### Homing

Allows to set the homing position.

<figure>
  <img src="assets/blocks/homing_1.png" alt="Homing tile"/>
  <img src="assets/blocks/homing_2.png" alt="Homing block"/>
  <img src="assets/blocks/homing_3.png" alt="Homing block"/>
</figure>

*Method*:
+ Current position

  Used when the currect position is needed to be set as homing position.

+ Limit switch

  Used when one of limits is needed to be set as homing position.

*Direction*: [*Positive / Negative*]

Works only with *`Limit switch`* method. Indicates that ***positive*** or ***negative*** limit switch is selected to be a homing position.

*Wait until referenced*: [*True / False*]

Waits for axis completes the homing positioning.

Sets homing ***method*** to *`Current position`* or *`Limit Switch`*, ***direction*** to positive or negative, ***wait until referenced*** to *`True`* or *`False`* for axis `0` on the port `USB0`.

### Time / Event Blocks

#### Wait for digital input

Waits for `High` or `Low` on digital input. The next block in the sequence will be executed only if expected value comes on given input.

<figure>
  <img src="assets/blocks/wait_input_1.png" alt="Wait Input tile"/>
  <img src="assets/blocks/wait_input_2.png" alt="Wait Input block"/>
</figure>

*Input*: [*1 - 12*]

*Wait for*: [*Hi / Lo*]

Waits for *`Hi`* on input *`1`* for axis `0` on the port `USB0`.

#### Listen to event

Listens to events. The next block in the sequence will be executed only if awaited event happens.

<figure>
  <img src="assets/blocks/listen_event_1.png" alt="Listen to Event tile"/>
  <img src="assets/blocks/listen_event_2.png" alt="Listen to Event block"/>
</figure>

*Event*:
+ Positive limit switch
+ Negative limit switch

*Timeout*: [*ms*]

If during the specified time the event is not occurred, the error will be thrown and the further processing of the sequence of blocks will be stopped.

Awaits the positive limit switch is triggered at the axis `0` on the port `USB0`.

#### Delay

Waits for specified milliseconds.

<figure>
  <img src="assets/blocks/delay_1.png" alt="Delay tile"/>
  <img src="assets/blocks/delay_2.png" alt="Delay block"/>
</figure>

*Time*: [*ms*]

Waits for the specified time. The next block in the sequence will be executed only after the time is expired.

#### Wait until done

Waits until the motion launched by previous block is completed.

<figure>
  <img src="assets/blocks/wait_until_done_1.png" alt="Wait until done tile"/>
  <img src="assets/blocks/wait_until_done_2.png" alt="Wait until done block"/>
</figure>

Example:

<figure>
  <img src="assets/blocks/wait_until_done_example.png" alt="Wait until done example"/>
</figure>

The block **`Wait until done`** checks the motion at axis `0` on the port `USB0`. If the motion does not exist (or the motion is ended) the next block in the sequence will be allowed to run.

### I/O Blocks

#### Set digital output

Sets the output control register to `High` or `Low`.

<figure>
  <img src="assets/blocks/set_output_1.png" alt="Set Output tile"/>
  <img src="assets/blocks/set_output_2.png" alt="Set Output block"/>
</figure>

*Output*: [*1 - 4*]

*Set to*: [*Hi / Lo*]

When output is set to *Hi* output transistor is open, conducting current to the load.

When output is set *Lo* output transistor is closed, no current flows to the load.

#### Read digital input

Reads the value of input.

<figure>
  <img src="assets/blocks/read_input_1.png" alt="Read Input tile"/>
  <img src="assets/blocks/read_input_2.png" alt="Read Input block"/>
</figure>

*Input*: [*1 - 12*]

Reads the value of specified input and saves this value in the program's internal memory. The value can be used in the IF-ELSE statement. Also the value can be assigned to variable name.

### Control Flow Blocks

#### Repeat

Opens the beginning of the repeated part of the sequence of blocks.

<figure>
  <img src="assets/blocks/repeat_1.png" alt="Repeat tile"/>
  <img src="assets/blocks/repeat_2.png" alt="Repeat block"/>
</figure>

*Id*: positive integer or word without special characters
+ should be unique. Identifies a chain of blocks that will be repeated.

*Number*: positive integer
+ defines how many times blocks will be repeated.

Says to IMAC interpreter that starting from the next block there is a chain of blocks ended with *End Repeat* block with the same `Id` and that chain of blocks should be repeated `Number` times.

#### End Repeat

Defines the end of the repeated part of the sequence of blocks.

<figure>
  <img src="assets/blocks/end_repeat_1.png" alt="End Repeat tile"/>
  <img src="assets/blocks/end_repeat_2.png" alt="End Repeat block"/>
</figure>

*Id*: positive integer or word without special characters
+ should be matched to `Id` of Repeat block.

Says to IMAC interpreter that here is the end of a chain of blocks started with *Repeat* block with the same `Id`.

#### If

Checks its boolean condition.

<figure>
  <img src="assets/blocks/if_1.png" alt="If tile"/>
  <img src="assets/blocks/if_2.png" alt="If block"/>
</figure>

*Id*: positive integer or word without special characters
+ should be unique. It is needed to find associated *Else* and *End if* blocks.

*First boolean condition*:
+ Inputs [IN1 - IN12] [= , &ne;] [*Hi, Lo*]
+ [*variable*] [=, &ne;, &gt;, &ge;, &lt;, &le;] [*variable*]

*Checkbox*: [*OR, AND*]

*Second boolean condition*:
+ Inputs [IN1 - IN12] [= , &ne;] [*Hi, Lo*]
+ [*variable*] [=, &ne;, &gt;, &ge;, &lt;, &le;] [*variable*]

If the condition is true the next blocks will be executed until IMAC interpreter meets associated *Esle* block or *End If* block. If the condiction is false the next blocks will be skipped and IMAC interpreter will look for assocciated *Else* block or *End If* block to continue execution of the blocks.

##### *Sample use case*

<figure>
  <img src="assets/blocks/if_else_example_1.png" alt="If-Else example"/>
  <img src="assets/blocks/if_else_example_2.png" alt="If-Else example"/>
  <img src="assets/blocks/if_else_example_3.png" alt="If-Else example"/>
</figure>

If **Input 3** is `High` then move **axis 0** `10000` counts in positive direction else move **axis 0** `10000` counts in negative direction.

#### Else

Says to the interpreter to start the execution of the blocks *"from here"* if the boolean condition of associated *If* block is false.

<figure>
  <img src="assets/blocks/else_1.png" alt="Else tile"/>
  <img src="assets/blocks/else_2.png" alt="Else block"/>
</figure>

*Id*: positive integer or word without special characters
+ should be matched to associated *If* block.

#### End If

Says to the interpreter that this is the end of *If* or *If-Else* statement.

<figure>
  <img src="assets/blocks/end_if_1.png" alt="End If tile"/>
  <img src="assets/blocks/end_if_2.png" alt="End If block"/>
</figure>

*Id*: positive integer or word without special characters
+ should be matched to associated *If* block.

#### Pause

Pauses the execution of blocks until the `Resume` button is clicked.

<figure class="img-inline-align-left">
  <img src="assets/blocks/pause_1.png" alt="Pause tile"/>
  <img src="assets/blocks/pause_2.png" alt="Pause block"/>
</figure>

### Math Blocks

#### Basic math

Performs four basic mathematical operations: addition, subtraction, multiplication and division.

<figure class="img-inline-align-left">
  <img src="assets/blocks/math_1.png" alt="Math tile"/>
  <img src="assets/blocks/math_2.png" alt="Math block"/>
</figure>

*Var.*: any word without special characters

*Operand 1*: variable or value

*Operator*: [*+, -, /, &times;*]

*Operand 2*: variable or value

Saves result of operation into the variable with specified name.

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
