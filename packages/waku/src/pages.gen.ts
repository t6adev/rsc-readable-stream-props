// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_PatternA_getConfig } from './pages/pattern-a';
// prettier-ignore
import type { getConfig as File_PatternB_getConfig } from './pages/pattern-b';
// prettier-ignore
import type { getConfig as File_PatternC_getConfig } from './pages/pattern-c';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/pattern-a' } & GetConfigResponse<typeof File_PatternA_getConfig>)
| ({ path: '/pattern-b' } & GetConfigResponse<typeof File_PatternB_getConfig>)
| ({ path: '/pattern-c' } & GetConfigResponse<typeof File_PatternC_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
