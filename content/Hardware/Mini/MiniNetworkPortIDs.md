---
title: "Mini Network Port IDs"
weight: 15
---

{{< toc >}}

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

The expandable boxes below contain tables that list the default SCALE identification for Mini systems and any add-on networking cards qualified by iXsystems for use with Mini systems.

## Mini E+ and Mini X

{{< expand "Mini E+ (16G and 32G RAM)" "v" >}}
| NIC            | Identification   |
|----------------|------------------|
| Integrated     | Port 0: enp4s0f0 |
|                | Port 1: enp4s0f1 |
|                | Port 2: enp6s0f0 |
|                | Port 3: enp6s0f0 |
{{< /expand >}}

{{< expand "Mini X (16G and 32G RAM)" "v" >}}
| NIC            | Identification   |
|----------------|------------------|
| Integrated     | Port 0: enp3s0f0 |
|                | Port 1: enp3s0f1 |
|                | Port 2: enp5s0f0 |
|                | Port 3: enp5s0f1 |
{{< /expand >}}

## X+, XL+, and Mini R

{{< expand "X+, XL+, and Mini R (32G and 64G RAM)" "v" >}}
| NIC          | Identification     |
|--------------|--------------------|
| Integrated   | Port 0: eno1       |
|              | Port 1: eno2       |
| Chelsio T520 | Port 0: enp2s0f4   |
|              | Port 1: enp2s0f4d1 |
{{< /expand >}}