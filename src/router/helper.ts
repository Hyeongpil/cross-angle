export const lazyLoadPage = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    `@/views/${page}.vue`
  );

export const preFetchLoadPage = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    /* webpackPrefetch: true */
    `@/views/${page}.vue`
  );
