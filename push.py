import os, sys

os.system('git pull origin master')
os.system('git add --all')
os.system('git commit -m "some message"')
os.system('git push -u origin master')

print(sys.argv[1])
