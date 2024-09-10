'use client'

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { GearIcon, MixerVerticalIcon } from '@radix-ui/react-icons'

import { Session } from 'next-auth'
import { UserDropdown } from './user-dropdown'

type MainSidebarProps = {
  user: Session['user'] | undefined
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathanme = usePathname()

  const isActive = (path: string) => {
    return pathanme === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <>SOT</>
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app" active={isActive('/app')}>
              <GearIcon className="w-3 h-3 mr-3" />
              OS
            </SidebarNavLink>
            <SidebarNavLink href="/app/settings">
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropdown user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}