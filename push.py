#!/usr/bin/env python

import os, sys

os.system('git pull origin master')
os.system('git add --all')
os.system('git commit -m "' + " ".join(sys.argv[1:]) + '"')
os.system('git push -u origin master')

print(sys.argv[1])
