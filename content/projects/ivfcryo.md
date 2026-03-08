---
slug: ivfcryo
businessName: 'IVFCryo, LLC'
publishedAt: 2025-11-03
title: 'IVFCRYO: shipping application and accessibility-first development'
description: 'Building a self-service shipping application for a fertility specimen logistics provider, with real-time environmental tracking, multi-carrier label printing, and accessibility integrated from the start.'
tags:
  [
    aws-light,
    css,
    github-light,
    xd,
    html,
    javascript,
    java-light,
    tailwindcss-light,
    d3-light,
  ]
image: "/images/projects/ivfcryo.webp"
image_alt: 'IVFCRYO web application shipping process.'
---

## Overview

IVFCRYO provides cryogenic specimen logistics for the fertility industry. Their work involves coordinating the safe transport of biological specimens under strict environmental conditions, where errors in process or documentation carry serious consequences.

When I started working with them, their shipping workflow was entirely manual. Staff processed each shipment through paperwork, handwritten labels, and phone-based coordination with shipping carriers. The process was time-consuming, error-prone, and offered clients no visibility into what was happening with their specimens during transit.

The goal was to replace that manual workflow with a self-service web application: one clients could use independently, integrated directly with major shipping carriers, and surfacing real-time environmental data from hardware already deployed in shipments.

## Replacing a manual workflow with a self-service application

### The problem

Each shipment required staff to manually complete paperwork, print labels for multiple carriers, and field status inquiries from clients by phone or email. Processing a single shipment took close to an hour. Across a day's worth of shipments, that overhead was substantial, and it introduced documentation errors with real downstream consequences.

### What I built

A web application that allowed clients to initiate and manage their own shipments without staff intervention. Clients could request a shipment in two steps, with built-in defaults that enforced documentation requirements and reduced the likelihood of input errors.

The application connected directly to major shipping carrier APIs, including FedEx, so clients could generate and print all required labels for multi-carrier shipments from one place. No manual label creation. No separate carrier portals.

### The result

Processing time per shipment dropped by nearly an hour. Documentation errors decreased because the application enforced required fields and applied sensible defaults. Staff time previously spent on shipment coordination shifted to higher-value work.

## Real-time environmental tracking via hardware integration

IVFCRYO uses a hardware device called Sense that monitors environmental conditions inside specimen containers during transit. The data it captures (GPS location, internal temperature, external temperature, humidity, and atmospheric pressure) was previously only accessible after the fact.

I integrated the Sense device API into the shipping application so that data was surfaced to clients in real time. During a shipment, clients could see exactly where their specimens were and confirm that environmental conditions remained within safe parameters throughout the journey.

The application also sent automated notifications at key points in the shipment lifecycle. Clients who opted in received real-time text messages alongside in-app updates. Automated emails documented each chain-of-custody exchange, giving clients a detailed record of their shipment without requiring them to contact staff.

Clients in this space carry significant emotional and medical stakes. Direct, real-time visibility into specimen location and environmental conditions reduced dependence on staff for status updates and gave clients confidence in the process.

## Building with a visually impaired user as a design partner

One of IVFCRYO's clients is legally blind and agreed to participate in the development process as an active design partner rather than a tester brought in at the end. He provided ongoing feedback throughout the build, from early wireframes through to final implementation.

Working directly with a user who relied on a screen reader and keyboard navigation changed how I approached every design decision. Navigation structure, focus order, label clarity, error messaging, and interactive feedback all went through review with his direct input. Issues were caught and resolved during development rather than discovered in a post-launch audit.

This is the most effective accessibility work I've done. Having a real user with a genuine stake in the outcome as a collaborator produces results that automated tooling and internal review alone cannot replicate. The application launched meeting Web Content Accessibility Guidelines (WCAG) 2.1 AA standards, with interaction patterns validated by someone who depended on them.

## What I took from this project

The IVFCRYO project clarified something I'd believed but not fully tested: accessibility work is most effective when people with disabilities are part of the design process rather than subjects of a review at the end. The difference in outcome is significant, and the process is more straightforward than most teams assume.

The project also reinforced that digitizing a manual process is only valuable if the replacement is genuinely easier to use than what it replaced. A shipping application that required training or staff assistance would have failed the brief, regardless of how technically sound the implementation was. The measure of success was whether clients could use it confidently on their own.
