import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-popover';

export const Popover = () => (
  <Root>
    <Trigger>More info</Trigger>
    <Portal>
      <Content>
        Some more info…
        <Arrow />
      </Content>
    </Portal>
  </Root>
);

export default Popover;
