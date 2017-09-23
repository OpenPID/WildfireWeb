Git Cheat Sheat
==

Notes:

* `$` signifies the command line prompt
* `<text>` is a place-holder where `text` describes what should go there

Create a branch and switch to it in one step:

    $ git checkout -b <branch name>

Add new files:

    $ git add <file name>

Commit changes to the current branch:

    $ git commit -am 'Type a short message here'

Push your changes to GitHub:

    $ git push origin <branch name>

Pull changes from the master branch:

    $ git checkout master
    $ git pull origin master

Merge master into your changes:

    $ git checkout <branch name>
    $ git merge master
