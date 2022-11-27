#!/bin/bash


#######################################
############### Utils #################
#######################################

green=$(tput setaf 2)
red=$(tput setaf 1)
reset=$(tput sgr0)


#######################################
############# Variables ###############
#######################################

project_name=$(basename "$(git rev-parse --show-toplevel)")
files_to_update="**"
workflow_file=".github/workflows/main.yml"
main_branch=$(git symbolic-ref refs/remotes/origin/HEAD | awk -F/ '{print $NF}')

#######################################
############## Script #################
#######################################

# SETUP

echo "-------------------------------------------------------"

echo "Cleaning your node_modules ..."
rm -rf node_modules

echo "-------------------------------------------------------"

echo "Fetching info from github repository ..."
echo "Creating new project for : ${green}$project_name${reset}"

for file in $files_to_update; do
    if sed -i "s/template-solidjs/$project_name/" "$file" 2>/dev/null
    then echo "$file ${green}OK${reset}"
    else echo "$file ${red}No changes${reset}"
    fi
done

echo "-------------------------------------------------------"

echo "Setting up CI/CD ..."
  if sed -i "s/MAIN_BRANCH/$main_branch/" $workflow_file
    then echo "CI : ${green}SETUP${reset}"
    else echo "CI : ${red}FAILED${reset}"
  fi