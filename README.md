# node-lab

**Starter project for interactive computing with Node.js and Project Jupyter**

- [FAQ](#faq)
- [System Requirements](#system-requirements)
- [Getting Started](#getting-started)

## FAQ

### What is this repository?

*node-lab* is a starter project, created to simplify configuration
and dependency management for interactive computing with
[Node.js](https://nodejs.org) and
[Project Jupyter](http://jupyter.org/documentation).
After cloning the project, installing package dependencies, and running a
configuration script, you will be set up to launch a Jupyter Notebook
that will allow you to run ECMAScript/JavaScript code in an interactive Node.js
kernel session.

### What is a Jupyter Notebook?

From the project website:

> The Jupyter Notebook is an open-source web application that allows you to
> create and share documents that contain live code, equations, visualizations
> and narrative text. Uses include: data cleaning and transformation, numerical
> simulation, statistical modeling, data visualization, machine learning, and
> much more.

Notebooks use a portable JSON-based format (`.ipynb`) to store text, code, and
other data, allowing users to reproduce and share interactive sessions. See
[here](https://nbviewer.jupyter.org)
for some examples of what you can do with Jupyter notebooks.

### What is a Jupyter kernel?

The core of Project Jupyter is a messaging protocol that allows the Notebook
application to communicate with kernels running in the background. Kernels are
available for
[many different programming languages](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels),
though they exist in varying states of development. This starter project
includes @n-riesco's
[IJavascript](https://github.com/n-riesco/ijavascript)
kernel its
[npm devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
and uses a configuration script to make it available to Jupyter notebooks
running in the same workspace.

### What is JupyterLab?

From the [documentation](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html):

> JupyterLab is the next-generation web-based user interface for Project
> Jupyter. JupyterLab enables you to work with documents and activities such as
> Jupyter notebooks, text editors, terminals, and custom components in a
> flexible, integrated, and extensible manner.

This starter project includes JupyterLab as a
[Pipenv](https://pipenv.readthedocs.io)
dependency. It runs locally in a browser window, has a beautiful, fast UI, and
provides everything you need for working with notebooks.

### How can I manage project dependencies when working with notebooks?

Node and Python dependencies must be managed separately. You can `npm install`
Node dependencies and `require` them in your notebooks. You can also manage
Python dependencies on a per-project basis using
[Pipenv](https://pipenv.readthedocs.io),
which is required to run the starter project.
Pipenv creates a local `Pipfile` and `Pipfile.lock` to track dependencies,
similar to npm's `package.json` and `package-lock.json`. You can
`pipenv install` Python packages and `pipenv run` them from the command line,
or `import` them in notebooks running a Python kernel.

---

## System requirements

[Node.js](https://nodejs.org),
[Python](https://docs.python.org), and
[Pipenv](https://pipenv.readthedocs.io)
must be installed on your machine and executable from the command line in order
to run the starter project in this repository. Recommended versions are
Node >= 10 and Python >= 3.7.

To find out what versions of Node and Python you have installed, run:

```bash
node -v
python --version
python3 --version
```

If you need to install or update Node and/or Python on your machine, or you run
into any problems when following the steps below, see
["Installing System Dependencies"](./reference/installing-system-dependencies.md).

If your versions are up to date, you will just need to install the Pipenv
package manager if it's not already part of your development toolchain. See the
documentation
[here](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)
and choose the installation option that makes the most sense for your
development environment.

---

## Getting Started

### Cloning the repository

To clone this starter project, navigate to the local directory where you want to
create your project and run:

```bash
git clone https://github.com/freemachines/node-lab.git
```

Before you start creating working in the project, you'll probably want to remove
the
[git remote](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
reference to this repository. To do that, `cd node-lab` to go into the project
directory then enter:

```bash
git remote rm origin
```

Now you're set to go!

### Setup

Once you have verified system requirements and cloned the repository to your
workspace, you will need to run a script to set up the IJavascript kernel to
work with Jupyter. This script installs the necessary Python and Node packages
and creates a data file for the kernel in the project's virtual environment:

```bash
npm run setup
```

After the setup is complete, you can test that the IJavaScript kernel is
available by entering:

```bash
npm run kernel:list
```

You should see a kernel named "ijavascript" in the output.

### Starting a kernel session

To start a kernel session in the console, enter:

```bash
npm run kernel:console
```

To start a JupyterLab session, enter:

```bash
npm run kernel:lab
```

Then use the launcher to open a new Node.js notebook.

> **Tip:** If you'd like your browser session to open to the more classic Jupyter Notebook
interface, use `npm run kernel:notebook` instead.

### Installing and using packages

Any Node packages you install with `npm install my-package` will be available
in the console or notebook with `require('my-package')`.

To install additional Python packages, use `pipenv install my-package`.

## Credit and Licensing Terms

### Software

The configuration script `kernel-init.js` carries no licensing restrictions and
is released into the public domain. See individual copyright and licensing
notices for dependencies included in the `package.json` and `Pipfile`.

### Documentation

Unless otherwise indicated,
authorship for documentation in this repository should be credited to
[Daniel C. Narey](https://github.com/danielnarey).
All original documentation in this repository is licensed under the following
terms:
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
