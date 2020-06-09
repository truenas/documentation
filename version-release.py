import subprocess
import git
import sys

#WEB_SERVER_HOST = 'docs.ixsystems.com'
WEB_SERVER_DIR = '/var/www/html/docs1/archive'
WEB_SERVER_USER = 'docs'
REPO_CLONE_URL = 'https://github.com/freenas/documentation.git'
USER_HOME_DIR = '/home/docs'
LOCAL_DIR_FOR_REPO = f'{USER_HOME_DIR}/documentation-repo'
DEFAULT_REPO_BRANCH = 'master'


# Check to see if repo has already been downloaded.
try:
    print(f'Cloning {REPO_CLONE_URL} into {LOCAL_DIR_FOR_REPO} ...')
    repo = git.Repo.clone_from(REPO_CLONE_URL, LOCAL_DIR_FOR_REPO)
except git.exc.GitCommandError:
    print(f'{LOCAL_DIR_FOR_REPO} already exists. Skipping clone.')
    repo = git.Repo(LOCAL_DIR_FOR_REPO)

existing_release_branch = input(f'Enter the name of the release version branch: ')

# pull master, checkout branch if it exist, and pull origin master 
try:
    print(f'Checking out branch...')
    repo.git.checkout(DEFAULT_REPO_BRANCH)
    repo.git.pull()
    repo.git.checkout(existing_release_branch)
    repo.git.pull('origin', 'master')
except git.exc.GitCommandError:
    print(f'"{existing_release_branch}" does not exist.')
    print(f'Please create the release branch at',
    f'https://github.com/freenas/documentation first.')
    sys.exit(1)

# declare hugo build dir based off branch name.
HUGO_DIR = f'/tmp/{existing_release_branch}'

print('Building docs with hugo...')

# Build docs with Hugo.
HUGO_COMMAND = ['hugo', '-d', HUGO_DIR]
hugo_proc = subprocess.run(
    HUGO_COMMAND,
    cwd=LOCAL_DIR_FOR_REPO,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT)

# Check for hugo errors.
if hugo_proc.stdout:
    msg = hugo_proc.stdout.decode()
    if 'POSTCSS: failed to transform' in msg:
        print(f'Build failed with error: {msg}',
        f'The correct npm packages may not be installed.\n',
        f'cd into {LOCAL_DIR_FOR_REPO},',
        f'ensure npm is installed, and run:\n',
        f'\tsudo npm install -D --save autoprefixer\n',
        f'\tsudo npm install -D --save postcss-cli')
        sys.exit(1)
    elif 'pages' or 'paginator pages' in msg:
        print(msg)
        BUILT_FILES_DIR = HUGO_DIR
        print(f'Success. The built files can be found in {BUILT_FILES_DIR}')
    else:
        print(msg)
        sys.exit(1)


print(f'Copying {BUILT_FILES_DIR} to {WEB_SERVER_DIR}.')

# Copy files from hugo output to the hosting dir on server.
CP_COMMAND = ['cp', '-r', '-u', BUILT_FILES_DIR, f'{WEB_SERVER_DIR}/']
cp_proc = subprocess.run(
        CP_COMMAND,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE)

if cp_proc.stdout:
    print(cp_proc.stdout.decode())
elif cp_proc.stderr:
    print(cp_proc.stderr.decode())
