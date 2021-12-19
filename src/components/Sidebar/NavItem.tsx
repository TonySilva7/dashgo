import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavSectionProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}

export function NavItem({ children, icon, ...rest }: NavSectionProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
