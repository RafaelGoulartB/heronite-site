// Links and names shared by every page.
const repo = 'https://github.com/RafaelGoulartB/Heronite';
const latest = `${repo}/releases/latest`;

export const site = {
  name: 'Heronite',
  url: 'https://heronite.app',
  email: 'hello@heronite.app',
  author: 'Rafael Goulart',
  repo,
  releases: latest,
  discussions: `${repo}/discussions`,
  issues: `${repo}/issues/new/choose`,
  license: `${repo}/blob/main/LICENSE`,
  contributing: `${repo}/blob/main/CONTRIBUTING.md`,
};

export const downloads = {
  windowsInstaller: `${latest}/download/Heronite-Setup-x86_64.exe`,
  windowsPortable: `${latest}/download/Heronite-Portable-x86_64.zip`,
  appImage: `${latest}/download/Heronite-x86_64.AppImage`,
};

export const stores = [
  { icon: 'steam', name: 'Steam' },
  { icon: 'epic', name: 'Epic Games' },
  { icon: 'gog', name: 'GOG' },
  { icon: 'amazon', name: 'Amazon Games' },
  { icon: 'battlenet', name: 'Battle.net' },
  { icon: 'ea', name: 'EA app' },
  { icon: 'ubisoft', name: 'Ubisoft Connect' },
  { icon: 'rockstar', name: 'Rockstar Games' },
] as const;

export const mainNav = [
  { href: '/features/', label: 'Features' },
  { href: '/guides/', label: 'Guides' },
  { href: '/compare/', label: 'Compare' },
  { href: '/docs/', label: 'Docs' },
];
