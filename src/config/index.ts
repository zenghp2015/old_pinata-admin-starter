const modules = import.meta.glob(["./*.config.ts"], {
  eager: true,
  import: "default",
});

const configs: { [Prop: string]: any } = {};
Object.keys(modules).forEach((key) => {
  const configKey = key
    .substring(key.lastIndexOf("/") + 1)
    .replace(".config.ts", "");
  const conf = modules[key] || {};
  configs[configKey] = conf;
});

console.log(configs);
