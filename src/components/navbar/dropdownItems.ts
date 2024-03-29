interface ItemsType {
  title: string
  items: {
    label: string
    description: string
    link: string
  }[]
}

const dropdownItems: ItemsType[] = [
  {
    title: 'menu1',
    items: [
      {
        label: 'Account settings',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'Sign out',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
  {
    title: 'menu2',
    items: [
      {
        label: 'Support',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'License',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
  {
    title: 'menu3',
    items: [
      {
        label: 'raptilian',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'License',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
  {
    title: 'menu4',
    items: [
      {
        label: 'Account settings',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'Sign out',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
  {
    title: 'menu5',
    items: [
      {
        label: 'Support',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'License',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
  {
    title: 'menu6',
    items: [
      {
        label: 'raptilian',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
      {
        label: 'License',
        description:
          'For sighted users to preview content available behind a link.',
        link: '/',
      },
    ],
  },
]

export default dropdownItems
