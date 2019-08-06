## PHPStorm and Gulp 4 test


Using Node version 10.16.1

Running `gulp` will bump the version in `package.json`.  If viewing `package.json` in PHPStorm
the new version will not show.  If open `package.json` in another editor, the new version can
be seen.  

When testing I did the following:
* Ran `ls –time-style='+%d-%m-%Y %H:%M:%S' -l package.json` to get the exact modification time
* Ran `gulp` and the terminal/console shows it bumped up the version.
* PHPStorm editor would not show that change in version even after syncing, invalidating cache/restarting
* Ran `ls –time-style='+%d-%m-%Y %H:%M:%S' -l package.json` again and saw that the modification
time was still exactly the same as before running `gulp`.
* Ran `touch package.json` to alter the modification time and PHPStorm editor would then show
the changed version.

