import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavItem } from './NavItem';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavItem icon={RiDashboardLine}>Dashboard</NavItem>
        <NavItem icon={RiContactsLine}>Usuários</NavItem>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavItem icon={RiInputMethodLine}>Formulários</NavItem>
        <NavItem icon={RiGitMergeLine}>Automação</NavItem>
      </NavSection>
    </Stack>
  );
}
