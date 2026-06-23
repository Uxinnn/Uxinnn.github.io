+++ 
draft = false
date = 2026-05-10T16:57:21+08:00
title = "Blackhat Asia 2026: Satellite Hacking"
description = "A summary and some thoughts on a BlackHat Asia training course on satellite hacking."
authors = ["Uxinnn"]
tags = ["hardware", "satellite", "training", "blackhat asia"]
categories = ["hardware"]
featuredImage = "images/bha-2026-satellite-hacking.png"
+++

# Introduction

One day at work, I was scrolling through the list of BlackHat Asia 2026 Training Courses to see what's available. This course on satellite hacking happened to catch my eye, given its exotic domain. For some reason, I was able to convince my company to sponsor me for the course, which is how I ended up attending my first BlackHat event.

The course lasted 2 days, and focused on the uplink and downlink between satellites and their ground stattions. Topics covered ranged from reconnaissance methods, common attacks vectors, and how to defend against such attacks.

There were 2 instructions conducting the course: Romel Marin from StarsecX, and Kevin Leon from ES Consulting, both of whom had extensive backgrounds in aerospace cybersecurity.

# TLDR of the course

## Reconnaissance

We first started off with getting to know some common sources of information for reconnaissance, such as [space-track.org](https://www.space-track.org/). Some juicy information that is specific to space systems are the RF frequencies that the system uses to communicate, and the Two-Line Element (TLE) information of the system. TLE information helps us locate the satellite and tells us the time periods where we can communicate with the satellite (Since the satellite is in orbit, there are fixed timeslots where the satellite is over us, which will allow us to communicate with it).

Other techniques shown are common for reconnaissance, such as Google Dorking.

## Hardware and Protocols

We were then introduced to our hardware setup. Since we (unfortunately) didn't have a real satellite lying around, we used a [FlatSat](https://github.com/Pwnsat/FlatSat) instead. To capture RF signals and perform attacks against the FlatSat, we were given a Software Defined Radio (SDR).

As the FlatSat uses I2C for communication, we did a little bit of I2C reversing, followed by learning and analysing SpaceCAN traffic. SpaceCAN is a modified version of the Controller Area Network (CAN) bus commonly used in vehicles, but optimized for small spacecrafts. It is used in spacecrafts for communication.

Next, we learnt about the Space Packet Protocol (SPP), which is used for communication between satellites and their ground station.

## Attacks

The various types of attacks covered were somewhat similar, such as replay attacks, command injections, and spoofing.

# Afterthoughts

Before going through this course, I thought that satellites, given its exoticness, will be special and require some form of novel techniques to exploit. However, it turns out that many of the techniques taught were not specific to satellites, and are common attacks used against other earth-based systems.

I think it should be noted too that since this is an introductory course, the techniques taught will not (although I guess you never know) work against modern day satellites, since they are hardened against these common attacks. Some communication protocols used in the FlatSat may also not exist in a real satellite, such as I2C.

Still, I think that the course is a good introduction to hardware/embedded hacking. I also got to take home the FlatSat and SDR, which was a plus (not to mention 2 days of good food @ MBS).
