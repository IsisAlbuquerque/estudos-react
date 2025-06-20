#!/bin/bash

#Change Git name and email
#of the current user.

printf "\nEnter your new Git name: "
read NEW_GIT_NAME

printf "Enter your new Git email: "
read NEW_GIT_EMAIL

OLD_GIT_NAME=$(git config --list | head -n2 | tail -n1 | cut -d'=' -f2) 
OLD_GIT_EMAIL=$(git config --list | head -n1 | cut -d'=' -f2)

git config --global user.name "$NEW_GIT_NAME"
git config --global user.email "$NEW_GIT_EMAIL"

printf "\Changed to name %s."  "$NEW_GIT_NAME"
printf "\nChanged to email %s.\n\n" "$NEW_GIT_EMAIL"