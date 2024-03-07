import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Le Projet',
      links: [
        {
          text: 'Quoi ?',
          href: getPermalink(),
        },
        {
          text: 'Qui ?',
          href: getPermalink('/accueil/qui'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getPermalink('/accueil/qui'),
        },
      ],
    },
  ],
  actions: [{ text: 'Soutenez le projet', href: 'https://fr.tipeee.com/transiscapade/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Transiscopade',
      links: [
        { text: 'Financement participatif', href: 'https://fr.tipeee.com/transiscapade/' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Projets transis-portés',
      links: [
        { text: 'Transiscope', href: 'https://transiscope.org/' },
        { text: 'Assemblée virtuelle', href: 'https://virtual-assembly.org/' },
        { text: 'Vhélio', href: 'https://vhelio.org' },
        { text: 'Low-tech lab', href: 'https://lowtechlab.org/' },
        { text: 'Hameaux légers', href: 'https://hameaux-legers.org/' },
        { text: 'Monnaie libre', href: 'https://monnaie-libre.fr/' },
      ],
    },
    {
      title: 'Autes projets proches',
      links: [
        { text: 'Le périple de Barnabé Chaillot en vhélio', href: 'https://vhelio.org/suivez-le-periple-de-barnabe/' },
        { text: 'Jérome Zindy - vélo-reporter', href: 'https://www.jeromezindy.fr/' },
        { text: 'Jacob Kharu - Voyage en europe en vélo solaire', href: 'https://www.youtube.com/@JacobKarhu' },
        { text: 'La Sun Trip', href: 'https://www.thesuntrip.com/' },
        { text: 'La diagonale du plein', href: 'https://www.diagonaleduplein.fr/' },
        { text: 'Le tour alternatiba (2024)', href: 'https://alternatiba.eu/nos-actions/tour-alternatiba-2024/' },
        { text: "L'Altertour", href: 'https://www.altercampagne.net/' },
        { text: "Le PermacoolTour", href: 'https://www.kevinsimon.fr/index.php/le-permacooltour-3/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Qui suis-je ?', href: '/accueil/qui' },
        { text: 'Comment me contacter ?', href: '/accueil/qui' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
