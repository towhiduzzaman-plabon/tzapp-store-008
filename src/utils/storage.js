const KEY = "installed_apps";

export const getInstalled = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
};

export const isInstalled = (id) => getInstalled().some(a => a.id === Number(id));

export const installApp = (app) => {
  const list = getInstalled();
  if (!list.find(a => a.id === app.id)) {
    list.push(app);
    localStorage.setItem(KEY, JSON.stringify(list));
  }
  return list;
};

export const uninstallApp = (id) => {
  const list = getInstalled().filter(a => a.id !== Number(id));
  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
};
