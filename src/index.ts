import type { Plugin } from 'vite'

function tsconfigPaths():Plugin{
    let config 

    return {
        name:'vite-plugin-tsconfig-paths',
        enforce:'pre',
        configResolved(resolvedConfig){
            config = resolvedConfig
        }
    }
}

export default tsconfigPaths 