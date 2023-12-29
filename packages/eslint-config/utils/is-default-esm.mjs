import {hasConfig} from "./has-config.mjs";

export const isDefaultEsm = () => hasConfig([{type: 'package.json', property: ['type'], value: 'module'}])
