const handleDelayedToggle = (setter: (toggle: boolean)=> void, timeout: number) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, timeout);
}
export default handleDelayedToggle;