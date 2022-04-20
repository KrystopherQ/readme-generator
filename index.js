const inquirer = require('inquirer')
const fs = require('fs')


inquirer
    .prompt([{
            type: 'input',
            message: 'Project Title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your repo.',
            name: 'description',
        },

        {
            type: 'input',
            message: 'What are the installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List contributors if any',
            name: 'contributors',
        },
        {
            type: 'list',
            message: 'Select a license',
            name: 'license',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address',
            name: 'email',
        }
    ])