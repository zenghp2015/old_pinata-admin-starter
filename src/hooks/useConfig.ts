export default function useConfig() {
  const configs = reactive<any>({});

  const get = computed(() => {
    return (key: string | undefined) => (key ? configs[key] : configs);
  });

  function set(key: string, value: any) {}

  return {
    get,
    set,
  };
}
