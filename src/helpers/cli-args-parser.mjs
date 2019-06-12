import minimist from 'minimist'

export function parseCliArgs(argv) {
    return minimist(argv.slice(2))
}
