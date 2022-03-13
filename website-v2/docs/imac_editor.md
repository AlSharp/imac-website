---
id: imac_editor
title: IMAC Editor
sidebar_label: IMAC Editor
---

import Image from '@site/src/components/Image';

To start **IMAC Editor**, open web browser (Google Chrome is recommended for **IMAC**) and type `imac:5000` in the browser address bar.

IMAC Editor contains five areas:

1. Main Menu
2. Tabs of sequences
3. Palette of blocks
4. Visual Programming Workspace
5. Control panel
6. Terminal


<Image src="../assets/editor_2.png" alt="Visual Block Programming Environment"/>


## Main menu

Main menu contains File drop-down menu and drop-down menus for each device connected to IMAC.

### Manage IMAC program files

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_file_menu_1.png" alt="File drop-down menu 1"/>
  <Image className="margin-right--sm" src="../assets/editor_file_menu_2.png" alt="File drop-down menu 2"/>
  <Image className="margin-right--sm" src="../assets/editor_file_menu_3.png" alt="File drop-down menu 3"/>
</div>

IMAC editor has two options available for opening or saving IMAC programs:

__1. Using IMAC’s file system__

Click on `Open from IMAC` and the following dialog box appears. Select file and click `Open` button. Blocks saved in that file will be loaded into visual programming workspace.

<div>
  <Image src="../assets/open_from_imac.png" alt="Open from IMAC"/>
</div>

Click on `Save to IMAC`, give a file a name, click `Save` button and blocks that are displayed on the visual programming workspace will be stored in the file.

<div>
  <Image src="../assets/save_to_imac.png" alt="Save to IMAC"/>
</div>

Organize your files by creating folders. Click _Create folder_ icon and additional form will appear.

<div style={{marginBottom: 20}}>
  <Image src="../assets/create_folder.png" alt="Create folder"/>
</div>

__2. Using User's PC file system or local network shared resource__

Click on `Open from PC` and the standard Windows File Explorer dialog box appears. Select file and click `Open` button. Blocks saved in that file will be loaded into visual programming workspace.

<div>
  <Image src="../assets/open_from_pc.png" alt="Open from PC"/>
</div>

Click on `Save to PC`. Give a file a name, click `Save` button and blocks that are displayed on the visual programming workspace will be stored in the file.

<div>
  <Image src="../assets/save_to_pc.png" alt="Save to PC"/>
</div>

If you nead to open last saved file then click on `Last saved file`.

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_file_menu_2.png" alt="Last saved file"/>
</div>

### Manage IMAC config files

IMAC allows to save device settings into config files for later use.

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_file_menu_3.png" alt="File drop-down menu 3"/>
</div>

You can select a config file for the current session by clicking on `Set active config`. The following dialog window will be opened. Select config file and click on `Set` button. 

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_config_file_menu_1.png" alt="Set active config"/>
</div>

If you need to make changes to device settings, but you want to keep previous settings, then you need to create a new config file. Click on `Save active config as` to save current settings into new file. The following dialog window will be open.

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_config_file_menu_2.png" alt="Save active config as"/>
</div>

Enter a config file name with .cfg extension and click `Save` button. You need to select a new file as active config file. Click on `Set active config` and select new config file.

:::caution
All changes to device settings are being automatically saved into active config file.
:::

IMAC allows to download or upload config files from user's computer.

If you need to send config file to someone, click on `Download config to PC`, select file and click `Download` button.

If you need to use config file you received from someone, click on `Upload config from PC`, select file and save it. After that you can set uploaded file as active config.

## Tabs of Sequences

IMAC programs can consist of multiple sequences. Main sequence is where the program starts. Additional sequences can be added and used as ordinary functions or event handlers. Additional sequences are invokable from main sequence or another additional sequences.

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_tabs_1.png" alt="main tab"/>
</div>

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_tabs_2.png" alt="additional tab"/>
</div>

[How to use additional sequence as event handler](imac_editor.md#11-event-listener)

## Blocks

Here is an example of block:

<div className="d--flex margin-bottom--lg">
  <Image className="margin-right--sm" src="../assets/editor_block_example.png" alt="block example"/>
</div>

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

#### 1. Mode

Sets the type of the motor and the mode in which motor works.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/mode_1.png" alt="Mode tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/mode_2.png" alt="Mode block"/>
</div>

:::note Arguments

*Motor type*:
+ Stepper
+ Servo

*Operating mode*:
+ Position

:::
:::info Action

Sets the motor type to *`Stepper`* and operating mode to *`Position`* for axis `X` on device `XYZ`.

:::

#### 2. Profile

Sets motion characteristics.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/profile_1.png" alt="Profile tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/profile_2.png" alt="Profile block"/>
  <Image className="margin-right--xs" src="../assets/blocks/profile_3.png" alt="Profile block"/>
</div>

:::note Arguments

*Profile*:
+ trapezoidal
+ s-curve

*Velocity*: (units: counts/sec)
+ positive integer
+ [variable]

*Acceleration*: (units: counts/sec<sup>2</sup>)
+ positive integer
+ [variable]

*Deceleration*: (units: counts/sec<sup>2</sup>)
+ positive integer
+ [variable]

*Jerk*: (units: counts/sec<sup>3</sup>)
+ positive integer
+ [variable]

:::
:::info Action

1. Sets the motion profile to `trapezoidal`, velocity, acceleration, deaceleration for axis `X` on device `XYR`.
1. Sets the motion profile to `s-curve`, velocity, acceleration, jerk for axis `X` on device `XYR`.

:::

#### 3. Move

Execute motion with specified parameters

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/move_1.png" alt="Move tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/move_2.png" alt="Move block"/>
  <Image className="margin-right--xs" src="../assets/blocks/move_3.png" alt="Move block"/>
  <Image className="margin-right--xs" src="../assets/blocks/move_4.png" alt="Move block"/>
</div>

:::caution

If `Wait until done` is checked block becomes async.

:::

:::note Arguments

*Type*:
+ Absolute

  Use when you need to move the axis relative to current homing position.

+ Relative

  Use when you need to move the axis relative to current position.

+ Velocity

  Use when you need to move the axis at a constant velocity in the selected direction.

*Position*: (units: counts)
+ positive or negative integer 
+ [variable]

*Distance*: (units: counts)
+ positive or negative integer
+ [variable]

*Direction*:
+ Positive
+ Negative

>Multiplies the value of position or distance by `1` if Positive, and `-1` if Negative.

*Wait until done*:
+ True (checked)
+ False (unchecked)

:::
:::info Action

Sets the type and direction of the motion. By default the checkbox `Wait until done` is checked and that means that next block in the sequence is not being executed until the current motion is completed.

If absolute motion is selected, axis moves to absolute position in counts.

If relative motion is selected, axis moves given counts.

If velocity motion is selected, axis moves infinitely in the selected direction.

Sets motion for axis `X` on device `XYZ`.

:::

#### 4. Home

Execute pre-configured (default) home positioning.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/home_1.png" alt="Home tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/home_2.png" alt="Home block"/>
</div>

:::caution

Async block

:::

:::info Action

Executes home positioning method that is configured in device settings for axis `X` on device `XYR`

:::

#### 5. Advanced Homing

Executes home positioning with specified parameters

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/homing_1.png" alt="Homing tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/homing_2.png" alt="Homing block"/>
  <Image className="margin-right--xs" src="../assets/blocks/homing_3.png" alt="Homing block"/>
  <Image className="margin-right--xs" src="../assets/blocks/homing_4.png" alt="Homing block"/>
</div>

:::caution

Async block

:::

:::note Arguments
*Method*:
+ Current position

  Use when the currect position is needed to be set as homing position.

+ Limit switch

  Use when one of limits is needed to be set as homing position.

+ Home switch

  Use when home switch is needed to be set as homing position.

*Direction*:
+ Positive
+ Negative

  Selects limit switch which axis moves into to set up homing position

  Indicates direction which axis moves in to find home switch

  Disabled when `Current position` is selected

*Wait until referenced*:
 + True

  Always true. Waits for axis completes the homing positioning.

:::
:::info Action

Sets homing method and direction for axis `X` on device `XYZ`. Always waits until referenced.

:::

#### 6. Abort motion

Aborts motion

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/abort_1.png" alt="Abort tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/abort_2.png" alt="Abort block"/>
</div>

:::caution

If `Wait until done` is checked block becomes async.

:::

:::note Arguments

*Abort deceleration*: (units: counts/sec<sup>2</sup>)
+ positive integer

*Wait until done*:
+ True (checked)
+ False (unchecked)

  Waits for motion completion if checked.

:::
:::info Action

Aborts motion at axis `X` on device `XYR`. Motion gets slower with provided deceleration. Waits until axis stopped if `Wait until done` is checked.

:::

### Time / Event Blocks

#### 7. Wait for digital input

Waits for condition on selected digital input.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/wait_input_1.png" alt="Wait Input tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/wait_input_2.png" alt="Wait Input block"/>
</div>

:::caution

Async block

:::

:::note Arguments

*Input*: (units: positive integer)
+ number of input 
+ [variable]

*Wait for*: (units: Hi / Lo or 1 / 0)
+ input state
+ [variable]

:::
:::info Action

Waits for `Hi` condition on input `1` on device `Seadac`. The next block in the sequence will be executed only if expected condition comes on given input.

:::

#### 8. Listen to event

Listens to events.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/listen_event_1.png" alt="Listen to Event tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/listen_event_2.png" alt="Listen to Event block"/>
</div>

:::caution

Async block

:::

:::note Arguments

*Event*:
+ Positive limit switch
+ Negative limit switch

*Timeout*:
+ True (checked)
+ False (unchecked)

*Milliseconds*: (units: milliseconds)
+ positive integer

:::
:::info Action

Awaits the `Positive limit switch` is triggered at the axis `X` on device `XYR`. The next block in the sequence will be executed only if awaited event happens.

If during the specified time the event is not occurred, the error will be thrown and the further processing of the sequence of blocks will be stopped.

:::

#### 9. Delay

Waits for specified milliseconds.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/delay_1.png" alt="Delay tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/delay_2.png" alt="Delay block"/>
</div>

:::caution

Async block

:::

:::note Arguments
*Time*: (units: milliseconds)
+ positive number

:::
:::info Action

Waits for the specified time. The next block in the sequence will be executed only after the time is expired.

:::

#### 10. Wait until done

Waits until the motion launched by previous block is completed.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/wait_until_done_1.png" alt="Wait until done tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/wait_until_done_2.png" alt="Wait until done block"/>
</div>

:::caution

Async block

:::

:::info Action

Waits until axis `X` on device `XYR` completes its motion.

Checks the motion at axis `X` on device `XYR`. If the motion does not exist (or the motion is ended) the next block in the sequence will be allowed to run.

:::

Example:

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/wait_until_done_example.png" alt="Wait until done example 1"/>
  <Image className="margin-right--xs" src="../assets/blocks/wait_until_done_example_2.png" alt="Wait until done example 2"/>
  <Image className="margin-right--xs" src="../assets/blocks/wait_until_done_example_3.png" alt="Wait until done example 2"/>
</div>

#### 11. Event Listener

Listens to event and executes event handler.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/event_listener_1.png" alt="Event Listener tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/event_listener_2.png" alt="Event Listener block"/>
  <Image className="margin-right--xs" src="../assets/blocks/event_listener_3.png" alt="Event Listener Config block"/>
</div>

:::note Arguments

*Listen to*:

+ Input

*Device*:

+ I/O device

*Digital input*:

+ number of input

*Input value*:

+ Hi
+ Lo

*Interrupt*:

+ True
+ False

*Event handler*:

+ Tab

*Once*:

+ True
+ False

:::
:::info Action

Says to interpreter to listen to event in background. As soon as event happens interpreter executes event handler.

If `interrupt` option is set to true, interpreter does not wait for any async blocks end to execute event handler.

If `interrupt` is set to false, interpreter waits for async blocks end (like motion completion, awaiting input state change etc.).

If `once` option is set to true, event listener is being unregistered (removed). It means event handler is being executed only once.

If `once` option is set to false and if event happens multiple times during execution of event handler or during awaiting async action , event handlers are piled up in the queue. It means event handlers are being executed multiple times, one after another.

When event happens interpreter memorized a block before executing event handler, and when there is no event handlers left in the queue interpreter returns to this memorized block and execute next block after it.

:::

### I/O Blocks

#### 12. Set digital output

Sets state of digital output.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/set_output_1.png" alt="Set Output tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/set_output_2.png" alt="Set Output block"/>
</div>

:::note Arguments

*Output*: (units: positive integer)
+ number of output
+ [variable]

*Set to*: (units: Hi / Lo or 1 / 0)
+ output state
+ [variable]

:::
:::info Action

When output is set to *Hi* output transistor is open, conducting current to the load.

When output is set *Lo* output transistor is closed, no current flows to the load.

:::

#### 13. Read digital input

Reads state of input.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/read_input_1.png" alt="Read Input tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/read_input_2.png" alt="Read Input block"/>
</div>

:::note Arguments

*Input*: (units: positive integer)
+ number of input
+ [variable]

:::
:::info Action

Reads value of specified input and saves this value in the program's internal memory. The value can be used in the IF-ELSE statement. Also the value can be assigned to variable name.

:::

### Control Flow Blocks

#### 14. Repeat

Opens the beginning of the repeated part of the sequence of blocks.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/repeat_1.png" alt="Repeat tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/repeat_2.png" alt="Repeat block"/>
</div>

:::note Arguments

*Number*: (units: positive integer)
+ number of repeats

:::
:::info

Defines how many times blocks will be repeated.

Says to IMAC interpreter that starting from the next block there is a chain of blocks ended with *End Repeat* that should be repeated `Number` times.

:::

#### 15. End Repeat

Defines the end of the repeated part of the sequence of blocks.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/end_repeat_1.png" alt="End Repeat tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/end_repeat_2.png" alt="End Repeat block"/>
</div>

:::info Action

Says to IMAC interpreter that here is the end of a chain of blocks started with *Repeat* block.

:::

#### 16. While

Opens the beginning of the repeated part of the sequence of blocks. Repeats are conditional and executed if boolean expression evaluated to true.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/while_1.png" alt="While tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/while_2.png" alt="While block"/>
</div>

:::note Arguments

> ***First boolean expression***:
>
> *first operand*:
>   + Number
>   + [variable]
>
> *operator*:
>   + Equal to `=`
>   + Not equal to <code><span>&ne;</span></code>
>   + Greater than <code><span>&gt;</span></code>
>   + Greater than or equal to <code><span>&ge;</span></code>
>   + Less than <code><span>&lt;</span></code>
>   + Less than or equal to <code><span>&le;</span></code>
>
> *second operand*:
>   + Number
>   + [variable]

> *Boolean operator*:
> + OR
> + AND

> ***Second boolean expression***:
>
> *first operand*:
>   + Number
>   + [variable]
>
> *operator*:
>   + Equal to `=`
>   + Not equal to <code><span>&ne;</span></code>
>   + Greater than <code><span>&gt;</span></code>
>   + Greater than or equal to <code><span>&ge;</span></code>
>   + Less than <code><span>&lt;</span></code>
>   + Less than or equal to <code><span>&le;</span></code>
>
> *second operand*:
>   + Number
>   + [variable]

:::
:::info

Says to IMAC interpreter that starting from the next blocks there is a chain of blocks ended with *End While* that should be repeated if boolean expression evaluates to true.

:::

#### 17. End While

Defines the end of the repeated part of the sequence of blocks.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/end_while_1.png" alt="End While tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/end_while_2.png" alt="End While block"/>
</div>

:::info Action

Says to IMAC interpreter that here is the end of a chain of blocks started with *While* block.

:::

#### 18. If and Else If

Allows for conditional execution of block sequence fragment.

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/if_1.png" alt="If tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/if_2.png" alt="If block"/>
</div>
<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/else_if_1.png" alt="Else If tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/else_if_2.png" alt="Else If block"/>
</div>

:::note Arguments

> ***First boolean expression***:
>
> *first operand*:
>   + Number
>   + Numner of input
>   + [variable]
>
> *operator*:
>   + Equal to `=`
>   + Not equal to <code><span>&ne;</span></code>
>   + Greater than <code><span>&gt;</span></code>
>   + Greater than or equal to <code><span>&ge;</span></code>
>   + Less than <code><span>&lt;</span></code>
>   + Less than or equal to <code><span>&le;</span></code>
>
> *second operand*:
>   + Number
>   + Lo / Hi
>   + [variable]

> *Boolean operator*:
> + OR
> + AND

> ***Second boolean expression***:
>
> *first operand*:
>   + Number
>   + Number of input
>   + [variable]
>
> *operator*:
>   + Equal to `=`
>   + Not equal to <code><span>&ne;</span></code>
>   + Greater than <code><span>&gt;</span></code>
>   + Greater than or equal to <code><span>&ge;</span></code>
>   + Less than <code><span>&lt;</span></code>
>   + Less than or equal to <code><span>&le;</span></code>
>
> *second operand*:
>   + Number
>   + Lo / Hi
>   + [variable]

:::
:::info Action

If the boolean expression returns true the next blocks are being executed until IMAC interpreter meets next *Else If* block or associated *Esle* block or *End If* block. If the condiction is false the next blocks are being skipped and IMAC interpreter will look for next *Else If* block or assocciated *Else* block or *End If* block to continue execution of the blocks.

:::

##### *Sample use case*

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/if_else_example_1.png" alt="If-Else example 1"/>
  <Image className="margin-right--xs" src="../assets/blocks/if_else_example_2.png" alt="If-Else example 2"/>
  <Image className="margin-right--xs" src="../assets/blocks/if_else_example_3.png" alt="If-Else example 3"/>
  <Image className="margin-right--xs" src="../assets/blocks/if_else_example_4.png" alt="If-Else example 4"/>
  <Image className="margin-right--xs" src="../assets/blocks/else_2.png" alt="If-Else example 5"/>
  <Image className="margin-right--xs" src="../assets/blocks/home_2.png" alt="If-Else example 6"/>
  <Image className="margin-right--xs" src="../assets/blocks/end_if_2.png" alt="If-Else example 7"/>
</div>

If **Input 2** is `High` and **Input 3** is `Low` then move **axis X** `25000` counts in positive direction, else if **Input 2** is `High` and **Input 3** is `Low` then move **axis X** `25000` counts in negative direction, else home **axis X**.

#### 19. Else

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/else_1.png" alt="Else tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/else_2.png" alt="Else block"/>
</div>

:::info Action

Says to the interpreter to start the execution of the blocks from here to the next *End If* block if the boolean conditions of associated *If* of *Else If* blocks are false.

:::

#### 20. End If

<div className="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/end_if_1.png" alt="End If tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/end_if_2.png" alt="End If block"/>
</div>

:::info Action

Says to the interpreter that this is the end of *If* or *If-Else* statement.

:::

#### 21. Pause

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/pause_1.png" alt="Pause tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/pause_2.png" alt="Pause block"/>
</div>

:::caution

Async block

:::

:::info Action

Says to the interpreter to pause the execution of blocks until the `Resume` button is clicked.

:::

#### 22. Exit

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/exit_1.png" alt="Exit tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/exit_2.png" alt="Exit block"/>
</div>

:::info Action

Says to the interpreter to stop execution of blocks and exit.

:::

### Math Blocks

#### 23. Basic math

Performs four basic mathematical operations: addition, subtraction, multiplication and division.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/math_1.png" alt="Math tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/math_2.png" alt="Math block"/>
</div>

:::note Arguments

*Var.*: (string)
+ variable name

*Operand 1*:
+ Number
+ [variable]

*Operator*:
+ &plus;
+ &minus;
+ &divide;
+ &times;

*Operand 2*:
+ Number
+ [variable]

:::
:::info Action

Saves result of operation into the variable with specified name.

:::

### Variable Blocks

#### 24. Value to Variable

Assigns value to the variable.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/var_value_1.png" alt="Variable Value tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/var_value_2.png" alt="Variable Value block"/>
</div>

:::note Arguments

*Name*:
+ string without special characters

*Value*:
+ Number

:::
:::info Action

Creates a variable in the local variable scope and assigns value to it.

:::

#### 25. Varibale to Variable

Assigns variable to another variable.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/var_var_1.png" alt="Variable Value tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/var_var_2.png" alt="Variable Value block"/>
</div>

:::note Arguments

*Name*: 
+ string without special characters

*Name*:
+ variable name

:::
:::info Action

Creates a variable in the local variable scope and assigns value of another variable to it. If another variable does not exist in the local scope, it is being looking for in the outer scopes and global scope. If it does not exist then error is being thrown.

:::

#### 26. Parameter to Variable

Assigns value of input / output / register to the variable.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/var_param_1.png" alt="Variable Parameter tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/var_param_2.png" alt="Variable Parameter block"/>
</div>

:::note Arguments

*Name*: 
+ string without special characters

*Parameter*:
+ Number of input
+ Number of output
+ Register address (for motor controller only)

:::
:::info Action

Creates a variable in the local variable scope. Requests value of parameter from device and assings it to variable. If it's unable to receive value of parameter, throws error.

:::

### Mics. Blocks

#### 27. Comment

Adds comment to the block sequence. User adds comments by clicking on the icon inside the block.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/comment_1.png" alt="Comment tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/comment_2.png" alt="Comment block"/>
</div>

:::info Action

Does nothing

:::

### User Blocks

The User blocks are the blocks created by user from standard blocks or/and another user blocks. The User blocks can be deep nested. User can create user blocks from another user blocks which consist another user blocks.

Here is created user block which moves the gantry system to the reference point.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/user_block_1.png" alt="User Block tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/user_block_2.png" alt="User block block"/>
</div>

To see the inner blocks and edit them click `Unfold` in the dropdown menu.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/user_block_3.png" alt="User Block tile"/>
</div>

To fold the user block back click `Fold`.

<div class="d--flex flex-wrap--wrap">
  <Image className="margin-right--xs" src="../assets/blocks/user_block_4.png" alt="User Block tile"/>
  <Image className="margin-right--xs" src="../assets/blocks/user_block_5.png" alt="User block block"/>
  <Image className="margin-right--xs" src="../assets/blocks/user_block_6.png" alt="User block block"/>
</div>

To learn more about User blocks please see [The User Block Guide](guideUserblock.md).

## Sending ASCII commands through the terminal

User has a full control over the motor drives through the Terminal. Refer to the _ASCII Programmer’s Guide_ for available commands and syntax. The syntax of IMAC ASCII message is:

[_usb port_]:[_axis letter_][_command code_][_command parameters_]

Examples:

```js
usb0: 1 g r0x70
```

Get the value of register `0x70` at axis `1` of motor drive connected to USB port 0.

```js
usb0: 0 s r0xc8 0
```

Set the trajectory generator to absolute move, trapezoidal profile

```js
usb0: t 2
```

Execute homing.
