import { Portal, Select, useSelectContext } from "@ark-ui/react";
import { CaretDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import classNames from "classnames";
import { forwardRef } from "react";

import Button from "@/components/shared/Button";

import styles from "./styles.module.scss";

export interface Item {
  image?: string;
  label: string;
  value: string;
  disabled?: boolean;
}
export interface ItemCustom {
  image?: string;
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

interface SelectControlProps extends React.ComponentProps<typeof Select.Control> {
  variant?: "outlined" | "unstyled";
  hideClearButton?: boolean;
  hideIndicator?: boolean;
  triggerClassName?: string;
  triggerProps?: Omit<React.ComponentProps<typeof Select.Trigger>, "className" | "children">;
  invalid?: boolean;
}
const SelectControl: React.FC<SelectControlProps> = ({
  className,
  hideClearButton = false,
  hideIndicator = false,
  variant = "outlined",
  children,
  triggerClassName,
  triggerProps,
  invalid,
  ...props
}) => {
  const { value } = useSelectContext();
  return (
    <Select.Control
      {...props}
      className={classNames(
        styles.control,
        {
          [styles["control--outlined"]]: variant === "outlined",
        },
        className
      )}
    >
      <Select.Trigger
        {...triggerProps}
        className={classNames(styles.trigger, triggerClassName, {
          [styles["trigger--outlined"]]: variant === "outlined",
          [styles["trigger--invalid"]]: invalid,
        })}
      >
        {children}
        {!hideIndicator && (
          <Select.Indicator asChild>
            <CaretDownIcon size={14} weight="bold" className={styles.indicator} />
          </Select.Indicator>
        )}
      </Select.Trigger>
      {!!value.length && !hideClearButton && (
        <Select.ClearTrigger asChild>
          <Button variant="tertiary" className={styles.clear}>
            <XIcon size={14} weight="regular" />
          </Button>
        </Select.ClearTrigger>
      )}
    </Select.Control>
  );
};
SelectControl.displayName = "Select.Control";

type SelectValueTextProps = React.ComponentProps<typeof Select.ValueText>;
const SelectValueText: React.FC<SelectValueTextProps> = ({ className, ...restOfProps }) => {
  return <Select.ValueText {...restOfProps} className={classNames(styles["value-text"], className)} />;
};
SelectValueText.displayName = "Select.ValueText";

type SelectValueCustomProps = React.ComponentProps<typeof Select.ValueText>;
const SelectValueCustom: React.FC<SelectValueCustomProps> = ({ className, ...restOfProps }) => {
  const { selectedItems } = useSelectContext();
  return (
    <Select.ValueText {...restOfProps} className={classNames(styles["value-text"], className)} asChild>
      <div className={styles["value-text-container"]}>{selectedItems.map((item: Item) => item.label)}</div>
    </Select.ValueText>
  );
};
SelectValueCustom.displayName = "Select.ValueCustom";

interface SelectMenuProps extends React.ComponentProps<typeof Select.Content> {
  portalled?: boolean;
}
const SelectMenu: React.FC<SelectMenuProps> = ({ children, className, portalled = true, ...restOfProps }) => {
  const menu = (
    <Select.Positioner className={styles.positioner}>
      <Select.Content {...restOfProps} className={classNames(styles.content, className)}>
        {children}
      </Select.Content>
    </Select.Positioner>
  );

  return portalled ? <Portal>{menu}</Portal> : menu;
};
SelectMenu.displayName = "Select.Content";

interface SelectGroupProps extends React.ComponentProps<typeof Select.ItemGroup> {
  label?: string;
  isSection?: boolean;
}
const SelectGroup: React.FC<SelectGroupProps> = ({ label, isSection, children, ...props }) => {
  return (
    <Select.ItemGroup {...props}>
      {label && (
        <Select.ItemGroupLabel
          className={classNames(styles["group-label"], isSection && styles["section-label"])}
        >
          {label}
        </Select.ItemGroupLabel>
      )}
      {children}
    </Select.ItemGroup>
  );
};
SelectGroup.displayName = "Select.Group";

interface SelectItemsProps {
  items: Item[];
  className?: string;
}
const SelectItems: React.FC<SelectItemsProps> = ({ items, className }) => {
  return (
    <>
      {items.map((item) => (
        <Select.Item key={item.value} item={item} className={classNames(styles.item, className)}>
          <Select.ItemIndicator className={styles.indicator}>
            <div className={styles["indicator-icon"]}>
              <CheckIcon size={12} weight="bold" />
            </div>
          </Select.ItemIndicator>
          <Select.ItemText>{item.label}</Select.ItemText>
        </Select.Item>
      ))}
    </>
  );
};
SelectItems.displayName = "Select.Items";

interface SelectCustomItemsProps {
  items: ItemCustom[];
}
const SelectCustomItems: React.FC<SelectCustomItemsProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Select.Item key={item.value} item={item} className={styles.item}>
          <Select.ItemIndicator className={styles.indicator}>
            <CheckIcon size={12} />
          </Select.ItemIndicator>
          <Select.ItemText asChild>{item.label}</Select.ItemText>
        </Select.Item>
      ))}
    </>
  );
};
SelectCustomItems.displayName = "Select.CustomItems";

type SelectElement = React.ComponentRef<typeof Select.Root>;
interface SelectRootProps extends React.ComponentProps<typeof Select.Root> {
  className?: string;
  fullWidth?: boolean;
  small?: boolean;
  positioning?: React.ComponentProps<typeof Select.Root>["positioning"];
}

const SelectRoot = forwardRef<SelectElement, SelectRootProps>(
  ({ children, className, fullWidth, small, positioning, ...restOfProps }, forwardedRef) => {
    return (
      <>
        <Select.Root
          {...restOfProps}
          ref={forwardedRef}
          positioning={positioning ?? { placement: "bottom-start", slide: true, fitViewport: true }}
          className={classNames(styles.root, className, {
            [styles["root--full-width"]]: fullWidth,
            [styles["root--small"]]: small,
          })}
        >
          {children}
        </Select.Root>
      </>
    );
  }
);
SelectRoot.displayName = "Select.Root";

type HiddenSelectProps = React.ComponentProps<typeof Select.HiddenSelect>;

const HiddenSelect = (props: HiddenSelectProps) => (
  <Select.HiddenSelect {...props} aria-labelledby={undefined} />
);

export {
  SelectControl as Control,
  SelectMenu as Menu,
  SelectRoot as Root,
  HiddenSelect as HiddenSelect,
  SelectGroup as Group,
  SelectItems as Items,
  SelectCustomItems as CustomItems,
  SelectValueText as ValueText,
  SelectValueCustom as ValueCustom,
};

export type {
  SelectControlProps as ControlProps,
  SelectMenuProps as MenuProps,
  SelectRootProps as RootProps,
  HiddenSelectProps as HiddenSelectProps,
  SelectGroupProps as GroupProps,
  SelectItemsProps as ItemsProps,
  SelectCustomItemsProps as CustomItemsProps,
  SelectValueTextProps as ValueTextProps,
  SelectValueCustomProps as ValueCustomProps,
};
