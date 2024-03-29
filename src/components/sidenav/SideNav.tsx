'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';
import { NavItem } from '../layouts/AppLayout';

export const SideNav = ({
  mainNavItems,
  projectNavItems,
}: {
  mainNavItems: NavItem[];
  projectNavItems: NavItem[];
}) => {
  const pathname = usePathname();
  return (
    <div className="hidden xl:block sticky top-24 w-[300px] shrink-0 h-max bg-card py-8 rounded-md border text-card-foreground shadow-lg">
      <nav className="w-full">
        {mainNavItems.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: isActive ? 'default' : 'ghost',
                  size: 'sm',
                }),
                'w-full py-6 space-x-4',
                isActive
                  ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'
                  : null
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="w-full">{link.title}</span>
            </Link>
          );
        })}
        <Separator className="my-2" />
        {projectNavItems.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: isActive ? 'default' : 'ghost',
                  size: 'sm',
                }),
                'w-full py-6 space-x-4',
                isActive
                  ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'
                  : null
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="w-full">{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
