import subprocess
import git
import sys

# WEB_SERVER_HOST = 'docs.ixsystems.com'
WEB_SERVER_DIR = '/var/www/html/docs1/archive'
WEB_SERVER_USER = 'docs'
REPO_CLONE_URL = 'https://github.com/freenas/documentation.git'
USER_HOME_DIR = '/home/docs'
LOCAL_DIR_FOR_REPO = f'{USER_HOME_DIR}/documentation-repo'
DEFAULT_REPO_BRANCH = 'master'


def verify_argv():

    """
    Make sure sys.argv[1] is provided
    """

    branch = None
    if sys.argv[1]:
        branch = sys.argv[1]

    return branch


def check_existing_repo():

    """
    This checks to see if repo has already been downloaded.
    """

    repo = None
    try:
        print(f'Cloning {REPO_CLONE_URL} into {LOCAL_DIR_FOR_REPO} ...')
        repo = git.Repo.clone_from(REPO_CLONE_URL, LOCAL_DIR_FOR_REPO)
    except git.exc.GitCommandError:
        print(f'{LOCAL_DIR_FOR_REPO} already exists. Skipping clone.')
        repo = git.Repo(LOCAL_DIR_FOR_REPO)

    return repo


def check_out_release_branch(repo, branch):

    """
    pull master branch
    checkout branch if it exists
    pull origin master
    """

    try:
        print('Checking out branch...')
        repo.git.checkout(DEFAULT_REPO_BRANCH)
        repo.git.pull()
        repo.git.checkout(branch)
        repo.git.pull('origin', 'master')
    except git.exc.GitCommandError:
        print(f'"{branch}" does not exist.')
        print(
            'Please create the release branch at',
            'https://github.com/freenas/documentation first.'
        )
        sys.exit(1)


def hugo_build(branch):

    """
    Build site with Hugo
    """

    print('Building docs with hugo...')

    # Build docs with Hugo.
    hugo_cmd = ['hugo', '-d', branch]
    hugo_proc = subprocess.run(
        hugo_cmd,
        cwd=LOCAL_DIR_FOR_REPO,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    # Check for hugo errors.
    if hugo_proc.stdout:
        msg = hugo_proc.stdout.decode()
        if 'POSTCSS: failed to transform' in msg:
            print(
                f'Build failed with error: {msg}',
                'The correct npm packages may not be installed.\n',
                f'cd into {LOCAL_DIR_FOR_REPO},',
                'ensure npm is installed, and run:\n',
                '\tsudo npm install -D --save autoprefixer\n',
                '\tsudo npm install -D --save postcss-cli'
            )
            sys.exit(1)
        elif 'pages' and 'paginator pages' in msg:
            print(msg)
            print(
                'Success.'
                f'The built files can be found in {branch}'
            )
        else:
            print(msg)
            sys.exit(1)


def copy_built_files(branch):

    """
    This function copies the built files to the
    NGINX configured directory.
    """

    print(f'Copying {branch} to {WEB_SERVER_DIR}.')

    # Copy files from hugo output to the hosting dir on server.
    cp_cmd = ['cp', '-r', '-u', branch, f'{WEB_SERVER_DIR}/']
    cp_proc = subprocess.run(
        cp_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        )

    if cp_proc.stdout:
        print(cp_proc.stdout.decode())
    elif cp_proc.stderr:
        print(cp_proc.stderr.decode())


if __name__ == '__main__':

    branch = verify_argv()
    repo = check_existing_repo()

    if branch is None:
        print('FATAL: Branch not provided!')
        sys.exit(1)

    if repo is None:
        print('FATAL: Repository not found!')
        sys.exit(1)

    check_out_release_branch(repo, branch)
    hugo_build(branch)
    copy_built_files(branch)
