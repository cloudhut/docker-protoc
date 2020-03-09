import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    core.info('Starting buf action')

    const runLint = core.getInput('run-linter') == 'true' ? true : false
    if (runLint) {
      core.startGroup('run linter')
      const code = await exec.exec('../bin/buf', ['check', 'lint'])
      if (code !== 0) {
        throw new Error(`linter exited with code ${code}`)
      }
      core.endGroup()
    }

    core.info('Successfully ran buf')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
