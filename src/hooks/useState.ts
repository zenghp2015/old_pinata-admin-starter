export default function useState() {
  const state = ref();
  function setState() {}
  return [setState, state];
}
