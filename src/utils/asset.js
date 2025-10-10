const ASSET_MAP = import.meta.glob("../assets/*", { eager: true, as: "url" });

export function resolveAsset(input) {
  if (!input) return "";
  if (input.startsWith("/") || input.startsWith("http")) return input;

  const fileName = input.split("/").pop();                
  const key1 = `../assets/${fileName}`;                  
  if (ASSET_MAP[key1]) return ASSET_MAP[key1];
  if (ASSET_MAP[input]) return ASSET_MAP[input];

  const hit = Object.entries(ASSET_MAP).find(([k]) => k.endsWith(fileName));
  return hit ? hit[1] : input;
}
