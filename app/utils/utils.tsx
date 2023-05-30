


  export const handleToggle = (setOpen) => {
    setOpen((prevOpen) => !prevOpen);
  };

  export const handleClose = (anchorRef,setOpen,event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
    