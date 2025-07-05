---
title: "Automating Tasks with Python: A Beginner's Guide"
author: "Darshan Pandey"
date: "2025-06-20"
tags: ["Python", "Automation", "Scripting"]
excerpt: "Explore how to automate repetitive tasks using Python. Learn practical scripts for renaming files, sending emails, and web scraping."
slug: "python-automation"
---

# 🤖 Automating Tasks with Python: A Beginner's Guide

Python is excellent for automation — from simple scripts to full-scale systems.

---

## 📁 Renaming Files in Bulk

```python
import os

def bulk_rename(folder, prefix):
    for count, filename in enumerate(os.listdir(folder)):
        ext = os.path.splitext(filename)[1]
        new_name = f"{prefix}_{count}{ext}"
        os.rename(os.path.join(folder, filename), os.path.join(folder, new_name))
