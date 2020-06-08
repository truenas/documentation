#!/usr/bin/env python3

import subprocess
import git
import sys

WEB_SERVER_HOST = "docs.ixsystems.com"
WEB_SERVER_DIR = "/var/www/html/docs1/archive/"
WEB_SERVER_USER = "docs"
REPO_CLONE_URL = "https://github.com/freenas/documentation.git"
LOCAL_DIR_FOR_REPO = "/tmp/documentation-repo"
#DEFAULT_BRANCH = "master"

# Check to see if repo has already been downloaded.
try:
    print(f'Cloning {REPO_CLONE_URL} into {LOCAL_DIR_FOR_REPO} ...')
    repo = git.Repo.clone_from(REPO_CLONE_URL, LOCAL_DIR_FOR_REPO)
except git.exc.GitCommandError:
    print(f'{LOCAL_DIR_FOR_REPO} already exists. Skipping clone.')
    repo = git.Repo(LOCAL_DIR_FOR_REPO)

existing_release_branch = input(f'Enter the name of the release version branch: ')

# Check to see if branch exists, create one if not.
try:
    print(f'Checking out branch...')
    repo.git.checkout(existing_release_branch)
except git.exc.GitCommandError:
    create_branch = ''
    while create_branch not in ['y', 'n']:
        create_branch = input('Branch does not exist. Would you like to create a new release branch? (y/n): ')
        if create_branch.lower() == 'y':
            new_release_branch = input('Name the new release branch?: ')
            repo.git.checkout('-b', new_release_branch)
        elif create_branch.lower() == 'n':
            sys.exit(1)
        else:
            print('Invalid choice. Try again.')

print('Building docs with hugo...')

# declare hugo build dir based off branch name.
if existing_release_branch:
    HUGO_DIR = existing_release_branch
elif new_release_branch:
    HUGO_DIR = new_release_branch

# Build docs with Hugo and check for hugo errors.
HUGO_COMMAND = ['hugo', '-t', 'docsy', '-d', f'{HUGO_DIR}', '--gc', '--minify', '--cleanDestinationDir']
hugo_proc = subprocess.run(
    HUGO_COMMAND,
    cwd=LOCAL_DIR_FOR_REPO,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    shell=True)

if hugo_proc.stdout:
    msg = hugo_proc.stdout.decode()
    if 'POSTCSS: failed to transform' in msg:
        print(f'Build failed with error: {msg}',
        f'The correct npm packages may not be installed.\n',
        f'cd into {LOCAL_DIR_FOR_REPO},',
        f'ensure npm is installed, and run:\n',
        f'\tsudo npm install -D --save autoprefixer\n',
        f'\tsudo npm install -D --save postcss-cli')
    elif 'pages' or 'paginator pages' in msg:
        print(msg)
        BUILT_FILES_DIR = LOCAL_DIR_FOR_REPO + '/' + HUGO_DIR
        print(f'Success. The built files can be found in {BUILT_FILES_DIR}')
    else:
        print(msg)

# rsync the directory to docs.ixsystems.com
# RYSYNC_COMMAND = ['rsync', '-r', '-v', '-z', '-a', f'{BUILT_FILES_DIR}', WEB_SERVER_USER, '@', WEB_SERVER_HOST, ':', f'{WEB_SERVER_DIR}/{HUGO_DIR}']
# rsync_proc = subprocess.run(RYSYNC_COMMAND)