# Vale Testing File

This file tests all three Vale goals:

## Goal 1: Vale Integration Test
This content should trigger Vale to comment on the PR.

## Goal 2: Brand Terms Test
- TrueNAS is our main product
- iXsystems is our company name
- These shouldn't be flagged as spelling errors

## Goal 3: Changed Files Only Test
Since this is the only file we're adding, Vale should only scan this file and not the entire repository.

## Contractions Test
These contractions should be flagged:
- We're testing the system
- It's working properly
- They're very helpful
- You can't do that

These full forms should be accepted:
- We are testing the system
- It is working properly  
- They are very helpful
- You cannot do that