"use client";

import { Fragment, useEffect, useState } from "react";
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
  const { t, ready, i18n: i18nInstance } = useTranslation('common');
  const [isClient, setIsClient] = useState(false);
  const [hasTranslations, setHasTranslations] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if translations are loaded
    const checkTranslations = () => {
      // Check if i18n has the resources loaded
      const currentLang = i18nInstance.language?.split('-')[0] || 'en';
      if (i18nInstance && i18nInstance.hasResourceBundle && 
          i18nInstance.hasResourceBundle(currentLang, 'common')) {
        console.log(`Translations loaded for ${currentLang}`);
        setHasTranslations(true);
      } else {
        console.log(`Translations not yet loaded for ${currentLang}, retrying...`);
        // Listen for translations loaded event
        const handleTranslationsLoaded = () => {
          const currentLang = i18nInstance.language?.split('-')[0] || 'en';
          if (i18nInstance.hasResourceBundle && 
              i18nInstance.hasResourceBundle(currentLang, 'common')) {
            console.log(`Translations now loaded for ${currentLang}`);
            setHasTranslations(true);
          }
        };
        
        window.addEventListener('translationsLoaded', handleTranslationsLoaded);
        
        // Retry after a short delay
        setTimeout(checkTranslations, 100);
        
        // Cleanup
        return () => {
          window.removeEventListener('translationsLoaded', handleTranslationsLoaded);
        };
      }
    };
    
    checkTranslations();
    
    // Also listen for language changes
    const handleLanguageChanged = () => {
      const currentLang = i18nInstance.language?.split('-')[0] || 'en';
      console.log(`Language changed to ${currentLang}`);
      if (i18nInstance.hasResourceBundle && 
          i18nInstance.hasResourceBundle(currentLang, 'common')) {
        setHasTranslations(true);
      } else {
        // If language changed but translations not loaded, check again
        setTimeout(() => {
          const currentLang = i18nInstance.language?.split('-')[0] || 'en';
          if (i18nInstance.hasResourceBundle && 
              i18nInstance.hasResourceBundle(currentLang, 'common')) {
            setHasTranslations(true);
          }
        }, 200);
      }
    };
    
    i18nInstance.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChanged);
    };
  }, [i18nInstance]);

  // Show loading state while translations are loading
  if (!ready || !isClient || !hasTranslations) {
    return (
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center text-white font-bold text-xl">
                  <Logo size="sm" className="mr-3" />
                  <span className="text-yellow-300">Fin-Agentix</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Fallback for translation keys
  const translateWithFallback = (key: string, fallback: string) => {
    try {
      // Check if the key exists in the translation resources
      if (i18nInstance.exists && !i18nInstance.exists(key)) {
        console.warn(`Translation key not found: ${key}`);
        return fallback;
      }
      
      const translation = t(key);
      // If key equals translation, it means it's not found
      return translation === key ? fallback : translation;
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  const publicNavigation = [
    { name: translateWithFallback('navigation.home', 'Home'), href: "/" },
    { name: translateWithFallback('navigation.all_loans', 'All Loans'), href: "/loans" },
    { name: translateWithFallback('navigation.consumption_marketplace', 'Consumption Marketplace'), href: "/loans/marketplace" },
    { name: translateWithFallback('navigation.emi_calculator', 'EMI Calculator'), href: "/loans/calculator" },
    { name: translateWithFallback('navigation.about', 'About'), href: "/about" },
    { name: translateWithFallback('navigation.contact', 'Contact'), href: "/contact" },
  ];

  const userNavigation = [
    { name: translateWithFallback('navigation.dashboard', 'Dashboard'), href: "/dashboard" },
    { name: translateWithFallback('navigation.consumption_marketplace', 'Consumption Marketplace'), href: "/loans/marketplace" },
    { name: translateWithFallback('navigation.my_applications', 'My Applications'), href: "/loans/my-applications" },
    { name: translateWithFallback('navigation.kyc_verification', 'KYC Verification'), href: "/kyc" },
    { name: translateWithFallback('navigation.emi_calculator', 'EMI Calculator'), href: "/loans/calculator" },
    { name: translateWithFallback('navigation.profile', 'Profile'), href: "/profile" },
  ];

  const adminNavigation = [
    { name: translateWithFallback('navigation.admin_dashboard', 'Admin Dashboard'), href: "/admin" },
    { name: translateWithFallback('navigation.consumption_partners', 'Partners'), href: "/admin/partners" },
    { name: translateWithFallback('navigation.consumption_marketplace_admin', 'Marketplace'), href: "/admin/marketplace" },
    { name: translateWithFallback('navigation.consumption_loans', 'Consumption Loans'), href: "/admin/consumption" },
    { name: translateWithFallback('navigation.users', 'Users'), href: "/admin/users" },
    { name: translateWithFallback('navigation.analytics', 'Analytics'), href: "/admin/analytics" },
    { name: translateWithFallback('navigation.reports', 'Reports'), href: "/admin/reports" },
    { name: translateWithFallback('navigation.admin_profile', 'Admin Profile'), href: "/admin/profile" },
  ];

  const getNavigation = () => {
    if (!session) return publicNavigation;
    return (session?.user as { role: string })?.role === "ADMIN" ? adminNavigation : userNavigation;
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
                      {translateWithFallback('navigation.login', 'Login')}
                    </Link>
                    <Link
                      href="/register"
                      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      {translateWithFallback('navigation.apply_now', 'Apply Now')}
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
                    {translateWithFallback('navigation.login', 'Login')}
                  </Link>
                  <Link
                    href="/register"
                    className="block bg-yellow-400 text-gray-900 hover:bg-yellow-300 rounded-md px-3 py-2 text-base font-semibold"
                  >
                    {translateWithFallback('navigation.apply_now', 'Apply Now')}
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
                          {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase() || 'U'}
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
                          <div className="text-gray-500">{session?.user?.email || 'No email'}</div>
                          <div className="text-xs text-blue-600 font-medium">
                            {(session?.user as { role: string })?.role === 'ADMIN' ? 'Administrator' : 'Customer'}
                          </div>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={(session?.user as { role: string })?.role === 'ADMIN' ? "/admin/profile" : "/profile"}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {translateWithFallback('navigation.profile_settings', 'Profile Settings')}
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
                              {translateWithFallback('navigation.sign_out', 'Sign Out')}
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
                    {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {session?.user?.name || 'User'}
                  </div>
                  <div className="text-sm font-medium leading-none text-blue-200">
                    {session?.user?.email || 'No email'}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <div className="px-3 py-2">
                  <LanguageSelector />
                </div>
                <Link
                  href={(session?.user as { role: string })?.role === 'ADMIN' ? "/admin/profile" : "/profile"}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                >
                  {translateWithFallback('navigation.profile_settings', 'Profile Settings')}
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500 w-full text-left"
                >
                  {translateWithFallback('navigation.sign_out', 'Sign Out')}
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}