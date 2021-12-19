import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavItem } from './NavItem';
import { NavSection } from './NavSection';

// create sidebar component
export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
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
    </Box>
  );
}
