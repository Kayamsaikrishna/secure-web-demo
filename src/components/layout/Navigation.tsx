"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useTranslation } from 'react-i18next';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const publicNavigation = [
    { name: t('navigation.home'), href: "/" },
    { name: t('navigation.all_loans'), href: "/loans" },
    { name: t('navigation.emi_calculator'), href: "/loans/calculator" },
    { name: t('navigation.about'), href: "/about" },
    { name: t('navigation.contact'), href: "/contact" },
  ];

  const userNavigation = [
    { name: t('navigation.dashboard'), href: "/dashboard" },
    { name: t('navigation.apply_for_loan'), href: "/loans/apply" },
    { name: t('navigation.my_applications'), href: "/loans/my-applications" },
    { name: t('navigation.kyc_verification'), href: "/kyc" },
    { name: t('navigation.emi_calculator'), href: "/loans/calculator" },
    { name: t('navigation.profile'), href: "/profile" },
  ];

  const adminNavigation = [
    { name: t('navigation.admin_dashboard'), href: "/admin" },
    { name: t('navigation.applications'), href: "/admin/applications" },
    { name: t('navigation.users'), href: "/admin/users" },
    { name: t('navigation.analytics'), href: "/admin/analytics" },
    { name: t('navigation.reports'), href: "/admin/reports" },
    { name: t('navigation.admin_profile'), href: "/admin/profile" },
    { name: t('navigation.setup'), href: "/admin/setup" },
  ];

  const getNavigation = () => {
    if (!session) return publicNavigation;
    return (session?.user as any)?.role === "ADMIN" ? adminNavigation : userNavigation;
  };

  const navigation = getNavigation();

  if (!session) {
    // Public navigation for non-logged-in users
    return (
      <Disclosure as="nav" className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center text-white font-bold text-xl">
                      <Logo size="sm" className="mr-3" />
                      <span className="text-yellow-300">Fin-Agentix</span>
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {publicNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathname === item.href
                              ? "bg-blue-700 text-white"
                              : "text-white hover:bg-blue-500 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center space-x-4">
                    <LanguageSelector />
                    <Link
                      href="/login"
                      className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {t('navigation.login')}
                    </Link>
                    <Link
                      href="/register"
                      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      {t('navigation.apply_now')}
                    </Link>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button 
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                    suppressHydrationWarning
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {publicNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-blue-700 text-white"
                        : "text-white hover:bg-blue-500",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-blue-700 pt-4 pb-3 space-y-2">
                  <div className="px-3 py-2">
                    <LanguageSelector />
                  </div>
                  <Link
                    href="/login"
                    className="block text-white hover:bg-blue-500 rounded-md px-3 py-2 text-base font-medium"
                  >
                    {t('navigation.login')}
                  </Link>
                  <Link
                    href="/register"
                    className="block bg-yellow-400 text-gray-900 hover:bg-yellow-300 rounded-md px-3 py-2 text-base font-semibold"
                  >
                    {t('navigation.apply_now')}
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }

  // Authenticated user navigation
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center text-white font-bold text-xl">
                    <Logo size="sm" className="mr-3" />
                    <span className="text-yellow-300">Fin-Agentix</span>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "bg-blue-700 text-white"
                            : "text-white hover:bg-blue-500 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6 space-x-4">
                  <LanguageSelector />
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-blue-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 hover:bg-blue-500 transition-colors duration-200">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold">
                          {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase()}
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">
                          <div className="font-medium">{session?.user?.name || 'User'}</div>
                          <div className="text-gray-500">{session?.user?.email}</div>
                          <div className="text-xs text-blue-600 font-medium">
                            {(session?.user as any)?.role === 'ADMIN' ? 'Administrator' : 'Customer'}
                          </div>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={(session?.user as any)?.role === 'ADMIN' ? "/admin/profile" : "/profile"}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {t('navigation.profile_settings')}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => signOut({ callbackUrl: '/' })}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              {t('navigation.sign_out')}
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button 
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  suppressHydrationWarning
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-blue-700 text-white"
                      : "text-white hover:bg-blue-500",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-blue-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold">
                    {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase()}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {session?.user?.name || 'User'}
                  </div>
                  <div className="text-sm font-medium leading-none text-blue-200">
                    {session?.user?.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <div className="px-3 py-2">
                  <LanguageSelector />
                </div>
                <Link
                  href={(session?.user as any)?.role === 'ADMIN' ? "/admin/profile" : "/profile"}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                >
                  {t('navigation.profile_settings')}
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500 w-full text-left"
                >
                  {t('navigation.sign_out')}
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}