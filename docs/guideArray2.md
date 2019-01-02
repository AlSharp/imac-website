---
id: guideArray2
title: Array Block XYZ Gantry
sidebar_label: Array Block XYZ Gantry
---
## Demo

Click on the image to watch demo on Youtube.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ebHxsyUTJYk/0.jpg)](https://www.youtube.com/watch?v=ebHxsyUTJYk)

## Motors setup for X, Y and Z axes

### Step 1. Configuring Mode and Profile blocks

Drag and drop Mode and Profile blocks onto the visual programming workspace for X, Y and Z axes. Define the motor type, motion mode, profile, velocity, acceleration and deacceleration.

> Note: 0 is X; 1 is Y; 2 is Z.

![Mode and Profile](assets/guide_xyz_array_01.png "Mode and Profile")

### Step 2. Create the user block

Using `CTRL + Left Mouse button` select all six blocks and click `Create user block` button as shown. Give a name to the user block, pick the color and click `Create`.

![Create user block](assets/guide_xyz_array_02.png "Create user block")

The created user block will appear under the category `User`. Remove six blocks and replace them with just created user block.

![User block Setup Axes](assets/guide_xyz_array_03.png "User block Setup Axis")

## Homing position

### Step 3. Setting negative limits as homing positions

Drag and drop Homing blocks. Select method `Limit switch` and direction `Negative`.

![User block Homing](assets/guide_xyz_array_04.png "User block Homing")

### Step 4. Create the user block

Using `CTRL + Left Mouse button` select three added blocks and click `Create user block`. Give a name to the user block, pick the color and click `Create`. The user block will be added to category `User`. Replace homing blocks with the created user block.

![User block Homing](assets/guide_xyz_array_05.png "User block Homing")

## Setting the reference point for an array

### Step 5. Move to the reference point.

![User block Reference point](assets/guide_xyz_array_06.png "User block Reference point")


