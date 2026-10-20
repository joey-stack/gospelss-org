---
name: webhook-guard
description: Verifies cryptographic signatures, prevents replay attacks, and ensures idempotent processing for Stripe and Swish payment webhooks.
---

# Webhook Guard Skill

## Purpose
Ensures complete security and reliability for asynchronous financial notifications received from Stripe, Swish, or Resend.

## Core Protections
1. **Signature Verification**: Validate `stripe-signature` using the official Stripe SDK before parsing payloads.
2. **Replay Attack Defense**: Verify timestamp tolerance (reject events older than 300 seconds).
3. **Idempotent Handling**: Check database transaction status before updating recurring donor tiers or sending receipts to prevent duplicate execution.
4. **Failure Resiliency**: Return proper `200 OK` after processing or queue errors for automated retry handling.
