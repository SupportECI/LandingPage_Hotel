'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  Disclosure,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, SparklesIcon, FireIcon, HomeIcon } from '@heroicons/react/24/outline'
import '../navbar-animations.css'

// Icons for each service
const habitacionesIcon = {
  'Estándar': HomeIcon,
  'Suite': SparklesIcon,
  'Deluxe': SparklesIcon,
}

const serviciosIcon = {
  'Spa': SparklesIcon,
  'Restaurante': FireIcon,
  'Piscina': SparklesIcon,
}

// Enhanced navigation with dropdowns
const navigation = [
  { name: 'Inicio', href: '#' },
  {
    name: 'Habitaciones',
    children: [
      { name: 'Estándar', href: '#estandar' },
      { name: 'Suite', href: '#suite' },
      { name: 'Deluxe', href: '#deluxe' },
    ],
  },
  {
    name: 'Servicios',
    children: [
      { name: 'Spa', href: '#spa' },
      { name: 'Restaurante', href: '#restaurante' },
      { name: 'Piscina', href: '#piscina' },
    ],
  },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Palmeyras Inn</span>
            <img
              src="./src/assets/Palmeyras_1.svg"
              alt="Palmeyras Inn logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* desktop links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <Popover key={item.name} className="relative">
                <Popover.Button className="group flex items-center gap-x-1 text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                  {item.name}
                  <ChevronDownIcon
                    className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Popover.Panel className="absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transform transition-all duration-300 ease-out origin-top data-closed:scale-95 data-closed:opacity-0 data-closed:translate-y-1 data-open:scale-100 data-open:opacity-100 data-open:translate-y-0 backdrop-blur-sm popover-premium-shadow" style={{
                  animation: 'popoverGhostIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                }}>
                  <div className="p-4">
                    <div className="mb-3 pb-3 border-b border-gray-200">
                      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{item.name}</p>
                    </div>
                    {item.children.map((sub, idx) => {
                      const Icon = item.name === 'Habitaciones' ? habitacionesIcon[sub.name] : serviciosIcon[sub.name]
                      return (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-linear-to-r hover:from-indigo-50 hover:to-transparent hover:text-indigo-600 transition-all duration-200 disclosure-item"
                          style={{
                            animationDelay: `${idx * 0.08}s`
                          }}
                        >
                          {Icon && <Icon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />}
                          <span>{sub.name}</span>
                        </a>
                      )
                    })}
                  </div>
                </Popover.Panel>
              </Popover>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300" />
              </a>
            )
          )}
        </div>

        {/* Ayuda button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#Ayuda"
            className="inline-block rounded-lg border-2 border-gray-900 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-all duration-300"
          >
            ¿Necesitas Ayuda?
          </a>
        </div>
      </nav>

      {/* mobile dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30 transition-opacity" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 transform transition-transform duration-300 ease-in-out data-[headlessui-state=open]:translate-x-0 data-[headlessui-state=closed]:translate-x-full">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Palmeyras Inn</span>
              <img
                src="./src/assets/Palmeyras_1.svg"
                alt="Palmeyras Inn logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) =>
              item.children ? (
                <Disclosure key={item.name} as="div">
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-3 px-4 text-base font-medium text-gray-900 hover:bg-linear-to-r hover:from-indigo-50 hover:to-transparent hover:text-indigo-600 transition-all duration-200 ui-open:text-indigo-600 ui-open:bg-indigo-50">
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 transition-transform duration-300 ui-open:rotate-180 ui-open:text-indigo-600" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1 px-4 py-2 transition-all duration-200">
                    {item.children.map((sub) => {
                      const Icon = item.name === 'Habitaciones' ? habitacionesIcon[sub.name] : serviciosIcon[sub.name]
                      return (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 rounded-lg py-2 pl-6 pr-4 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          {Icon && <Icon className="h-4 w-4 text-gray-400 hover:text-indigo-600 transition-colors" />}
                          {sub.name}
                        </a>
                      )
                    })}
                  </Disclosure.Panel>
                </Disclosure>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-linear-to-r hover:from-indigo-50 hover:to-transparent hover:text-indigo-600 transition-all duration-200"
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href="#soporte"
              className="block rounded-lg border-2 border-gray-900 px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              ¿Necesitas Ayuda?
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
