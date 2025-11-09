
#!/bin/bash
# Quick push script for EZ Labs Front-End Intern Test
# Usage: bash push_setup.sh

git init
git add .
git commit -m "Initial commit - EZ Labs Front-End Intern Test"
git branch -M main
git remote add origin https://github.com/divyanshupandeyy/frontend-intern-test.git
git push -u origin main
