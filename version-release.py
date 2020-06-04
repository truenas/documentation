#!/usr/bin/env python3

import subprocess
import git
import sys

# This is to be determined by meeting with Jaron and team on 06/05.
# WEB_SERVER_HOST =
# WEB_SERVER_DIR =

REPO_CLONE_URL = "https://github.com/freenas/documentation.git"
LOCAL_DIR_FOR_REPO = "/tmp/documentation-repo"
DEFAULT_BRANCH = "master"

# Check to see if repo has already been downloaded.
try:
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

# try:
#     os.chdir(LOCAL_DIR_FOR_REPO)
# except Exception as e:
#     print(f'Failed to chdir() into {LOCAL_DIR_FOR_REPO} with error: {e}')

# Build docs with Hugo and check for hugo errors.
HUGO_COMMAND = ['hugo', '-t', 'docsy', '-d', 'public', '--gc', '--minify', '--cleanDestinationDir']
proc = subprocess.run(
    HUGO_COMMAND,
    cwd=LOCAL_DIR_FOR_REPO,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    shell=True)

if proc.stdout:
    msg = proc.stdout.decode()
    if 'POSTCSS: failed to transform' in msg:
        print(f'Build failed with error: {msg}\
        The correct npm packages may not be installed.\n\
        Ensure npm is installed and run:\n\
        \t sudo npm install -D --save autoprefixer\n\
        \t sudo npm install -D --save postcss-cli')
    elif 'pages paginator pages non-page files' in msg:
        print(msg)
        BUILT_FILES_DIR = LOCAL_DIR_FOR_REPO + '/public'
        print(f'Success. The built files can be found in {BUILT_FILES_DIR}')
    else:
        print(msg)