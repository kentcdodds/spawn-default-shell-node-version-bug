# spawn-default-shell-node-version-bug

I think that `spawn-default-shell` has a bug where it loads a shell that doesn't have the right version of node.

I suggest using `spawn-command` instead.

I've only been able to reproduce this on travis-ci.

