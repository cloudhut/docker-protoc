import core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.info('Starting buf action')

    const runLint = core.getInput('run-linter') == 'true' ? true : false
    if (runLint) {
      core.info('Running linter')
    }

    core.info('Successfully ran buf')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
