#!/bin/bash


#######################################
############# Variables ###############
#######################################

project_name=$(basename `git rev-parse --show-toplevel`)

green=`tput setaf 2`
reset=`tput sgr0`
files_to_update="**"

#######################################
############## Script #################
#######################################

echo "Fetching info from github repository"

echo "Creating new project for :
${green}$project_name${reset}"

for file in $files_to_update; do
    if sed -i "s/template-solidjs/$project_name/" $file
    then echo "Changes in $file are made"
    else echo "Changes in $file could not been made"
    fi
done