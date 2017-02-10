const defaultShell = require('spawn-default-shell')
const spawn = require('spawn-command')

go(defaultShell.spawn, 'spawn-default-shell').then(() => {
  go(spawn, 'spawn-command')
})

function go(spawnerFn, label) {
  console.log(`\n\n${label}\n`)
  const child = spawnerFn('./log-node-version.js')
  return new Promise(resolve => {
    child.stdout.on('data', (data) => {
      console.log(`${label}: stdout: ${data}`)
    })
    
    child.stderr.on('data', (data) => {
      console.log(`${label}: stderr: ${data}`)
    })
    
    child.on('close', (code) => {
      console.log(`${label}: child process exited with code ${code}`)
      resolve()
    })
  })
}
