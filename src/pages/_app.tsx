import Router from 'next/router';
import NProgress from 'nprogress';
import { AvatarProvider } from '../context/AvatarContext';
import { UserProvider } from '../context/UserContext';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AvatarProvider>
        <Component {...pageProps} />
      </AvatarProvider>
    </UserProvider>
  )
}

