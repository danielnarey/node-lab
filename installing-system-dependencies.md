# Installing System Dependencies

To assist JS/Node developers who are less familiar with Python and Python
developers who are less familiar with JS/Node, I created the following
documentation for installing both sets of dependencies on MacOS 10.12+ using
Homebrew. If you need installation instructions for a different OS, I've
provided links to other resources [below](#installing-on-a-different-os).

## Using Homebrew on MacOS 10.12+

**To avoid issues you may encounter with file permissions on MacOS, I recommend
using
[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(package_management_software))
to install Node and Python dependencies on your local machine. See
[below](#installing-on-a-different-os)
for alternatives.**

*To install Node, Python, and Pipenv with Homebrew, open the Terminal
application on MacOS and follow the steps outlined below.*

### Step 1

First, check to see if you have Homebrew installed:

```bash
brew --version
```

If you get a version number, [skip to step 2](#step-2).

If you get an error, follow these instructions to install Homebrew:

*Before installing Homebrew, check to see if you have Apple Command Line Tools installed:*

```bash
xcode-select --version
```

*If you get a version number, you can proceed to installing Homebrew. If you get
an error, the system may prompt you to install Apple Command Line Tools, and you
can follow the system instructions from there. If you get an error but no
prompt, use this command to open a dialog box and follow the system
prompts:*

```bash
xcode-select -install
```

*Once you have verified that Apple Command Line Tools is installed, you can
download and install Homebrew with a single command:*

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

*When the installation is complete, you can continue to step 2.*

### Step 2

Use Homebrew to install or update Node, Python3, and Pipenv:

```bash
brew install node
brew install python
brew install pipenv
```

**Important:** When you install packages with Homebrew, the Bash shell that runs
in your MacOS Terminal won't automatically know where to find the executable
files you reference with shell commands like `node [file]` or `python [file]`.
To make sure these commands are always available when you open a new shell, you
can add a script to your user's Bash profile as follows:

```bash
echo 'export PATH=/usr/local/opt/python/libexec/bin:/usr/local/bin:/usr/local/sbin:$PATH' >> ~/.bash_profile
```

> **Tip:** To see what's in your Bash profile, run: `open ~/.bash_profile`

Continue on to step 3 to test that everything is installed correctly.

### Step 3

To test that package executables can be accessed from the command line, try the
following commands. You should get the latest installed version number in
response:

```bash
node -v
npm -v
npx -v
python --version
pip --version
pipenv --version
```

The `which` command can also be used to find out where executable files are
located. Homebrew-installed versions of Node and Pipenv should be located at
(`/usr/local/bin/[name]`); Homebrew-installed versions of Python3 and Pip should
be located at (`/usr/local/opt/python/libexec/bin/[name]`).

```bash
which node
which npm
which npx
which python
which pip
which pipenv
```

That's it! Go back to the [README](../README.md) to continue setup
for your project.

## Installing on a different OS

For Node.js, see the
[official Node.js documentation](https://nodejs.org/en/download/).

For Python3 and Pipenv, see
[this helpful guide](https://docs.python-guide.org/starting/installation/).

If you just need to install Pipenv, see
[here](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv).

:confused: *Help by submitting a pull request*
