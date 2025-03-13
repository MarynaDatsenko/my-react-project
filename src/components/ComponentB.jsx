import { useToggle } from "../hooks/useToggle";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={openSidebar}>Open sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
