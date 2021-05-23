/// <reference types="next" />
/// <reference types="next/types/global" />

type PageAdditionalProps = {
  layout?: import('react').ComponentType
  pageTitle?: string
}

declare type AppProps =
  import('next/dist/next-server/lib/router/router').AppProps & {
    Component: React.ComponentType & PageAdditionalProps
  }

// eslint-disable-next-line @typescript-eslint/ban-types
declare type NextPage<P = {}, IP = P> = import('next').NextPage<P, IP> &
  PageAdditionalProps
