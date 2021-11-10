import { CronJob } from 'cron'
import { exec } from 'child_process'

const prefix = process.env.NODE_ENV === 'test' ? 'yarn' : 'npx'

export const clearCache = new CronJob('0 10 * * * *', async () => {
  console.log('clearing cache')

  await execCommand(`${prefix} typeorm cache:clear`)

  console.log('successfully cleared cache')
}, null, true, 'America/Bahia')

async function execCommand (command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (err, std) => err ? reject(err) : resolve(std))
  })
}
