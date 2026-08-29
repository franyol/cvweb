import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type Navigation = {
  label?: string;
  items: NavigationItem[];
};

type SidebarNavigationProps = {
  navigation: Navigation;
};

export const SidebarNavigation = ({
  navigation,
}: SidebarNavigationProps) => {
  return (
    <SidebarGroup>
      {navigation.label && (
        <SidebarGroupLabel>
          {navigation.label}
        </SidebarGroupLabel>
      )}

      <SidebarGroupContent>
        <SidebarMenu>
          {navigation.items.map((item) => (
            <NavigationItem
              key={item.href}
              item={item}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const NavigationItem = ({ item }: { item: NavigationItem }) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton render={<a href={item.href} />}>
        {item.label}
      </SidebarMenuButton>

      {item.children && item.children.length > 0 && (
        <SidebarMenuSub>
          {item.children.map((child) => (
            <SidebarMenuSubItem key={child.href}>
              <SidebarMenuSubButton render={<a href={child.href} />}>
                {child.label}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
};
