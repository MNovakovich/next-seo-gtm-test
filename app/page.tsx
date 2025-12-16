import { redirect } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function Root() {
  const locale = useLocale();

  return redirect({ href: '/home', locale: locale });
}
